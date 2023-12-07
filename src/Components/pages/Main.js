import "./Main.css";
import Profile_Pic from "../images/Profile_Pic.png";
import "boxicons";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import Navbar from "../Navbar";

<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>;

const Type = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Front-End Dev", "Web Designer", "AI Artist"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

function Main() {
  return (
    <div className="scroll-smooth dark:text-white">
      <header>
        <Navbar />
      </header>
      <section
        className="flex bg-blue-50 dark:bg-gray-900 h-screen relative w-full justify-center items-center pt-0 px-9 pb-0 "
        id="home"
      >
        <div className="max-w-xl mt-5">
          <h3 className="text-6xl font-black mb-3 dark:text-white">
            {" "}
            Hello World
          </h3>
          <h1 className="text-3xl font-bold leading-5 dark:text-white">
            It's Me,{" "}
            <span className="ml-px font-extrabold text-blue-500 text-4xl">
              Eric Moura
            </span>
          </h1>
          <h3 className="text-5xl font-semibold mb-3 dark:text-white">
            And I'm a{" "}
            <span className="ml-px font-bold text-blue-500 ">
              <Type />{" "}
            </span>
          </h3>
          <p className="text-lg text-left w-4/5 font-normal mb-5 dark:text-white">
            Front-end developer and web designer passionate about creating
            digital interfaces that are beautiful, functional, and enjoyable to
            use.
          </p>
          <div className="flex items-center w-6/12">
            <a
              href="https://www.linkedin.com/in/emouradev"
              target="_blank"
              className="text-blue-500  inline-flex justify-center items-center bg-transparent text-5xl my-2 mr-1 hover:scale-125 transition ease-in-out duration-300"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a
              href="https://github.com/xXAxiomaXx"
              target="_blank"
              className="text-blue-500  inline-flex justify-center items-center bg-transparent text-5xl my-2 mr-1 hover:scale-125 transition ease-in-out duration-300 "
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <a
            href="https://files.fm/f/xf876rz87m"
            target="_blank"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 transition ease-in-out duration-300 py-1 px-4 rounded-full justify-self-center"
          >
            Download CV
          </a>
        </div>
        <div className="rounded-full bg-gradient-to-r from-blue-500 dark:from-blue-500 dark:shadow-black shadow-lg shadow-slate-400">
          <img src={Profile_Pic} className="w-full rounded-full" />
        </div>
      </section>
      <section
        className="h-screen flex justify-center items-center dark:bg-blue-900 bg-blue-500"
        id="about"
      >
        <div className="w-full h-full flex justify-around items-center px-14 ">
          <h2 className="text-5xl font-black flex flex-col items-center ">
            About <span className="text-white dark:text-black">Me</span>
          </h2>
          <hr className="border-l-0 border-solid border-teal-50 h-3/6 w-px" />
          <p className="text-center w-6/12 text-xl font-bold text-black dark:text-white opacity-90 ">
            I am a front-end developer and web designer passionate about
            creating digital interfaces that are beautiful, functional, and
            enjoyable to use. I have a deep understanding of front-end
            development technologies and techniques, including{" "}
            <span className="opacity-1000 text-white dark:text-black font-black">
              HTML, CSS, JavaScript, and React
            </span>
            . Additionally, I am an experienced web designer with a strong sense
            of aesthetics and usability.
            <br />
            <br />
            My goal is to create memorable and impactful digital experiences
            that leave a positive mark on the world. I am always looking for new
            opportunities to apply my skills and knowledge. If you are looking
            for a talented front-end developer or web designer, please contact
            me.
          </p>
        </div>
      </section>
      <section
        className="h-screen flex flex-row-reverse justify-around items-center dark:bg-gray-900 bg-blue-50 px-9 pt-5"
        id="skills"
      >
        <h2 className="text-center font-black mr-5 text-black dark:text-white text-5xl font-black flex flex-col">
          <span className="text-blue-500">My</span> Skills
        </h2>
        <hr className="border-l-0 border-solid h-3/6 w-px" />
        <div className="flex justify-center items-center flex-wrap gap-8 shrink-0 w-5/12">
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-html5 "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-css3 "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-tailwind-css "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-javascript "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-nodejs "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-vuejs "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-python "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-react "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-figma "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-bootstrap "></i>
          </a>
          <a className="text-8xl p-3 opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out duration-500">
            <i className="bx bxl-git "></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Main;
