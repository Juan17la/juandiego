'use client'

import { useContent } from '@/lib/i18n'
import { projectAnchor } from '@/lib/styles'
import type { Project } from '@/lib/data'
import Pill from '../atoms/Pill'
import TechChip from '../atoms/TechChip'

const card = 'absolute overflow-hidden rounded-xl bg-card shadow-[0_24px_50px_-20px_rgb(0_0_0/0.45)] ring-1 ring-ink/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none'

/** A featured project: three screenshots stacked as cards on a dotted stage, beside its story. Alternates sides. */
export default function ProjectRow({ p, flip, index }: { p: Project; flip?: boolean; index: number }) {
  const { ui } = useContent()
  const [main, back, front] = p.shots ?? [p.image ?? p.logo]
  const img = (src: string, n: number, cls: string) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={`${p.name} screenshot ${n}`} loading="lazy" className={cls} />
  )
  return (
    <li id={projectAnchor(p.repo)} className={`group scroll-mt-6 grid items-center gap-8 lg:gap-14 ${flip ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'}`}>
      <div className={`stage relative aspect-[16/11] rounded-[28px] bg-desk ${flip ? 'lg:order-2' : ''}`}>
        {back ? <div className={`${card} top-[6%] right-[5%] h-[48%] max-w-[46%] rotate-[5deg] group-hover:translate-x-[4%] group-hover:-translate-y-[6%] group-hover:rotate-[8deg]`}>{img(back, 2, 'h-full w-auto max-w-none')}</div> : null}
        {main ? <div className={`${card} top-[12%] left-[5%] aspect-[16/10] w-[72%] group-hover:-translate-y-[2%] group-hover:-rotate-1`}>{img(main, 1, 'h-full w-full object-cover object-top')}</div> : null}
        {front ? <div className={`${card} right-[6%] bottom-[7%] h-[52%] max-w-[44%] -rotate-[4deg] group-hover:translate-y-[4%] group-hover:-rotate-[7deg]`}>{img(front, 3, 'h-full w-auto max-w-none')}</div> : null}
      </div>
      <div>
        <p className="num text-sm font-semibold text-ink-soft">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-1 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{p.name}</h3>
        <p className="mt-3 max-w-[56ch] leading-relaxed text-ink-soft">{p.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Techs">
          {p.techs.map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.preview ? (
            <Pill href={p.preview} solid>
              {ui.livePreview}
            </Pill>
          ) : null}
          <Pill href={p.repo}>{ui.repository}</Pill>
        </div>
      </div>
    </li>
  )
}
