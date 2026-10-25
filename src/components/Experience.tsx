"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Software Developer & Media Intern",
    company: "Otaku Mantra",
    period: "Sep 2026 – Mar 2027",
    location: "Hybrid",
    current: true,
    points: [
      "Six-month hybrid internship covering collaborations, campaigns, partner coordination, stakeholder communication, and business operations.",
      "Coordinate proposals, campaign requirements, timelines, deliverables, and progress records with internal and external stakeholders.",
    ],
  },
  {
    role: "Full-Stack Web Developer & Designer",
    company: "Otaku Mantra",
    period: "May 2026 – Jun 2026",
    current: false,
    points: [
      "Designed website UI in Figma, translating concepts into high-fidelity mockups and component layouts.",
      "Collaborated on translating designs into a functional website, bridging UI/UX design and front-end implementation.",
    ],
  },
  {
    role: "WordPress Intern",
    company: "NS Media Solutions",
    period: "Jun 2023 – Aug 2023",
    location: "Vasai, Maharashtra",
    current: false,
    points: [
      "Built a functional online bookstore using WordPress with reading and purchasing capabilities.",
      "Implemented user account creation and login features for personalized access and purchase history.",
      "Customized WordPress themes and plugins to improve presentation and user experience.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      gsap.from(".experience-item", {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-24 px-6 md:px-12 border-t border-zinc-200 dark:border-white/10 transition-colors duration-300 max-w-screen-2xl mx-auto"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-foreground font-display">
          EXPERIENCE
        </h2>
        <p className="mt-4 text-base md:text-lg text-foreground/60 font-sans max-w-2xl leading-relaxed">
          My professional journey, from my first internship to my current role.
        </p>
      </div>

      <div className="relative max-w-4xl">
        <div
          className="timeline-line absolute left-[5px] top-3 bottom-3 w-px bg-zinc-200 dark:bg-white/10"
          aria-hidden="true"
        />

        <ol ref={listRef}>
          {experience.map((job) => (
            <li
              key={`${job.role}-${job.period}`}
              className="experience-item relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              <span
                className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full ring-4 ring-background ${
                  job.current
                    ? "bg-foreground animate-pulse"
                    : "border-2 border-foreground/40 bg-background"
                }`}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-highlightbold text-foreground">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-foreground/70 font-sans">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>

                <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2 md:text-right shrink-0">
                  <span className="text-xs md:text-sm uppercase tracking-[0.15em] text-foreground/50 font-sans whitespace-nowrap">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="px-2.5 py-1 text-[10px] md:text-xs uppercase tracking-[0.15em] rounded-full bg-foreground text-background font-highlightbold">
                      Ongoing
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm md:text-base text-foreground/60 leading-relaxed font-sans"
                  >
                    <span
                      className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-foreground/40"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
