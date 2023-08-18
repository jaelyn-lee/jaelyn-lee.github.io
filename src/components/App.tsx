import AboutMe from './AboutMe.tsx'
import Header from './Header.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'
import SideContacts from './SideContacts.tsx'

export default function App() {
  return (
    <div className="w-full h-full font-mono">
      <header className="my-3 lg:px-48 sm:px-2 px-2 md:px-20">
        <Header />
      </header>
      <main className="h-auto">
        <AboutMe />
        <Projects />
        <Contact />
        <SideContacts />
      </main>
    </div>
  )
}
