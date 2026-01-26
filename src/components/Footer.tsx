"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 px-6 md:px-12 border-t border-zinc-200 dark:border-white/10 transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
                <div>
                    <h3 className="text-3xl font-bold mb-2 text-foreground">Let's Connect</h3>
                    <p className="text-foreground/60">Open for opportunities and collaborations.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:kamleshkmistry33@gmail.com" className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <div className="text-center md:text-left">
                <h1 className="text-[12vw] font-bold leading-none tracking-tighter text-zinc-200 dark:text-zinc-900 select-none transition-colors duration-300 font-display">
                    KAMLESH MISTRY
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-8 text-sm text-foreground/50 pt-8 border-t border-zinc-200 dark:border-white/5">
                <p>&copy; 2026 Kamlesh Mistry. All rights reserved.</p>
                <p>Built with Next.js, Tailwind & GSAP.</p>
            </div>
        </footer>
    );
}
