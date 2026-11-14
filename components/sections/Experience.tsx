'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import ExperienceItem from '../molecules/ExperienceItem'
import TrackHead from '../molecules/TrackHead'

/** Heading sticks on the left while the timeline line fills with scroll. */
export default function Experience() {
  const { experienceItems, ui } = useContent()
  return (
    <section id="experience" className={`${sheet} grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]`}>
      <div className="lg:sticky lg:top-10 lg:self-start">
        <TrackHead id="experience" />
        <p className="mt-4 text-ink-soft">{ui.experienceNote}</p>
      </div>
      <ol className="relative pl-8">
        <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-0.5 rounded-full bg-ink/15" />
        <span aria-hidden className="timeline-fill absolute top-2 bottom-2 left-[5px] w-0.5 origin-top rounded-full bg-moss" />
        {experienceItems.map((e) => (
          <ExperienceItem key={e.where} e={e} />
        ))}
      </ol>
    </section>
  )
}
