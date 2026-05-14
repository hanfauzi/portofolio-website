"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer space-y-8"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-md border border-foreground/10 bg-primary/5 shadow-sm">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-0 dark:grayscale dark:group-hover:grayscale-0"
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

        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-background/40 backdrop-blur-3xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-projects-bg rounded-md border border-foreground/10 shadow-2xl p-8 md:p-16 no-scrollbar"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-md bg-foreground/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all z-10"
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
                          className="px-7 py-3.5 bg-primary text-background rounded-md font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30"
                        >
                          Launch Application
                        </Link>
                      )}
                      {selected.links?.frontend && (
                        <Link
                          href={selected.links.frontend}
                          target="_blank"
                          className="px-7 py-3.5 border border-foreground rounded-md font-black text-sm hover:bg-foreground hover:text-background transition-all active:scale-95"
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
