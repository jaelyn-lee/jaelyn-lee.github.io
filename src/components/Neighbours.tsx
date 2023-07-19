export default function Neighbours() {
  return (
    <div className="bg-background opacity-80 rounded-md py-2 px-4 mb-2">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg">Neighbours</h1>
        <h1>
          &nbsp;/ TypeScript, React.js, React Query, SQLite, Tailwind [Group
          project]
        </h1>
      </div>
      <div className="flex py-2">
        <video
          src="public/videos/neighbours-demo.mp4"
          autoPlay={false}
          controls
          className=" w-80"
        ></video>
        <div className="pl-5">
          <p className="pb-2">
            This is a social app that can only be used within your neighborhood.
            Users can check the latest news, weather, activities, and
            marketplace. We used Auth0 to authenticate users and protect them
            from faulty users. I worked on front-end development and styling and
            implemented front-end functionality to display data from the
            database. I also created a UI component for duplicative components,
            such as buttons or posts, to prevent writing repetitive code.
            Through this project, I gained experience in agile methodology using
            a ticketing system and handling complex data structures.
          </p>
          <p className="pb-2">
            At present, the database is only connected to the classified
            section. However, efforts are underway to finalize the connection
            for activities and the market as well.
          </p>
          <div className="flex items-center">
            <p>Project link:</p>
            <a
              href="https://github.com/jaelyn-lee/Neighbours"
              className=" text-red-500 underline hover:text-yellow-400"
            >
              https://github.com/jaelyn-lee/Neighbours
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
