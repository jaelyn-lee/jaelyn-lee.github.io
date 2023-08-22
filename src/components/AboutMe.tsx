import Skills from './Skills'
import TextAnimation from './TextAnimation'

export default function AboutMe() {
  return (
    <div className="pt-28">
      <section className="flex flex-col items-center justify-center pb-28">
        <div className="text-center pb-10 md:px-20">
          <TextAnimation />
          {/* <h1 className="md:text-4xl text-2xl font-bold mb-1">
            Software Developer / Full Stack Developer
          </h1> */}
          <h2 className="md:text-2xl text-darkGrey font-light">
            loves coding and collaborating with people to create fun and helpful
            apps for the future.
          </h2>
        </div>
        <img src="/images/jaelyn-2.png" alt="jaelyn" className="w-64" />
      </section>
      <section className="bg-purple flex flex-col items-center justify-center py-16 lg:px-80 md:px-20 px-6 mb-10 ">
        <h1 className="sm:text-2xl text-xl sm:font-bold font-semibold pb-5">
          Hi, I’m Jaelyn. Nice to meet you.
        </h1>
        <p className="text-justify md:text-xl text-sm font-light">
          After completing a web development course, I have been working on my
          personal projects and acquiring new tech skills. I am goal-oriented,
          naturally curious, and continuously striving to improve my skills. I
          challenge myself to demonstrate my grit. I am excited to continue
          growing in my career as a software developer and to take on new
          challenges along the way.
        </p>
        <p className="text-justify md:text-xl text-sm mt-2 font-light">
          In my free time, I enjoy staying active and exploring new fitness
          challenges, such as trying out new yoga poses or walking on different
          trails. I also love to read and learn, whether it's about a new
          technology or a different culture. I am excited to continue growing in
          my career as a software developer and to take on new challenges along
          the way.{' '}
        </p>
        <Skills />
      </section>
    </div>
  )
}
