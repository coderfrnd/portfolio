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
  <>
   <div className='w-[100%] overflow-y-auto text-center border-[1px] border-gray-500 rounded-[5px] shadow-md'>
       <section id="about" className="pt-2 pb-2"><About/></section>
       <Languages/>
       <Skills/>
       <section id="projects" className="pt-20 pb-10"><Projects/></section>
       <section id="github" className="pt-20 pb-10"><Githubactivity/></section>
       <Achievement/>
       <section id="contact" className="pt-20 pb-10"><Contact/></section>
   </div>
  </>
  )
}

export default MiddleSection