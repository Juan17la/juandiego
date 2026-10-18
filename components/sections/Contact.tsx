'use client'

import { EnvelopeSimple, GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr'
import { contacts } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import { lift } from '@/lib/styles'
import ContactLink from '../molecules/ContactLink'
import TrackHead from '../molecules/TrackHead'

const links = [
  { href: `mailto:${contacts.email}`, label: 'Email', sub: contacts.email, Icon: EnvelopeSimple },
  { href: contacts.linkedin, label: 'LinkedIn', sub: 'juan07diego', Icon: LinkedinLogo },
  { href: contacts.github, label: 'GitHub', sub: 'Juan17la', Icon: GithubLogo },
  { href: contacts.x, label: 'X', sub: '@1714Jud', Icon: XLogo },
]

export default function Contact() {
  const { ui } = useContent()
  return (
    <section id="contact" className={`scroll-mt-16 lg:scroll-mt-6 rounded-[28px] bg-ink p-6 text-card sm:p-10 ${lift}`}>
      <TrackHead id="contact" tone="card" />
      <p className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">{ui.contactCta}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.label}>
            <ContactLink {...l} />
          </li>
        ))}
      </ul>
    </section>
  )
}
