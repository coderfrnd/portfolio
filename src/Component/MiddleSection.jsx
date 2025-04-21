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
   <div className=' w-[100%] overflow-y-auto text-center border-[1px] border-gray-500 rounded-[5px] shadow-md'>
       <About/>
       <Languages/>
       <Skills/>
       <Projects/>
       <Githubactivity/>
       <Achievement/>
       <Contact/>
   </div>
  </>
  )
}

export default MiddleSection