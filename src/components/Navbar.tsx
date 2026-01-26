"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const navRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(() => {
        gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            delay: 0.2,
        });
    });

    const links = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            ref={navRef}
            className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent backdrop-blur-md transition-all duration-300 -translate-y-full opacity-0"
        >
            {/* Brand Name */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-zinc-200 dark:border-white/20">
                    <Image
                        src="/Design4.png"
                        alt="Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground select-none font-display">
                    Kamlesh Mistry
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <button
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="text-foreground/70 hover:text-foreground transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                    aria-label="Toggle Theme"
                    suppressHydrationWarning
                >
                    {mounted && (resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
                </button>

                <ul className="flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <a
                    href="/KamleshMistry.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-zinc-200 dark:border-white/20 text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
                >
                    Resume
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-foreground"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col items-center gap-6 shadow-2xl">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg uppercase tracking-widest text-foreground/80 hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/KamleshMistry.pdf"
                        target="_blank"
                        className="px-8 py-3 border border-zinc-200 dark:border-white/20 text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
