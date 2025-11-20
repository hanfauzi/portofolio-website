"use client";

import Image from "next/image";
import { HyperText } from "@/components/magicui/hyper-text";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

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
      const localTime = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(localTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full 
      bg-[rgba(255,255,255,0.25)]
      dark:bg-[rgba(15,15,15,0.75)]
      backdrop-blur-xl 
      border-b border-white/30 dark:border-white/10
      shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      flex justify-between items-center p-4 md:p-6 text-black dark:text-white"
    >
<div className="absolute left-5 top-1/2 -translate-y-1/2 z-50">
  <Image
    src="/HNF.png"
    alt="Logo"
    width={100}
    height={60}
    className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] dark:hidden"
  />

  <Image
    src="/HNF White.png"
    alt="Logo White"
    width={100}
    height={60}
    className="hidden dark:block w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
  />
</div>


      <HyperText className="pl-20 font-bold md:pl-[120px] text-sm md:text-base">
        Hanif.Fauzi-Porto
      </HyperText>

      <div className="flex items-center gap-4">
        <span className="text-xs font-bold">{`UTC+7 - ${time}`}</span>

        {mounted && (
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <Switch
              checked={resolvedTheme === "dark"}
              onCheckedChange={(checked: boolean) => {
                setTheme(checked ? "dark" : "light");
              }}
              aria-label="Toggle dark mode"
            />
            <Sun className="h-4 w-4" />
          </div>
        )}
      </div>
    </nav>
  );
};
