import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`bg-glass-gradient dark:bg-glass-gradient-dark backdrop-blur-sm border border-blue-200/20 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}