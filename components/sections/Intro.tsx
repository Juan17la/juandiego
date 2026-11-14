'use client'

import { ArrowDown, DownloadSimple } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'
import { external, socials } from '@/lib/socials'
import Gif from '../atoms/Gif'
import LangSwitch from '../atoms/LangSwitch'
import Logo from '../atoms/Logo'
import TechChip from '../atoms/TechChip'
import ThemeSwitch from '../atoms/ThemeSwitch'

export default function Intro() {
  const { profile, techs, ui } = useContent()
  return (
    <section id="intro" aria-label="Intro" className="relative flex min-h-[100svh] scroll-mt-6 flex-col text-on-desk">
      <div className="flex items-center gap-2 py-5">
        <Logo className="size-11 shrink-0" />
        <p className="mr-auto font-extrabold">Jud</p>
        <LangSwitch className="h-10 px-4" />
        <ThemeSwitch className="size-10" />
      </div>

      <div className="intro-in flex flex-1 flex-col justify-center py-10">
        <p className="num flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-on-desk/70">
          <span aria-hidden className="relative flex size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-moss opacity-60 motion-reduce:hidden" />
            <span className="relative size-2.5 rounded-full bg-moss" />
          </span>
          {profile.facts.join(' · ')}
        </p>
        <h1 className="mt-5 text-[clamp(4rem,15vw,11.5rem)] font-extrabold leading-[0.82] tracking-[-0.05em]">{profile.name}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <p className="text-2xl font-semibold sm:text-4xl">{profile.role}</p>
          <p className="-rotate-2 bg-hi px-3 py-1 font-hand text-xl text-on-hi sm:text-2xl">
            {profile.tagline} <Gif name="sparkle" className="align-middle" />
          </p>
        </div>
        <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-on-desk/85 sm:text-xl">{profile.pitch}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-full bg-label px-7 py-3.5 font-bold text-on-hi hover:bg-hi">
            {ui.seeProjects}
          </a>
          <a href={ui.cv.href} download className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-bold text-card hover:bg-hi hover:text-on-hi">
            <DownloadSimple size={18} weight="bold" aria-hidden />
            {ui.cv.label}
          </a>
          <ul className="flex gap-1.5">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} title={label} {...external(href)} className="flex size-12 items-center justify-center rounded-full bg-on-desk/[0.08] hover:bg-ink hover:text-card">
                  <Icon size={20} weight="bold" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-on-desk/15 pt-5 pb-8">
        <ul className="flex flex-wrap gap-2" aria-label={ui.mainTechs}>
          {techs.main.map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
        </ul>
        <a href="#about" aria-label="Scroll down" className="hidden size-12 shrink-0 place-items-center rounded-full ring-1 ring-on-desk/25 hover:bg-hi hover:text-on-hi sm:grid">
          <ArrowDown size={20} weight="bold" aria-hidden className="motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  )
}
