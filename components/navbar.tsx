'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, User, Award, Mail, Menu, X } from 'lucide-react'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'query', label: 'Get in Touch', icon: Mail },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/75 dark:bg-gray-900/75 backdrop-blur-xl shadow-2xl border-b border-white/30 dark:border-gray-700/40' 
          : 'bg-white/15 dark:bg-gray-900/15 backdrop-blur-lg'
      }`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-lg text-gray-800 dark:text-white">
              Kunal Solanki
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-gray-700/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </motion.button>
              )
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}