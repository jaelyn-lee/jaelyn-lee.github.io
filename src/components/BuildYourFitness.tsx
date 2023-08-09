export default function BuildYourFitness() {
  return (
    <div className="bg-background opacity-80 rounded-md p-2 mb-2">
      <div className="sm:flex sm:items-center">
        <h1 className=" font-semibold text-lg">Design your Fitness</h1>
        <h1>
          &nbsp; / TypeScript, React.js, React Query, SQLite, Tailwind [Personal projects]
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
            This is a personal project that utilizes React to create a
            full-stack app. It's designed to help users who want to start
            exercising, but may not be confident in planning their own workout
            routines. The app generates a personalized workout plan based on
            user-provided information such as fitness goals and preferences,
            while also allowing them to track changes in their weight over time.
          </p>
          <div className="flex items-center">
            <p>Project link: </p>
            <a
              href="https://github.com/jaelyn-lee/Build-your-fitness"
              className=" text-red-500 underline hover:text-yellow-400"
            >
              https://github.com/jaelyn-lee/Build-your-fitness
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
