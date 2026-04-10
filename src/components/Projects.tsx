"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "BiblioTheca",
    category: "BookStore and E-reader website",
    image: "/bibliotheca_ss.png", // Using placeholders from existing assets if possible or generic
    description:
      "A sustainability tracking application built with React Native.",
  },
  {
    id: 2,
    title: "Fuji Simulator",
    category: "Desktop Application",
    image: "/fuji_ss.png",
    description: "Analytics dashboard featuring real-time data visualization.",
  },
  {
    id: 3,
    title: "Stitch_SOC",
    category: "SOC Tester Dashboard",
    image: "/Stitch_SOC_ss.png",
    description: "A SOC Dashboard in testing phase.",
  },
  {
    id: 4,
    title: "Infinite Flappy",
    category: "Game Dev",
    image: "/web4.png",
    description: "2D Flappy Bird developed using Unity.",
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-24 px-6 md:px-12 bg-background transition-colors duration-300 max-w-screen-2xl mx-auto"
    >
      <h2 className="text-3xl md:text-6xl font-bold mb-12 md:mb-16 tracking-tighter text-foreground font-display">
        SELECTED WORKS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div key={project.id} className="project-card group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-4 transition-colors duration-300 shadow-sm">
              {/* Fallback to gray background if image fails loading or placehold with minimal style */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="pr-4">
                <h3 className="text-xl md:text-2xl font-highlightbold group-hover:text-foreground/70 transition-colors text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/60 mt-1 text-sm md:text-base">
                  {project.category}
                </p>
              </div>
              <span className="h-8 w-8 rounded-full border border-zinc-200 dark:border-white/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all text-foreground shrink-0">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
