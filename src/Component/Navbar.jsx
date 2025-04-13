import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl justify-between flex items-center mx-auto p-4 py-8">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white mr-8">
            Abhishek Jaiswal
          </span>
          <ul className="flex space-x-[150px] font-medium">
            <li>
              <a href="#" className="text-blue-700 dark:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
