"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Move cursor
        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        // Scale on hover
        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 3, duration: 0.3 });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        };

        window.addEventListener("mousemove", onMouseMove);

        // Attach hover listeners to all clickable elements
        const clickables = document.querySelectorAll("a, button, .cursor-pointer");
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Main dot cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
        </>
    );
}
