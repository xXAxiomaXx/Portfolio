import React from 'react'
import "./Navbar.css"
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <header className='z-50 fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center text-white h-14 shadow-gray-600 dark:shadow-gray-900 shadow-md'>
    <h2 className='cursor-default font-black text-2xl text-black dark:text-white text-nowrap'>EM DEV</h2>

    <nav id='navbar' className='sm:text-base text-sm grid-cols-2 w-5/12 h-full font-medium ml-1 flex items-center justify-center text-nowrap flex-wrap sm:flex-nowrap'>
      <a className='sm:mr-10 mr-5 w-fit duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white' href='#home'>Home</a>
      <a className='sm:mr-10 mr-5 w-fit duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white' href='#about'>About</a>
      <a className='sm:mr-10 mr-5 w-fit duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white' href='#skills'>Skills</a>
      <a className='sm:mr-10 mr-5 w-fit duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white inline items-center flex-nowrap' href='projects'>Projects</a>
    </nav>
    <DarkMode/>
    </header>
  )
}

export default Navbar