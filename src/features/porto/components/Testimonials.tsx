"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:px-10 md:py-20 flex flex-col antialiased bg-[#181c1c] items-center justify-center relative overflow-hidden">
      <div className="mb-10 text-2xl md:text-3xl font-mono font-bold text-white text-center">
        Testimonials
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="font-mono w-full  max-w-sm md:max-w-5xl"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The Personal Finance Tracker has transformed the way I manage my expenses. The clean interface and real-time data visualization helped me stay on top of my budget. Truly an essential tool for anyone wanting control over their finances.",
    name: "Amanda Lee",
    title: "Freelance Graphic Designer",
  },
  {
    quote:
      "Working with the Real Estate Listing Platform was a game-changer for our agency. The user-friendly layout and seamless property integration allowed our clients to browse and contact us effortlessly. It significantly improved our online presence.",
    name: "Jonathan Park",
    title: "Sales Manager, UrbanSpace Realty",
  },
  {
    quote:
      "The AI-powered resume builder exceeded our expectations. Its ability to generate tailored resume content using AI saved us hours of editing. Our clients love the professionalism it brings to their job search.",
    name: "Lisa Tran",
    title: "Career Coach & Resume Expert",
  },
  {
    quote:
      "The LMS built for EduPro provided everything we needed — from course tracking to cloud file management. It was scalable, intuitive, and worked flawlessly even with a large number of students accessing it daily.",
    name: "Dr. Michael Chen",
    title: "Director of Learning, EduPro Academy",
  },
  {
    quote:
      "Our restaurant's table booking process became 10x smoother after launching the mobile app. Customers now book and get confirmations instantly. It's well-designed, fast, and integrates perfectly with Google Maps.",
    name: "Giovanni Russo",
    title: "Owner, Trattoria Milano",
  },
  {
    quote:
      "The internal dashboard built for our analytics team simplified complex data into actionable insights. From charts to performance indicators, everything was visually clear and easy to navigate. It’s become our daily go-to tool.",
    name: "Emily Carter",
    title: "Data Analyst, StreamWorks Inc.",
  },
];
