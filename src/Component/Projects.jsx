import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsDescArray } from './projectArray'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full flex flex-col md:flex-row gap-8 items-center"
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 h-[400px] relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
        <img
          src={project.imge}
          alt={project.name}
          className="w-full h-full object-contain rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          {project.name}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 leading-relaxed"
        >
          {project.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-all duration-300 flex items-center gap-2">
            <FaGithub className="text-lg" />
            View Code
          </button>
          <button className="px-6 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 rounded-lg transition-all duration-300 flex items-center gap-2">
            <FaExternalLinkAlt className="text-lg" />
            Live Demo
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsDescArray.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsDescArray.length - 1 : prevIndex - 1
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            <ProjectCard 
              key={currentIndex}
              project={projectsDescArray[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Counter */}
          <div className="absolute top-8 right-8 text-sm text-gray-400">
            {currentIndex + 1} / {projectsDescArray.length}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
