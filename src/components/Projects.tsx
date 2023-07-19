import Blog from './Blog'
import BuildYourFitness from './BuildYourFitness'
import Neighbours from './Neighbours'
import Pinkeye from './Pinkeye'

export default function Projects() {
  return (
    <>
      <h1 className=" font-extrabold text-4xl mb-2">Projects</h1>
      <Neighbours />
      <Pinkeye />
      <BuildYourFitness />
      <Blog />
    </>
  )
}
