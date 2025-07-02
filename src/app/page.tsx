"use client";

import { Hero } from "@/features/porto/components/Hero";
import { AboutMe } from "@/features/porto/components/AboutMe";
import Skills from "@/features/porto/components/Skills";
import { TimelineExperience } from "@/features/porto/components/Experience";
import Projects from "@/features/porto/components/Projects";
import Testimonials from "@/features/porto/components/Testimonials";
import Contact from "@/features/porto/components/Contact";

export default function PortoPage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <TimelineExperience />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
