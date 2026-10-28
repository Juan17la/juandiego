import { tech } from '@/lib/tech'

/** A technology as a brand-coloured chip with its logo. Unknown names fall back to a plain chip. */
export default function TechChip({ name, large = false }: { name: string; large?: boolean }) {
  const t = tech(name)
  const base = `inline-flex items-center gap-2 rounded-full font-semibold ${large ? 'px-4 py-2 text-base' : 'px-2.5 py-1 text-xs'}`
  if (!t) return <span className={`${base} num bg-ink/[0.08] font-normal`}>{name}</span>
  const fg = 'var(--color-ink)'
  const size = large ? 22 : 15
  return (
    <span className={base} style={{ background: `color-mix(in srgb, #${t.hex} 38%, var(--color-card))`, color: fg }}>
      {t.path ? (
        <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} fill={fg} className="shrink-0">
          <path d={t.path} />
        </svg>
      ) : (
        <span aria-hidden className="font-data font-bold leading-none" style={{ fontSize: size * 0.7 }}>
          {t.mono}
        </span>
      )}
      {name}
    </span>
  )
}
