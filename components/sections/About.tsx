'use client'

import { useEffect, useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import TrackHead from '../molecules/TrackHead'

const tile = 'bento-tile rounded-3xl'

/** Index that advances every `ms`, unless the visitor prefers reduced motion. */
function useCycle(length: number, ms: number) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % length), ms)
    return () => clearInterval(t)
  }, [length, ms])
  return i
}

/** Stacked images that crossfade to the one at `active`. */
function Fade({ srcs, active, alt, pos = '50% 30%', fit = 'object-cover', hidden = false }: { srcs: string[]; active: number; alt: string; pos?: string; fit?: string; hidden?: boolean }) {
  return srcs.map((src, i) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={src}
      src={src}
      alt={i === active && !hidden ? alt : ''}
      aria-hidden={hidden || i !== active}
      loading="lazy"
      className={`absolute inset-0 h-full w-full ${fit} transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
      style={{ objectPosition: pos }}
    />
  ))
}

/** Compact bento: two short texts, photos and small fact tiles. */
export default function About() {
  const { aboutParagraphs, aboutBento: b } = useContent()
  const animeI = useCycle(b.anime.length, 7000)
  const carI = useCycle(b.cars.length, 5000)
  const crowdI = useCycle(b.community.length, 4500)
  const albumI = useCycle(b.music.albums.length, 4000)
  const album = b.music.albums[albumI]

  const frame = (area: string, children: React.ReactNode) => (
    <div className={`${tile} ${area} relative min-h-[140px] overflow-hidden bg-ink/10`}>{children}</div>
  )
  const list = (title: string, items: string[], cls: string, area: string) => (
    <div className={`${tile} ${area} ${cls} flex flex-col justify-between gap-3 p-4`}>
      <p className="font-hand text-lg leading-none">{title}</p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <li key={t} className="rounded-full bg-ink/10 px-2.5 py-1 text-xs font-semibold">
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
        {frame('[grid-area:p1]', <Fade srcs={[b.photo]} active={0} alt="Juan Diego" />)}
        <div className={`${tile} [grid-area:on] flex flex-col justify-between gap-2 bg-ink p-4 text-card`}>
          <p className="num w-fit -rotate-2 bg-hi px-2 py-1 text-4xl font-bold leading-none tracking-tight text-on-hi">{b.online.big}</p>
          <p className="text-sm leading-snug">{b.online.text}</p>
        </div>
        {list(b.likes.title, b.likes.items, 'bg-sage text-ink', '[grid-area:li]')}
        {frame(
          '[grid-area:p2]',
          <>
            <div className="absolute inset-0 saturate-[0.55] contrast-[1.05] sepia-[0.25] hue-rotate-[40deg]">
              <Fade srcs={b.anime.map((a) => a.src)} active={animeI} alt={b.anime[animeI].title} pos="50% 20%" />
            </div>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent mix-blend-multiply" />
            <div aria-hidden className="absolute inset-0 bg-moss/25 mix-blend-color" />
            <span className="absolute bottom-3 left-3 right-3 text-base font-extrabold leading-tight text-white drop-shadow sm:text-lg">{b.anime[animeI].title}</span>
          </>,
        )}
        <div className={`${tile} [grid-area:b] flex items-center bg-desk p-5 sm:p-6`}>
          <p className="max-w-[52ch] leading-relaxed">{aboutParagraphs[1]}</p>
        </div>
        <div className={`${tile} [grid-area:mu] relative flex min-h-[180px] flex-col justify-between overflow-hidden bg-ink p-4 text-white`}>
          <div aria-hidden className="absolute inset-0 scale-125 blur-2xl">
            <Fade srcs={b.music.albums.map((a) => a.src)} active={albumI} alt="" hidden />
          </div>
          <div aria-hidden className="absolute inset-0 bg-black/40" />
          <Fade srcs={b.music.albums.map((a) => a.src)} active={albumI} alt={`${album.title} by ${album.artist}`} fit="object-contain" pos="50% 50%" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <p className="relative w-fit -rotate-2 bg-label px-2 py-0.5 font-hand text-lg leading-none text-on-hi">{b.music.title}</p>
          <p key={albumI} className="relative animate-[fadein_1s] text-xs leading-snug">
            <span className="font-bold">{album.song}</span>
            <br />
            {album.artist}
          </p>
        </div>
        <div className={`${tile} [grid-area:pl] relative flex flex-col justify-between gap-2 overflow-hidden bg-card p-4 ring-1 ring-ink/10`}>
          <MagnifyingGlass aria-hidden weight="duotone" className="absolute -right-3 -bottom-3 size-20 -rotate-12 text-ink/10" />
          <p className="font-hand text-lg leading-none">{b.planB.title}</p>
          <p className="relative text-sm leading-snug">{b.planB.text}</p>
        </div>
        {frame('[grid-area:p3]', <Fade srcs={b.community} active={crowdI} alt={b.communityAlt} pos="50% 50%" />)}
        {frame(
          '[grid-area:p4]',
          <>
            <Fade srcs={b.cars.map((c) => c.src)} active={carI} alt={b.cars[carI].caption} pos="45% 50%" />
            <span className="absolute bottom-2 left-2 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] font-semibold text-card">{b.cars[carI].caption}</span>
          </>,
        )}
      </div>
    </section>
  )
}
