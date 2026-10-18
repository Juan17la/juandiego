'use client'

import { useEffect, useRef, useState } from 'react'
import { complete, entries, resolve, suggestions, term, treeLines, type TNode } from '@/lib/terminal'

type Out =
  | { kind: 'cmd'; prompt: string; text: string }
  | { kind: 'text'; lines: string[] }
  | { kind: 'ls'; base: string[]; names: string[] }
  | { kind: 'image'; node: Extract<TNode, { type: 'image' }> }

/** A photo shown through a CRT filter so it looks like it lives in the terminal. Falls back to hand-made ASCII. */
function TermImage({ node }: { node: Extract<TNode, { type: 'image' }> }) {
  const [bad, setBad] = useState(false)
  return (
    <figure className="my-2">
      {node.src && !bad ? (
        <div className="relative inline-block max-w-full overflow-hidden rounded-sm border border-[#2e4a2c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={node.src}
            alt={node.caption ?? ''}
            onError={() => setBad(true)}
            className="block max-h-[300px] w-auto max-w-full [filter:grayscale(1)_contrast(1.25)_brightness(0.95)]"
          />
          {/* green phosphor tint + scanlines + vignette */}
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[#3dff6a] mix-blend-multiply opacity-80" />
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(0_0_0/0.28)_0_1px,transparent_1px_3px)]" />
          <span aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.55)_100%)]" />
        </div>
      ) : (
        <pre className="overflow-x-auto leading-[1.1] text-[#9fd08a]">{(node.ascii ?? ['[no image]']).join('\n')}</pre>
      )}
      {node.caption ? <figcaption className="mt-1 text-[#8a9a8c]"># {node.caption}</figcaption> : null}
    </figure>
  )
}

export default function Terminal() {
  const [cwd, setCwd] = useState<string[]>([])
  const [out, setOut] = useState<Out[]>([{ kind: 'text', lines: term.motd }])
  const [value, setValue] = useState('')
  const [hist, setHist] = useState<string[]>([])
  const [hi, setHi] = useState(-1)
  const scroller = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)

  const hints = suggestions(cwd, value).slice(0, 6)
  const ghost = hints[0]?.startsWith(value) ? hints[0].slice(value.length) : ''

  const prompt = (path: string[]) => `${term.user}@${term.host}:~${path.length ? '/' + path.join('/') : ''}$`

  useEffect(() => {
    const el = scroller.current
    if (el) el.scrollTop = el.scrollHeight
  }, [out])

  const run = (line: string) => {
    const text = line.trim()
    const echo: Out = { kind: 'cmd', prompt: prompt(cwd), text }
    if (!text) return setOut((o) => [...o, echo])
    setHist((h) => [...h, text])
    setHi(-1)
    const [cmd, ...args] = text.split(/\s+/)
    const say = (...lines: string[]): Out[] => [echo, { kind: 'text', lines }]
    let next: Out[]
    let nextCwd = cwd

    switch (cmd) {
      case 'help':
        next = say(...term.help)
        break
      case 'clear':
        return setOut([])
      case 'pwd':
        next = say('/home/' + term.user + (cwd.length ? '/' + cwd.join('/') : ''))
        break
      case 'whoami':
        next = say(term.user)
        break
      case 'neofetch':
        next = say(...term.neofetch)
        break
      case 'tree': {
        const r = resolve(cwd, args[0] ?? '.')
        next = r ? say('.', ...treeLines(r.node)) : say(`tree: ${args[0]}: no such directory`)
        break
      }
      case 'ls': {
        const all = args.includes('-a')
        const target = args.find((a) => !a.startsWith('-'))
        const r = resolve(cwd, target ?? '.')
        if (!r) next = say(`ls: cannot access '${target}': no such file or directory`)
        else if (r.node.type !== 'dir') next = say(target ?? '')
        else next = [echo, { kind: 'ls', base: r.path, names: entries(r.node, all) }]
        break
      }
      case 'cd': {
        const r = args[0] ? resolve(cwd, args[0]) : { path: [] as string[], node: term.root as TNode }
        if (!r) next = say(`cd: ${args[0]}: no such directory`)
        else if (r.node.type !== 'dir') next = say(`cd: ${args[0]}: not a directory`)
        else {
          nextCwd = r.path
          next = [echo]
        }
        break
      }
      case 'cat':
      case 'open': {
        if (!args[0]) {
          next = say(`${cmd}: which file? try 'ls'`)
          break
        }
        const r = resolve(cwd, args[0])
        if (!r) next = say(`${cmd}: ${args[0]}: no such file`)
        else if (r.node.type === 'dir') next = say(`${cmd}: ${args[0]}: is a folder, try 'cd ${args[0]}'`)
        else if (r.node.type === 'text') next = say(...r.node.lines)
        else next = [echo, { kind: 'image', node: r.node }]
        break
      }
      case 'sudo':
        next = say(`${term.user} is not in the sudoers file. This incident will be reported.`)
        break
      default:
        next = say(`${cmd}: command not found. Try 'help'.`)
    }
    setCwd(nextCwd)
    setOut((o) => [...o, ...next])
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    run(value)
    setValue('')
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      setValue((v) => complete(cwd, v))
    } else if (e.key === 'ArrowUp' && hist.length) {
      e.preventDefault()
      const i = hi < 0 ? hist.length - 1 : Math.max(0, hi - 1)
      setHi(i)
      setValue(hist[i])
    } else if (e.key === 'ArrowDown' && hi >= 0) {
      e.preventDefault()
      const i = hi + 1
      if (i >= hist.length) {
        setHi(-1)
        setValue('')
      } else {
        setHi(i)
        setValue(hist[i])
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setOut([])
    }
  }

  const click = (cmd: string) => {
    run(cmd)
    input.current?.focus({ preventScroll: true })
  }

  const linkBtn = 'rounded-sm px-1 text-left text-[#cfe8c9] underline decoration-[#5c7a58] underline-offset-4 hover:bg-[#cfe8c9] hover:text-[#0f1511]'
  const quick = 'rounded-full bg-white/10 px-3 py-1 font-data text-xs hover:bg-white/20'

  return (
    <div className="mt-6 overflow-hidden rounded-2xl bg-[#0f1511] text-[#cfe8c9] shadow-[0_20px_40px_-24px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-3 bg-[#1a231d] px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#d8837a]" />
          <span className="size-3 rounded-full bg-[#d9c46e]" />
          <span className="size-3 rounded-full bg-[#86b87a]" />
        </span>
        <span className="num truncate text-xs text-[#8a9a8c]">{prompt(cwd).replace('$', '')}</span>
      </div>

      <div
        ref={scroller}
        role="log"
        aria-label="Terminal output"
        onClick={() => input.current?.focus({ preventScroll: true })}
        className="num h-[min(70vh,440px)] cursor-text overflow-y-auto px-4 py-3 text-[13px] leading-[1.45]"
      >
        {out.map((o, i) => {
          if (o.kind === 'cmd')
            return (
              <p key={i} className="break-words">
                <span className="text-[#86b87a]">{o.prompt}</span> {o.text}
              </p>
            )
          if (o.kind === 'text') return <pre key={i} className="whitespace-pre-wrap break-words font-[inherit]">{o.lines.join('\n')}</pre>
          if (o.kind === 'image') return <TermImage key={i} node={o.node} />
          const dir = resolve(o.base, '.')
          return (
            <p key={i} className="flex flex-wrap gap-x-4 gap-y-1">
              {o.names.length === 0 ? <span className="text-[#8a9a8c]">(empty)</span> : null}
              {o.names.map((n) => {
                const isDir = dir?.node.type === 'dir' && dir.node.children[n].type === 'dir'
                const rel = o.base.length === cwd.length && o.base.every((s, k) => s === cwd[k]) ? n : '~/' + [...o.base, n].join('/')
                return (
                  <button key={n} type="button" className={linkBtn} onClick={(e) => { e.stopPropagation(); click(isDir ? `cd ${rel}` : `cat ${rel}`) }}>
                    {n}
                    {isDir ? '/' : ''}
                  </button>
                )
              })}
            </p>
          )
        })}

        <form onSubmit={submit} className="flex items-baseline gap-2">
          <label htmlFor="term-input" className="shrink-0 text-[#86b87a]">
            {prompt(cwd)}
          </label>
          <span className="relative min-w-0 flex-1">
            <span aria-hidden className="pointer-events-none absolute inset-0 whitespace-pre text-[#cfe8c9]/35">
              <span className="invisible">{value}</span>
              {ghost}
            </span>
          <input
            id="term-input"
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Type a command, for example help"
            className="term-input relative w-full bg-transparent text-[#cfe8c9] caret-[#b4d08c] outline-none"
          />
          </span>
        </form>
      </div>

      {hints.length ? (
        <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-[#141c17] px-4 py-2" aria-label="Suggestions">
          <span className="num text-[11px] uppercase tracking-wider text-[#8a9a8c]">Tab</span>
          {hints.map((h) => (
            <button key={h} type="button" onClick={() => { setValue(h); input.current?.focus({ preventScroll: true }) }} className="rounded-full bg-white/10 px-3 py-1 font-data text-xs hover:bg-white/20">
              {h.trim()}
            </button>
          ))}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2 border-t border-white/10 bg-[#1a231d] px-4 py-2.5" aria-label="Quick commands">
        {['help', 'ls', 'cd ..', 'cd', 'tree'].map((c) => (
          <button key={c} type="button" onClick={() => click(c)} className={quick}>
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
