import { useQuery } from '@tanstack/react-query'

interface Project {
  name: string
  languages_used: string
  project_type: string
  video?: string
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
    <section className="flex flex-col items-center justify-center lg:px-80 md:px-20 px-6">
      <h1 className="font-bold md:text-3xl sm:text-2xl text-xl mb-10">
        My Recent Projects
      </h1>
      <ul>
        {projects?.map((project) => (
          <div className="mb-10">
            <div className="flex flex-col">
              <div className="flex flex-col border-t-2 border-black border-solid">
                <h1 className="font-semibold md:text-2xl sm:text-xl text-center mb-4 mt-4">
                  {project.name}
                </h1>
                <button
                  disabled
                  className="border-1 border-light bg-light text-darkGrey rounded-full py-1 sm:text-base text-sm sm:font-normal font-light"
                >
                  {project.project_type}
                </button>
                {project.video ? (
                  <video src={project.video} autoPlay={false} controls></video>
                ) : (
                  <></>
                )}
                <h2 className="mt-4 mb-4 sm:font-semibold sm:text-base text-xs">
                  ({project.languages_used})
                </h2>
              </div>
              <p className="md:text-lg sm:text-base text-xs font-light text-justify">
                {project.description}
              </p>
            </div>
            <div className="sm:flex sm:items-center sm:justify-start sm:flex-row mt-4 sm:text-base text-xs">
              <p>Project link: {` `}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-purple hover:text-red-400"
              >
                {project.link}
              </a>
            </div>
          </div>
        ))}
      </ul>
    </section>
  )
}
