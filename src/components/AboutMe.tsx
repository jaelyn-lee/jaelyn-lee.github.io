export default function AboutMe() {
  return (
    <div>
      <div className="lg:flex lg:items-center py-5">
        <div className=" pr-5">
          <h1 className="font-extrabold text-4xl pb-2">About Me</h1>
          <p className="">
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
            <div className="flex justify-between w-2/5">
              <a href="https://github.com/jaelyn-lee">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
                  ></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jaelyn-lee-35989a1b2/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://discordapp.com/users/1087192391087300700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <img
          className="mx-auto w-auto md:w-48 lg:w-96"
          src="/images/jaelyn.jpeg"
          alt="smiling-Jaelyn-toward-friends"
        ></img>
      </div>
    </div>
  )
}
