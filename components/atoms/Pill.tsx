import type { ReactNode } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

export default function Pill({ href, children, solid = false }: { href: string; children: ReactNode; solid?: boolean }) {
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
