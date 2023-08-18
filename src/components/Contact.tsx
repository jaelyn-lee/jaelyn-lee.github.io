import { SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si'

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center bg-purple lg:px-80 px-10 md:hidden">
      <p className="pt-2 font-bold">Contacts</p>
      <div className="flex items-center justify-between">
        <a
          href="https://github.com/jaelyn-lee"
          target="_black"
          className="text-white text-xl sm:text-4xl p-3"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jaelyn-lee-35989a1b2/"
          target="_black"
          className="text-white text-xl sm:text-4xl p-3"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://discordapp.com/users/1087192391087300700"
          target="_black"
          className="text-white text-xl sm:text-4xl p-3"
        >
          <SiDiscord />
        </a>
      </div>
    </section>
  )
}
