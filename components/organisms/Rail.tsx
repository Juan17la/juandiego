'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Briefcase, ChatCircleText, Code, EnvelopeSimple, GithubLogo, GraduationCap, House, LinkedinLogo, List, Stack, SidebarSimple, TerminalWindow, User, X, XLogo } from '@phosphor-icons/react'
import { contacts } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import LangSwitch from '../atoms/LangSwitch'
import Logo from '../atoms/Logo'

const pad = (n: number) => String(n + 1).padStart(2, '0')

const icons: Record<string, typeof House> = {
  intro: House,
  about: User,
  projects: Code,
  voices: ChatCircleText,
  academic: GraduationCap,
  experience: Briefcase,
  archive: TerminalWindow,
  contact: EnvelopeSimple,
  techs: Stack,
}

const social = [
  { href: `mailto:${contacts.email}`, label: 'Email', Icon: EnvelopeSimple },
  { href: contacts.linkedin, label: 'LinkedIn', Icon: LinkedinLogo },
  { href: contacts.github, label: 'GitHub', Icon: GithubLogo },
  { href: contacts.x, label: 'X', Icon: XLogo },
]

export default function Rail() {
  const { navSections, ui } = useContent()
  const [active, setActive] = useState(0)
  const [queued, setQueued] = useState<number | null>(null)
  const [slim, setSlim] = useState(false)
  const [open, setOpen] = useState(false)
  const raf = useRef(0)

  const measure = useCallback(() => {
    const max = document.documentElement.scrollHeight - innerHeight
    const line = innerHeight * 0.35
    let idx = 0
    navSections.forEach((s, i) => {
      const el = document.getElementById(s.id)
      if (el && el.getBoundingClientRect().top <= line) idx = i
    })
    if (max > 0 && scrollY >= max - 4) idx = navSections.length - 1
    setActive(idx)
  }, [navSections])

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(measure)
    }
    measure()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', measure)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', measure)
      cancelAnimationFrame(raf.current)
    }
  }, [measure])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onWide = () => innerWidth >= 1024 && setOpen(false)
    addEventListener('keydown', onKey)
    addEventListener('resize', onWide)
    return () => {
      removeEventListener('keydown', onKey)
      removeEventListener('resize', onWide)
    }
  }, [open])

  useEffect(() => {
    try {
      setSlim(localStorage.getItem('rail') === 'slim')
    } catch {}
  }, [])

  useEffect(() => {
    if (slim) document.documentElement.dataset.rail = 'collapsed'
    else delete document.documentElement.dataset.rail
    try {
      localStorage.setItem('rail', slim ? 'slim' : 'wide')
    } catch {}
  }, [slim])

  const go = (e: React.MouseEvent, i: number) => {
    const el = document.getElementById(navSections[i].id)
    if (!el) return
    e.preventDefault()
    setOpen(false)
    setQueued(i)
    setTimeout(() => {
      el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
      history.replaceState(null, '', `#${navSections[i].id}`)
      setQueued(null)
    }, 340)
  }

  return (
    <>
      {/* desktop: sticky contents panel */}
      <aside className={`on-card rail hidden lg:flex fixed left-6 top-6 bottom-6 flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-[28px] bg-card shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_30px_60px_-30px_rgb(0_0_0/0.6)] ${slim ? 'items-center p-3' : 'p-4'}`}>
        <div className={`flex items-center justify-center gap-3 ${slim ? 'flex-col' : ''}`}>
          <Logo className={slim ? 'size-10 shrink-0' : 'size-11 shrink-0'} />
          {slim ? null : <p className="min-w-0 text-lg font-extrabold leading-tight">Jud</p>}
          <button
            type="button"
            onClick={() => setSlim((v) => !v)}
            aria-pressed={slim}
            aria-label={slim ? ui.expandSidebar : ui.collapseSidebar}
            title={slim ? ui.expandSidebar : ui.collapseSidebar}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink/[0.08] hover:bg-ink hover:text-card"
          >
            <SidebarSimple size={18} weight="bold" aria-hidden />
          </button>
        </div>

        {slim ? null : (
          <ul className="flex justify-center gap-1.5">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
                  className="flex size-9 items-center justify-center rounded-full bg-ink/[0.08] hover:bg-ink hover:text-card"
                >
                  <Icon size={18} weight="bold" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        )}

        <nav aria-label="Sections">
          <ol className="space-y-0.5">
            {navSections.map((s, i) => {
              const Icon = icons[s.id]
              const on = i === active
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => go(e, i)}
                    aria-current={on ? 'true' : undefined}
                    aria-label={slim ? s.title : undefined}
                    title={slim ? s.title : undefined}
                    className={`flex items-center rounded-full text-sm ${slim ? 'size-11 flex-col justify-center gap-0 rounded-2xl' : 'gap-2.5 px-3.5 py-2'} ${on ? 'bg-ink font-semibold text-card' : 'hover:bg-ink/[0.08]'} ${queued === i ? 'queued' : ''}`}
                  >
                    <Icon size={slim ? 18 : 16} weight={on ? 'fill' : 'bold'} aria-hidden className="shrink-0" />
                    {slim ? <span className="num text-[10px] leading-none">{pad(i)}</span> : s.title}
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
        <LangSwitch className={slim ? 'size-11 shrink-0 flex-col gap-0 rounded-2xl text-[10px]' : 'mt-auto py-2'} />
      </aside>

      {/* mobile: sticky bar with burger menu */}
      <div id="mobile-nav" className="on-card lg:hidden sticky top-0 z-20 bg-card shadow-[0_6px_16px_-8px_rgb(0_0_0/0.5)]">
        <div className="flex items-center gap-3 px-4 py-2">
          <Logo className="size-10 shrink-0" />
          <p className="min-w-0 flex-1 truncate text-sm font-semibold">
            <span className="num mr-2 text-ink-soft">{pad(active)}</span>
            {navSections[active]?.title}
          </p>
          <LangSwitch className="size-10 shrink-0 gap-0 text-xs" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-card"
          >
            {open ? <X size={20} weight="bold" aria-hidden /> : <List size={20} weight="bold" aria-hidden />}
          </button>
        </div>

        <nav id="mobile-menu" aria-label="Sections" hidden={!open} className="max-h-[calc(100dvh-56px)] overflow-y-auto border-t border-ink/10 px-4 pt-3 pb-5">
          <ol className="grid gap-0.5 sm:grid-cols-2">
            {navSections.map((s, i) => {
              const Icon = icons[s.id]
              const on = i === active
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => go(e, i)}
                    aria-current={on ? 'true' : undefined}
                    className={`flex items-center gap-3 rounded-full px-4 py-3 ${on ? 'bg-ink font-semibold text-card' : 'hover:bg-ink/[0.08]'} ${queued === i ? 'queued' : ''}`}
                  >
                    <Icon size={18} weight={on ? 'fill' : 'bold'} aria-hidden className="shrink-0" />
                    <span className="num text-xs opacity-60">{pad(i)}</span>
                    {s.title}
                  </a>
                </li>
              )
            })}
          </ol>
          <ul className="mt-4 flex justify-center gap-2 border-t border-ink/10 pt-4">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
                  className="flex size-11 items-center justify-center rounded-full bg-ink/[0.08] hover:bg-ink hover:text-card"
                >
                  <Icon size={20} weight="bold" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
