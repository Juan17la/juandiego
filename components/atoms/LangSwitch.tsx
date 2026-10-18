'use client'

import { Translate } from '@phosphor-icons/react'
import { useLang, useContent } from '@/lib/i18n'

/** Flips between English and Spanish. Shows the language it will switch to. */
export default function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()
  const { ui } = useContent()
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      aria-label={ui.switchLang.name}
      title={ui.switchLang.name}
      className={`num flex items-center justify-center gap-1.5 rounded-full bg-ink/[0.08] text-sm font-bold hover:bg-ink hover:text-card ${className}`}
    >
      <Translate size={16} weight="bold" aria-hidden />
      {ui.switchLang.short}
    </button>
  )
}
