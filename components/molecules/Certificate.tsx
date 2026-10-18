'use client'

import { useContent } from '@/lib/i18n'

/** Framed slot for a certificate scan. Empty `src` shows a labelled placeholder. */
export default function Certificate({ src, title, url }: { src?: string; title: string; url?: string }) {
  const { ui } = useContent()
  return (
    <div className="mt-4">
      <div className="pending relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-dashed border-ink/40">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={ui.certificateAlt(title)} className="h-full w-full object-contain" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 p-3 text-center">
            <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden className="size-10 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="9" width="36" height="26" rx="2" />
              <path d="M14 18h20M14 25h12" />
              <circle cx="34" cy="38" r="4.5" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{ui.certificateHere}</span>
            <span className="num text-[11px] text-ink-soft">/certs/…webp</span>
          </div>
        )}
      </div>
      {url ? (
        <p className="mt-2 text-sm">
          <a href={url} target="_blank" rel="noreferrer" className="font-semibold underline">
            {ui.verify}
          </a>
        </p>
      ) : null}
    </div>
  )
}
