import Carousel from './Carousel'
import ProjectList from './ProjectList'
import Logo from './Logo'
import TechChip from './TechChip'
import Terminal from './Terminal'
import type { ReactNode } from 'react'
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr'
import { about, academic, beyond, contacts, experience, profile, projects, sections, stack, testimonials } from '@/lib/data'


const idx = (id: string) => sections.findIndex((s) => s.id === id)

/** Every section opens with the same large title. */
function TrackHead({ id, tone = 'ink' }: { id: string; tone?: 'ink' | 'card' }) {
  const s = sections[idx(id)]
  return (
    <header className={tone === 'card' ? 'text-card' : ''}>
      <h2 className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">{s.title}</h2>
    </header>
  )
}

const lift = 'shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_30px_60px_-30px_rgb(0_0_0/0.6)]'
const sheet = `on-card scroll-mt-16 lg:scroll-mt-6 rounded-[28px] bg-card text-ink p-6 sm:p-10 ${lift}`

const chip = 'num inline-flex items-center rounded-full bg-ink/[0.08] px-3 py-1 text-xs'

function Gif({ name, size = 24, className = '' }: { name: 'sparkle' | 'heart'; size?: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/gifs/${name}.gif`} alt="" width={size} height={size} className={`inline-block motion-reduce:hidden [image-rendering:pixelated] ${className}`} />
}

function Pill({ href, children, solid = false }: { href: string; children: ReactNode; solid?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ${
        solid ? 'bg-moss text-white hover:bg-ink' : 'bg-ink/[0.08] hover:bg-ink hover:text-card'
      }`}
    >
      {children}
      <ArrowUpRight size={14} weight="bold" aria-hidden />
    </a>
  )
}

/** Polaroid-style frame. Empty `src` shows a labelled placeholder. */
function Photo({ src, alt, hint, caption, tilt = 0, className = '' }: { src: string; alt: string; hint: string; caption: string; tilt?: number; className?: string }) {
  return (
    <figure className={`on-card relative bg-card p-2.5 pb-3 text-ink shadow-[0_18px_30px_-16px_rgb(0_0_0/0.7)] ${className}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <span aria-hidden className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-hi/80" />
      <div className="pending relative aspect-[4/5] overflow-hidden border-2 border-ink">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-3 text-center">
            <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden className="size-14 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="24" cy="18" r="8" />
              <path d="M8 42c2-9 8-13 16-13s14 4 16 13" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Photo goes here</span>
            <span className="num text-[11px] text-ink-soft">{hint}</span>
          </div>
        )}
      </div>
      <figcaption className="mt-2 font-hand text-base leading-none">{caption}</figcaption>
    </figure>
  )
}

const PHOTO_W = 'w-full max-w-[220px]'

/** Title + text on the left, photo on the right starting at the title's top edge. */
function Split({ id, photo, children, tone = 'ink' }: { id: string; photo: ReactNode; children: ReactNode; tone?: 'ink' | 'card' }) {
  return (
    <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_220px]">
      <div>
        <TrackHead id={id} tone={tone} />
        {children}
      </div>
      {photo}
    </div>
  )
}

export function Intro() {
  return (
    <section id="intro" aria-label="Intro" className="scroll-mt-16 pt-10 pb-6 text-card lg:pt-6">
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_340px] md:items-center">
        <div>
          <h1 className="text-[clamp(3.5rem,11vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.035em]">{profile.name}</h1>
          <p className="mt-4 text-2xl font-semibold sm:text-3xl">{profile.role}</p>
          <p className="mt-3 inline-block -rotate-1 bg-hi px-3 py-1 font-hand text-xl text-ink sm:text-2xl">
            {profile.tagline} <Gif name="sparkle" className="align-middle" />
          </p>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed [text-wrap:balance]">{profile.pitch}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Main stack">
            {stack.main.map((t) => (
              <li key={t}>
                <TechChip name={t} />
              </li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Quick facts">
            {profile.facts.map((f) => (
              <li key={f} className="num rounded-full bg-white/10 px-3 py-1 text-xs">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Photo src={profile.photos.hero} alt="Juan Diego" hint="/photos/me.webp" caption="that’s me" tilt={2.5} className="mx-auto w-full max-w-[340px]" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-full bg-label px-6 py-3 font-bold text-ink hover:bg-hi">
          See the projects
        </a>
        <a href={`mailto:${contacts.email}`} className="rounded-full bg-white/10 px-6 py-3 font-bold hover:bg-white/20">
          Email me
        </a>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className={sheet}>
      <Split id="about" photo={<Photo src={profile.photos.about} alt="Juan Diego" hint="/photos/about.webp" caption="off the clock" tilt={-2} className={`mx-auto md:mx-0 ${PHOTO_W}`} />}>
        <div className="mt-6 max-w-[68ch] space-y-4 text-lg leading-relaxed">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Split>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className={sheet}>
      <TrackHead id="projects" />
      <ProjectList projects={projects} />
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className={sheet}>
      <TrackHead id="stack" />
      <p className="mt-4 max-w-[60ch] text-ink-soft">I’ve worked with all of these, though I’m not an expert in every one.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {stack.groups.map((g) => (
          <div key={g.title} className="rounded-3xl bg-ink/[0.05] p-5">
            <h3 className="text-base font-extrabold">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((t) => (
                <li key={t}>
                  <TechChip name={t} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Stamp() {
  return <span className="num rounded-full bg-label px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Placeholder</span>
}

export function Voices() {
  return (
    <section id="voices" className={sheet}>
      <TrackHead id="voices" />
      <Carousel label="Testimonials">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex h-full min-h-[240px] flex-col rounded-3xl bg-ink/[0.05] p-6">
            <blockquote className="text-lg font-medium leading-snug">
              <span aria-hidden className="font-hand text-4xl leading-none text-moss">“</span>
              {t.quote}
            </blockquote>
            <figcaption className="mt-auto pt-5 text-sm">
              <span className="font-bold">{t.name}</span>
              <span className="text-ink-soft">
                {' '}
                · {t.role}
                {t.work ? `, ${t.work}` : ''}
              </span>
              {t.placeholder ? (
                <span className="ml-2 align-middle">
                  <Stamp />
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  )
}

/** Framed slot for a certificate scan. Empty `src` shows a labelled placeholder. */
function Certificate({ src, title, url }: { src?: string; title: string; url?: string }) {
  return (
    <div className="mt-4">
      <div className="pending relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-dashed border-ink/40">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={`${title} certificate`} className="h-full w-full object-contain" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 p-3 text-center">
            <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden className="size-10 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="9" width="36" height="26" rx="2" />
              <path d="M14 18h20M14 25h12" />
              <circle cx="34" cy="38" r="4.5" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Certificate goes here</span>
            <span className="num text-[11px] text-ink-soft">/certs/…webp</span>
          </div>
        )}
      </div>
      {url ? (
        <p className="mt-2 text-sm">
          <a href={url} target="_blank" rel="noreferrer" className="font-semibold underline">
            Verify credential
          </a>
        </p>
      ) : null}
    </div>
  )
}

export function Academic() {
  return (
    <section id="academic" className={sheet}>
      <TrackHead id="academic" />
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {academic.map((a) => (
          <li key={a.title} className="rounded-3xl bg-ink/[0.05] p-5">
            <h3 className="text-xl font-extrabold leading-tight">{a.title}</h3>
            <p className="num mt-1 text-xs text-ink-soft">
              {a.org}
              {a.placeholder ? (
                <span className="ml-2">
                  <Stamp />
                </span>
              ) : null}
            </p>
            <p className="mt-3 leading-relaxed">{a.detail}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {a.facts.map((f) => (
                <li key={f} className={chip}>
                  {f}
                </li>
              ))}
            </ul>
            <Certificate src={a.certificate} title={a.title} url={a.credentialUrl} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className={sheet}>
      <TrackHead id="experience" />
      <p className="mt-4 text-ink-soft">No job titles yet. This is the work I’ve shipped instead.</p>
      <ol className="mt-4 border-l border-ink/25 pl-6">
        {experience.map((e) => (
          <li key={e.where} className="relative pb-7 last:pb-0">
            <span aria-hidden className="absolute -left-[33px] top-1.5 size-3 rounded-full border-2 border-card bg-moss" />
            <h3 className="text-xl font-extrabold leading-tight">
              {e.title} <span className="font-medium text-ink-soft">· {e.where}</span>
            </h3>
            <p className="mt-1 max-w-[62ch] leading-relaxed">{e.text}</p>
            <span className={`${chip} mt-2`}>{e.when}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Beyond() {
  return (
    <section id="beyond" className={`on-card scroll-mt-16 lg:scroll-mt-6 rounded-[28px] bg-sage p-6 pb-10 text-ink sm:p-10 sm:pb-12 ${lift}`}>
      <Split id="beyond" photo={<Photo src={profile.photos.online} alt="Juan Diego, then" hint="/photos/then.webp" caption="the Acer era" tilt={2} className={`mx-auto md:mx-0 ${PHOTO_W}`} />}>
        <div className="mt-6 max-w-[56ch] space-y-4">
          <p className="text-xl font-semibold leading-snug">{beyond.intro}</p>
          <p className="text-lg leading-relaxed">
            {beyond.intro2} <Gif name="heart" size={26} className="align-middle" />
          </p>
        </div>
      </Split>
      <p className="mt-10 text-sm font-semibold">Open the archive: type help, or just click the names.</p>
      <Terminal />
      <p className="mt-8 text-sm font-medium">{beyond.aside}</p>
    </section>
  )
}

export function Contact() {
  const links = [
    { href: `mailto:${contacts.email}`, label: 'Email', sub: contacts.email, Icon: EnvelopeSimple },
    { href: contacts.linkedin, label: 'LinkedIn', sub: 'juan07diego', Icon: LinkedinLogo },
    { href: contacts.github, label: 'GitHub', sub: 'Juan17la', Icon: GithubLogo },
    { href: contacts.x, label: 'X', sub: '@1714Jud', Icon: XLogo },
  ]
  return (
    <section id="contact" className={`scroll-mt-16 lg:scroll-mt-6 rounded-[28px] bg-ink p-6 text-card sm:p-10 ${lift}`}>
      <TrackHead id="contact" tone="card" />
      <p className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">Let’s build something.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {links.map(({ href, label, sub, Icon }) => (
          <li key={label}>
            <a
              href={href}
              {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 hover:bg-hi hover:text-ink"
            >
              <Icon size={24} weight="bold" aria-hidden />
              <span className="min-w-0">
                <span className="block font-bold leading-tight">{label}</span>
                <span className="num block truncate text-xs opacity-80">{sub}</span>
              </span>
              <ArrowUpRight size={16} weight="bold" aria-hidden className="ml-auto shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Footer() {
  const social = [
    { href: contacts.github, label: 'GitHub', Icon: GithubLogo },
    { href: contacts.linkedin, label: 'LinkedIn', Icon: LinkedinLogo },
    { href: contacts.x, label: 'X', Icon: XLogo },
    { href: `mailto:${contacts.email}`, label: 'Email', Icon: EnvelopeSimple },
  ]
  const col = 'text-sm font-bold uppercase tracking-wider text-card/60'
  const link = 'rounded-sm py-0.5 hover:text-hi hover:underline'
  return (
    <footer className="mt-4 px-2 pt-6 text-card sm:px-4">
      <div className="grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="size-14" />
          <p className="mt-4 text-xl font-extrabold leading-tight">{profile.name}</p>
          <p className="mt-1 text-card/80">{profile.role}</p>
          <p className="mt-3 inline-block -rotate-1 bg-hi px-2 py-0.5 font-hand text-base text-ink">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer sections">
          <h2 className={col}>Explore</h2>
          <ul className="mt-3 space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={link}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={col}>Find me</h2>
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
          <p className="num mt-3 break-all text-xs text-card/70">{contacts.email}</p>
        </div>
        <div>
          <h2 className={col}>About this site</h2>
          <ul className="mt-3 space-y-1 text-sm text-card/85">
            <li>Built with Next.js, TypeScript and Tailwind CSS</li>
            <li>Fonts: Bricolage Grotesque, JetBrains Mono, Permanent Marker, Silkscreen</li>
            <li>{profile.location}</li>
          </ul>
          <a href="#intro" className={`${link} mt-4 inline-flex items-center gap-1.5 text-sm font-semibold`}>
            Back to the top <ArrowUpRight size={14} weight="bold" aria-hidden className="-rotate-45" />
          </a>
        </div>
      </div>
      <p className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/15 py-5 text-sm text-card/70">
        <span>© 2026 {profile.name}. Thanks for scrolling.</span>
        <Gif name="sparkle" />
      </p>
    </footer>
  )
}
