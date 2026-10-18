'use client'

import { useContent } from '@/lib/i18n'

/** Every section opens with the same large title. */
export default function TrackHead({ id, tone = 'ink' }: { id: string; tone?: 'ink' | 'card' }) {
  const { navSections } = useContent()
  const s = navSections.find((n) => n.id === id)
  return (
    <header className={tone === 'card' ? 'text-card' : ''}>
      <h2 className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">{s?.title}</h2>
    </header>
  )
}
