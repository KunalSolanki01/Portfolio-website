'use client'

import { Github, Linkedin, Mail, Phone, Download, Sparkles, Trophy, CloudIcon, FolderOpen, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import InteractiveCard from '@/components/interactive-card'
import TypingAnimation from '@/components/typing-animation'
import SkillCard from '@/components/skill-card'
import AchievementCard from '@/components/achievement-card'
import CloudSkills from '@/components/cloud-skills'
import LoadingScreen from '@/components/loading-screen'
import FloatingElements from '@/components/floating-elements'
import ScrollReveal from '@/components/scroll-reveal'
import ProjectCard from '@/components/project-card'
import ContactForm from '@/components/contact-form'
import { PERSONAL_INFO, SKILLS, ROLES, PROJECTS, ACHIEVEMENTS, ABOUT_CONTENT } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <FloatingElements />
      <Navbar />
      <main className="min-h-screen pt-24 p-4 md:p-8 relative">
        <div className="max-w-4xl mx-auto">

        <div className="grid gap-6 md:gap-8">
          <ScrollReveal delay={0.2}>
            <InteractiveCard id="hero" className="text-center">
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-36 h-36 mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-20 animate-pulse" />
                  <motion.div 
                    className="relative w-full h-full rounded-full border-4 border-white/40 dark:border-white/20 overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/images/Kunal.jpeg"
                      alt="Kunal Solanki"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 h-8">
                  <TypingAnimation texts={[...ROLES]} />
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Student at {PERSONAL_INFO.university}
                </p>
              </div>
            </InteractiveCard>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.4} direction="left">
              <InteractiveCard id="about">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  {ABOUT_CONTENT.intro}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    What Drives Me
                  </h3>
                  <div className="space-y-2">
                    {ABOUT_CONTENT.personality.map((trait, index) => (
                      <p key={index} className="text-gray-600 dark:text-gray-400 text-sm">
                        {trait}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_CONTENT.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CloudIcon className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">Cloud Platforms</span>
                  </div>
                  <CloudSkills />
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 italic">
                  {ABOUT_CONTENT.goals}
                </p>
                
                <button className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </InteractiveCard>
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="right">
              <InteractiveCard id="skills">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Skills</h2>
                <div className="grid gap-4">
                  {SKILLS.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  ))}
                </div>
              </InteractiveCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.8}>
            <InteractiveCard id="projects">
              <div className="flex items-center gap-3 mb-6">
                <FolderOpen className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                {PROJECTS.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tech={[...project.tech]}
                    status={project.status}
                    type={project.type}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    index={index}
                  />
                ))}
              </div>
            </InteractiveCard>
          </ScrollReveal>

          <ScrollReveal delay={1.0}>
            <InteractiveCard id="achievements">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Achievements & Certifications</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <AchievementCard
                    key={achievement.title}
                    title={achievement.title}
                    issuer={achievement.issuer}
                    date={achievement.date}
                    badgeUrl={achievement.badgeUrl}
                    credlyUrl={achievement.credlyUrl}
                    index={index}
                  />
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://www.credly.com/users/kunal-solanki1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Trophy className="w-4 h-4" />
                  View All Badges on Credly
                </a>
              </div>
            </InteractiveCard>
          </ScrollReveal>

          <ScrollReveal delay={1.2}>
            <InteractiveCard id="query">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                Have a project in mind or just want to say hello? I'd love to hear from you!
              </p>
              <ContactForm />
            </InteractiveCard>
          </ScrollReveal>

          <ScrollReveal delay={1.4}>
            <InteractiveCard id="contact">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-200/60 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 dark:hover:from-blue-500/20 dark:hover:to-purple-500/20 transition-all duration-300 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-105 shadow-sm dark:shadow-none"
                >
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  {PERSONAL_INFO.email}
                </a>
                
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-200/60 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-500/30 hover:to-blue-500/30 dark:hover:from-green-500/20 dark:hover:to-blue-500/20 transition-all duration-300 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-105 shadow-sm dark:shadow-none"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  {PERSONAL_INFO.phone}
                </a>
                
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-200/60 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-blue-400/30 dark:hover:from-blue-600/20 dark:hover:to-blue-400/20 transition-all duration-300 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-105 shadow-sm dark:shadow-none"
                >
                  <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                  LinkedIn
                </a>
                
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-200/60 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-gray-600/30 hover:to-gray-400/30 dark:hover:from-gray-600/20 dark:hover:to-gray-400/20 transition-all duration-300 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-105 shadow-sm dark:shadow-none"
                >
                  <Github className="w-5 h-5 group-hover:animate-pulse" />
                  GitHub
                </a>
              </div>
            </InteractiveCard>
          </ScrollReveal>
        </div>
        </div>
      </main>
    </>
  )
}