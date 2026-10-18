'use client'

import { useRef, useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import type { Project } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import ProjectRow from '../molecules/ProjectRow'

const PER_PAGE = 3

/** Three projects per page, with previous/next and numbered pages. */
export default function ProjectList({ projects }: { projects: Project[] }) {
  const { ui } = useContent()
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
          <ProjectRow key={p.name} p={p} />
        ))}
      </ul>
      {pages > 1 ? (
        <nav aria-label={ui.projectsPages} className="mt-4 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
          <p className="num text-xs text-ink-soft">
            {ui.pager(projects.length, page + 1, pages)}
          </p>
          <div className="flex items-center gap-1.5">
            <button type="button" className={btn} disabled={page === 0} onClick={() => go(page - 1)} aria-label={ui.previousPage}>
              <CaretLeft size={18} weight="bold" aria-hidden />
            </button>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={ui.page(i + 1)}
                aria-current={i === page ? 'page' : undefined}
                className={`num hidden size-10 items-center justify-center rounded-full text-sm sm:flex ${i === page ? 'bg-ink text-card' : 'bg-ink/10 hover:bg-ink hover:text-card'}`}
              >
                {i + 1}
              </button>
            ))}
            <button type="button" className={btn} disabled={page === pages - 1} onClick={() => go(page + 1)} aria-label={ui.nextPage}>
              <CaretRight size={18} weight="bold" aria-hidden />
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  )
}
