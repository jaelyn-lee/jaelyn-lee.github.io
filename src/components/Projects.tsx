import { useQuery } from '@tanstack/react-query'
import Blog from './Blog'
import BuildYourFitness from './BuildYourFitness'
import Neighbours from './Neighbours'
import Pinkeye from './Pinkeye'

interface Project {
  name: string
  languages_used: string
  project_type: string
  video: string
  description: string
  link: string
}
export default function Projects() {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery<Project[]>(['projects'], async () => {
    const res = await fetch(`data/projects.json`)
    return res.json()
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred</div>

  return (
    <section className="flex flex-col items-center justify-center px-80">
      <h1 className="font-bold text-3xl mb-10">My Recent Projects</h1>
      <ul className="">
        {projects.map((project) => (
          <div className="mb-10">
            <div className="flex flex-col">
              <div className="flex flex-col border-t-2 border-black border-solid">
                <h1 className="font-semibold text-2xl text-center mb-4 mt-4">
                  {project.name}
                </h1>
                <button
                  disabled
                  className="border-1 border-light bg-light text-darkGrey rounded-full py-1"
                >
                  {project.project_type}
                </button>
                <video
                  src={project.video}
                  autoPlay={false}
                  controls
                  className=""
                ></video>
                <h2 className="mt-4 mb-4 font-semibold">
                  ({project.languages_used})
                </h2>
              </div>
              <p className="text-lg">{project.description}</p>
            </div>
            <p className="mt-4">
              Project link:
              <a
                href={project.link}
                target="_blank"
                className="text-purple hover:text-red-400"
              >
                {project.link}
              </a>
            </p>
          </div>
        ))}
      </ul>
    </section>
  )
}
