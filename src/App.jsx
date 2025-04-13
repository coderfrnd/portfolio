import React from 'react'
import MiddleSection from './Component/MiddleSection'
import Navbar from './Component/Navbar'
import Profile from './Component/Profile'

const App = () => {
  return (
    <>
      <div className="h-screen bg-black text-white relative">
        <Navbar />
        <div className='flex justify-center'>
        <div
          className="flex justify-center  pt-[80px] w-[67%] "
          style={{ height: 'calc(100vh - 10px)' }}
        >
          <div className='w-[30%] mt-[50px]'>
          <Profile />
          </div>
          <div className="w-[70%] scrollable-box  overflow-y-auto mt-[50px]">
            <MiddleSection />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
