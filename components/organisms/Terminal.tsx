'use client'

import { useEffect, useRef, useState } from 'react'
import { useContent } from '@/lib/i18n'
import TermImage from '../molecules/TermImage'
import { complete, entries, resolve, suggestions, term, treeLines, type TNode } from '@/lib/terminal'

type Out =
  | { kind: 'cmd'; prompt: string; text: string }
  | { kind: 'motd' }
  | { kind: 'fetch' }
  | { kind: 'text'; lines: string[] }
  | { kind: 'ls'; base: string[]; names: string[] }
  | { kind: 'image'; node: Extract<TNode, { type: 'image' }> }

export default function Terminal() {
  const { ui } = useContent()
  const [cwd, setCwd] = useState<string[]>([])
  const [out, setOut] = useState<Out[]>([{ kind: 'cmd', prompt: `${term.user}@${term.host}:~$`, text: 'fastfetch' }, { kind: 'fetch' }, { kind: 'motd' }])
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
        next = say(...ui.terminal.help)
        break
      case 'clear':
        return setOut([])
      case 'pwd':
        next = say('/home/' + term.user + (cwd.length ? '/' + cwd.join('/') : ''))
        break
      case 'whoami':
        next = say(term.user)
        break
      case 'fastfetch':
      case 'neofetch':
        next = [echo, { kind: 'fetch' }]
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

  const linkBtn = 'rounded-sm px-1 text-left text-term-text underline decoration-term-link underline-offset-4 hover:bg-term-text hover:text-term-bg'
  const quick = 'rounded-full bg-white/10 px-3 py-1 font-data text-xs hover:bg-white/20'

  return (
    <div className="mt-6 overflow-hidden rounded-2xl bg-term-bg text-term-text shadow-[0_20px_40px_-24px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-3 bg-term-bar px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#d8837a]" />
          <span className="size-3 rounded-full bg-[#d9c46e]" />
          <span className="size-3 rounded-full bg-term-prompt" />
        </span>
        <span className="num truncate text-xs text-term-dim">{prompt(cwd).replace('$', '')}</span>
      </div>

      <div
        ref={scroller}
        role="log"
        aria-label="Terminal output"
        onClick={() => input.current?.focus({ preventScroll: true })}
        className="num h-[min(78vh,540px)] cursor-text overflow-y-auto px-4 py-3 text-[13px] leading-[1.45]"
      >
        {out.map((o, i) => {
          if (o.kind === 'cmd')
            return (
              <p key={i} className="break-words">
                <span className="text-term-prompt">{o.prompt}</span> {o.text}
              </p>
            )
          if (o.kind === 'fetch') return <Fetch key={i} />
          if (o.kind === 'motd') return <pre key={i} className="whitespace-pre-wrap break-words font-[inherit]">{ui.terminal.motd.join('\n')}</pre>
          if (o.kind === 'text') return <pre key={i} className="whitespace-pre-wrap break-words font-[inherit]">{o.lines.join('\n')}</pre>
          if (o.kind === 'image') return <TermImage key={i} node={o.node} />
          const dir = resolve(o.base, '.')
          return (
            <p key={i} className="flex flex-wrap gap-x-4 gap-y-1">
              {o.names.length === 0 ? <span className="text-term-dim">(empty)</span> : null}
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
          <label htmlFor="term-input" className="shrink-0 text-term-prompt">
            {prompt(cwd)}
          </label>
          <span className="relative min-w-0 flex-1">
            <span aria-hidden className="pointer-events-none absolute inset-0 whitespace-pre text-term-text/35">
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
            className="term-input relative w-full bg-transparent text-term-text caret-label outline-none"
          />
          </span>
        </form>
      </div>

      {hints.length ? (
        <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-term-bar-soft px-4 py-2" aria-label="Suggestions">
          <span className="num text-[11px] uppercase tracking-wider text-term-dim">Tab</span>
          {hints.map((h) => (
            <button key={h} type="button" onClick={() => { setValue(h); input.current?.focus({ preventScroll: true }) }} className="rounded-full bg-white/10 px-3 py-1 font-data text-xs hover:bg-white/20">
              {h.trim()}
            </button>
          ))}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2 border-t border-white/10 bg-term-bar px-4 py-2.5" aria-label="Quick commands">
        {['help', 'fastfetch', 'ls', 'cd ..', 'cd', 'tree'].map((c) => (
          <button key={c} type="button" onClick={() => click(c)} className={quick}>
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

const PALETTE = ['#2b2b2b', '#d70a53', '#86b87a', '#d9c46e', '#6a9fd8', '#b58ad6', '#5fb8b0', '#cfe8c9']

/** Debian swirl beside the stats, like fastfetch prints it. */
function Fetch() {
  const { logo, info } = term.fastfetch
  const who = `${term.user}@${term.host}`
  return (
    <div className="my-2 flex flex-wrap items-start gap-x-6 gap-y-3">
      <pre aria-hidden className="font-[inherit] leading-[1.25] text-[#d70a53]">{logo.join('\n')}</pre>
      <dl className="min-w-0">
        <dt className="font-bold text-[#f0567f]">{who}</dt>
        <dd aria-hidden className="text-term-dim">{'-'.repeat(who.length)}</dd>
        {info.map(([k, v]) => (
          <div key={k} className="flex gap-2">
            <dt className="shrink-0 font-bold text-[#f0567f]">{k}:</dt>
            <dd className="min-w-0 break-words">{v}</dd>
          </div>
        ))}
        <dd aria-hidden className="mt-2 flex">
          {PALETTE.map((c) => (
            <span key={c} className="h-4 w-6" style={{ background: c }} />
          ))}
        </dd>
      </dl>
    </div>
  )
}
