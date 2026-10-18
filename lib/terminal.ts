import raw from '@/content/terminal.json'

export type TNode =
  | { type: 'dir'; children: Record<string, TNode> }
  | { type: 'text'; lines: string[] }
  | { type: 'image'; src?: string; ascii?: string[]; cols?: number; caption?: string }

export const term = raw as unknown as {
  user: string
  host: string
  motd: string[]
  help: string[]
  neofetch: string[]
  root: Extract<TNode, { type: 'dir' }>
}

/** Resolve a path (relative to cwd, `~` = home, `..` = up). Returns the segments and node, or null. */
export function resolve(cwd: string[], path: string): { path: string[]; node: TNode } | null {
  const parts = path.startsWith('~') || path.startsWith('/') ? [] : [...cwd]
  for (const seg of path.split('/')) {
    if (!seg || seg === '.' || seg === '~') continue
    if (seg === '..') {
      parts.pop()
      continue
    }
    parts.push(seg)
  }
  let node: TNode = term.root
  for (const p of parts) {
    if (node.type !== 'dir' || !node.children[p]) return null
    node = node.children[p]
  }
  return { path: parts, node }
}

export const entries = (dir: TNode, all = false) =>
  dir.type === 'dir' ? Object.keys(dir.children).filter((n) => all || !n.startsWith('.')).sort((a, b) => (dir.children[a].type === 'dir' ? 0 : 1) - (dir.children[b].type === 'dir' ? 0 : 1) || a.localeCompare(b)) : []

export const treeLines = (dir: TNode, prefix = ''): string[] =>
  dir.type !== 'dir'
    ? []
    : entries(dir).flatMap((name, i, arr) => {
        const last = i === arr.length - 1
        const child = dir.children[name]
        return [`${prefix}${last ? '└── ' : '├── '}${name}${child.type === 'dir' ? '/' : ''}`, ...treeLines(child, prefix + (last ? '    ' : '│   '))]
      })

const CMDS = ['help', 'ls', 'cd', 'pwd', 'cat', 'tree', 'neofetch', 'clear', 'whoami']

/** Every full command line that extends the last word of `line`. */
export function suggestions(cwd: string[], line: string): string[] {
  if (!line.trim()) return []
  const words = line.split(/\s+/)
  const last = words[words.length - 1]
  if (words.length === 1) return CMDS.filter((c) => c.startsWith(last) && c !== last).map((c) => c + ' ')
  const slash = last.lastIndexOf('/')
  const dirPart = slash >= 0 ? last.slice(0, slash + 1) : ''
  const base = last.slice(slash + 1)
  const dir = resolve(cwd, dirPart || '.')
  if (!dir || dir.node.type !== 'dir') return []
  const cmd = words[0]
  const children = dir.node.children
  return entries(dir.node, base.startsWith('.'))
    .filter((n) => n.startsWith(base) && (cmd !== 'cd' || children[n].type === 'dir'))
    .map((n) => [...words.slice(0, -1), dirPart + n + (children[n].type === 'dir' ? '/' : '')].join(' '))
}

const common = (xs: string[]) => xs.reduce((a, b) => { let i = 0; while (i < a.length && a[i] === b[i]) i++; return a.slice(0, i) })

/** Tab: complete to the unique match, or to the longest shared prefix. */
export function complete(cwd: string[], line: string): string {
  const hit = suggestions(cwd, line)
  return hit.length ? common(hit) : line
}
