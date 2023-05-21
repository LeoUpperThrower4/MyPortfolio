import { Inter } from 'next/font/google'
import { motion, useDragControls } from 'framer-motion'
import { useRef } from 'react'

const interBold = Inter({ subsets: ['latin']})

const container = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}
  
const itemFromTop = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const itemFromLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

export function WorkExperienceModal() {  
  const ul = useRef(null)

  function handleDrag(_, info) {
    ul.current.scrollLeft -= info.delta.x
  }

  return (
      <motion.ul ref={ul} onPan={handleDrag} className="select-none overflow-x-auto flex gap-4 px-4 py-6 basis-1 h-full text-blue-100" variants={container} initial="hidden" animate="visible">
        <motion.li className="h-full w-2/3 rounded-3xl flex-shrink-0 snap-x p-8 bg-blue-400" viewport={{once: true}}>
          <motion.h1 className={`text-2xl text-center font-bold mb-4 ${interBold.className}`} variants={itemFromTop}>Software Developer Intern</motion.h1>
          <motion.h1 className={`text-xl font-medium ${interBold.className}`} variants={itemFromLeft}>Nelogica</motion.h1>
          <motion.span className='block mb-2' variants={itemFromLeft}>10/2022 - Present</motion.span>
          <motion.span className='block' variants={itemFromLeft}>Fiz isso isso e aquilo</motion.span>
        </motion.li>      
        <motion.li className="h-full w-2/3 rounded-3xl flex-shrink-0 snap-x p-8 bg-blue-400" viewport={{once: true}}>
          <motion.h1 className={`text-2xl text-center font-bold mb-4 ${interBold.className}`} variants={itemFromTop}>Software Developer Intern</motion.h1>
          <motion.h1 className={`text-xl font-medium ${interBold.className}`} variants={itemFromLeft}>Nelogica</motion.h1>
          <motion.span className='block mb-2' variants={itemFromLeft}>10/2022 - Present</motion.span>
          <motion.span className='block' variants={itemFromLeft}>Fiz isso isso e aquilo</motion.span>
        </motion.li>      
        <motion.li className="h-full w-2/3 rounded-3xl flex-shrink-0 snap-x p-8 bg-blue-400" viewport={{once: true}}>
          <motion.h1 className={`text-2xl text-center font-bold mb-4 ${interBold.className}`} variants={itemFromTop}>Software Developer Intern</motion.h1>
          <motion.h1 className={`text-xl font-medium ${interBold.className}`} variants={itemFromLeft}>Nelogica</motion.h1>
          <motion.span className='block mb-2' variants={itemFromLeft}>10/2022 - Present</motion.span>
          <motion.span className='block' variants={itemFromLeft}>Fiz isso isso e aquilo</motion.span>
        </motion.li>                      
      </motion.ul>
  )
}