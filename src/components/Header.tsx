export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div>
          <a href={'/'}>
            <img src="/images/Logo.png" alt="My logo" className="w-20"></img>
          </a>
        </div>
        <div>
          <button
            type="button"
            className="bg-transparent hover:bg-lightPurple text-lightPurple font-semibold hover:text-white py-2 px-4 border border-lightPurple hover:border-transparent rounded"
          >
            <a href="public/cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </nav>
    </>
  )
}
