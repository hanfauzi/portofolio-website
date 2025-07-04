"use client";

import { useState } from "react";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandNodejs,
  TbBrandHtml5,
  TbBrandReact,
  TbBrandDjango,
  TbBrandAngularFilled,
  TbBrandFramer,
} from "react-icons/tb";
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
    code: `// Javascript
const arr = ["Muhammad", "Hanif", "Fauzi"];

function greeting() {
  const name = arr.find((item) => item === "Hanif");
  return \`Hello, \${name}!\`;
}

console.log(greeting()); // Hello, Hanif!`,
  },
  Typescript: {
    language: "typescript",
    code: `// Typescript
const arr: string[] = ["Muhammad", "Hanif", "Fauzi"];

function greeting(): string {
  const name : string | undefined = arr.find((item) => item === "Hanif");
  return \`Hello, \${name}!\`;
}

console.log(greeting()); // Hello, Hanif!`,
  },
};

const Skills = () => {
  const [selectedLang, setSelectedLang] =
    useState<keyof typeof codeSnippets>("Javascript");

  return (
    <section
      id="skills"
      className="bg-[#181c1c] text-white py-12 px-4 md:py-16 md:px-8 text-center text-sm md:text-base"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Skills</h2>
      <p className="text-white mb-8">
        Just a few of my skills using some programming lang that I&apos;ve
        learned and mastered.
      </p>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto border border-white rounded-2xl px-4 py-4">
        <div className="mb-6 inline-flex flex-wrap gap-4 border-b border-white pb-2">
          {Object.keys(codeSnippets).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang as keyof typeof codeSnippets)}
              className={`pb-1 font-semibold ${
                selectedLang === lang
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Monaco Editor */}
        <div className="mx-auto w-full max-w-full md:max-w-2xl rounded-lg shadow-lg overflow-hidden h-[300px]">
          <MonacoEditor
            key={selectedLang}
            language={codeSnippets[selectedLang].language}
            value={codeSnippets[selectedLang].code}
            theme="vs-dark"
            options={{
              readOnly: false,
              minimap: { enabled: false },
              fontSize: 14,
              scrollBeyondLastLine: true,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6">Tech Stacks</h3>

        <div className="flex flex-wrap justify-center gap-6 text-cyan-100 text-3xl md:text-4xl">
          {[
            {
              icon: TbBrandNextjs,
              name: "Next.js",
              href: "https://nextjs.org/",
            },
            {
              icon: TbBrandTailwind,
              name: "Tailwind CSS",
              href: "https://tailwindcss.com/",
            },
            {
              icon: TbBrandNodejs,
              name: "Node.js",
              href: "https://nodejs.org/en",
            },
            { icon: TbBrandHtml5, name: "HTML", href: "https://html.com/" },
            { icon: TbBrandReact, name: "React", href: "https://react.dev/" },
            {
              icon: TbBrandAngularFilled,
              name: "Angular",
              href: "https://angular.dev/",
            },
            {
              icon: TbBrandDjango,
              name: "Django",
              href: "https://www.djangoproject.com/",
            },
            {
              icon: TbBrandFramer,
              name: "Framer",
              href: "https://motion.dev/",
            },
          ].map(({ icon: Icon, name, href }) => (
            <Tooltip key={name}>
              <TooltipTrigger>
                <Link
                  href={href}
                  target="_blank"
                  aria-label={name} // ✅ Ini yang bikin lolos audit aksesibilitas
                >
                  <Icon
                    className="hover:scale-150 transition-transform"
                    title={name} // Opsional
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#181c1c]  text-xs md:text-sm">
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
