import React from 'react'



const About = () => {
  return (
    <article className="w-full">
      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 space-y-8">
        {/* Introduction */}
        {/* <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Abhishek Jaiswal
          </h1>
          <p className="text-gray-400 text-lg">@coderfrnd</p>
        </div> */}

        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center  gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text  font-bold text-transparent">About Me</h2>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              A passionate Software Engineer with a solid foundation in Electronics and Instrumentation 
              and hands-on experience in full-stack web development.
            </p>
            
            <div className="grid grid-cols-1 gap-4 pt-2">
              <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-2">Technical Expertise</h3>
                <p>Specialized in React.js, Node.js, and JavaScript, building scalable and performance web applications.</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm space-y-4">
                <h3 className="text-white font-semibold">Professional Experience</h3>
                
                <div className="relative cursor-pointer">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-purple-500 to-purple-600"></div>
                  
                  {/* Experience items */}
                  <div className="space-y-8 pl-6">
                    {/* Current Role */}
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-500/20"></div>
                      
                      <div className="bg-gray-700/30 rounded-lg p-4 backdrop-blur-sm border border-gray-600/30 
                                    hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 
                                    transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h4 className="text-white font-medium text-lg">Full Stack Developer</h4>
                          <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">April 18, 2025 - Present</span>
                        </div>
                        <p className="text-green-400 font-medium">Humanity Founder</p>
                        <p className="text-gray-300 mt-2 text-sm">Working on cutting-edge projects and contributing to innovative solutions.</p>
                      </div>
                    </div>
                    
                    {/* MountBlue */}
                    <div className="relative cursor-pointer">
                      {/* Timeline dot */}
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20"></div>
                      
                      <div className="bg-gray-700/30 rounded-lg p-4 backdrop-blur-sm border border-gray-600/30 
                                    hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 
                                    transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h4 className="text-white font-medium text-lg">Software Engineer Intern</h4>
                          <span className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">December 2024 - April 6, 2025</span>
                        </div>
                        <p className="text-purple-400 font-medium">MountBlue Technologies</p>
                        <p className="text-gray-300 mt-2 text-sm">Focused on building scalable web applications and maintaining clean, efficient code. Worked with modern JavaScript frameworks and best practices.</p>
                      </div>
                    </div>
                    
                    {/* CodeVirus */}
                    <div className="relative cursor-pointer">
                      {/* Timeline dot */}
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20"></div>
                      
                      <div className="bg-gray-700/30 rounded-lg p-4 backdrop-blur-sm border border-gray-600/30 
                                    hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 
                                    transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h4 className="text-white font-medium text-lg">Web Development Intern</h4>
                          <span className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">August 2023 - February 2024</span>
                        </div>
                        <p className="text-purple-400 font-medium">CodeVirus Security</p>
                        <p className="text-gray-300 mt-2 text-sm">Developed and maintained responsive web applications using modern frameworks. Collaborated on UI/UX improvements and implemented new features.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </article>
  )
}



export default About
