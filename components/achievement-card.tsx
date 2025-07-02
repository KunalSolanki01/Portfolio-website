'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface AchievementCardProps {
  title: string
  issuer: string
  date: string
  badgeUrl: string
  credlyUrl: string
  index: number
}

export default function AchievementCard({ 
  title, 
  issuer, 
  date, 
  badgeUrl, 
  credlyUrl, 
  index 
}: AchievementCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-400/30 dark:border-gray-200/20 rounded-xl p-6 hover:border-blue-400/50 dark:hover:border-blue-300/30 transition-all duration-300 hover:scale-105 shadow-md dark:shadow-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-4 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center border-2 border-blue-200/30">
            <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {issuer}
        </p>
        
        <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
          {date}
        </p>
        
        <a
          href={credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-600 dark:text-blue-400 rounded-full text-sm transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          View Badge
        </a>
      </div>
    </motion.div>
  )
}