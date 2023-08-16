import AboutMe from './AboutMe.tsx'
import Header from './Header.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'

export default function App() {
  return (
      <div className="w-full h-full">
        <header className="my-3 lg:px-48">
          <Header />
        </header>
        <main className="h-auto pb-10">
          <AboutMe />
          <Projects />
          <Contact />
        </main>
      </div>
  )
}
