"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { DummyContent } from "@/components/ui/DummyProject";

export default function ProjectsPage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="projects" className="w-full min-h-screen py-12 px-4 md:px-12 bg-[#181c1c] text-white">
      <h2 className="max-w-7xl text-center mx-auto text-2xl md:text-3xl font-bold font-mono mb-8">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// ✅ Reusable data
const data = [
  {
    category: "Finance / Next.js",
    title: "Personal Finance Tracker Web App",
    technologies: "Next.js, Tailwind CSS, Firebase, Chart.js",
    src: "/tracker.jpeg",
    content: (
      <DummyContent
        situation="Many individuals struggle with managing their daily expenses. I created a web-based finance tracker targeting young professionals."
        task="My goal was to build a responsive full-stack application for tracking income, expenses, and goals."
        action="I used Next.js with Firebase for real-time sync and Chart.js for interactive charts."
        result="300+ users in first month, many reported reducing spending by 15–20%."
        image="/tracker.jpeg"
      />
    ),
  },
  {
    category: "Real Estate / Vue.js",
    title: "Real Estate Listing Platform",
    technologies: "Vue.js, Laravel, MySQL, Google Maps API",
    src: "https://clarylifeglobal.com/wp-content/uploads/2024/02/Booking-Listing-Platform-Hero.png",
    content: (
      <DummyContent
        situation="Agents and buyers struggled with outdated real estate listings."
        task="I created a live listing platform with interactive maps and filters."
        action="Used Vue.js for frontend, Laravel backend with MySQL, and Google Maps API for location."
        result="Helped 500+ users find property faster. Reduced bounce rate by 30%."
        image="https://clarylifeglobal.com/wp-content/uploads/2024/02/Booking-Listing-Platform-Hero.png"
      />
    ),
  },
  {
    category: "AI / React",
    title: "AI‑Powered Resume Builder",
    technologies: "React, Express.js, OpenAI API, MongoDB",
    src: "https://preview.redd.it/i-made-an-ai-resume-maker-that-turns-any-job-link-into-v0-g8jx2nibczud1.png?width=1080&crop=smart&auto=webp&s=ed34aa8efa667642c47f35da7962544dbba8fa69",
    content: (
      <DummyContent
        situation="AJob seekers often struggle to write optimized resumes. This project aimed to simplify the resume creation process using AI-generated content suggestions."
        task="I led the development of a tool that could generate personalized resume content and offer real-time feedback on tone, grammar, and keywords.."
        action="I built a React front-end with a live Markdown editor and integrated OpenAI’s GPT model via an Express.js API. MongoDB stored user sessions and resume templates. Additional features like export to PDF and multi-language support were added."
        result="The app was featured on Product Hunt and received 2,000+ signups in two weeks. Users praised the intelligent writing assistant and said it saved hours during their job search process."
        image="https://preview.redd.it/i-made-an-ai-resume-maker-that-turns-any-job-link-into-v0-g8jx2nibczud1.png?width=1080&crop=smart&auto=webp&s=ed34aa8efa667642c47f35da7962544dbba8fa69"
      />
    ),
  },
  {
    category: "EdTech / Angular",
    title: "Learning Management System (LMS) for EduPro",
    technologies: "Angular, Node.js, PostgreSQL, AWS S3",
    src: "https://miro.medium.com/v2/resize:fit:900/1*DGJtDQlKMs8fOSnganoGsA.jpeg",
    content: (
      <DummyContent
        situation="EduPro, an online course provider, needed a custom LMS to host video courses, manage users, and track progress and certifications."
        task="My task was to build a scalable system to deliver video content, quiz modules, and generate progress reports for both students and instructors."
        action="I used Angular for the front-end and Node.js for the RESTful API layer. PostgreSQL handled relational data, while AWS S3 was used for secure video storage. The system also included role-based access control and progress tracking dashboards."
        result="Over 1,000 students enrolled within the first month, with a course completion rate of 78%. Instructors praised the admin dashboard’s clarity, and the platform contributed to a 20% increase in course purchases."
        image="https://miro.medium.com/v2/resize:fit:900/1*DGJtDQlKMs8fOSnganoGsA.jpeg"
      />
    ),
  },
  {
    category: "Mobile / Flutter",
    title: "Restaurant Table Booking App",
    technologies: "Flutter, Firebase, Google Maps API",
    src: "https://mir-s3-cdn-cf.behance.net/projects/404/a17e47119064629.Y3JvcCw3NjE0LDU5NTUsMCww.jpg",
    content: (
      <DummyContent
        situation="Restaurants in busy urban areas were struggling with walk-ins and manual reservations. I developed a cross-platform mobile app to let users reserve tables at nearby restaurants."
        task="I was responsible for the UI/UX design and core logic to allow time-slot booking, table selection, and map navigation."
        action="Using Flutter, I built for both Android and iOS with a single codebase. Firebase handled user auth and database sync. Google Maps API was integrated to let users explore nearby dining options."
        result="The app reached 5,000+ downloads in 2 months with high engagement during peak dining hours. Restaurant partners reported smoother operations and a 30% increase in table turnover efficiency."
        image="https://mir-s3-cdn-cf.behance.net/projects/404/a17e47119064629.Y3JvcCw3NjE0LDU5NTUsMCww.jpg"
      />
    ),
  },
  {
    category: "Analytics / React",
    title: "Internal Dashboard for Performance Analytics",
    technologies: "React, Recharts, Supabase, Tailwind CSS",
    src: "https://images.ctfassets.net/fevtq3bap7tj/4Z3xdca3bymwimUoa408Ck/8c3bf8a8d2335a9613131d03c650131b/Energy_Dashboard_2x.jpg.png",
    content: (
      <DummyContent
        situation="A growing startup needed a data dashboard to visualize KPIs across departments in real time and replace their manual spreadsheet tracking."
        task="I was tasked with creating an interactive analytics dashboard with charts, filters, and role-based access for different team members."
        action="I used React and Tailwind CSS for the front-end, connected to Supabase for instant data updates, and used Recharts for visualizing performance indicators. I also implemented JWT-based authentication and caching strategies to boost load times."
        result="The dashboard reduced reporting prep time by 60%. Department heads reported better visibility into trends, which helped in decision-making and resource allocation."
        image="https://images.ctfassets.net/fevtq3bap7tj/4Z3xdca3bymwimUoa408Ck/8c3bf8a8d2335a9613131d03c650131b/Energy_Dashboard_2x.jpg.png"
      />
    ),
  },
];
