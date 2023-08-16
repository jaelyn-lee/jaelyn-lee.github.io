import Skills from './Skills'

export default function AboutMe() {
  return (
    <div className="pt-28">
      <section className="flex flex-col items-center justify-center pb-28">
        <div className="text-center pb-5">
          <h1 className="text-4xl font-bold mb-1">
            I am Jaelyn, a Software Developer.
          </h1>
          <h2 className="text-2xl text-darkGrey">
            I love coding and help people out to blah blah blah
          </h2>
        </div>
        <img src="/images/jaelyn-2.png" alt="jaelyn" className="w-56" />
      </section>
      <section className="bg-purple flex flex-col items-center justify-center py-16 px-80 mb-10">
        <h1 className="text-2xl font-bold pb-5">
          Hi, I’m Jaelyn. Nice to meet you.
        </h1>
        <p className="text-center">
          After completing a web development course, I have been working on my
          personal projects and acquiring new tech skills. I am goal-oriented,
          naturally curious, and continuously striving to improve my skills. I
          challenge myself to demonstrate my grit. I am excited to continue
          growing in my career as a software developer and to take on new
          challenges along the way.
        </p>
        <Skills />
      </section>
    </div>
  )
}
