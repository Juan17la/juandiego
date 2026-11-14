'use client'

import type { ExperienceItem as Item } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import { projectAnchor } from '@/lib/styles'
import Chip from '../atoms/Chip'

export default function ExperienceItem({ e }: { e: Item }) {
  const { projects } = useContent()
  // Experience uses short names ('Agreement Manager'); match on the first word, anchor on the repo (same in every language).
  const projectId = (name: string) => projectAnchor(projects.find((p) => p.name.includes(name.split(' ')[0]))?.repo ?? name)
  return (
    <li className="relative pb-12 last:pb-0">
      <span aria-hidden className="absolute -left-8 top-1.5 size-3 rounded-full border-2 border-card bg-moss ring-2 ring-moss/30" />
      <Chip>{e.when}</Chip>
      <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
        {e.title} <span className="font-medium text-ink-soft">· {e.where}</span>
      </h3>
      <p className="mt-3 max-w-[62ch] text-lg leading-relaxed">{e.text}</p>
      {e.work.length ? (
        <ul className="mt-6 grid gap-x-8 gap-y-4 border-t border-ink/10 pt-5 sm:grid-cols-2">
          {e.work.map((w) => (
            <li key={w.name} className="reveal">
              <a href={`#${projectId(w.name)}`} className="font-bold leading-tight underline decoration-ink/25 hover:decoration-moss">
                {w.name}
              </a>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}
