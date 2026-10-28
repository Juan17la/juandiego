'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'

/** Flips light/dark. The initial theme is set before paint by the script in app/layout.tsx. */
export default function ThemeSwitch({ className = '' }: { className?: string }) {
  const { ui } = useContent()
  const [dark, setDark] = useState(false)

  useEffect(() => setDark(document.documentElement.dataset.theme === 'dark'), [])

  const flip = () => {
    const next = dark ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setDark(!dark)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  const label = dark ? ui.theme.light : ui.theme.dark
  return (
    <button
      type="button"
      onClick={flip}
      aria-label={label}
      title={label}
      className={`flex items-center justify-center rounded-full bg-ink/[0.08] hover:bg-ink hover:text-card ${className}`}
    >
      {dark ? <Sun size={16} weight="bold" aria-hidden /> : <Moon size={16} weight="bold" aria-hidden />}
    </button>
  )
}
