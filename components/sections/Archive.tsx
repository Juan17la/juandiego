'use client'

import { useContent } from '@/lib/i18n'
import { lift } from '@/lib/styles'
import TrackHead from '../molecules/TrackHead'
import Terminal from '../organisms/Terminal'

export default function Archive() {
  const { ui } = useContent()
  return (
    <section id="archive" className={`on-card scroll-mt-6 rounded-[28px] bg-sage p-6 pb-10 text-ink sm:p-10 sm:pb-12 ${lift}`}>
      <TrackHead id="archive" />
      <p className="mt-4 text-sm font-semibold">{ui.archivePrompt}</p>
      <Terminal />
    </section>
  )
}
