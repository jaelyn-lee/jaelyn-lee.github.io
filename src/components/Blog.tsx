export default function Blog() {
  return (
    <div className="bg-background opacity-80 rounded-md p-2">
      <div className="md:flex md:items-center">
        <h1 className=" font-semibold text-lg">Jaelyn's blog</h1>
        <h1>&nbsp; / HTML, CSS, Bootstrap [Personal projects]</h1>
      </div>
      <div className="md:flex py-2">
        <img
          src="/images/blog.png"
          alt="neighbours"
          className="md:w-56 pb-2 md:pb-0"
        />
        <div className="pl-5 mb-2">
          <p className="pb-2">
            This is a static website that I built using the foundation from Dev
            Academy. I primarily used HTML, CSS, and Bootstrap to develop this
            app. I enjoyed building it and am pleased to share how much my
            coding skills have improved from then to now.
          </p>
          <div className="flex items-center">
            <p>Project link:</p>
            <a
              href="https://www.figma.com/file/9EtZVQj7f2OW3bV9EruC8S/Design-your-fitness?type=design&node-id=0%3A1&mode=design&t=6EJkFzNRnbo6Zlis-1"
              className=" text-red-500 underline hover:text-yellow-400"
            >
              https://github.com/jaelyn-lee/jaelyn-lee.github.io2
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
