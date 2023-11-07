import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Project_1 from "../images/Captura de Tela (31).png";
import Project_2 from "../images/Captura de Tela (29).png";
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
              Home <i className="bx bx-link-external text-sm"></i>
            </a>
          </Link>
          <DarkMode/>
        </nav>
      </header>
      <section
        id="projects"
        className="flex bg-blue-50 dark:bg-gray-900 h-screen relative w-full justify-around items-center px-14 pt-11"
      >
        <h2 className="text-5xl font-black flex flex-col items-center">
          <span className="text-blue-500">My</span> Projects
        </h2>
        <hr className='border-l-0 border-solid h-3/6 w-0'/>
        <div className="flex items-center justify-center w-8/12 h-fit">
          <div className="bg-white dark:bg-black w-5/12 m-2 flex flex-col justify-around items-center rounded-ss-3xl rounded-ee-3xl h-fit  hover:scale-110 transition ease-in-out duration-300">
            <img src={Project_1} className="w-full rounded-ss-3xl"></img>
            <a className="text-blue-500 font-bold text-lg cursor-pointer pt-4 hover:text-blue-100 transition ease-in-out duration-300 text-center" href='https://age-calculator-app-solution-livid.vercel.app/' target="_blank">Age Calculator <i className="bx bx-link-external text-sm"></i></a>
            <hr className=" border-solid border-t-0 w-5/12 opacity-90"/>
            <p className="w-8/12 flex text-center pb-6 pt-4 text-base font-normal mb-6">A Front-end Mentor Age Calculator challenge</p>
          </div>
          <div className="bg-white dark:bg-black w-5/12 m-2 flex flex-col justify-around items-center rounded-ss-3xl rounded-ee-3xl h-fit  hover:scale-110 transition ease-in-out duration-300">
            <img src={Project_2} className="w-full rounded-ss-3xl h-fit"></img>
            <a className="text-blue-500 font-bold text-lg cursor-pointer pt-4 hover:text-blue-100 transition ease-in-out duration-300 text-center" href='https://intro-component-with-signup-form-master-amber.vercel.app/' target="_blank">Intro Page with a Sign-up Form <i className="bx bx-link-external text-sm"></i></a>
            <hr className="border-solid border-t-0 w-10/12 opacity-90"/>
            <p className="w-8/12 flex text-center pb-6 pt-4 text-base font-normal mb-6">A Figma inspired project for a Music School.</p>
          </div>
          <div className="bg-white dark:bg-black w-5/12 m-2 flex flex-col justify-around items-center rounded-ss-3xl rounded-ee-3xl h-fit  hover:scale-110 transition ease-in-out duration-300">
            <img src={Project_3} className="w-full rounded-ss-3xl h-fit"></img>
            <a className="text-blue-500 font-bold text-lg cursor-pointer pt-4 hover:text-blue-100 transition ease-in-out duration-300 text-center" href='https://movie-library-neon.vercel.app/' target="_blank">Movies Library <i className="bx bx-link-external text-sm"></i></a>
            <hr className="border-solid border-t-0 w-5/12 opacity-90"/>
            <p className="w-8/12 flex text-center pb-6 pt-4 text-base font-normal mb-6">A movie Database made using the OMDB API </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
