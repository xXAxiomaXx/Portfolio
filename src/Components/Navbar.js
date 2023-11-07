import React from 'react'
import "./Navbar.css"
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <header className='z-50 fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center text-white h-14 shadow-gray-600 dark:shadow-gray-900 shadow-md'>
    <h2 className='cursor-default font-black text-2xl text-black dark:text-white'>EM DEV</h2>

    <nav id='navbar' className='text-base font-medium ml-1 flex items-center'>
      <a className='mr-10 duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white' href='#home'>Home</a>
      <a className='mr-10 duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white' href='#about'>About</a>
      <a className='mr-10 duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white' href='#skills'>Skills</a>
      <a className='mr-10 duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white inline items-center' href='projects'>Projects <i className='bx bx-link-external text-sm'></i></a>
      <DarkMode/>
    </nav>
    </header>
  )
}

export default Navbar