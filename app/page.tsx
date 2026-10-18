import Footer from '@/components/organisms/Footer'
import Rail from '@/components/organisms/Rail'
import About from '@/components/sections/About'
import Academic from '@/components/sections/Academic'
import Archive from '@/components/sections/Archive'
import Contact from '@/components/sections/Contact'
import Experience from '@/components/sections/Experience'
import Intro from '@/components/sections/Intro'
import Projects from '@/components/sections/Projects'
import Techs from '@/components/sections/Techs'
import Voices from '@/components/sections/Voices'

export default function Page() {
  return (
    <>
      <Rail />
      <div className="rail-offset lg:pr-6">
        <main className="mx-auto flex w-full max-w-[980px] flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-0 lg:pt-6 lg:pb-6">
          <Intro />
          <About />
          <Projects />
          <Techs />
          <Voices />
          <Academic />
          <Experience />
          <Archive />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
