"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-4 pt-16 select-none bg-black"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#7a87fb] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>

        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#e281d8] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>

        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-[#ffd49c] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className="font-black text-5xl md:text-7xl tracking-wider mb-6 text-white drop-shadow-xl">
          Hello World, I&apos;m Eric Moura
        </h1>

        <h2 className="text-3xl md:text-4xl mb-10 text-gray-300 font-light">
          I&apos;m a{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7a87fb] via-[#e281d8] to-[#ffd49c]">
            <TypeAnimation
              sequence={[
                "Front-End Dev",
                1300,
                "Web Dev",
                1300,
                "UI/UX Designer",
                1300,
                "Problem Solver",
                1300,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>

        <Link
          href="#contact"
          className="text-white px-8 py-3 font-semibold rounded-full text-2xl tracking-wider bg-gradient-to-r from-[#7a87fb] via-[#e281d8] to-[#ffd49c] hover:scale-105 active:scale-95 transition-transform duration-200 shadow-[0_0_40px_rgba(226,129,216,0.3)]"
        >
          Hire
        </Link>
      </div>
    </section>
  );
}
