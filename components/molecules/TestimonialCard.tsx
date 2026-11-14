import type { Testimonial } from '@/lib/data'
import Stamp from '../atoms/Stamp'

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-ink/[0.05] p-6">
      <span aria-hidden className="font-hand text-4xl leading-none text-moss">“</span>
      <blockquote className="mt-1 mb-5 text-lg font-medium leading-snug">{t.quote}</blockquote>
      <figcaption className="mt-auto border-t border-ink/10 pt-4">
        <p className="text-xl font-extrabold leading-tight">
          {t.name}
          {t.placeholder ? (
            <span className="ml-2 align-middle">
              <Stamp />
            </span>
          ) : null}
        </p>
        <p className="mt-1 font-semibold text-moss">{t.role}</p>
        {t.work ? <p className="mt-0.5 text-sm text-ink-soft">{t.work}</p> : null}
      </figcaption>
    </figure>
  )
}
