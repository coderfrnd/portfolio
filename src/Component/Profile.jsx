import React from 'react'
import profileImg from '../../Assets/img3.jpg'
const Profile = () => {
  return (
    <div className="pt-2 flex items-center flex-col">
      <div className='rounded-full overflow-hidden w-82 h-82'>
      <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <span className='text-2xl p-3 font-bold'>Abhishek Jaiswal</span>
      <p className='p-1'>A passionate Software Developer</p>
  </div>  
  )
}

export default Profile