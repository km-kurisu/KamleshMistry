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
        title: "EcoTrack",
        category: "Mobile App",
        image: "/web1.png", // Using placeholders from existing assets if possible or generic
        description: "A sustainability tracking application built with React Native.",
    },
    {
        id: 2,
        title: "Nebula Dashboard",
        category: "Web Application",
        image: "/web2.png",
        description: "Analytics dashboard featuring real-time data visualization.",
    },
    {
        id: 3,
        title: "Zenith UI",
        category: "Design System",
        image: "/web3.png",
        description: "A comprehensive design system for enterprise applications.",
    },
    {
        id: 4,
        title: "Pixel Perfect",
        category: "Game Dev",
        image: "/web4.png",
        description: "2D platformer game developed using Unity.",
    },
];

export default function Projects() {
    const containerRef = useRef(null);

    useGSAP(() => {
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
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-background transition-colors duration-300">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-foreground">SELECTED WORKS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="project-card group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-4 transition-colors duration-300">
                            {/* Fallback to gray background if image fails loading or placehold with minimal style */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold group-hover:text-foreground/70 transition-colors text-foreground">{project.title}</h3>
                                <p className="text-foreground/60 mt-1">{project.category}</p>
                            </div>
                            <span className="h-8 w-8 rounded-full border border-zinc-200 dark:border-white/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all text-foreground">
                                ↗
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
