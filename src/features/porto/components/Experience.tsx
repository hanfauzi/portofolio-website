"use client";
import { motion } from "framer-motion";

export const TimelineExperience = () => {
const experiences = [
  {
    date: "Jan 2026 - Present",
    title: "Junior Web Developer",
    company: "NOTCH Creative Digital Agency",
    color: "border-green-500 dark:border-[#3c3c3c]",
  },
  {
    date: "May 2025 - Oct 2025",
    title: "Full-stack Web Development Student",
    company: "Purwadhika Digital Technology School",
    description:
      "Intensive bootcamp focusing on modern web technologies and agile methodologies.",
    color: "border-blue-500 dark:border-[#1c69d4]",
  },
  {
    date: "Oct 2020 - Oct 2024",
    title: "Islamic Family Law",
    company: "STDI Imam Syafi'i",
    color: "border-orange-500 dark:border-[#e22718]",
  },
];

  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.8]"
            >
              Professional <br />
              <span className="text-primary italic">Journey</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-7 space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative pl-12 border-l-2 ${exp.color} transition-all hover:pl-16`}
              >
                <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-foreground shadow-md" />
                
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">
                    {exp.date}
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-base font-black text-primary">
                    {exp.company}
                  </p>
                  <p className="text-base text-foreground/60 font-medium leading-tight max-w-lg">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
