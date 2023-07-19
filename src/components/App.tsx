import AboutMe from './AboutMe.tsx'
import Header from './Header.tsx'
import Projects from './Projects.tsx'

export default function App() {
  return (
    <div>
      <header className="my-3 px-48">
        <Header />
      </header>
      <main className="bg-gradient-to-r from-turquoise via-lightPurple to-fadeOrange h-auto px-48 pb-10">
        <AboutMe />
        <Projects />
      </main>
    </div>
  )
}
