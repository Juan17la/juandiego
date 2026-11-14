'use client'

import { ArrowDown, Briefcase, DownloadSimple, MapPin } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'
import { external, socials } from '@/lib/socials'
import Gif from '../atoms/Gif'
import LangSwitch from '../atoms/LangSwitch'
import Logo from '../atoms/Logo'
import TechChip from '../atoms/TechChip'
import ThemeSwitch from '../atoms/ThemeSwitch'

const flag = 'h-4 w-6 rounded-[3px] ring-1 ring-on-desk/25'
const FlagES = () => (
  <svg viewBox="0 0 6 4" className={flag}>
    <path fill="#c60b1e" d="M0 0h6v4H0z" />
    <path fill="#ffc400" d="M0 1h6v2H0z" />
  </svg>
)
const FlagUK = () => (
  <svg viewBox="0 0 60 40" className={flag}>
    <path fill="#012169" d="M0 0h60v40H0z" />
    <path stroke="#fff" strokeWidth="8" d="M0 0l60 40M60 0L0 40" />
    <path stroke="#c8102e" strokeWidth="3" d="M0 0l60 40M60 0L0 40" />
    <path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60" />
    <path stroke="#c8102e" strokeWidth="8" d="M30 0v40M0 20h60" />
  </svg>
)

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

      <div className="intro-in flex flex-1 flex-col items-center justify-center py-10 text-center">
        <ul className="num flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-on-desk/70">
          <li className="flex items-center gap-1.5">
            <MapPin size={18} weight="fill" aria-hidden className="text-moss" />
            {profile.facts[0]}
          </li>
          <li className="flex items-center gap-1.5">
            <Briefcase size={18} weight="fill" aria-hidden className="text-moss" />
            {profile.facts[1]}
          </li>
          <li className="flex items-center gap-1.5">
            <span aria-hidden className="flex gap-1">
              <FlagUK />
              <FlagES />
            </span>
            {profile.facts[2]}
          </li>
        </ul>
        <h1 className="mt-5 text-[clamp(4rem,15vw,11.5rem)] font-extrabold leading-[0.82] tracking-[-0.05em]">{profile.name}</h1>
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-2xl font-semibold sm:text-4xl">{profile.role}</p>
          <p className="-rotate-2 bg-hi px-3 py-1 font-hand text-xl text-on-hi sm:text-2xl">
            {profile.tagline} <Gif name="sparkle" className="align-middle" />
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-[60ch] text-lg leading-relaxed text-on-desk/85 sm:text-xl">{profile.pitch}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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
        <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label={ui.mainTechs}>
          {techs.main.map((t) => (
            <li key={t}>
              <TechChip name={t} large />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end pb-8">
        <a href="#about" aria-label="Scroll down" className="hidden size-12 shrink-0 place-items-center rounded-full ring-1 ring-on-desk/25 hover:bg-hi hover:text-on-hi sm:grid">
          <ArrowDown size={20} weight="bold" aria-hidden className="motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  )
}
