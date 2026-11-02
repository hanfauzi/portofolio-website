import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "../data";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[max(100svh,640px)] overflow-hidden bg-canvas lg:min-h-[max(100svh,720px)]">
      {/* Portrait: full-bleed on mobile, right-hand side on desktop, faded into the canvas by .hero-scrim */}
      <div className="absolute inset-0 lg:left-auto lg:w-[62%]">
        <Image
          src="/fotohanif.jpeg"
          alt="Muhammad Hanif Fauzi"
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-[50%_15%]"
        />
      </div>
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end px-4 pt-28 pb-14 sm:px-8 lg:items-center lg:px-16 lg:pb-0">
        <div className="max-w-[560px]">
          <p className="mb-3 text-[0.95rem] font-semibold text-accent-text">
            {profile.role}
          </p>

          <h1 className="text-[2.75rem] leading-[1.04] font-semibold tracking-[-0.04em] text-ink-strong sm:text-6xl lg:text-[4.25rem]">
            Muhammad
            <br />
            Hanif Fauzi
          </h1>

          <p className="mt-6 max-w-[440px] text-base leading-relaxed text-ink-2 lg:text-[1.05rem]">
            I build web applications from start to finish, turning ideas into products that are reliable, easy to use
            and ready to grow.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.cv}
              download="Muhammad_Hanif_Fauzi_CV.pdf"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#09090b] px-6 text-[0.85rem] font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-[#27272a] dark:bg-white dark:text-[#09090b] dark:hover:bg-slate-200"
            >
              <FiDownload className="size-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface/80 px-6 text-[0.85rem] font-semibold text-ink-strong transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-surface-hover"
            >
              <FaGithub className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <a
            href="#work"
            className="group mt-8 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-ink-2 transition-colors hover:text-ink-strong"
          >
            See my work and projects
            <FiArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
