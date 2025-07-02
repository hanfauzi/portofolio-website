"use client";

import React, { useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "nifauzi45@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const socials = [
    {
      label: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/hnfzii/",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/6281384878500", // tanpa +, ganti dengan nomor kamu
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/hanfauzi",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/muhammad-hanif-fauzi-10223a207/",
    },
  ];

  return (
    <div
      id="contacts"
      className="min-h-screen bg-[#181c1c] text-white font-mono px-4 py-12 md:px-6 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Links */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:col-span-1">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between border border-[#313838] hover:border-white rounded-2xl p-4 md:p-6 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-full border border-[#313838] flex items-center justify-center hover:border-white text-white text-lg">
                  {item.icon}
                </div>
                <BsArrowUpRight className="text-white text-sm" />
              </div>
              <HyperText className="mt-8 md:mt-12 text-sm font-mono text-white">
                {item.label}
              </HyperText>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="border border-[#313838] rounded-2xl p-4 md:p-8 space-y-6 md:col-span-2">
          <h3 className="text-base font-semibold">Drop me a message:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none"
          />

          <textarea
            placeholder="Your message.."
            rows={4}
            className="w-full bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none"
          ></textarea>

          <button className="bg-[#395b64] w-full py-2 rounded-xl text-white text-sm font-medium hover:bg-[#a5c8ca] hover:text-[#0d0f0f] transition-all mt-2">
            <span className="text-sm">
              <span className="text-sm text-white hover:text-[#0d0f0f] transition-all">
                Submit
              </span>
            </span>
          </button>

          <div className="text-sm text-white mt-4">
            or email me at:
            <button
              onClick={handleCopy}
              className={`mt-2 w-full border border-[#313838] p-2 rounded-xl flex items-center gap-2 text-sm transition-all duration-300 
              ${
                copied
                  ? "bg-[#a5c8ca] text-[#0d0f0f]"
                  : "hover:bg-[#a5c8ca] hover:text-[#0d0f0f]"
              }`}
            >
              <FaEnvelope className="text-sm" />
              <span className="text-sm">
                <span >
                  {copied ? "Copied!" : email}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
