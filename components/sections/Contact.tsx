'use client'

import { useContent } from '@/lib/i18n'
import { socials } from '@/lib/socials'
import { lift } from '@/lib/styles'
import ContactLink from '../molecules/ContactLink'
import TrackHead from '../molecules/TrackHead'


export default function Contact() {
  const { ui } = useContent()
  return (
    <section id="contact" className={`scroll-mt-6 reveal rounded-[28px] bg-ink p-6 text-card sm:p-10 ${lift}`}>
      <TrackHead id="contact" tone="card" />
      <p className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">{ui.contactCta}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {socials.map((l) => (
          <li key={l.label}>
            <ContactLink {...l} />
          </li>
        ))}
      </ul>
    </section>
  )
}
