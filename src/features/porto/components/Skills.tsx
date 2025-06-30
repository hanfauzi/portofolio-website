"use client";

import { useState } from "react";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { TbBrandAngularFilled } from "react-icons/tb";
import { TbBrandFramer } from "react-icons/tb";
import dynamic from "next/dynamic";

// Monaco hanya di-load di client
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
    <section id="skills" className="bg-[#181c1c] text-white py-16 px-4 text-center font-mono ">
      <h2 className="text-3xl font-bold font-mono mb-2">Skills</h2>
      <p className="text-gray-300 mb-8 ">
        Just a few of my skills using some programming lang that I've learned
        and mastered.
      </p>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto border border-white ">
        <div>
          <div className="mb-6 inline-flex space-x-4 border-b border-white">
            {Object.keys(codeSnippets).map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  setSelectedLang(lang as keyof typeof codeSnippets)
                }
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

          <div className="mx-auto max-w-2xl rounded-lg shadow-lg overflow-hidden h-[300px]">
            <MonacoEditor
              key={selectedLang} // ✅ trik agar re-mount saat bahasa berubah
              language={codeSnippets[selectedLang].language}
              value={codeSnippets[selectedLang].code}
              theme="vs-dark"
              options={{
                readOnly: false,
                minimap: { enabled: false },
                fontSize: 16,
                scrollBeyondLastLine: true,
                automaticLayout: true,
              }}
            />
          </div>
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Tech Stacks</h3>
        <div className="flex flex-wrap justify-center gap-6 text-cyan-100 text-4xl">
          <span role="img" aria-label="Next.js">
            <TbBrandNextjs />
          </span>
          <TbBrandTailwind />
          <TbBrandNodejs />
          <TbBrandHtml5 />
          <TbBrandReact />
          <TbBrandAngularFilled />
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-cyan-100 text-4xl mt-6">
          <TbBrandDjango />
          <TbBrandFramer />
        </div>
      </div>
    </section>
  );
};

export default Skills;
