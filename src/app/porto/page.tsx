"use client";

import { Hero } from "@/features/porto/components/Hero";
import { AboutMe } from "@/features/porto/components/AboutMe";
import Skills from "@/features/porto/components/Skills";
import { TimelineExperience } from "@/features/porto/components/Experience";

export default function PortoPage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <TimelineExperience />
    </div>
  );
}
