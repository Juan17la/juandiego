'use client'

import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr'
import { contacts } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import Gif from '../atoms/Gif'
import Logo from '../atoms/Logo'

export default function Footer() {
  const { navSections, profile, ui } = useContent()
  const f = ui.footer
  const social = [
    { href: contacts.github, label: 'GitHub', Icon: GithubLogo },
    { href: contacts.linkedin, label: 'LinkedIn', Icon: LinkedinLogo },
    { href: contacts.x, label: 'X', Icon: XLogo },
    { href: `mailto:${contacts.email}`, label: 'Email', Icon: EnvelopeSimple },
  ]
  const col = 'text-sm font-bold uppercase tracking-wider text-on-desk/60'
  const link = 'rounded-sm py-0.5 hover:text-hi hover:underline'
  return (
    <footer className="mt-4 px-2 pt-6 text-on-desk sm:px-4">
      <div className="grid gap-10 border-t border-on-desk/15 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="size-14" />
          <p className="mt-4 text-xl font-extrabold leading-tight">{profile.name}</p>
          <p className="mt-1 text-on-desk/80">{profile.role}</p>
          <p className="mt-3 inline-block -rotate-1 bg-hi px-2 py-0.5 font-hand text-base text-on-hi">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer navSections">
          <h2 className={col}>{f.explore}</h2>
          <ul className="mt-3 space-y-1">
            {navSections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={link}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={col}>{f.findMe}</h2>
          <ul className="mt-3 space-y-1">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })} className={`${link} inline-flex items-center gap-2`}>
                  <Icon size={16} weight="bold" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="num mt-3 break-all text-xs text-on-desk/70">{contacts.email}</p>
        </div>
        <div>
          <h2 className={col}>{f.about}</h2>
          <ul className="mt-3 space-y-1 text-sm text-on-desk/85">
            <li>{f.builtWith}</li>
            <li>{f.fonts}</li>
            <li>{profile.location}</li>
          </ul>
          <a href="#intro" className={`${link} mt-4 inline-flex items-center gap-1.5 text-sm font-semibold`}>
            {f.top} <ArrowUpRight size={14} weight="bold" aria-hidden className="-rotate-45" />
          </a>
        </div>
      </div>
      <p className="mt-10 flex flex-wrap items-center gap-2 border-t border-on-desk/15 py-5 text-sm text-on-desk/70">
        <span>© 2026 {profile.name}. {f.thanks}</span>
        <Gif name="sparkle" />
      </p>
    </footer>
  )
}
