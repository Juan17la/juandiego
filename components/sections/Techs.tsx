'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import TechChip from '../atoms/TechChip'
import TrackHead from '../molecules/TrackHead'

/** Short section: one row per group, title left, chips right. */
export default function Techs() {
  const { techs } = useContent()
  return (
    <section id="techs" className={sheet}>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <TrackHead id="techs" />
      </div>
      <dl className="mt-6 divide-y divide-ink/10">
        {techs.groups.map((g) => (
          <div key={g.title} className="grid gap-2 py-3 sm:grid-cols-[200px_minmax(0,1fr)] sm:items-center">
            <dt className="text-sm font-bold">{g.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <li key={t}>
                    <TechChip name={t} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
