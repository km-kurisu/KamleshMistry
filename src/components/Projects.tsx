"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  gradient?: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AniCRM",
    category: "Full-Stack CRM Platform",
    description:
      "A creator agency CRM that unifies outreach, contracts, companies, brand deals, campaigns, and payments.",
    tech: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "Clerk"],
    gradient: "from-sky-500/15 via-transparent to-indigo-500/15",
    href: "https://acrm-five.vercel.app/",
  },
  {
    id: 2,
    title: "VitaScan AI",
    category: "AI Health Screening",
    description:
      "A dual-pipeline screening architecture using blood biomarkers and Graph Attention Networks to predict nutritional deficiencies.",
    tech: ["Python", "Graph Attention Networks", "Machine Learning"],
    gradient: "from-emerald-500/15 via-transparent to-teal-500/15",
  },
  {
    id: 3,
    title: "It's Behind You!",
    category: "2D Horror Platformer",
    description:
      "An indie pixel-art horror platformer set in a dungeon, built around a pursuing ghost and an escape-focused gameplay loop.",
    tech: ["Godot 4.7", "GDScript", "Pixel Art"],
    gradient: "from-rose-500/15 via-transparent to-purple-500/15",
    href: "https://itsbehindyou.netlify.app/",
  },
  {
    id: 4,
    title: "Neobrutalism Playground",
    category: "Open-Source UI Playground",
    description:
      "An interactive component and theme playground with live previews, published as an installable npm package.",
    tech: ["React", "TypeScript", "Tailwind CSS", "npm"],
    gradient: "from-amber-500/15 via-transparent to-orange-500/15",
    href: "https://neobrutalism-playground.vercel.app/",
  },
  {
    id: 5,
    title: "Bibliotheca V2",
    category: "Full-Stack eBook Platform",
    description:
      "A full-stack eBook platform with in-browser EPUB reading, authentication, and a state-driven checkout flow.",
    tech: ["Next.js 15", "React 19", "Supabase", "EPUB.js", "XState"],
    image: "/bibliotheca_ss.png",
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
        {projects.map((project) => {
          const content = (
            <>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 mb-4 transition-colors duration-300 shadow-sm">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
                  >
                    <div className="h-full w-full flex flex-col items-center justify-center text-center px-8">
                      <span className="text-[5rem] md:text-[6.5rem] font-display font-bold leading-none tracking-tighter text-foreground/10 select-none">
                        {String(project.id).padStart(2, "0")}
                      </span>
                      <span className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.3em] text-foreground/40 font-sans">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start gap-4">
                <div className="pr-4">
                  <h3 className="text-xl md:text-2xl font-highlightbold group-hover:text-foreground/70 transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mt-1 text-sm md:text-base">
                    {project.category}
                  </p>
                  <p className="mt-2 text-foreground/50 text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full border border-zinc-200 dark:border-white/10 text-[10px] md:text-xs uppercase tracking-wider text-foreground/50 font-sans"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {project.href && (
                  <span className="h-8 w-8 rounded-full border border-zinc-200 dark:border-white/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all text-foreground shrink-0">
                    ↗
                  </span>
                )}
              </div>
            </>
          );

          return project.href ? (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block cursor-pointer"
            >
              {content}
            </a>
          ) : (
            <div key={project.id} className="project-card group">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
