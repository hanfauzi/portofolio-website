"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="group flex flex-col leading-[0.7] transition-all">
            <span className="text-base md:text-lg font-black tracking-tighter">MUHAMMAD</span>
            <span className="text-base md:text-lg font-black tracking-tighter text-primary">HANIF FAUZI</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {["About", "Skills", "Projects", "Contacts"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-black uppercase tracking-[0.3em] text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-foreground/30">Local Time</span>
            <span className="text-xs font-black">{time} <span className="text-[10px] text-primary">WIB</span></span>
          </div>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center gap-4 py-2"
            aria-label="Toggle theme"
          >
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
              <span className={`transition-all duration-700 ${mounted && resolvedTheme === "light" ? "text-primary" : "text-foreground/20"}`}>
                Light
              </span>
              
              <div className="relative w-8 h-px bg-foreground/10 overflow-hidden">
                <motion.div 
                  animate={{ x: mounted && resolvedTheme === "dark" ? 20 : -20 }}
                  transition={{ type: "spring", stiffness: 200, damping: 40 }}
                  className="absolute inset-0 bg-primary"
                />
              </div>

              <span className={`transition-all duration-700 ${mounted && resolvedTheme === "dark" ? "text-primary" : "text-foreground/20"}`}>
                Dark
              </span>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
