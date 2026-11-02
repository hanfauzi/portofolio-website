import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-6 lg:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-6xl">
            Featured
            <br />
            <span className="text-accent-text">Projects</span>
          </h2>
          <a
            href="https://github.com/hanfauzi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink-2 transition-colors hover:text-ink-strong"
          >
            All repositories on GitHub
            <FiArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        {/* Numbered list, newest first: the large index numeral is the style.ai.id "top today" device. */}
        <ol className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.name} className="group flex items-stretch">
              <span
                aria-hidden="true"
                className="-mr-3 shrink-0 self-start font-index text-[4.5rem] leading-none font-black tracking-[-0.05em] text-index transition-colors duration-300 select-none group-hover:text-highlight sm:text-[5.375rem]"
              >
                {i + 1}
              </span>

              <article className="relative flex min-w-0 flex-1 flex-col pt-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[9px] bg-subtle ring-1 ring-ink/5 transition-transform duration-300 ease-out-soft ring-inset group-hover:-translate-y-[3px]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(min-width: 768px) 520px, 85vw"
                      className="object-cover"
                    />
                  ) : p.logo ? (
                    <div className="flex h-full items-center justify-center" style={{ backgroundColor: p.logo.bg }}>
                      <Image src={p.logo.src} alt={`${p.name} logo`} width={256} height={256} className="h-[58%] w-auto" />
                    </div>
                  ) : (
                    <div className="flex h-full flex-col justify-end p-6">
                      <p className="text-3xl font-semibold tracking-[-0.03em] text-ink-strong">{p.name}</p>
                      <p className="mt-1 text-sm text-ink-2">{p.tagline}</p>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="truncate text-lg font-semibold tracking-[-0.01em] text-ink-strong">{p.name}</h3>
                  <span className="shrink-0 rounded-[5px] bg-subtle px-2 py-0.5 text-[0.6875rem] font-semibold text-ink-2">
                    {p.year}
                  </span>
                </div>
                <p className="text-[0.8125rem] text-ink-2">{p.tagline}</p>

                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{p.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-sm border px-2 py-0.5 text-[0.6875rem] font-semibold text-ink-2">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-5 pt-5">
                  {p.story && (
                    <Link
                      href={`/projects/${p.story}`}
                      className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-ink-strong underline-offset-4 hover:underline"
                    >
                      Read the story
                      <FiArrowRight className="size-3.5 text-highlight" aria-hidden="true" />
                      <span className="sr-only"> of {p.name}</span>
                    </Link>
                  )}
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[0.8125rem] font-semibold text-accent-text underline-offset-4 hover:underline"
                    >
                      {l.label}
                      <FiArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only"> for {p.name}</span>
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
