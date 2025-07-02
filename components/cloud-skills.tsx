'use client'

import { motion } from 'framer-motion'
import { Cloud, Server, Database, Shield } from 'lucide-react'

const CLOUD_PLATFORMS = [
  { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-orange-600' },
  { name: 'Azure', icon: Server, color: 'from-blue-400 to-blue-600' },
  { name: 'Google Cloud', icon: Database, color: 'from-green-400 to-green-600' },
  { name: 'Security', icon: Shield, color: 'from-red-400 to-red-600' }
]

export default function CloudSkills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {CLOUD_PLATFORMS.map((platform, index) => {
        const Icon = platform.icon
        return (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-gray-400/20 dark:border-gray-200/10 hover:border-gray-500/30 dark:hover:border-gray-300/20 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-medium">
              {platform.name}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}