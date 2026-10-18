'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import TechGroup from '../molecules/TechGroup'
import TrackHead from '../molecules/TrackHead'

export default function Techs() {
  const { techs, ui } = useContent()
  return (
    <section id="techs" className={sheet}>
      <TrackHead id="techs" />
      <p className="mt-4 max-w-[60ch] text-ink-soft">{ui.techsNote}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {techs.groups.map((g) => (
          <TechGroup key={g.title} title={g.title} items={g.items} />
        ))}
      </div>
    </section>
  )
}
