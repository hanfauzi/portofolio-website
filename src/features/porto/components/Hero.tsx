"use client";

import { FlipWords } from "@/components/ui/flip-words";
const words = [
  "Everyone!",
  "Friends!",
  "Fellas!",
  "People!",
  "Internet Travelers!",
];

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181c1c]  relative overflow-hidden px-4 py-10 md:px-8 md:py-16">
      <div className="w-full max-w-full md:max-w-5xl space-y-4 text-white relative z-10 p-4 md:p-6">
        <div className="p-2 md:p-3 text-sm md:text-lg font-bold">
          <span className="text-white">
            Hello <FlipWords words={words} className="text-white" />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr]">
          <div className="p-2 text-green-300 text-sm md:text-base">
            Greetings.
          </div>

          <p className="p-2 text-xs md:text-sm text-justify">
            I&apos;m Muhammad Hanif Fauzi, a Full-Stack Web Developer based in
            Tangerang Selatan, Banten, proficient in JavaScript, TypeScript,
            React, Next.js, Node.js, Express.js, and PostgreSQL. With a strong
            passion for technology and problem-solving, I specialize in
            designing scalable front-end interfaces and robust back-end systems
            that deliver high performance and seamless user experience. Over
            time, I have built event management platforms, portfolio websites,
            and dynamic business applications, allowing me to sharpen my ability
            to transform complex requirements into elegant, reliable solutions.
            My development approach emphasizes clean code, performance
            optimization, and user-focused design, ensuring every project I work
            on not only meets technical standards but also creates meaningful
            value for users and businesses alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr]">
          <div className="p-2 text-green-300 text-sm md:text-base">Pages.</div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 text-xs md:text-sm underline-offset-4">
            {[
              { label: "Home", href: "#" },
              { label: "Experiences", href: "#experience" },
              { label: "Contacts", href: "#contacts" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              {
                label: "Download My Resume",
                href: "/Hanif Fauzi-resume.pdf",
                download: true,
              },
              { label: "Skills", href: "#skills" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.download ? { download: true } : {})}
                className="p-2 hover:bg-white hover:text-black text-center transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
