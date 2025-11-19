"use client";

import React, { useEffect, useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";

export const Footer = () => {
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
    <footer
      className="w-full 
  bg-gradient-to-t from-[#dedfe2] via-[#f0f0f0] to-[#ffffff]
  backdrop-blur-lg 
  border-t border-black/20 
  text-black text-sm px-4 py-6 
  shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="flex flex-col space-y-1 min-w-[150px]">
          <HyperText className="text-xs md:text-sm">
            Tangerang Selatan, Banten · Indonesia
          </HyperText>
          <span className="text-xs md:text-sm text-gray-500">{`UTC+7 · ${time}`}</span>
        </div>

        <div className="flex flex-col md:items-end space-y-1 min-w-[100px]">
          <HyperText className="text-xs md:text-sm">Arunika Version</HyperText>
          <HyperText className="text-xs md:text-sm">2.0</HyperText>
        </div>
      </div>
    </footer>
  );
};
