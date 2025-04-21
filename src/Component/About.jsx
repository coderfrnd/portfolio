import React from 'react'



const About = () => {
  return (
    <article className="w-full">
      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 space-y-8">
        {/* Introduction */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Abhishek Jaiswal
          </h1>
          <p className="text-gray-400 text-lg">@coderfrnd</p>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent">About Me</h2>
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
                
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-white font-medium">Software Engineer Intern</h4>
                    <p className="text-sm text-blue-400">MountBlue Technologies</p>
                    <p className="text-sm mt-1">Focused on building scalable web applications and maintaining clean, efficient code. Worked with modern JavaScript frameworks and best practices.</p>
                  </div>

                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-white font-medium">Web Development Intern</h4>
                    <p className="text-sm text-purple-400">CodeVirus Security</p>
                    <p className="text-sm mt-1">Developed and maintained responsive web applications using modern frameworks. Collaborated on UI/UX improvements and implemented new features.</p>
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
