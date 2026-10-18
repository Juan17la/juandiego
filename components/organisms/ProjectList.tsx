'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import type { Project } from '@/lib/data'
import TechChip from './TechChip'

const PER_PAGE = 3

function Pill({ href, children, solid = false }: { href: string; children: React.ReactNode; solid?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ${solid ? 'bg-moss text-white hover:bg-ink' : 'bg-ink/[0.08] hover:bg-ink hover:text-card'}`}
    >
      {children}
      <ArrowUpRight size={14} weight="bold" aria-hidden />
    </a>
  )
}

function Row({ p }: { p: Project }) {
  return (
    <li className="grid gap-5 py-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="pending relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/15">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`${p.name} screenshot`} className="h-full w-full object-cover" />
        ) : p.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col justify-between p-3">
            <span className="font-hand text-2xl leading-none">{p.name}</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Screenshot pending</span>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-extrabold leading-tight">{p.name}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{p.blurb}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {p.stack.map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.preview ? (
            <Pill href={p.preview} solid>
              Live preview
            </Pill>
          ) : null}
          <Pill href={p.repo}>Repository</Pill>
        </div>
      </div>
    </li>
  )
}

/** Three projects per page, with previous/next and numbered pages. */
export default function ProjectList({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(0)
  const top = useRef<HTMLDivElement>(null)
  const pages = Math.ceil(projects.length / PER_PAGE)

  const go = (n: number) => {
    setPage(n)
    const el = top.current
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  const btn = 'flex size-10 items-center justify-center rounded-full bg-ink/10 hover:bg-ink hover:text-card disabled:opacity-35 disabled:hover:bg-ink/10 disabled:hover:text-ink'

  return (
    <div ref={top} className="scroll-mt-20">
      <ul className="mt-2 divide-y divide-ink/10">
        {projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE).map((p) => (
          <Row key={p.name} p={p} />
        ))}
      </ul>
      {pages > 1 ? (
        <nav aria-label="Projects pages" className="mt-4 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
          <p className="num text-xs text-ink-soft">
            {projects.length} projects · page {page + 1} of {pages}
          </p>
          <div className="flex items-center gap-1.5">
            <button type="button" className={btn} disabled={page === 0} onClick={() => go(page - 1)} aria-label="Previous page">
              <CaretLeft size={18} weight="bold" aria-hidden />
            </button>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Page ${i + 1}`}
                aria-current={i === page ? 'page' : undefined}
                className={`num hidden size-10 items-center justify-center rounded-full text-sm sm:flex ${i === page ? 'bg-ink text-card' : 'bg-ink/10 hover:bg-ink hover:text-card'}`}
              >
                {i + 1}
              </button>
            ))}
            <button type="button" className={btn} disabled={page === pages - 1} onClick={() => go(page + 1)} aria-label="Next page">
              <CaretRight size={18} weight="bold" aria-hidden />
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  )
}
