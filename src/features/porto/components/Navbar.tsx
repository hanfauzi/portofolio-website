"use client";
import Image from "next/image";
import { HyperText } from "@/components/magicui/hyper-text";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [time, setTime] = useState<string>("");
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
  backdrop-blur-xl 
  border-b border-white/30 
  shadow-[0_4px_20px_rgba(0,0,0,0.08)]
  flex justify-between items-center p-4 md:p-6 text-black"
    >
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-50">
        <Image
          src="/HNF.png"
          alt="Logo"
          width={100}
          height={60}
          className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
        />
      </div>

      <HyperText className="pl-[80px] font-bold md:pl-[120px] text-sm md:text-base">
        Hanif.Fauzi-Porto
      </HyperText>

      <span className="text-xs font-bold">{`UTC+7 - ${time}`}</span>
    </nav>
  );
};
