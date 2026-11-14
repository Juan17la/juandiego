'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'
import type { Project } from '@/lib/data'
import Pill from '../atoms/Pill'
import TechChip from '../atoms/TechChip'

/** Full story of one project in a native <dialog>: Esc, focus trap and inert page come for free. */
export default function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const { ui } = useContent()
  const ref = useRef<HTMLDialogElement>(null)
  const [shot, setShot] = useState(0)
  const shots = p.shots ?? [p.image ?? p.logo].filter((s): s is string => !!s)

  useEffect(() => {
    ref.current?.showModal()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  const h = 'text-sm font-bold uppercase tracking-[0.14em] text-ink-soft'
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-label={p.name}
      className="m-auto max-h-[92svh] w-[min(64rem,calc(100%-1.5rem))] overflow-y-auto overscroll-contain rounded-[28px] bg-card p-0 text-ink shadow-[0_40px_120px_-30px_rgb(0_0_0/0.7)] backdrop:bg-black/65 backdrop:backdrop-blur-sm"
    >
      <div className="p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{p.name}</h3>
          <button type="button" autoFocus onClick={() => ref.current?.close()} aria-label={ui.close} className="grid size-11 shrink-0 place-items-center rounded-full bg-ink/[0.08] hover:bg-ink hover:text-card">
            <X size={20} weight="bold" aria-hidden />
          </button>
        </div>

        {shots.length ? (
          <div className="mt-6">
            <div className="stage relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl bg-desk">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img key={shots[shot]} src={shots[shot]} alt={`${p.name} ${ui.shot(shot + 1, shots.length)}`} className={`max-h-full max-w-full animate-[fadein_0.4s] ${p.image || p.shots ? 'object-contain' : 'size-28'}`} />
            </div>
            {shots.length > 1 ? (
              <ul className="mt-3 flex gap-2">
                {shots.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      onClick={() => setShot(i)}
                      aria-label={ui.shot(i + 1, shots.length)}
                      aria-current={i === shot}
                      className={`block h-16 overflow-hidden rounded-lg bg-desk ring-2 transition sm:h-20 ${i === shot ? 'ring-moss' : 'opacity-60 ring-transparent hover:opacity-100'}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" loading="lazy" className="h-full w-auto" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        <div className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <h4 className={h}>{ui.story}</h4>
            <div className="mt-3 grid gap-3 leading-relaxed">
              {p.story.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className={h}>{ui.highlights}</h4>
            <ul className="mt-3 grid gap-2 text-sm leading-snug">
              {p.highlights.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-moss" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h4 className={`${h} mt-8`}>{ui.stack}</h4>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <li key={t}>
              <TechChip name={t} large />
            </li>
          ))}
        </ul>

        <h4 className={`${h} mt-8`}>{ui.links}</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.links.map((l, i) => (
            <Pill key={l.href} href={l.href} solid={i === 0}>
              {l.label}
            </Pill>
          ))}
        </div>
      </div>
    </dialog>
  )
}
