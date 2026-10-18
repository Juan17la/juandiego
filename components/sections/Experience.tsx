'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import ExperienceItem from '../molecules/ExperienceItem'
import TrackHead from '../molecules/TrackHead'

export default function Experience() {
  const { experienceItems, ui } = useContent()
  return (
    <section id="experience" className={sheet}>
      <TrackHead id="experience" />
      <p className="mt-4 text-ink-soft">{ui.experienceNote}</p>
      <ol className="mt-4 border-l border-ink/25 pl-6">
        {experienceItems.map((e) => (
          <ExperienceItem key={e.where} e={e} />
        ))}
      </ol>
    </section>
  )
}
