"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin bar pinned to the top of the viewport that fills as the page is scrolled. Mounted once in the layout, so every page has it. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  // A light spring so the bar glides instead of ticking with every wheel step.
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
    />
  );
}
