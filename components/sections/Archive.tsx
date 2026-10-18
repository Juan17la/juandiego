'use client'

import { useContent } from '@/lib/i18n'
import { lift, photoWidth } from '@/lib/styles'
import Gif from '../atoms/Gif'
import Photo from '../molecules/Photo'
import Split from '../molecules/Split'
import Terminal from '../organisms/Terminal'

export default function Archive() {
  const { archive, profile, ui } = useContent()
  return (
    <section id="archive" className={`on-card scroll-mt-16 lg:scroll-mt-6 rounded-[28px] bg-sage p-6 pb-10 text-ink sm:p-10 sm:pb-12 ${lift}`}>
      <Split id="archive" photo={<Photo src={profile.photos.online} alt="Juan Diego, then" hint="/photos/then.webp" caption={ui.captions.archive} tilt={2} className={`mx-auto md:mx-0 ${photoWidth}`} />}>
        <div className="mt-6 max-w-[56ch] space-y-4">
          <p className="text-xl font-semibold leading-snug">{archive.intro}</p>
          <p className="text-lg leading-relaxed">
            {archive.intro2} <Gif name="heart" size={26} className="align-middle" />
          </p>
        </div>
      </Split>
      <p className="mt-10 text-sm font-semibold">{ui.archivePrompt}</p>
      <Terminal />
      <p className="mt-8 text-sm font-medium">{archive.aside}</p>
    </section>
  )
}
