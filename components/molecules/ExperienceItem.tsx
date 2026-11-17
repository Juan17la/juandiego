'use client'

import type { ExperienceItem as Item } from '@/lib/data'
import { useContent } from '@/lib/i18n'
import { projectAnchor } from '@/lib/styles'
import Chip from '../atoms/Chip'

export default function ExperienceItem({ e, latest }: { e: Item; latest?: boolean }) {
  const { projects } = useContent()
  // Experience uses short names ('Agreement Manager'); match on the first word, anchor on the repo (same in every language).
  const projectId = (name: string) => projectAnchor(projects.find((p) => p.name.includes(name.split(' ')[0]))?.repo ?? name)
  return (
    <li className={`relative pb-8 last:pb-0 ${latest ? 'glow' : ''}`}>
      <span aria-hidden className="absolute -left-8 top-1.5 size-3 rounded-full border-2 border-card bg-moss ring-2 ring-moss/30" />
      <Chip>{e.when}</Chip>
      <h3 className={`mt-3 font-extrabold leading-tight ${e.project ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl'}`}>
        {e.project ? (
          <a href={`#${projectId(e.project)}`} className="underline decoration-ink/25 hover:decoration-moss">
            {e.title}
          </a>
        ) : (
          e.title
        )}{' '}
        <span className="font-medium text-ink-soft">· {e.where}</span>
      </h3>
      {e.text ? <p className={`mt-2 max-w-[62ch] leading-relaxed ${e.project ? 'text-sm text-ink-soft' : 'text-lg'}`}>{e.text}</p> : null}
    </li>
  )
}
