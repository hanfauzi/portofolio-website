"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

/** Light/dark switch shared by the navbar pill and the command palette. */
export function useThemeToggle() {
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

  return { mounted, isDark, toggleTheme };
}
