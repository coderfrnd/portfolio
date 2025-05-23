import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsDescArray } from './projectArray'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center"
    >
      {/* Image Container */}
      <div className="w-full h-[350px] mb-6 rounded-xl overflow-hidden shadow-lg">
        <img
          src={project.imge}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="w-full text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 
                     hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 
                     transition-all duration-300 group">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
          {project.name}
        </h2>
        <p className="text-gray-300 mb-6">
          {project.description}
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 cursor-pointer bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            View Code
          </a>
          <a 
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 cursor-pointer bg-green-600/80 hover:bg-green-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <FaExternalLinkAlt className="text-lg" />
            Live Demo
          </a>
        </div>
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
    <section className="py-5 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {/* <div className="flex items-center  gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text  font-bold text-transparent">About Me</h2>
          </div> */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-300">
            A showcase of my recent work
          </p>
        </div>

        {/* Carousel */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <AnimatePresence mode="wait">
            <ProjectCard 
              key={currentIndex}
              project={projectsDescArray[currentIndex]}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="p-2 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-gray-400">
              {currentIndex + 1} / {projectsDescArray.length}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
