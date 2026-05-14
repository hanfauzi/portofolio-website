"use client";

import { motion } from "framer-motion";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandGithub,
} from "react-icons/tb";
import {
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiPrisma,
  SiDocker,
  SiNestjs,
  SiRedis,
} from "react-icons/si";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techStacks = [
  { icon: TbBrandNextjs, name: "Next.js", href: "https://nextjs.org/", color: "bg-black text-white" },
  { icon: SiNestjs, name: "NestJS", href: "https://nestjs.com/", color: "bg-red-100 text-red-600 shadow-red-100" },
  { icon: TbBrandReact, name: "React", href: "https://react.dev/", color: "bg-blue-100 text-blue-600 shadow-blue-100" },
  { icon: TbBrandTailwind, name: "Tailwind CSS", href: "https://tailwindcss.com/", color: "bg-cyan-100 text-cyan-600 shadow-cyan-100" },
  { icon: TbBrandNodejs, name: "Node.js", href: "https://nodejs.org/", color: "bg-green-100 text-green-600 shadow-green-100" },
  { icon: SiExpress, name: "Express.js", href: "https://expressjs.com/", color: "bg-white text-black border-2" },
  { icon: SiPostgresql, name: "PostgreSQL", href: "https://postgresql.org/", color: "bg-indigo-100 text-indigo-600 shadow-indigo-100" },
  { icon: SiRedis, name: "Redis", href: "https://redis.io/", color: "bg-rose-100 text-rose-600 shadow-rose-100" },
  { icon: SiDocker, name: "Docker", href: "https://www.docker.com/", color: "bg-sky-100 text-sky-600 shadow-sky-100" },
  { icon: SiPrisma, name: "Prisma ORM", href: "https://prisma.io/", color: "bg-teal-100 text-teal-600 shadow-teal-100" },
  { icon: SiJavascript, name: "JavaScript", href: "https://developer.mozilla.org/", color: "bg-yellow-100 text-yellow-700 shadow-yellow-100" },
  { icon: SiTypescript, name: "TypeScript", href: "https://typescriptlang.org/", color: "bg-blue-200 text-blue-800 shadow-blue-200" },
  { icon: SiPostman, name: "Postman", href: "https://postman.com/", color: "bg-orange-100 text-orange-600 shadow-orange-100" },
  { icon: TbBrandGithub, name: "GitHub", href: "https://github.com/", color: "bg-white text-black border-2" },
  { icon: SiVercel, name: "Vercel", href: "https://vercel.com/", color: "bg-black text-white" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-foreground"
            >
              Mastered <br />
              <span className="text-primary italic">Technologies</span>
            </motion.h2>
            <p className="text-2xl text-foreground/60 max-w-md font-medium leading-tight">
              Specializing in the <span className="text-foreground font-black italic">modern web ecosystem</span>, focused on performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {techStacks.map(({ icon: Icon, name, href, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      target="_blank"
                      className={`flex items-center justify-center aspect-square rounded-md border border-foreground/10 hover:scale-110 active:scale-95 transition-all duration-300 group shadow-sm ${color} dark:bg-card dark:text-foreground`}
                    >
                      <Icon className="text-4xl md:text-5xl transition-transform group-hover:rotate-12" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-foreground text-background font-black uppercase tracking-widest text-[10px] py-2 px-4 rounded-full">
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
