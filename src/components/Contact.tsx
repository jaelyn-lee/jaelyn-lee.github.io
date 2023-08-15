import { SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si'

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center">
      <p className="pt-5 font-bold text-2xl pb-2">Contacts</p>
      <div className="flex">
        <a href="https://github.com/jaelyn-lee" target="_black">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jaelyn-lee-35989a1b2/"
          target="_black"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://discordapp.com/users/1087192391087300700"
          target="_black"
        >
          <SiDiscord />
        </a>
      </div>
    </section>
  )
}
