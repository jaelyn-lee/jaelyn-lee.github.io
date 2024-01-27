import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

export default function TextAnimation() {
  const placeholderText = [{ text: 'Software Engineer / Full Stack Developer' }]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <div>
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />
        })}
      </div>
    </motion.div>
  )
}
