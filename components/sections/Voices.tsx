'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import TestimonialCard from '../molecules/TestimonialCard'
import TrackHead from '../molecules/TrackHead'

/** Short section: heading, then the two quotes side by side. */
export default function Voices() {
  const { testimonials } = useContent()
  return (
    <section id="voices" className={`${sheet} grid gap-6`}>
      <TrackHead id="voices" />
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  )
}
