import React from 'react'
import About from './About'
import Languages from './Languages'
import Projects from './Projects'
import GitHubCalendar from 'react-github-calendar'
import Githubactivity from './Githubactivity'
import Achievement from './Achievement'
import Skills from './Skills'
import Contact from './Contact'

const MiddleSection = () => {
  return (
    <div className="space-y-8">
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
      <section id="contact" className="scroll-mt-20">
        <Contact/>
      </section>
    </div>
  )
}

export default MiddleSection