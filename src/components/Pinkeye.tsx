export default function Pinkeye() {
  return (
    <div className="bg-background opacity-80 rounded-md p-2 mb-2">
      <div className="flex items-center">
        <h1 className=" font-semibold text-lg">Pinkeye Quiz Master</h1>
        <h1>&nbsp; / TypeScript, React.js, Redux, SQLite [Group project]</h1>
      </div>
      <div className="flex py-2">
        <video
          src="/public/videos/pinkeye-demo.mp4"
          autoPlay={false}
          controls
          className="w-80"
        ></video>
        <div className="pl-5">
          <p>
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
