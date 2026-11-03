"use client";

import { useEffect, useState } from "react";

// Sections that own a backdrop. The hero has none: its photo and scrim are its background.
const sections = ["about", "work", "projects", "skills", "contact"] as const;

/**
 * Fixed background behind the page that cross-fades to the backdrop of whichever section
 * crosses the middle of the viewport. The pattern for each lives in globals.css (.backdrop-*).
 */
export const SectionBackdrop = () => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-backdrop]");
    // A zero-height band at the vertical centre: exactly one section intersects it at a time.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.getAttribute("data-backdrop"));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      {sections.map((s) => (
        <div key={s} className={`backdrop-layer backdrop-${s}`} data-active={active === s} />
      ))}
    </div>
  );
};
