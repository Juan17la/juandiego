'use client'

import { useRef, type ReactNode } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'

/** Scroll-snap carousel with prev/next buttons. Children are the slides. */
export default function Carousel({ children, label }: { children: ReactNode[]; label: string }) {
  const { ui } = useContent()
  const track = useRef<HTMLUListElement>(null)
  const step = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const slide = el.firstElementChild as HTMLElement | null
    const w = (slide?.offsetWidth ?? el.clientWidth) + 16
    el.scrollBy({ left: dir * w, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  const btn = 'flex size-10 items-center justify-center rounded-full bg-ink/10 hover:bg-ink hover:text-card'
  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="mt-6">
      <ul ref={track} className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3">
        {children.map((c, i) => (
          <li key={i} className="w-[88%] shrink-0 snap-start sm:w-[calc(50%-8px)]">
            {c}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex justify-end gap-2">
        <button type="button" onClick={() => step(-1)} aria-label={ui.previous} className={btn}>
          <CaretLeft size={18} weight="bold" aria-hidden />
        </button>
        <button type="button" onClick={() => step(1)} aria-label={ui.next} className={btn}>
          <CaretRight size={18} weight="bold" aria-hidden />
        </button>
      </div>
    </div>
  )
}
