import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Wrapper {
  children: ReactNode
}
interface Text {
  text: string
}

const Wrapper = (props: Wrapper) => {
  return <span>{props.children}</span>
}

const AnimatedText = (props: Text) => {
  const item = {
    hidden: {
      y: '200%',
      opacity: 0,
      color: '#ffffff',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
			opacity: '1',
      color: '#000000',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }

  const splitWords = props.text.split(' ')

  const words: any[][] = []

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''))
  }

  words.map((word) => {
    return word.push('\u00A0')
  })

  return (
    <div>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  className="overflow-hidden inline-block md:text-4xl text-2xl font-bold mb-1"
                  key={index}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              )
            })}
          </Wrapper>
        )
      })}
      {/* {} */}
    </div>
  )
}

export default AnimatedText
