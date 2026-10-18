'use client'

import { useContent } from '@/lib/i18n'
import type { Project } from '@/lib/data'
import Pill from '../atoms/Pill'
import TechChip from '../atoms/TechChip'

export default function ProjectRow({ p }: { p: Project }) {
  const { ui } = useContent()
  return (
    <li className="grid gap-5 py-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="pending relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/15">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`${p.name} screenshot`} className="h-full w-full object-cover" />
        ) : p.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col justify-between p-3">
            <span className="font-hand text-2xl leading-none">{p.name}</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{ui.screenshotPending}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-extrabold leading-tight">{p.name}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{p.blurb}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Techs">
          {p.techs.map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
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
