"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
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
  SiRailway,
  SiCloudinary,
  SiLeaflet,
} from "react-icons/si";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const codeSnippets: Record<string, { code: string; language: string }> = {
  Javascript: {
    language: "javascript",
    code: `// JavaScript
const arr = ["Muhammad", "Hanif", "Fauzi"];

function greeting() {
  const name = arr.find((item) => item === "Hanif");
  return \`Hello, \${name}!\`;
}

console.log(greeting());`,
  },
  Typescript: {
    language: "typescript",
    code: `// TypeScript
const arr: string[] = ["Muhammad", "Hanif", "Fauzi"];

function greeting(): string {
  const name = arr.find((item) => item === "Hanif");
  return \`Hello, \${name}!\`;
}

console.log(greeting());`,
  },
};

const Skills = () => {
  const [selectedLang, setSelectedLang] =
    useState<keyof typeof codeSnippets>("Javascript");
  const { resolvedTheme } = useTheme();

  const editorTheme = resolvedTheme === "dark" ? "vs-dark" : "light";

  return (
    <section
      id="skills"
      className="text-black dark:text-white py-16 px-4 md:px-8 border-t border-white/40 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            Tools and technologies I work with across frontend, backend, and
            deployment.
          </p>
        </div>

        {/* CARD CODE EDITOR */}
        <div
          className="
          rounded-2xl border 
          border-gray-200 dark:border-slate-700 
          bg-linear-to-br from-slate-50 via-slate-100 to-slate-200 
          dark:from-slate-900 dark:via-slate-950 dark:to-black
          px-4 py-6 
          text-black dark:text-white 
          shadow-xl
        "
        >
          <div className="mb-4 inline-flex flex-wrap gap-3 border-b border-white/10 pb-3">
            {Object.keys(codeSnippets).map((lang) => {
              const active = selectedLang === lang;
              return (
                <button
                  key={lang}
                  onClick={() =>
                    setSelectedLang(lang as keyof typeof codeSnippets)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                    active
                      ? "bg-black text-white dark:bg-white dark:text-slate-900"
                      : "bg-white/70 text-slate-800 hover:bg-white dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/40 dark:border-white/10 h-[260px] md:h-[300px] bg-white/80 dark:bg-transparent">
            <MonacoEditor
              key={selectedLang}
              language={codeSnippets[selectedLang].language}
              value={codeSnippets[selectedLang].code}
              theme={editorTheme}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        {/* TECH STACKS */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold">Tech Stacks</h3>

          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 justify-items-center text-2xl md:text-3xl">
            {[
              {
                icon: TbBrandNextjs,
                name: "Next.js",
                href: "https://nextjs.org/",
              },
              { icon: TbBrandReact, name: "React", href: "https://react.dev/" },
              {
                icon: TbBrandTailwind,
                name: "Tailwind CSS",
                href: "https://tailwindcss.com/",
              },
              {
                icon: TbBrandNodejs,
                name: "Node.js",
                href: "https://nodejs.org/",
              },
              {
                icon: SiExpress,
                name: "Express.js",
                href: "https://expressjs.com/",
              },
              {
                icon: SiPostgresql,
                name: "PostgreSQL",
                href: "https://postgresql.org/",
              },
              {
                icon: SiPrisma,
                name: "Prisma ORM",
                href: "https://prisma.io/",
              },
              {
                icon: SiRailway,
                name: "Railway",
                href: "https://railway.app/",
              },
              {
                icon: SiCloudinary,
                name: "Cloudinary",
                href: "https://cloudinary.com/",
              },
              {
                icon: SiLeaflet,
                name: "Leaflet Maps",
                href: "https://leafletjs.com/",
              },
              {
                icon: SiJavascript,
                name: "JavaScript",
                href: "https://developer.mozilla.org/",
              },
              {
                icon: SiTypescript,
                name: "TypeScript",
                href: "https://typescriptlang.org/",
              },
              {
                icon: SiPostman,
                name: "Postman",
                href: "https://postman.com/",
              },
              {
                icon: TbBrandGithub,
                name: "Git & GitHub",
                href: "https://github.com/",
              },
              { icon: SiVercel, name: "Vercel", href: "https://vercel.com/" },
            ].map(({ icon: Icon, name, href }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    target="_blank"
                    aria-label={name}
                    className="transition-transform hover:-translate-y-1 hover:scale-110"
                  >
                    <Icon title={name} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-[#181c1c] text-xs md:text-sm text-white">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
