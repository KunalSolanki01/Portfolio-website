'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function InteractiveCard({ children, className = '', id }: InteractiveCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      id={id}
      className={`relative overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-gray-200/20 rounded-xl p-6 transition-all duration-300 shadow-lg dark:shadow-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl" />
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}