import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaCode } from 'react-icons/fa';
import { SiCodeforces, SiGoogle } from 'react-icons/si';

const Achievement = () => {
  const achievements = [
    {
      title: "Humanity Founder Organization Hackathon",
      description: "Developed a comprehensive Hospital Management Dashboard within 24 hours, showcasing rapid prototyping and problem-solving skills. The project focused on streamlining hospital operations and improving patient care management.",
      achievement: "First Place 🏆",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      link: "here"
    },
    {
      title: "Google Codejam Final Farewell Round 2023",
      description: "Google Code Jam is an annual programming competition organized by Google. It is a global coding competition that challenges participants to solve complex algorithmic problems within a limited timeframe.",
      achievement: "Secured 3829th rank out of 30k+ participants",
      icon: <SiGoogle className="text-blue-500 text-3xl" />,
      link: "here"
    },
    {
      title: "Google Kickstart Round F 2022",
      description: "Google Kick Start is a global coding competition organized by Google. It is designed to provide coders with an opportunity to showcase their problem-solving skills and compete against other programmers from around the world.",
      achievement: "Secured 5402nd rank out of 30k+ participants",
      icon: <SiGoogle className="text-blue-500 text-3xl" />,
      link: "here"
    },
    {
      title: "Codeforces",
      description: "Active competitive programmer with consistent participation in Div. 2 and Div. 3 contests. Achieved Pupil rank with a peak rating of 1224, and also solved more than 500 plus problem on codeforces  demonstrating strong problem-solving abilities in algorithmic challenges.",
      achievement: "Pupil 🟢-max(1224)",
      icon: <SiCodeforces className="text-blue-500 text-3xl" />,
      link: "https://codeforces.com/profile/Attacker_frnd"
    }
  ];

  return (
    <article className="w-full bg-gray-900/30 backdrop-blur-sm rounded-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {achievements.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 
                     hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 
                     transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-gray-700/50 group-hover:bg-gray-700/70 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
            
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm leading-relaxed">
              {item.description}
            </p>
            
            <div className="flex justify-between items-center">
              <p className="font-medium text-emerald-400 text-sm sm:text-base">
                {item.achievement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Achievement;