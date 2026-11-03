import { Hero } from "@/features/porto/components/Hero";
import { AboutMe } from "@/features/porto/components/AboutMe";
import { TimelineExperience } from "@/features/porto/components/Experience";
import Projects from "@/features/porto/components/Projects";
import Skills from "@/features/porto/components/Skills";
import Contact from "@/features/porto/components/Contact";
import { Footer } from "@/features/porto/components/Footer";
import { SectionBackdrop } from "@/features/porto/components/SectionBackdrop";

export default function PortoPage() {
  return (
    <>
      <SectionBackdrop />
      <main>
        <Hero />
        <AboutMe />
        <TimelineExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
