import React from 'react'
import python from '/Assets/python.png'
import javascript from '/Assets/js.png'
import programming from '/Assets/programming.png'
import cpp from '/Assets/cpp.png'
import sql from '/Assets/mysql.png'
import node from '/Assets/nodejs.png'
import linux from '/Assets/linux.png'
import html from '/Assets/html.png'
import react from '/Assets/react.png'
import github from '/Assets/github.png'
import express from '/Assets/express.png'

const Languages = () => {
    const technologies = {
      "Programming Languages": [
        { id: 'js', img: javascript, name: 'JavaScript' },
        { id: 'python', img: python, name: 'Python' },
        { id: 'cpp', img: cpp, name: 'C++' }
      ],
      "Web Technologies": [
        { id: 'html', img: html, name: 'HTML/CSS' },
        { id: 'react', img: react, name: 'React.js' },
        { id: 'node', img: node, name: 'Node.js' },
        { id: 'express', img: express, name: 'Express.js' }
      ],
      "Tools & Platforms": [
        { id: 'github', img: github, name: 'GitHub' },
        { id: 'linux', img: linux, name: 'Linux' },
        { id: 'sql', img: sql, name: 'MySQL' },
        { id: 'prog', img: programming, name: 'Programming' }
      ]
    }

    return (
      <article className="w-full bg-gray-900/30 backdrop-blur-sm rounded-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Languages & Tools</h2>
        </div>

        <div className="space-y-8">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {items.map((tech) => (
                  <LanguageImage key={tech.id} {...tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    )
}

function LanguageImage({ img, name }) {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="h-[50px] w-[50px] rounded-lg bg-gray-800/50 p-2 backdrop-blur-sm 
                    hover:scale-110 transition-all duration-300 ease-in-out
                    hover:bg-gray-700/50 hover:shadow-lg hover:shadow-blue-500/20">
        <img src={img} alt={`${name} icon`} className="w-full h-full object-contain" />
      </div>
      <span className="absolute -bottom-6 scale-0 transition-all duration-300 group-hover:scale-100
                     text-sm text-gray-300 bg-gray-800/90 px-2 py-1 rounded-md">
        {name}
      </span>
    </div>
  )
}

export default Languages