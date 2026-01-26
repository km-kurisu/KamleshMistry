"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5,
        });

        tl.from(".hero-subtext", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5");

        tl.to(".hero-image", {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-20 max-w-screen-2xl mx-auto"
        >
            <div className="flex-1 space-y-2 md:space-y-4 z-10">
                <div ref={textRef} className="space-y-1 md:space-y-4">
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[10vw] md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none text-foreground">
                            KAMLESH MISTRY
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[12vw] md:text-8xl lg:text-8xl font-highlightwide tracking-tighter leading-none text-foreground ml-1">
                            CREATIVE
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[12vw] md:text-8xl lg:text-8xl font-highlightwide tracking-tighter leading-none text-foreground/50">
                            DEVELOPER
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[12vw] md:text-8xl lg:text-8xl font-highlightboldwide tracking-tighter leading-none text-foreground">
                            & ARTIST
                        </h1>
                    </div>
                </div>

                <p className="hero-subtext mt-8 md:mt-12 text-xl md:text-2xl text-foreground max-w-xl leading-relaxed font-highlight">
                    Based in Virar, Maharashtra. specialized in building exceptional digital experiences
                    and digital art.
                </p>

                <div className="hero-subtext mt-12 flex gap-6">
                    <a href="#projects" className="px-8 py-3 bg-foreground text-background font-highlightbold font-medium rounded-full hover:opacity-90 transition-opacity">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-zinc-200 dark:border-white/20 text-foreground font-highlightbold font-medium rounded-full hover:bg-foreground/10 transition-colors">
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 hero-image opacity-0 transform translate-x-20">
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    <Image
                        src="/Design4.png"
                        alt="Creative Design"
                        fill
                        className="object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
