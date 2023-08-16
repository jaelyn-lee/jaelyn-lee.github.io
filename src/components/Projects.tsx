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
    <section className="flex flex-col items-center justify-center px-40">
      <h1 className="font-bold text-2xl">My Recent Projects</h1>
      <ul>
        {projects.map((project) => (
          <div>
            <div className="flex">
              <div className="flex-1 w-64">
                <h1>{project.project_type}</h1>
                <h1 className="font-semibold text-2xl text-darkGrey">
                  {project.name}
                </h1>
                <h2>({project.languages_used})</h2>
                <video
                  src={project.video}
                  autoPlay={false}
                  controls
                  className="md:w-56 pb-2 md:pb-0"
                ></video>
              </div>
              <p className="flex-1 w-96">{project.description}</p>
            </div>
            <p>Project link:</p>
            <a href={project.link} target="_blank"></a>
          </div>
        ))}
      </ul>
    </section>
  )
}
