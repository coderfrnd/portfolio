import React, { useState, useEffect } from 'react'
import MiddleSection from './Component/MiddleSection'
import MobileSection from './Component/MobileSection'
import Profile from './Component/Profile'
import Navbar from './Component/Navbar'

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <Navbar />
      <div className="h-full max-w-6xl mx-auto px-4 pt-16">
        {isMobile ? (
          <div className="h-full overflow-y-auto">
            <MobileSection />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 h-full">
            {/* Profile Section */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-gray-800/50">
                <Profile />
              </div>
            </div>
            
            {/* Main Content Section */}
            <div className="w-full lg:w-2/3 h-full">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-gray-800/50 h-full scrollable-box overflow-y-auto">
                <MiddleSection />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
