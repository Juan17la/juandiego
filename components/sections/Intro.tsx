'use client'

import { contacts } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import Gif from '../atoms/Gif'
import TechChip from '../atoms/TechChip'
import Photo from '../molecules/Photo'

export default function Intro() {
  const { profile, techs, ui } = useContent()
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
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={ui.mainTechs}>
            {techs.main.map((t) => (
              <li key={t}>
                <TechChip name={t} />
              </li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={ui.quickFacts}>
            {profile.facts.map((f) => (
              <li key={f} className="num rounded-full bg-white/10 px-3 py-1 text-xs">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Photo src={profile.photos.hero} alt="Juan Diego" hint="/photos/me.webp" caption={ui.captions.hero} tilt={2.5} className="mx-auto w-full max-w-[340px]" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-full bg-label px-6 py-3 font-bold text-ink hover:bg-hi">
          {ui.seeProjects}
        </a>
        <a href={`mailto:${contacts.email}`} className="rounded-full bg-white/10 px-6 py-3 font-bold hover:bg-white/20">
          {ui.emailMe}
        </a>
      </div>
    </section>
  )
}
