"use client";

import { Hero } from "@/features/porto/components/Hero";
import { AboutMe } from "@/features/porto/components/AboutMe";
import Skills from "@/features/porto/components/Skills";
import { TimelineExperience } from "@/features/porto/components/Experience";
import Projects from "@/features/porto/components/Projects";
import Contact from "@/features/porto/components/Contact";

export default function PortoPage() {
  return (
    <main
      className="relative min-h-screen text-black 
    bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3),_transparent_70%)]
      bg-fixed"
    >
      <Hero />
      <AboutMe />
      <Skills />
      <TimelineExperience />
      <Projects />
      <Contact />
    </main>
  );
}
