"use client";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 border-t border-zinc-200 dark:border-white/10 transition-colors duration-300 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-16 md:mb-20 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground font-display">
            Let's Connect
          </h3>
          <p className="text-foreground/60 font-sans">
            Open for opportunities and collaborations.
          </p>
        </div>

        <div className="flex gap-4 md:gap-6">
          <a
            href="https://github.com/km-kurisu"
            target="_blank"
            className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kamlesh-mistry-957895260"
            target="_blank"
            className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/kamleshm_02/"
            target="_blank"
            className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:kamleshkmistry33@gmail.com"
            target="_blank"
            className="p-3 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-foreground hover:text-background transition-colors text-foreground"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-[14vw] md:text-[12vw] font-bold leading-none tracking-tighter text-zinc-200 dark:text-teal-900 select-none transition-colors duration-300 font-display">
          KAMLESH MISTRY
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-8 text-sm text-foreground/50 pt-8 border-t border-zinc-200 dark:border-white/5 gap-4 md:gap-0 text-center md:text-left font-sans">
        <p>&copy; 2026 Kamlesh Mistry. All rights reserved.</p>
        <p>Built with Next.js, Tailwind & GSAP.</p>
      </div>
    </footer>
  );
}
