import type { Testimonial } from '@/lib/data'
import Stamp from '../atoms/Stamp'

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full min-h-[240px] flex-col rounded-3xl bg-ink/[0.05] p-6">
      <blockquote className="text-lg font-medium leading-snug">
        <span aria-hidden className="font-hand text-4xl leading-none text-moss">“</span>
        {t.quote}
      </blockquote>
      <figcaption className="mt-auto pt-5 text-sm">
        <span className="font-bold">{t.name}</span>
        <span className="text-ink-soft">
          {' '}
          · {t.role}
          {t.work ? `, ${t.work}` : ''}
        </span>
        {t.placeholder ? (
          <span className="ml-2 align-middle">
            <Stamp />
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}
