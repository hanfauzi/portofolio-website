"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/features/porto/components/Hero";
import { AboutMe } from "@/features/porto/components/AboutMe";
import Skills from "@/features/porto/components/Skills";
import { TimelineExperience } from "@/features/porto/components/Experience";
import Projects from "@/features/porto/components/Projects";
import Contact from "@/features/porto/components/Contact";
import { Footer } from "@/features/porto/components/Footer";

export default function PortoPage() {
  const [activeBg, setActiveBg] = useState("var(--hero-bg)");

  return (
    <main 
      className="relative min-h-screen transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: activeBg }}
    >
      <motion.section 
        onViewportEnter={() => setActiveBg("var(--hero-bg)")}
        viewport={{ amount: 0.2 }}
      >
        <Hero />
      </motion.section>
      
      <motion.section 
        onViewportEnter={() => setActiveBg("var(--about-bg)")}
        viewport={{ amount: 0.2 }}
      >
        <AboutMe />
      </motion.section>

      <motion.section 
        onViewportEnter={() => setActiveBg("var(--skills-bg)")}
        viewport={{ amount: 0.2 }}
      >
        <Skills />
      </motion.section>

      <motion.section 
        onViewportEnter={() => setActiveBg("var(--experience-bg)")}
        viewport={{ amount: 0.2 }}
      >
        <TimelineExperience />
      </motion.section>

      <motion.section 
        onViewportEnter={() => setActiveBg("var(--projects-bg)")}
        viewport={{ amount: 0.2 }}
      >
        <Projects />
      </motion.section>

      <motion.section 
        onViewportEnter={() => setActiveBg("var(--contact-bg)")}
        viewport={{ amount: 0.2 }}
      >
        <Contact />
      </motion.section>

      <Footer />
    </main>
  );
}
