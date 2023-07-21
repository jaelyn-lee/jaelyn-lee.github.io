export default function BuildYourFitness() {
  return (
    <div className="bg-background opacity-80 rounded-md p-2 mb-2">
      <div className="sm:flex sm:items-center">
        <h1 className=" font-semibold text-lg">Build your Fitness</h1>
        <h1>
          &nbsp; / TypeScript, React.js, Redux, SQLite [Personal projects]
        </h1>
      </div>
      <div className="sm:flex py-2">
        <img
          src="/images/build-your-fitness.png"
          alt="neighbours"
          className="sm:w-56 pb-2 md:pb-0"
        />
        <div className="pl-5 mb-2">
          <p className="pb-2">
            This app is currently under development. It is designed for users
            who want to start exercising but are not yet confident in planning
            their own workout routines. The app will generate a workout plan
            based on user-provided information such as fitness goals and
            preferences. Additionally, it will allow users to track changes in
            their weight over time.
          </p>
          <div className="flex items-center">
            <p>Figma link:</p>
            <a
              href="https://www.figma.com/file/9EtZVQj7f2OW3bV9EruC8S/Design-your-fitness?type=design&node-id=0%3A1&mode=design&t=6EJkFzNRnbo6Zlis-1"
              className=" text-red-500 underline hover:text-yellow-400"
            >
              click here to check the wireframe
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
