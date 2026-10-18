'use client'

import { useContent } from '@/lib/i18n'
import { sheet } from '@/lib/styles'
import TrackHead from '../molecules/TrackHead'
import ProjectList from '../organisms/ProjectList'

export default function Projects() {
  const { projects } = useContent()
  return (
    <section id="projects" className={sheet}>
      <TrackHead id="projects" />
      <ProjectList projects={projects} />
    </section>
  )
}
