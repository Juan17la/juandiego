'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type Lang } from './content'

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })

/** Language: saved choice first, then the device language. Renders English until mounted. */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, set] = useState<Lang>('en')

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem('lang')
    } catch {}
    set(saved === 'en' || saved === 'es' ? saved : navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    set(l)
    try {
      localStorage.setItem('lang', l)
    } catch {}
  }
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
export const useContent = () => content[useLang().lang]
