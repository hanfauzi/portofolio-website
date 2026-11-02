"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

// Glass is used on these two floating pills only, because they sit on top of the hero photo.
const pill =
  "rounded-full border border-black/10 bg-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/15 dark:bg-black/70 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.4)]";

export const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    // Cross-fade the whole page between themes instead of snapping every color at once.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("startViewTransition" in document)) return setTheme(next);
    document.startViewTransition(() => flushSync(() => setTheme(next)));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-16 lg:py-6">
      <div className={`inline-flex items-center gap-4 px-4 py-2.5 sm:gap-5 sm:px-5 ${pill}`}>
        {/* Brand mark, deliberately not a link: there is no other page for it to point to. */}
        {/* HNF logo kit, variant A: the light-theme and dark-theme colour versions swap with the theme */}
        <Image
          src="/brand/hnf-light.svg"
          alt="Hanif Fauzi"
          width={347}
          height={256}
          priority
          className="h-8 w-auto shrink-0 dark:hidden"
        />
        <Image
          src="/brand/hnf-dark.svg"
          alt="Hanif Fauzi"
          width={347}
          height={256}
          priority
          className="hidden h-8 w-auto shrink-0 dark:block"
        />

        <span className="hidden h-[18px] w-px bg-black/10 md:block dark:bg-white/20" aria-hidden="true" />

        <nav aria-label="Sections" className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.825rem] font-medium whitespace-nowrap text-ink-2 transition-colors hover:text-ink-strong"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className={`inline-flex cursor-pointer items-center gap-3 px-4 py-2.5 text-[0.625rem] font-bold tracking-[0.25em] uppercase ${pill}`}
      >
        <span className={`transition-colors duration-500 ${mounted && !isDark ? "text-ink-strong" : "text-ink-2/60"}`}>
          Light
        </span>
        <span className="relative h-px w-8 overflow-hidden bg-ink-2/30" aria-hidden="true">
          <motion.span
            initial={false}
            animate={{ x: isDark ? 16 : -16 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="absolute inset-0 bg-ink-strong"
          />
        </span>
        <span className={`transition-colors duration-500 ${isDark ? "text-ink-strong" : "text-ink-2/60"}`}>Dark</span>
      </button>
    </header>
  );
};
