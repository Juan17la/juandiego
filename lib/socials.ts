import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { contacts } from './data'

/** Every place on the page that links out to Juan uses this list. */
export const socials = [
  { href: `mailto:${contacts.email}`, label: 'Email', sub: contacts.email, Icon: EnvelopeSimple },
  { href: contacts.linkedin, label: 'LinkedIn', sub: 'juan07diego', Icon: LinkedinLogo },
  { href: contacts.github, label: 'GitHub', sub: 'Juan17la', Icon: GithubLogo },
]

export const external = (href: string) => (href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })
