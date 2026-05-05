"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsArrowUpRight, BsCalendarCheck, BsDownload, BsChatText } from "react-icons/bs";
import Link from "next/link";

export default function ContactSection() {
  const socials = [
    { label: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/hnfzii/", color: "bg-lime-200/60 dark:bg-white/5 text-lime-950 dark:text-foreground/70", size: "col-span-2 row-span-1 md:col-span-2 md:row-span-2" },
    { label: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muhammad-hanif-fauzi-10223a207/", color: "bg-lime-200/60 dark:bg-white/5 text-lime-950 dark:text-foreground/70", size: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
    { label: "GitHub", icon: <FaGithub />, href: "https://github.com/hanfauzi", color: "bg-lime-200/60 dark:bg-white/5 text-lime-950 dark:text-foreground/70", size: "col-span-2 row-span-1 md:col-span-1 md:row-span-1" },
    { label: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/6281384878500", color: "bg-lime-200/60 dark:bg-white/5 text-lime-950 dark:text-foreground/70", size: "col-span-2 row-span-1" },
  ];

  return (
    <section id="contacts" className="py-32 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          {/* Left Side: Big Typography Heading */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 self-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.8]"
            >
              LETS <br />
              <span className="text-primary italic">TALK</span>
            </motion.h2>
            <p className="text-xl text-foreground/60 font-medium leading-tight max-w-xs">
              Open for collaborations, new opportunities, or just a casual chat.
            </p>
          </div>

          {/* Right Side: Unique Bento Social Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
              {socials.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative flex flex-col justify-between p-8 md:p-12 rounded-4xl border border-foreground/10 shadow-sm transition-all duration-500 hover:rotate-1 active:scale-95 overflow-hidden ${item.size} ${item.color}`}
                >
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-4xl md:text-6xl">{item.icon}</span>
                    <BsArrowUpRight className="text-3xl opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-xs font-black uppercase tracking-[0.3em] opacity-40 mb-2 block">Connect on</span>
                    <span className="text-3xl md:text-5xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </div>

                  {/* Decorative Background Icon */}
                  <div className="absolute bottom-[-20%] right-[-10%] text-9xl md:text-[12rem] opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 rotate-[-15deg] group-hover:rotate-0 pointer-events-none">
                    {item.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
