import { useQuery } from '@tanstack/react-query'
import Blog from './Blog'
import BuildYourFitness from './BuildYourFitness'
import Neighbours from './Neighbours'
import Pinkeye from './Pinkeye'

export default function Projects() {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery(['languages'], async () => {
    const res = await fetch(`data/projects.json`)
    return res.json()
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred</div>

  return (
    <>
      <h1 className=" font-extrabold text-4xl mb-2">My Recent Projects</h1>
      <ul>
        {projects.map((project) => (
          <div>
            <h1>{project.name}</h1>
            <h2>{project.languages_used}</h2>
            <video
              src={project.video}
              autoPlay={false}
              controls
              className="md:w-56 pb-2 md:pb-0"
            ></video>
            <p>{project.description}</p>
            <p>Project link:</p>
            <a href={project.link} target="_blank"></a>
          </div>
        ))}
      </ul>
      <Neighbours />
      <Pinkeye />
      <BuildYourFitness />
      <Blog />
    </>
  )
}
