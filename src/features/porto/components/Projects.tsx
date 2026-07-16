"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  role: string;
  thumbnail: string;
  stack: string;
  shortDescription: string;
  details: string;
  links?: {
    demo?: string;
    frontend?: string;
    backend?: string;
  };
};

const projects: Project[] = [
    {
    title: "Coffe Bar",
    category: "Personal Project",
    role: "Full-stack Developer",
    thumbnail: "/coffe-bar.png",
    stack: "React.js • NestJS • Prisma • PostgreSQL",
    shortDescription: "A premium coffee shop management system featuring FIFO inventory tracking and dynamic portion estimation.",
    details: "Built a monorepo platform featuring a cashier POS, automatic ingredient reservation with FIFO stock reduction to calculate accurate COGS (HPP), daily cash reconciliation logs, and dynamic portion calculations on the frontend based on the limiting ingredient's remaining stock.",
    links: {
      frontend: "https://github.com/hanfauzi/coffe-bar",
    },
  },{
    title: "Laundry Web Application",
    category: "Final Project",
    role: "Full-stack Lead",
    thumbnail: "/logo-laundr.jpg",
    stack: "Next.js • Express.js • Prisma • Midtrans",
    shortDescription: "A comprehensive pickup & delivery laundry solution with real-time tracking.",
    details: "Designed and built a full-featured laundry service platform where customers can request pickups, track order status, and complete payments online. Implemented authentication, address management, and order tracking using Next.js, Express.js, Prisma, and PostgreSQL.",
    links: {
      demo: "https://laundr-project.vercel.app/",
      frontend: "https://github.com/hanfauzi/Laundry-Web-App-FE",
      backend: "https://github.com/hanfauzi/Laundry-Web-App-BE",
    },
  },
  {
    title: "Event Management Platform",
    category: "Mini Project",
    role: "Full-stack Developer",
    thumbnail: "/eventmng.png",
    stack: "Next.js • PostgreSQL • Tailwind CSS",
    shortDescription: "Event discovery and registration platform with a unique referral system.",
    details: "Created an event platform where users can browse events, register, and use referral codes. Implemented authentication, role-based access for customers & organizers, email notifications, and dynamic dashboards.",
    links: {
      frontend: "https://github.com/hanfauzi/Event-Management-Web-App-FE",
      backend: "https://github.com/hanfauzi/Event-Management-Web-App-BE",
    },
  },
  {
    title: "Personal Portfolio",
    category: "Personal Project",
    role: "Frontend Developer",
    thumbnail: "/HNF.jpeg",
    stack: "Next.js • TypeScript • Tailwind CSS",
    shortDescription: "A showcase of my skills and projects with a focus on modern aesthetics.",
    details: "Built a responsive portfolio website to present my projects, experience, and skills. Focused on clean layout, readable typography, and modern UI composition.",
    links: {
      demo: "https://haniffauzi.vercel.app/",
      frontend: "https://github.com/hanfauzi/portofolio-website",
    },
  },
  {
    title: "Company Profile",
    category: "Client-style Practice",
    role: "Frontend-focused",
    thumbnail: "/arunika.jpeg",
    stack: "Next.js • Headless CMS • Tailwind CSS",
    shortDescription: "Modern company profile with CMS-powered blog management.",
    details: "Built a company profile with CMS integration for dynamic content. Implemented authentication to restrict blog creation and management.",
    links: {
      demo: "https://arunikacompany.vercel.app/",
      frontend: "https://github.com/hanfauzi/company-profile",
    },
  }
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Mouse drag state for desktop scrolling
  const isDragging = useRef(false);
  const startX = useRef(0);
  const initialScrollLeft = useRef(0);

  const handleScrollProgress = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        setScrollProgress((scrollLeft / totalScrollable) * 100);
      }
    }
  };

  useEffect(() => {
    const current = carouselRef.current;
    if (current) {
      current.addEventListener("scroll", handleScrollProgress);
      // Run once initially
      handleScrollProgress();
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScrollProgress);
      }
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    initialScrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    carouselRef.current.scrollLeft = initialScrollLeft.current - walk;
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-foreground"
            >
              Featured <br />
              <span className="text-primary italic">Projects</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleScroll("left")} 
              className="p-3 border border-foreground/10 rounded-full hover:bg-foreground/5 transition-transform duration-100 active:scale-90 cursor-pointer"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll("right")} 
              className="p-3 border border-foreground/10 rounded-full hover:bg-foreground/5 transition-transform duration-100 active:scale-90 cursor-pointer"
              aria-label="Next Project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8 pt-4 cursor-grab active:cursor-grabbing select-none"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="snap-start shrink-0 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[32vw] group cursor-pointer space-y-8"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-md border border-foreground/10 bg-primary/5 shadow-sm">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-0 dark:grayscale dark:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-(--projects-bg)/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl md:text-2xl font-black group-hover:text-primary transition-colors leading-none">
                    {project.title}
                  </h3>
                </div>
                <p className="text-base font-medium text-foreground/60 leading-tight line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(" • ").map((tech) => (
                    <span key={tech} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full border border-foreground/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="relative w-full h-0.5 bg-foreground/10 rounded-full mt-4 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-150 ease-out-custom"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-background/40 backdrop-blur-3xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ type: "spring", duration: 0.45, bounce: 0 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-projects-bg rounded-md border border-foreground/10 shadow-2xl p-8 md:p-16 no-scrollbar"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-md bg-foreground/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-[transform,background-color,color] duration-150 ease-out-custom active:scale-95 z-10 cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">{selected.category}</p>
                      <h3 className="text-2xl md:text-4xl font-black tracking-tighter leading-none">{selected.title}</h3>
                      <p className="text-lg font-black text-foreground/40 italic">{selected.role}</p>
                    </div>

                    <p className="text-base text-foreground/60 font-medium leading-tight">
                      {selected.details}
                    </p>

                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Technology Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {selected.stack.split(" • ").map((tech) => (
                          <span key={tech} className="text-xs font-black uppercase tracking-widest px-4 py-2 bg-primary/10 text-primary rounded-full border-2 border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-8">
                      {selected.links?.demo && (
                        <Link
                          href={selected.links.demo}
                          target="_blank"
                          className="px-7 py-3.5 bg-primary text-background rounded-md font-black text-sm hover:scale-105 active:scale-97 transition-[transform,background-color] duration-150 ease-out-custom shadow-xl shadow-primary/30"
                        >
                          Launch Application
                        </Link>
                      )}
                      {selected.links?.frontend && (
                        <Link
                          href={selected.links.frontend}
                          target="_blank"
                          className="px-7 py-3.5 border border-foreground rounded-md font-black text-sm hover:bg-foreground hover:text-background transition-[transform,background-color,color] duration-150 ease-out-custom active:scale-97"
                        >
                          View Source
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="relative aspect-square rounded-md overflow-hidden border border-foreground/10 shadow-sm bg-primary/5">
                    <Image
                      src={selected.thumbnail}
                      alt={selected.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
