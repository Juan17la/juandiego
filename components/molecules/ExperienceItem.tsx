import type { experienceItems } from '@/lib/data'
import Chip from '../atoms/Chip'

export default function ExperienceItem({ e }: { e: (typeof experienceItems)[number] }) {
  return (
    <li className="relative pb-7 last:pb-0">
      <span aria-hidden className="absolute -left-[33px] top-1.5 size-3 rounded-full border-2 border-card bg-moss" />
      <h3 className="text-xl font-extrabold leading-tight">
        {e.title} <span className="font-medium text-ink-soft">· {e.where}</span>
      </h3>
      <p className="mt-1 max-w-[62ch] leading-relaxed">{e.text}</p>
      <Chip className="mt-2">{e.when}</Chip>
    </li>
  )
}
