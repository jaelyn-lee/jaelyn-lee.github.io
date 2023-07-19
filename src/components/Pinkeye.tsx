export default function Pinkeye() {
  return (
    <div className="bg-background opacity-80 rounded-md p-2 mb-2">
      <div className="md:flex md:items-center">
        <h1 className=" font-semibold text-lg">Pinkeye Quiz Master</h1>
        <h1>&nbsp; / TypeScript, React.js, Redux, SQLite [Group project]</h1>
      </div>
      <div className="md:flex py-2">
        <video
          src="/videos/pinkeye-quiz-master-demo.mp4"
          autoPlay={false}
          controls
          className="md:w-56 pb-2 md:pb-0"
        ></video>
        <div className="pl-5">
          <p className="pb-2">
            This is a simple quiz app with an arcade theme and funny sound
            effects to interact with users. I worked on the front-end part,
            rendering the quiz to the page and defining the conditions for
            correct and incorrect answers. Through this project, I gained a
            clear understanding of the functionality related to the front end
            and the data retrieval of the back end.
          </p>
          <div className="flex items-center">
            <p>Project link:</p>
            <a
              href="https://github.com/jaelyn-lee/PinkeyeQuizmasters"
              className=" text-red-500 underline hover:text-yellow-400"
            >
              https://github.com/jaelyn-lee/PinkeyeQuizmasters
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}