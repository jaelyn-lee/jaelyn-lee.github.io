export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div>
          <a href={'/'}>
            <img
              src="blog/images/Logo.png"
              alt="My logo"
              className="w-20"
            ></img>
          </a>
        </div>
        <div>
          <button type="button" className="btn btn-outline-warning w-40">
            <a href="public/cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </nav>
    </>
  )
}
