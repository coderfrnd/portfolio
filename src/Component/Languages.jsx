import React from 'react'
import python from '../../Assets/python.png'
import javascript from '../../Assets/js.png'
import programming from '../../Assets/programming.png'
import cpp from '../../Assets/cpp.png'
import sql from '../../Assets/mysql.png'
import node from '../../Assets/nodejs.png'
import linux from '../../Assets/linux.png'
import html from '../../Assets/html.png'
import react from '../../Assets/react.png'
import github from '../../Assets/github.png'
import express from '../../Assets/express.png'
const Languages = () => {
    let arrayOfLanguages = [javascript,react,programming,python,cpp,html,sql,node,express,linux,github]
  return (
   <>
      <article className="px-4 max-w-3xl mx-auto">
      <h4 className="text-2xl py-2 text-left">Languages and Tools</h4>
      <div className='flex space-x-4 py-2'>
      {
        arrayOfLanguages.map((ele)=>{
            return <LangugeImage props={ele} />
        })
       }
      </div>
      <hr className="border-t border-gray-500 my-4 w-[100%] mx-auto" />
      </article>
   </>
  )
}

export default Languages


function LangugeImage({props}){
  return  <div className='h-[36px] w-[36px]'> <img src={props} alt="" /></div>
}