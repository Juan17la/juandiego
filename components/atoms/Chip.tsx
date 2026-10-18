import type { ReactNode } from 'react'

export default function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`num inline-flex items-center rounded-full bg-ink/[0.08] px-3 py-1 text-xs ${className}`}>{children}</span>
}
