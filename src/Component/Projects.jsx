import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsDescArray } from './ProjectArray'


const Projects = () => {
  
  return (
    <article className="px-4 max-w-3xl mx-auto pb-4">
      <h4 className="text-2xl py-2 text-left">Projects</h4>
      <ScrollBackground projectsDescArray={projectsDescArray} />
    </article>
  )
}

export default Projects

function ScrollBackground({ projectsDescArray }) {
  const containerRef = useRef(null)

  const { scrollXProgress } = useScroll({
    container: containerRef,
  })



  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll overflow-y-hidden rounded-xl no-scrollbar border border-gray-500 cursor-pointer shadow-md"
      style={{
        height: '480px',
        width: '100%',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          width: `${projectsDescArray.length * 720}px`,
          height: '100%',
        }}
      >
       {projectsDescArray.map((ele, idx) => (
      <div
    key={idx}
    className="w-[720px] h-[100%] flex flex-col bg-black m-2 rounded-lg shadow-lg overflow-hidden"
  >
    <div className="w-full h-[350px] p-2">
      <img
        src={ele.imge}
        alt="project screenshot"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <span className=" text-left text-xl font-semibold text-white p-2">
      {ele.name}
    </span>
    <p className='text-[16px] text-teal-300' >{ele.description}</p>
  </div>
))}

      </motion.div>
    </div>
  )
}
