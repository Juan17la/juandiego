'use client'

import { useContent } from '@/lib/i18n'

/** Polaroid-style frame. Empty `src` shows a labelled placeholder. */
export default function Photo({ src, alt, hint, caption, tilt = 0, className = '' }: { src: string; alt: string; hint: string; caption: string; tilt?: number; className?: string }) {
  const { ui } = useContent()
  return (
    <figure className={`on-card relative bg-card p-2.5 pb-3 text-ink shadow-[0_18px_30px_-16px_rgb(0_0_0/0.7)] ${className}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <span aria-hidden className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-hi/80" />
      <div className="pending relative aspect-[4/5] overflow-hidden border-2 border-ink">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-3 text-center">
            <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden className="size-14 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="24" cy="18" r="8" />
              <path d="M8 42c2-9 8-13 16-13s14 4 16 13" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{ui.photoHere}</span>
            <span className="num text-[11px] text-ink-soft">{hint}</span>
          </div>
        )}
      </div>
      <figcaption className="mt-2 font-hand text-base leading-none">{caption}</figcaption>
    </figure>
  )
}
