"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    category: "Final Project / Full-stack Web Development Bootcamp",
    role: "Full-stack Developer / Team of 3",
    thumbnail: "/logo-laundr.jpg",
    stack:
      "Next.js, Express.js, TypeScript, Prisma, PostgreSQL, Midtrans, Tailwind CSS",
    shortDescription:
      "Pickup & delivery laundry web app with real-time order tracking, authentication, and online payments.",
    details:
      "Designed and built a full-featured laundry service platform where customers can request pickups, track order status, and complete payments online. Implemented authentication, address management, and order tracking using Next.js, Express.js, Prisma, and PostgreSQL. Integrated Midtrans for secure payments and optimized a mobile-first UI to improve accessibility and transaction reliability.",
    links: {
      demo: "https://laundr-project.vercel.app/",
      frontend: "https://github.com/hanfauzi/Laundry-Web-App-FE",
      backend: "https://github.com/hanfauzi/Laundry-Web-App-BE",
    },
  },
  {
    title: "Event Management Platform",
    category: "Mini Project / Full-stack Web Development Bootcamp",
    role: "Full-stack Developer",
    thumbnail: "/eventmng.png",
    stack: "Next.js, Express.js, PostgreSQL,Tailwind CSS, Nodemailer",
    shortDescription:
      "Event discovery & registration platform with referral system, role-based access, and payment tracking.",
    details:
      "Created an event platform where users can browse events, register, and use referral codes. Implemented authentication, role-based access for customers & organizers, email notifications, and dynamic dashboards to monitor attendees and sales. Focused on smooth UX and clear separation between organizer and user flows.",
    links: {
      frontend: "https://github.com/hanfauzi/Event-Management-Web-App-FE",
      backend: "https://github.com/hanfauzi/Event-Management-Web-App-BE",
    },
  },
  {
    title: "Personal Portfolio Website",
    category: "Personal Project",
    role: "Frontend Developer",
    thumbnail: "/HNF.png",
    stack: "Next.js, TypeScript, Tailwind CSS, Shadcn UI",
    shortDescription:
      "Portfolio website to showcase projects, skills, and experience.",
    details:
      "Built a responsive portfolio website to present my projects, experience, and skills. Focused on clean layout, readable typography, and modern UI composition using Tailwind CSS and Shadcn components.",
    links: {
      demo: "https://haniffauzi.vercel.app/",
      frontend: "https://github.com/hanfauzi/portofolio-website",
    },
  },
  {
    title: "Company Profile Website",
    category: "Client-style Practice Project",
    role: "Full-stack / Frontend-focused",
    thumbnail: "/companylogo.png",
    stack: "Next.js, Headless CMS, Tailwind CSS, Authentication",
    shortDescription:
      "Company profile with CMS-powered content and blog management.",
    details:
      "Built a company profile with CMS integration for dynamic content. Implemented authentication to restrict blog creation and management. Focused on mobile-first UI and clean branding.",
    links: {
      demo: "https://arunikacompany.vercel.app/",
      frontend: "https://github.com/hanfauzi/company-profile",
    },
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="w-full text-black dark:text-white py-16 px-4 md:px-8 border-t border-gray-100 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            A selection of the projects I&apos;ve built.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              onClick={() => setSelected(project)}
              className="cursor-pointer group relative flex flex-col overflow-hidden rounded-2xl 
  border border-gray-200 bg-white shadow-sm 
  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
  dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 space-y-3 text-left">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-blue-600">
                    {project.category}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-gray-500">{project.role}</p>
                </div>

                <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                  {project.shortDescription}
                </p>

                <p className="text-[11px] text-gray-400">{project.stack}</p>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div
              className="bg-white dark:bg-[#050608] dark:text-gray-100 
    rounded-2xl max-w-lg w-full p-8 shadow-xl relative animate-fadeIn 
    border border-gray-200 dark:border-white/10"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute cursor-pointer right-4 top-4 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                ✕
              </button>

              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src={selected.thumbnail}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {selected.title}
              </h3>
              <p className="text-xs text-blue-600 mb-3">{selected.category}</p>

              <p className="text-sm text-justify text-gray-700 dark:text-gray-200 mb-4">
                {selected.details}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {selected.stack}
              </p>

              {selected.links && (
                <div className="flex flex-wrap gap-2 text-xs">
                  {selected.links.demo && (
                    <Link
                      href={selected.links.demo}
                      target="_blank"
                      className="rounded-full border border-gray-300 dark:border-gray-600 
      px-3 py-1 hover:bg-black hover:text-white 
      dark:hover:bg-white dark:hover:text-black transition"
                    >
                      Live Demo
                    </Link>
                  )}
                  {selected.links.frontend && (
                    <Link
                      href={selected.links.frontend}
                      target="_blank"
                      className="rounded-full border border-gray-300 px-3 py-1 hover:bg-black hover:text-white transition"
                    >
                      Frontend Repo
                    </Link>
                  )}
                  {selected.links.backend && (
                    <Link
                      href={selected.links.backend}
                      target="_blank"
                      className="rounded-full border border-gray-300 px-3 py-1 hover:bg-black hover:text-white transition"
                    >
                      Backend Repo
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
