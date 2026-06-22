"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Reaproveitando os ícones já configurados
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiReact,
  SiFigma,
  SiBootstrap,
  SiSass,
  SiGitlab,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";

export default function About() {
  // Estado para controlar a abertura do modal
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Centralização dos links dos currículos
  const cvLinks = {
    pt: "https://docs.google.com/document/d/1ZMu-rRk_CmYM2zw3-uTcrOTVdgv5w4kjU1ymnasH0Vw/edit?usp=sharing", // Seu link existente
    en: "https://docs.google.com/document/d/1DmgNZBj1Fy1x4UjK9UOfOjzUR7XzsVDNKyGY1kAEB74/edit?usp=sharing", // Substitua pelo seu link do Google Drive do CV em inglês
  };

  const skills = [
    { Icon: SiHtml5, color: "text-[#E34F26]" },
    { Icon: SiCss, color: "text-[#1572B6]" },
    { Icon: SiJavascript, color: "text-[#F7DF1E]" },
    { Icon: SiPython, color: "text-[#3776AB]" },
    { Icon: SiReact, color: "text-[#61DAFB]" },
    { Icon: SiFigma, color: "text-[#F24E1E]" },
    { Icon: SiBootstrap, color: "text-[#7952B3]" },
    { Icon: SiSass, color: "text-[#CC6699]" },
    { Icon: SiGitlab, color: "text-[#FC6D26]" },
    { Icon: SiGithub, color: "text-white" },
    { Icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { Icon: SiNodedotjs, color: "text-[#339933]" },
    { Icon: SiTypescript, color: "text-[#3178C6]" },
    { Icon: SiGithub, color: "text-white" },
    { Icon: SiNextdotjs, color: "text-white" },
  ];

  return (
    <section id="about" className="w-full flex justify-center py-20">
      <div className="w-11/12 max-w-6xl bg-zinc-950 rounded-xl border border-zinc-900 p-8 md:p-16 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-12 text-center text-white">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16 max-w-6xl mx-auto">
          <div className="relative w-full lg:col-span-5 h-full min-h-[350px] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Eric Moura - Desenvolvedor Frontend"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={false}
            />
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 gap-6 text-lg text-gray-400 leading-relaxed py-2 lg:py-6">
            <p>
              I engineer high-performance web applications. For me, software
              development is not just about writing syntax; it is about
              architecting scalable solutions that translate complex business
              requirements into seamless, accessible user experiences.
            </p>
            <p>
              Operating independently since 2022, I have delivered digital
              products with a strict focus on modern web standards, Core Web
              Vitals, and maintainable codebases. My core expertise lies within
              the React ecosystem, leveraging frameworks like Next.js to build
              fast, SEO-optimized, and resilient interfaces.
            </p>
            <p>
              Currently expanding my technical depth into Cloud Computing and
              advanced system design. I build for the web with a clear
              engineering philosophy: optimize for performance, anticipate
              scale, and prioritize direct business impact.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center lg:col-span-12 gap-4 w-full">
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="mt-4 w-fit bg-slate-200 self-center text-black hover:bg-white px-8 py-3 font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
            >
              Download CV
            </button>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-black tracking-wider mb-12 text-center text-white">
          Skills
        </h3>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {[...Array(2)].map((_, index) => (
            <ul
              key={index}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll w-max shrink-0"
              aria-hidden={index === 1 ? "true" : "false"}
            >
              {skills.map(({ Icon, color }, skillIndex) => (
                <li key={skillIndex}>
                  <Icon
                    className={`text-4xl md:text-5xl transition-transform ${color}`}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* INJEÇÃO ESTRUTURAL DO MODAL COM FRAMER MOTION */}
      <AnimatePresence>
        {isCvModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop: Fundo translúcido com desfoque de movimento */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvModalOpen(false)} // Fecha ao clicar fora do modal
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Card Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-sm bg-zinc-950 border border-zinc-900 rounded-xl p-6 shadow-2xl z-10 flex flex-col"
            >
              {/* Botão de Fechar Superior */}
              <button
                onClick={() => setIsCvModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl text-center font-black text-white mb-2 tracking-wider">
                Select Language
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Choose the curriculum version you want to view or download.
              </p>

              {/* Opções de Idioma */}
              <div className="flex flex-col gap-3">
                <Link
                  href={cvLinks.pt}
                  target="_blank"
                  onClick={() => setIsCvModalOpen(false)} // Fecha automaticamente após o clique
                  className="w-full text-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Portuguese (PT-BR)
                </Link>

                <Link
                  href={cvLinks.en}
                  target="_blank"
                  onClick={() => setIsCvModalOpen(false)}
                  className="w-full text-center bg-gradient-to-r from-[#7a87fb] to-[#e281d8] hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg transition-all"
                >
                  English (EN-US)
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
