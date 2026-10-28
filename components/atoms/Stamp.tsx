'use client'

import { useContent } from '@/lib/i18n'

export default function Stamp() {
  const { ui } = useContent()
  return <span className="num rounded-full bg-label text-on-hi px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{ui.placeholder}</span>
}
