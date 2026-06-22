"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectsData = [
{
title: "Anime DB",
description: "A high-performance discovery platform powered by React and the Jikan REST API. Engineered for rapid search and asynchronous data fetching, delivering a fluid user experience across thousands of dynamic entries.",
image: "/projects/anime-db.png",
link: "https://animedb-xxaxiomaxxs-projects.vercel.app/",
tags: ["React", "REST API", "React Router"],
altText: "Interface do projeto Anime DB listando animes",
},
{
title: "Home Budget",
description: "A streamlined financial dashboard architected with React. Features robust state management for real-time budget tracking, wrapped in a clean, conversion-optimized interface to simplify complex finance control.",
image: "/projects/home-budget.png",
link: "https://home-budget-dun.vercel.app/",
tags: ["React", "React Router"],
altText: "Dashboard financeiro do projeto Home Budget",
},
{
title: "Ukalaa",
description: "A high-converting landing page for a payment gateway, built with React and Tailwind CSS. Developed with a strict mobile-first approach and technical SEO standards to maximize organic reach and user onboarding.",
image: "/projects/ukalaa.png",
link: "https://payment-app-liart.vercel.app/",
tags: ["React", "Tailwind CSS", "SEO"],
altText: "Landing page da plataforma de pagamentos Ukalaa",
},
{
title: "ZX Contabilidade",
description: "A corporate institutional platform developed for a financial and accounting firm. Architected with modern web standards to ensure high Lighthouse scores, robust local SEO, and optimized lead-generation funnels.",
image: "/projects/zx-contabilidade.png",
link: "https://zx-contabilidade.vercel.app",
tags: ["React", "Corporate UI", "Lead Generation"],
altText: "Página institucional corporativa da ZX Contabilidade",
},
{
title: "KaInk Tattoo",
description: "A visually immersive digital studio portfolio. Designed with a strict focus on high-fidelity asset rendering, responsive grid layouts, and a conversion-oriented booking interface for client acquisition.",
image: "/projects/kaink-tattoo.png",
link: "https://kainktattoo.vercel.app",
tags: ["UI/UX Design", "Responsive Layout", "Frontend"],
altText: "Plataforma e portfólio digital para o estúdio KaInk Tattoo",
},
{
title: "Game Randomizer",
description: "An interactive utility application engineered to solve decision paralysis. Built with dynamic state management, featuring algorithmic randomization logic and seamless UI interactions for real-time results.",
image: "/projects/game-randomizer.png",
link: "game-randomizer.vercel.app",
tags: ["React", "State Management", "Algorithms"],
altText: "Interface do aplicativo utilitário Game Randomizer",
}
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_LIMIT = 3;
  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_LIMIT);
  const hasHiddenProjects = projectsData.length > INITIAL_LIMIT;

  const handleToggleProjects = () => {
    if (showAll) {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      className="w-full flex justify-center py-20 bg-black overflow-hidden"
    >
      <div className="w-11/12 max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-16 text-white">
          Projects
        </h2>

        {/* 'layout' avisa o Framer Motion para animar a mudança de altura do grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-8 w-full"
        >
          {/* AnimatePresence rastreia a destruição de nós do DOM para executar a animação de 'exit' antes de removê-los */}
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                // A chave deve ser única e imutável (o título do projeto), NUNCA o índice do map quando usamos AnimatePresence
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.4,
                  // Calcula um delay progressivo apenas para os itens que estavam ocultos (cria o efeito cascata)
                  delay:
                    index >= INITIAL_LIMIT ? (index - INITIAL_LIMIT) * 0.1 : 0,
                }}
                className="w-full sm:w-[380px]"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  className="group flex flex-col rounded-lg overflow-hidden bg-zinc-950 border border-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(122,135,251,0.15)] h-full"
                >
                  <div className="relative w-full aspect-video bg-white shrink-0">
                    <Image
                      src={project.image}
                      alt={project.altText}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="font-bold text-2xl mb-4 tracking-wider text-white group-hover:text-[#7a87fb] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-6 border-t border-zinc-800 pt-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm font-semibold text-gray-300 bg-zinc-900 rounded-full border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasHiddenProjects && (
          <div className="flex justify-center border-t border-zinc-900 mt-10 w-5/12">
            <motion.button
              layout
              onClick={handleToggleProjects}
              className="mt-6 text-white px-8 py-3 font-bold rounded-lg border border-zinc-700 hover:bg-zinc-800 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
