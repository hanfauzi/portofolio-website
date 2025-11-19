"use client";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const words = ["Software Engineer", "Full-stack Developer"];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500">
            Hi, I&apos;m
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Muhammad Hanif Fauzi
            </span>
          </h1>

          <FlipWords
            words={words}
            className="text-sm md:text-base text-gray-600"
          />

          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start pt-2">
            <Link
              href="#projects"
              className="px-5 py-2.5 text-sm md:text-base rounded-full bg-black text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-[1px] transition"
            >
              View Portfolio
            </Link>

            <Link
              href="#contacts"
              className="px-5 py-2.5 text-sm md:text-base rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>

            <a
              href="/Muhammad Hanif Fauzi CV.pdf"
              download
              className="px-5 py-2.5 text-sm md:text-base rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative w-[260px] h-[320px] md:w-[320px] md:h-[380px] flex items-center justify-center">
          <div
            className="absolute inset-0 -z-10 rounded-[2rem]
            bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0,_transparent_70%)]"
          />

          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-200 shadow-xl bg-gray-100">
            <Image
              src="/fotohanif.jpeg"
              alt="Muhammad Hanif Fauzi"
              fill
              sizes="(min-width: 768px) 320px, 260px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
