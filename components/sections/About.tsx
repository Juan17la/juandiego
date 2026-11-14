'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import TrackHead from '../molecules/TrackHead'

const tile = 'bento-tile rounded-3xl'

/** Compact bento: two short texts, four photos and small fact tiles. */
export default function About() {
  const { aboutParagraphs, aboutBento: b } = useContent()
  const photo = (i: number, area: string, pos = '50% 30%') => (
    <div className={`${tile} ${area} relative min-h-[140px] overflow-hidden bg-ink/10`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={b.photos[i]} alt="Juan Diego" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: pos }} />
    </div>
  )
  const list = (title: string, items: string[], cls: string, area: string) => (
    <div className={`${tile} ${area} ${cls} flex flex-col justify-between gap-3 p-4`}>
      <p className="font-hand text-lg leading-none">{title}</p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <li key={t} className="whitespace-nowrap rounded-full bg-ink/10 px-2.5 py-1 text-xs font-semibold">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section id="about" className={sheet.replace('p-6 sm:p-10', 'p-3 sm:p-4')}>
      <div className="bento grid gap-3">
        <div className={`${tile} [grid-area:a] flex flex-col justify-between gap-4 bg-desk p-5 sm:p-6`}>
          <TrackHead id="about" />
          <p className="max-w-[52ch] leading-relaxed">{aboutParagraphs[0]}</p>
        </div>
        {photo(0, '[grid-area:p1]')}
        <div className={`${tile} [grid-area:on] flex flex-col justify-between gap-2 bg-ink p-4 text-card`}>
          <p className="num text-4xl font-bold leading-none tracking-tight text-hi">{b.online.big}</p>
          <p className="text-sm leading-snug">{b.online.text}</p>
        </div>
        {list(b.likes.title, b.likes.items, 'bg-sage text-ink', '[grid-area:li]')}
        {photo(1, '[grid-area:p2]', '50% 25%')}
        <div className={`${tile} [grid-area:b] flex items-center bg-desk p-5 sm:p-6`}>
          <p className="max-w-[52ch] leading-relaxed">{aboutParagraphs[1]}</p>
        </div>
        {list(b.music.title, b.music.items, 'bg-label text-on-hi', '[grid-area:mu]')}
        <div className={`${tile} [grid-area:pl] flex flex-col justify-between gap-2 bg-card p-4 ring-1 ring-ink/10`}>
          <p className="font-hand text-lg leading-none">{b.planB.title}</p>
          <p className="text-sm leading-snug">{b.planB.text}</p>
        </div>
        {photo(2, '[grid-area:p3]', '50% 20%')}
        {photo(3, '[grid-area:p4] hidden lg:block', '50% 35%')}
      </div>
    </section>
  )
}
