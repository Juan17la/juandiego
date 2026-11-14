'use client'

import { useState } from 'react'
import { useContent } from '@/lib/i18n'
import { sheet, projectAnchor } from '@/lib/styles'
import Pill from '../atoms/Pill'
import TechChip from '../atoms/TechChip'
import ProjectRow from '../molecules/ProjectRow'
import ProjectModal from '../organisms/ProjectModal'
import TrackHead from '../molecules/TrackHead'

const FEATURED = 3

export default function Projects() {
  const { projects, ui } = useContent()
  const more = projects.slice(FEATURED)
  const [open, setOpen] = useState<string | null>(null)
  const current = projects.find((p) => p.name === open)
  return (
    <section id="projects" className={sheet}>
      <TrackHead id="projects" />
      <ul className="mt-10 grid gap-20">
        {projects.slice(0, FEATURED).map((p, i) => (
          <ProjectRow key={p.name} p={p} index={i} flip={i % 2 === 1} onOpen={() => setOpen(p.name)} />
        ))}
      </ul>

      {/* ponytail: relies on the browser auto-opening <details> for #anchor links from Experience (Chrome 97+, Firefox 139+). */}
      <details className="group mt-16 rounded-3xl bg-ink/[0.05]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-3xl p-5 sm:px-6 [&::-webkit-details-marker]:hidden">
          <span className="text-xl font-extrabold">
            {ui.moreProjects} <span className="font-data text-base font-semibold text-ink-soft">({more.length})</span>
          </span>
          <span aria-hidden className="grid size-9 place-items-center rounded-full bg-ink text-card transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <ul className="grid gap-3 px-3 pb-3 sm:px-4 sm:pb-4 md:grid-cols-2">
          {more.map((p, i) => (
            <li key={p.name} id={projectAnchor(p.repo)} style={{ animationDelay: `${i * 70}ms` }} onClick={(e) => !(e.target as HTMLElement).closest('a,button') && setOpen(p.name)} className="more-card group/card scroll-mt-6 flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-ink/5 transition-shadow hover:shadow-[0_24px_50px_-28px_rgb(0_0_0/0.5)]">
              <div className="stage relative grid aspect-[16/9] place-items-center overflow-hidden bg-desk">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    className={`absolute top-[14%] w-[82%] rounded-lg object-cover object-top shadow-[0_20px_40px_-16px_rgb(0_0_0/0.45)] ring-1 ring-ink/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:-translate-y-[4%] group-hover/card:rotate-0 group-hover/card:scale-[1.04] motion-reduce:transition-none ${i % 2 ? 'rotate-[2deg]' : '-rotate-[2deg]'}`}
                  />
                ) : p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="size-20 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:-rotate-6 motion-reduce:transition-none" />
                ) : null}
              </div>
              <div className="min-w-0 p-4 sm:p-5">
                <h4 className="font-extrabold leading-tight">{p.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
                <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Techs">
                  {p.techs.map((t) => (
                    <li key={t}>
                      <TechChip name={t} />
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.preview ? (
                    <Pill href={p.preview} solid>
                      {ui.livePreview}
                    </Pill>
                  ) : null}
                  <Pill href={p.repo}>{ui.repository}</Pill>
                  <button type="button" onClick={() => setOpen(p.name)} className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-card hover:bg-hi hover:text-on-hi">
                    {ui.moreInfo}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </details>
      {current ? <ProjectModal key={current.name} p={current} onClose={() => setOpen(null)} /> : null}
    </section>
  )
}
