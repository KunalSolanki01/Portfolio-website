'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Clock, Smartphone, Globe } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  status: 'completed' | 'coming-soon'
  type: 'ios' | 'web' | 'fullstack'
  githubUrl?: string
  liveUrl?: string
  index: number
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  status, 
  type, 
  githubUrl, 
  liveUrl, 
  index 
}: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const getTypeIcon = () => {
    switch (type) {
      case 'ios': return <Smartphone className="w-5 h-5 text-blue-500" />
      case 'web': return <Globe className="w-5 h-5 text-green-500" />
      case 'fullstack': return <Globe className="w-5 h-5 text-purple-500" />
    }
  }

  const getStatusBadge = () => {
    if (status === 'coming-soon') {
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full text-xs">
          <Clock className="w-3 h-3" />
          Coming Soon
        </div>
      )
    }
    return (
      <div className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs">
        Completed
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-gray-200/20 rounded-2xl p-6 hover:border-blue-400/50 dark:hover:border-blue-300/30 transition-all duration-500 hover:scale-105 shadow-lg dark:shadow-none hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {getTypeIcon()}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
          </div>
          {getStatusBadge()}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-200/60 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}