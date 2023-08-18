export default function Header() {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <a href={'/'}>
          <img src="/images/Logo.png" alt="My logo" className="w-20"></img>
        </a>
      </div>
      <div className="flex items-center justify-between">
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
      </div>
    </nav>
  )
}
