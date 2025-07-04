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
    <footer className="w-full bg-[#DEEAE4] text-[#1f2f2d] text-sm px-4 py-4">
      <div className="w-full max-w-6xl mx-auto flex flex-row justify-between items-start flex-wrap">
        {/* Kiri */}
        <div className="flex flex-col space-y-1 min-w-[150px]">
          <HyperText className="text-sm">
            Tangerang Selatan, Banten - Indonesia
          </HyperText>
          <span className="text-sm">{`UTC+7 - ${time}`}</span>
        </div>

        {/* Kanan */}
        <div className="flex flex-col text-right space-y-1 min-w-[100px]">
          <HyperText className="text-sm">Arunika Version</HyperText>
          <HyperText className="text-sm">1.0</HyperText>
        </div>
      </div>
    </footer>
  );
};
