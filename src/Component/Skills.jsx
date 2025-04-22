import React, { useState } from 'react';
import { FaCode, FaCertificate, FaPython, FaReact, FaServer, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiHackerrank, SiUdemy } from 'react-icons/si';

const Skills = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const technicalSkills = [
    { name: 'Problem Solving', level: 90, icon: <FaCode className="text-blue-500" /> },
    { name: 'Python', level: 85, icon: <FaPython className="text-yellow-500" /> },
    { name: 'React.js', level: 88, icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', level: 82, icon: <FaServer className="text-green-500" /> },
  ];

  const certifications = [
    {
      title: 'HackerRank Problem Solving',
      platform: 'HackerRank',
      icon: <SiHackerrank className="text-green-500" />,
      description: 'Recognition of proficiency in solving algorithmic problems, data structures, and algorithms.',
      link: 'here'
    },
    {
      title: 'Python (Basic)',
      platform: 'HackerRank',
      icon: <SiHackerrank className="text-green-500" />,
      description: 'Recognition of proficiency in basic Python programming skills.',
      link: 'here'
    },
    {
      title: 'Web Development',
      platform: 'Udemy',
      icon: <SiUdemy className="text-red-500" />,
      description: 'Comprehensive web development courses covering modern technologies and best practices.',
      link: 'here'
    }
  ];

  const nextCert = () => {
    setCurrentCertIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCert = () => {
    setCurrentCertIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <article className="w-full bg-gray-900/30 backdrop-blur-sm rounded-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
      </div>

      {/* Technical Skills */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-white text-sm sm:text-base">{skill.name}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
          <FaCertificate className="text-blue-500 text-2xl sm:text-3xl" />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h3>
        <div className="relative px-2 sm:px-4">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCertIndex * 100}%)` }}
            >
          {certifications.map((cert, index) => (
            <div
              key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:from-gray-800/70 hover:to-gray-900/70 transition-all duration-300 border border-gray-700/30 shadow-lg overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-inner group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                          <div className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {cert.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-xl mb-1 tracking-wide group-hover:text-blue-300 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-blue-400/80 font-medium">
                            {cert.platform}
                          </p>
                </div>
              </div>
                      <p className="text-gray-300/90 text-sm mb-4 leading-relaxed tracking-wide">
                        {cert.description}
                      </p>
              <a
                href={cert.link}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 group/link"
              >
                View Certificate
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
            </div>
          ))}
        </div>
      </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCert}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800/90 to-gray-900/90 hover:from-gray-700/90 hover:to-gray-800/90 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-gray-700/30"
            aria-label="Previous certification"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextCert}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-800/90 to-gray-900/90 hover:from-gray-700/90 hover:to-gray-800/90 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 border border-gray-700/30"
            aria-label="Next certification"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {certifications.map((_, index) => (
              <button
              key={index}
                onClick={() => setCurrentCertIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentCertIndex === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg shadow-blue-500/20' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
            </div>
        </div>
      </div>
    </article>
  );
};

export default Skills; 