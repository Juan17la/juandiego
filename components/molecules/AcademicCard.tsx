import type { AcademicItem } from '@/lib/data'
import Chip from '../atoms/Chip'
import Stamp from '../atoms/Stamp'
import Certificate from './Certificate'

export default function AcademicCard({ a }: { a: AcademicItem }) {
  return (
    <li className="rounded-3xl bg-ink/[0.05] p-5">
      <h3 className="text-xl font-extrabold leading-tight">{a.title}</h3>
      <p className="num mt-1 text-xs text-ink-soft">
        {a.org}
        {a.placeholder ? (
          <span className="ml-2">
            <Stamp />
          </span>
        ) : null}
      </p>
      <p className="mt-3 leading-relaxed">{a.detail}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {a.facts.map((f) => (
          <li key={f}>
            <Chip>{f}</Chip>
          </li>
        ))}
      </ul>
      <Certificate src={a.certificate} title={a.title} url={a.credentialUrl} />
    </li>
  )
}
