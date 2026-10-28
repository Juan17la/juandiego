import type { ExperienceItem as Item } from '@/lib/data'
import Chip from '../atoms/Chip'

export default function ExperienceItem({ e }: { e: Item }) {
  return (
    <li className="relative pb-9 last:pb-0">
      <span aria-hidden className="absolute -left-[33px] top-1.5 size-3 rounded-full border-2 border-card bg-moss" />
      <h3 className="text-xl font-extrabold leading-tight">
        {e.title} <span className="font-medium text-ink-soft">· {e.where}</span>
      </h3>
      <Chip className="mt-2">{e.when}</Chip>
      <p className="mt-2 max-w-[62ch] leading-relaxed">{e.text}</p>
      {e.work.length ? (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {e.work.map((w) => (
            <li key={w.name} className="rounded-2xl bg-ink/[0.05] p-4">
              <p className="font-bold leading-tight">{w.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}
