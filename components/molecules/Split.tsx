import type { ReactNode } from 'react'
import TrackHead from './TrackHead'

/** Title + text on the left, photo on the right starting at the title's top edge. */
export default function Split({ id, photo, children, tone = 'ink' }: { id: string; photo: ReactNode; children: ReactNode; tone?: 'ink' | 'card' }) {
  return (
    <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_220px]">
      <div>
        <TrackHead id={id} tone={tone} />
        {children}
      </div>
      {photo}
    </div>
  )
}
