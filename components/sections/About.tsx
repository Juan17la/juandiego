'use client'

import { useContent } from '@/lib/i18n'
import { photoWidth, sheet } from '@/lib/styles'
import Photo from '../molecules/Photo'
import Split from '../molecules/Split'

export default function About() {
  const { aboutParagraphs, profile, ui } = useContent()
  return (
    <section id="about" className={sheet}>
      <Split id="about" photo={<Photo src={profile.photos.about} alt="Juan Diego" hint="/photos/about.webp" caption={ui.captions.about} tilt={-2} className={`mx-auto md:mx-0 ${photoWidth}`} />}>
        <div className="mt-6 max-w-[68ch] space-y-4 text-lg leading-relaxed">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Split>
    </section>
  )
}
