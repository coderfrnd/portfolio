import React from 'react'
import About from './About'
import Languages from './Languages'
import Projects from './Projects'
import Githubactivity from './Githubactivity'
import Achievement from './Achievement'
import Skills from './Skills'
import MobileContact from './MobileContact'
import Profile from './Profile'

const MobileSection = () => {
  return (
    <div className="w-full space-y-8">
      {/* Profile Section */}
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-gray-800/50">
        <Profile />
      </div>

      <section id="about" className="scroll-mt-20">
        <About/>
      </section>
      <Languages/>
      <Skills/>
      <section id="projects" className="scroll-mt-20">
        <Projects/>
      </section>
      <section id="github" className="scroll-mt-20">
        <Githubactivity/>
      </section>
      <Achievement/>
      <MobileContact />
    </div>
  )
}

export default MobileSection 