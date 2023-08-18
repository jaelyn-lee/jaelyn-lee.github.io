import { SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si'

export default function SideContacts() {
  return (
    <div className="hidden md:flex fixed flex-col top-[35%] left-0">
      <ul>
        <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
          Contacts
        </p>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            href="https://github.com/jaelyn-lee"
            target="_black"
            className="text-white text-xl sm:text-4xl p-3"
          >
            <SiGithub />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-600">
          <a
            href="https://www.linkedin.com/in/jaelyn-lee-35989a1b2/"
            target="_black"
            className="text-white text-xl sm:text-4xl p-3"
          >
            <SiLinkedin />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7289da]">
          <a
            href="https://discordapp.com/users/1087192391087300700"
            target="_black"
            className="text-white text-xl sm:text-4xl p-3"
          >
            <SiDiscord />
          </a>
        </li>
      </ul>
    </div>
  )
}
