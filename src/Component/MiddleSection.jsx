
import React from 'react'
import About from './About'
import Languages from './Languages'
import Projects from './Projects'
const MiddleSection = () => {
    
  return (
  <>
   <div className=' w-[100%] overflow-y-auto text-center border-[1px] border-gray-500 rounded-[5px] shadow-md'>
       <About/>
       <Languages/>
       <Projects/>
   </div>
  </>
  )
}

export default MiddleSection