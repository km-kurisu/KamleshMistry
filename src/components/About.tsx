"use client";

export default function About() {
    const skills = [
        "Next.js", "Linux", "Tailwind CSS", "CyberSecurity", "Unity", "Game Developement", "Node.js", "TypeScript", "Digital Art"
    ];

    return (
        <section className="py-24 px-6 md:px-12 border-t border-zinc-200 dark:border-white/10 transition-colors duration-300 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="flex-1 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tighter text-foreground font-display">ABOUT</h2>
                    <p className="text-lg md:text-2xl leading-relaxed text-foreground/80 font-highlightwide">
                        I am a creative developer and designer with a passion for building
                        digital products that look great and perform even better.
                        I bridge the gap between design and engineering.
                    </p>
                    <p className="mt-6 md:mt-8 text-foreground/60 leading-relaxed font-sans text-base md:text-lg">
                        Currently pursuing my B.Tech in Computer Engineering. I have a background
                        in both development and digital art, giving me a unique perspective on
                        frontend development and user experience.
                    </p>
                </div>

                <div className="flex-1 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tighter text-foreground font-display">SKILLS</h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 md:px-4 py-1.5 md:py-2 border border-zinc-200 dark:border-white/20 rounded-full text-xs md:text-base hover:bg-foreground hover:text-background transition-colors cursor-default text-foreground/80 font-highlightbold"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
