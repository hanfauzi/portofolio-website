"use client";

import { motion } from "framer-motion";
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

        {/* Header */}
        <motion.div
         
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={1}
          className="p-2 md:p-3 text-sm md:text-lg font-bold"
        >
          <span className="text-white">
            Hello <FlipWords words={words} className="text-white" />
          </span>
        </motion.div>

        {/* Greetings Section */}
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr]">
          <div
        
            className="p-2 text-green-300 text-sm md:text-base"
          >
            Greetings.
          </div>

          <p
            className="p-2 text-xs md:text-sm text-justify"
          >
            I&apos;m Muhammad Hanif Fauzi, a Full-Stack Web Developer based in
            Tangerang Selatan, Banten, with a passion for building scalable and
            high-performance web solutions tailored to real business needs.
            Proficient in modern technologies like React, Next.js, Node.js, and
            MongoDB, I specialize in crafting responsive front-end interfaces
            and robust back-end architectures. With a strong focus on clean
            code, performance optimization, and user experience, I aim to turn
            complex ideas into elegant, reliable applications that drive
            meaningful results.
          </p>
        </div>

        {/* Pages Section */}
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr]">
          <div

            className="p-2 text-green-300 text-sm md:text-base"
          >
            Pages.
          </div>

          <div

            className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 text-xs md:text-sm underline-offset-4"
          >
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
              <motion.a
                key={link.label}
                href={link.href}
                {...(link.download ? { download: true } : {})}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white hover:text-black text-center transition-all duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
