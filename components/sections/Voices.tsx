'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import Carousel from '../molecules/Carousel'
import TestimonialCard from '../molecules/TestimonialCard'
import TrackHead from '../molecules/TrackHead'

export default function Voices() {
  const { testimonials, ui } = useContent()
  return (
    <section id="voices" className={sheet}>
      <TrackHead id="voices" />
      <Carousel label={ui.testimonials}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </Carousel>
    </section>
  )
}
