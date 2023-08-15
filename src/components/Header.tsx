import { FiMoon } from 'react-icons/Fi'
export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div>
          <a href={'/'}>
            <img src="/images/Logo.png" alt="My logo" className="w-20"></img>
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              About
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Projects
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Contacts
            </a>
          </div>
          <div>
            <button
              type="button"
              className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded"
            >
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </button>
          </div>
          <FiMoon />
        </div>
      </nav>
    </>
  )
}
