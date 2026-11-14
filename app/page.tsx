import Dock from '@/components/organisms/Dock'
import Footer from '@/components/organisms/Footer'
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
      <main className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 pb-28 sm:px-6 lg:px-8">
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Techs />
        <Voices />
        <Academic />
        <Archive />
        <Contact />
        <Footer />
      </main>
      <Dock />
    </>
  )
}
