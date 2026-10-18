import TechChip from '../atoms/TechChip'

export default function TechGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-ink/[0.05] p-5">
      <h3 className="text-base font-extrabold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {items.map((t) => (
          <li key={t}>
            <TechChip name={t} />
          </li>
        ))}
      </ul>
    </div>
  )
}
