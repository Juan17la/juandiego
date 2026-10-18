'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import AcademicCard from '../molecules/AcademicCard'
import TrackHead from '../molecules/TrackHead'

export default function Academic() {
  const { academicItems } = useContent()
  return (
    <section id="academic" className={sheet}>
      <TrackHead id="academic" />
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {academicItems.map((a) => (
          <AcademicCard key={a.title} a={a} />
        ))}
      </ul>
    </section>
  )
}
