import React from 'react'
import About from './About'
import Languages from './Languages'
import Projects from './Projects'
import GitHubCalendar from 'react-github-calendar'
import Githubactivity from './Githubactivity'
const MiddleSection = () => {
    
  return (
  <>
   <div className=' w-[100%] overflow-y-auto text-center border-[1px] border-gray-500 rounded-[5px] shadow-md'>
       <About/>
       <Languages/>
       <Projects/>
     <Githubactivity/>
   </div>
  </>
  )
}

export default MiddleSection