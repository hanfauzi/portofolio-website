import { Hero } from "@/features/porto/components/Hero";
import { AboutMe } from "@/features/porto/components/AboutMe";
import { TimelineExperience } from "@/features/porto/components/Experience";
import Projects from "@/features/porto/components/Projects";
import Skills from "@/features/porto/components/Skills";
import Contact from "@/features/porto/components/Contact";
import { Footer } from "@/features/porto/components/Footer";
import { SectionBackdrop } from "@/features/porto/components/SectionBackdrop";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export default async function PortoPage({ params }: { params: Promise<{ locale: string }> }) {
  // The layout has already rejected unknown locales.
  setRequestLocale((await params).locale as Locale);

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
