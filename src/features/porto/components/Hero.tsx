"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Layer */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none select-none">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
          style={{
            maskImage: "linear-gradient(to left, black 20%, transparent 80%), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 80%), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in"
          }}
        >
          <Image
            src="/fotohanif.jpeg"
            alt="Background Layer"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-10"
          >
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm font-black tracking-[0.3em] uppercase text-primary"
              >
                Full-stack Developer
              </motion.p>
   
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-black tracking-tighter leading-[0.8] text-foreground">
                MUHAMMAD <br />
                <span className="text-primary italic">HANIF FAUZI</span>
              </h1>
   
            </div>
   
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="#projects"
                className="group relative px-7 py-3.5 bg-primary text-background rounded-lg font-black text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
              >
                Explore Projects
              </Link>
   
              <Link
                href="#contacts"
                className="px-7 py-3.5 border border-foreground rounded-lg font-black text-base hover:bg-foreground hover:text-background transition-all active:scale-95"
              >
                Get in Touch
              </Link>

              <a
                href="/Muhammad Hanif Fauzi CV - 2026.pdf"
                download="Muhammad_Hanif_Fauzi_CV.pdf"
                target="_blank"
                className="group flex items-center gap-3 px-7 py-3.5 bg-foreground/5 border border-foreground/10 rounded-lg font-black text-base hover:bg-foreground hover:text-background transition-all active:scale-95"
              >
                <FaRegFilePdf className="text-lg group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Mobile Image Only */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:hidden"
          >
            <div className="relative aspect-square rounded-4xl overflow-hidden border border-foreground/10 shadow-xl bg-primary/5">
              <Image
                src="/fotohanif.jpeg"
                alt="Muhammad Hanif Fauzi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
