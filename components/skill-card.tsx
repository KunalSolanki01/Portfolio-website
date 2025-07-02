'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillCardProps {
  skill: string
  level: number
  index: number
}

export default function SkillCard({ skill, level, index }: SkillCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gray-400/30 dark:border-gray-200/20 shadow-sm dark:shadow-none"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200/30 dark:bg-gray-700/30 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  )
}