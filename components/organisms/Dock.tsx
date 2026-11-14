'use client'

import { useEffect, useRef, useState } from 'react'
import { Briefcase, CaretUp, ChatCircleText, Code, EnvelopeSimple, GraduationCap, House, Stack, TerminalWindow, User } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'

const icons: Record<string, typeof House> = {
  intro: House,
  about: User,
  projects: Code,
  techs: Stack,
  voices: ChatCircleText,
  academic: GraduationCap,
  experience: Briefcase,
  archive: TerminalWindow,
  contact: EnvelopeSimple,
}

/**
 * Auto-hiding bottom dock. While hidden, a small pill says which section you're in.
 * Pointing at the bottom of the screen (or tapping the pill, or tabbing in) slides the full dock up,
 * every section shown with its name: one row on wide screens, a 3x3 panel on smaller screens.
 */
export default function Dock() {
  const { navSections } = useContent()
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const zone = useRef<HTMLDivElement>(null)
  const hideTimer = useRef(0)

  // Mouse: open at once, close only after a short grace period so brushing past an edge doesn't flicker.
  const show = () => {
    clearTimeout(hideTimer.current)
    setOpen(true)
  }
  const hideSoon = () => {
    clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setOpen(false), 400)
  }
  useEffect(() => () => clearTimeout(hideTimer.current), [])

  useEffect(() => {
    let raf = 0
    const measure = () => {
      const line = innerHeight * 0.4
      let idx = 0
      navSections.forEach((s, i) => {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= line) idx = i
      })
      if (scrollY >= document.documentElement.scrollHeight - innerHeight - 4) idx = navSections.length - 1
      setActive(idx)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }
    measure()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [navSections])

  // Touch: a tap outside closes it. Escape closes it everywhere.
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => !zone.current?.contains(e.target as Node) && setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    addEventListener('pointerdown', onDown)
    addEventListener('keydown', onKey)
    return () => {
      removeEventListener('pointerdown', onDown)
      removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = navSections[active]
  const CurrentIcon = icons[current?.id] ?? House

  return (
    <div
      ref={zone}
      data-open={open || undefined}
      className="dock-zone pointer-events-none fixed inset-x-0 bottom-0 z-30 flex h-24 items-end justify-center px-3 pb-3 sm:pb-5"
      onPointerEnter={(e) => e.pointerType === 'mouse' && show()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && hideSoon()}
      onFocus={() => setOpen(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      {/* hot edge: pointing at the bottom of the screen reveals the dock, like macOS */}
      <span aria-hidden className="pointer-events-auto absolute inset-x-0 bottom-0 h-6" />

      {/* hidden state: where am I */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        tabIndex={-1}
        aria-hidden
        className="dock-peek pointer-events-auto absolute bottom-3 flex items-center gap-2 overflow-hidden rounded-full bg-ink py-2 pr-3 pl-2 text-xs font-semibold text-card shadow-[0_12px_30px_-14px_rgb(0_0_0/0.7)] sm:bottom-5"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-hi text-on-hi">
          <CurrentIcon size={14} weight="fill" />
        </span>
        {current?.title}
        <CaretUp size={12} weight="bold" className="opacity-60" />
        <span className="page-progress absolute inset-x-3 bottom-0.5 h-0.5 origin-left rounded-full bg-hi/70" />
      </button>

      <nav aria-label="Sections" className="dock max-w-full">
        <ol className="grid grid-cols-3 gap-1 max-[379px]:grid-cols-2 rounded-3xl bg-ink p-1.5 text-card shadow-[0_18px_40px_-18px_rgb(0_0_0/0.7)] xl:flex xl:items-center xl:gap-0.5 xl:rounded-full">
          {navSections.map((s, i) => {
            const Icon = icons[s.id] ?? House
            const on = i === active
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={on ? 'true' : undefined}
                  className={`dock-item flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-xs sm:gap-2 sm:px-3 font-semibold sm:text-sm ${on ? 'bg-hi text-on-hi' : 'hover:bg-card/15'}`}
                >
                  <Icon size={18} weight={on ? 'fill' : 'bold'} aria-hidden className="shrink-0" />
                  {s.title}
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
