export default function AboutMe() {
  return (
    <div>
      <div className="flex items-center py-5">
        <div className=" pr-5">
          <h1 className="font-extrabold text-4xl pb-2">About Me</h1>
          <p className=" text-red-400">
            Hey there! 👋🏻 <br className="pt-2"></br> I am Jaelyn, a software
            developer with strong problem-solving skills. I am a calm and
            persevering individual who always sees tasks through to completion.
            <br></br>I am excited to continue growing in my career as a software
            developer and to take on new challenges along the way.
          </p>
          <p className="pt-5 font-bold text-2xl pb-2">skills</p>
          <div className="flex">
            <div className="mr-8">
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>SQLite (with Knex)</li>
            </div>
            <div>
              <li>REST APIs</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Vitest</li>
              <li>React Query</li>
            </div>
          </div>
          <div>
            <p className="pt-5 font-bold text-2xl pb-2">Contacts</p>
            {/* <div className="flex items-center">
              <a href="https://github.com/jaelyn-lee">
                <Icon icon="mdi:github" size={40} color="black" className="mr-5" />
              </a>
              <a href="https://www.linkedin.com/in/jaelyn-lee-35989a1b2/">
                <FaLinkedin size={40} color="black" className="mr-5" />
              </a>
              <a href="#">
                <FaDiscord size={40} color="black" className="mr-5" />
              </a>
            </div> */}
          </div>
        </div>
        <img
          className="mx-auto w-96"
          src="public/images/jaelyn.jpeg"
          alt="smiling-Jaelyn-toward-friends"
        ></img>
      </div>
    </div>
  )
}
