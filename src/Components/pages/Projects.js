import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Project_1 from "../images/Captura de Tela (31).png";
import Project_2 from "../images/screenshot1.png";
import Project_3 from "../images/Captura de Tela (24).png";
import DarkMode from "../DarkMode";

const Projects = () => {
  return (
    <div className="dark:text-white">
      <header className="z-50 fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center text-white h-14">
        <h2 className="cursor-default font-black text-2xl text-black dark:text-white">EM DEV</h2>
        <nav
          id="navbar"
          className="text-base font-medium ml-1 flex items-center"
        >
          <Link to={"/"}>
            <a className="mr-10 duration-200 cursor-pointer font-bold text-black hover:text-white hover:dark:text-black dark:text-white">
              Home
            </a>
          </Link>
          <DarkMode/>
        </nav>
      </header>
      <section
        id="projects"
        className="flex flex-col md:flex-row bg-blue-50 dark:bg-gray-900 h-fit md:h-screen relative w-full justify-around items-center sm:px-14 pt-11"
      >
        <h2 className="text-5xl font-black flex flex-col items-center mb-6 md:mb-0 mt-8 md:mt-0">
          <span className="text-blue-500">My</span> Projects
        </h2>
        <hr className='border-l-0 border-solid border-black dark:border-teal-50 h-px w-10/12 mb-4 md:mb-0 md:h-3/6 md:w-px md:mx-5'/>
        <div className="flex flex-col md:flex-row items-center justify-center w-8/12 h-fit">
          <div className="bg-white dark:bg-black w-10/12 md:w-5/12 m-2 flex flex-col justify-around items-center rounded-ss-3xl rounded-ee-3xl h-fit  hover:scale-110 transition ease-in-out duration-300">
            <img src={Project_1} className="w-full rounded-ss-3xl"></img>
            <a className="text-blue-500 font-bold text-base sm:text-lg cursor-pointer pt-4 hover:text-blue-100 transition ease-in-out duration-300 text-center" href='https://age-calculator-app-solution-livid.vercel.app/' target="_blank">Age Calculator <i className="bx bx-link-external text-sm"></i></a>
            <hr className=" border-solid border-t-0 w-6/12 opacity-90"/>
            <p className="w-8/12 flex text-center pb-6 pt-4 text-sm sm:text-base font-normal mb-6">The Front-end Mentor Age Calculator challenge</p>
          </div>
          <div className="bg-white dark:bg-black w-10/12 md:w-5/12 m-2 flex flex-col justify-around items-center rounded-ss-3xl rounded-ee-3xl h-fit  hover:scale-110 transition ease-in-out duration-300">
            <img src={Project_2} className="w-full rounded-ss-3xl h-fit"></img>
            <a className="text-blue-500 font-bold text-base sm:text-lg cursor-pointer pt-4 hover:text-blue-100 transition ease-in-out duration-300 text-center" href='https://kainktattoo.vercel.app/' target="_blank">Kaink Tattoo <i className="bx bx-link-external text-sm"></i></a>
            <hr className="border-solid border-t-0 w-5/12 opacity-90"/>
            <p className="w-8/12 flex text-center pb-6 pt-4 text-sm sm:text-base font-normal mb-6">A Tattoo Artist's landing page</p>
          </div>
          <div className="bg-white dark:bg-black w-10/12 md:w-5/12 m-2 flex flex-col justify-around items-center rounded-ss-3xl rounded-ee-3xl h-fit  hover:scale-110 transition ease-in-out duration-300">
            <img src={Project_3} className="w-full rounded-ss-3xl h-fit"></img>
            <a className="text-blue-500 font-bold text-base sm:text-lg cursor-pointer pt-4 hover:text-blue-100 transition ease-in-out duration-300 text-center" href='https://movie-library-neon.vercel.app/' target="_blank">Movies Library <i className="bx bx-link-external text-sm"></i></a>
            <hr className="border-solid border-t-0 w-6/12 opacity-90"/>
            <p className="w-8/12 flex text-center pb-6 pt-4 text-sm sm:text-base font-normal mb-6">A movie Database made using the OMDB API </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
