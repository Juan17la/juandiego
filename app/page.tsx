import Rail from '@/components/Rail'
import { About, Academic, Beyond, Contact, Experience, Footer, Intro, Projects, Stack, Voices } from '@/components/Sections'

export default function Page() {
  return (
    <>
      <Rail />
      <div className="rail-offset lg:pr-6">
        <main className="mx-auto flex w-full max-w-[980px] flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-0 lg:pt-6 lg:pb-6">
          <Intro />
          <About />
          <Projects />
          <Stack />
          <Voices />
          <Academic />
          <Experience />
          <Beyond />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
