import type { ComponentType } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

type Props = { href: string; label: string; sub: string; Icon: ComponentType<{ size?: number; weight?: 'bold'; 'aria-hidden'?: boolean }> }

export default function ContactLink({ href, label, sub, Icon }: Props) {
  return (
    <a
      href={href}
      {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 hover:bg-hi hover:text-ink"
    >
      <Icon size={24} weight="bold" aria-hidden />
      <span className="min-w-0">
        <span className="block font-bold leading-tight">{label}</span>
        <span className="num block truncate text-xs opacity-80">{sub}</span>
      </span>
      <ArrowUpRight size={16} weight="bold" aria-hidden className="ml-auto shrink-0" />
    </a>
  )
}
