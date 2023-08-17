import { SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si'

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center bg-purple pb-10 px-80">
      <p className="pt-5 font-bold text-3xl pb-5">Contacts</p>
      <div className="flex items-center justify-between">
        <a
          href="https://github.com/jaelyn-lee"
          target="_black"
          style={{ fontSize: '4rem', color: 'white', padding: '0 3rem 0 3rem' }}
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jaelyn-lee-35989a1b2/"
          target="_black"
          style={{ fontSize: '4rem', color: 'white', padding: '0 3rem 0 3rem' }}
        >
          <SiLinkedin />
        </a>
        <a
          href="https://discordapp.com/users/1087192391087300700"
          target="_black"
          style={{ fontSize: '4rem', color: 'white', padding: '0 3rem 0 3rem' }}
        >
          <SiDiscord />
        </a>
      </div>
    </section>
  )
}
