import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { caseStudies, getCaseStudy } from "@/features/porto/case-studies";
import { Footer } from "@/features/porto/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: `${study.name} | Muhammad Hanif Fauzi`,
    description: study.intro,
    openGraph: { title: `${study.name}: ${study.tagline}`, description: study.intro },
  };
}

// Section row: heading on the left, content on the right, same grid as the home page sections.
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink-strong lg:col-span-4 md:text-3xl">{title}</h2>
      <div className="lg:col-span-8">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <main className="mx-auto max-w-[1240px] px-4 pt-32 pb-8 sm:px-6 lg:pt-40">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-ink-2 transition-colors hover:text-ink-strong"
        >
          <FiArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>

        <header className="mt-10 grid gap-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="text-[0.95rem] font-semibold text-accent-text">{study.tagline}</p>
            <h1 className="mt-3 text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-7xl">
              {study.name}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.75] text-ink-2 lg:text-lg">{study.intro}</p>

            {study.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-5">
                {study.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.9rem] font-semibold text-accent-text underline-offset-4 hover:underline"
                  >
                    {l.label}
                    <FiArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div
              className="flex aspect-[16/10] items-center justify-center rounded-[14px] ring-1 ring-ink/5 ring-inset"
              style={{ backgroundColor: study.logo.bg }}
            >
              <Image src={study.logo.src} alt={`${study.name} logo`} width={256} height={256} priority className="h-[52%] w-auto" />
            </div>

            <dl className="mt-8 divide-y border-y">
              {study.facts.map((f) => (
                <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                  <dt className="text-[0.9375rem] font-medium text-accent-text">{f.label}</dt>
                  <dd
                    className={`text-right text-[0.9375rem] font-semibold ${
                      f.label === "Status" ? "text-highlight" : "text-ink-strong"
                    }`}
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <Block title="Why I built it">
          <div className="space-y-5 text-[1.05rem] leading-[1.75] text-ink-2">
            {study.problem.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Block>

        <Block title={study.flow.title}>
          <ol className="space-y-6">
            {study.flow.steps.map((s, i) => (
              <li key={s} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="w-8 shrink-0 font-index text-3xl leading-none font-black tracking-[-0.05em] text-accent-text"
                >
                  {i + 1}
                </span>
                <p className="pt-0.5 text-[1.05rem] leading-relaxed text-ink-2">{s}</p>
              </li>
            ))}
          </ol>
        </Block>

        {study.features && (
          <Block title="What it does">
            <ul className="grid gap-4 sm:grid-cols-2">
              {study.features.map((f) => (
                <li key={f.name} className="rounded-[10px] border bg-surface p-5">
                  <h3 className="text-[0.9375rem] font-semibold text-ink-strong">{f.name}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{f.text}</p>
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="The hard parts">
          <ul className="space-y-4">
            {study.hardParts.map((h) => (
              <li key={h.name} className="rounded-[10px] border bg-surface p-6">
                <h3 className="text-base font-semibold text-ink-strong">{h.name}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{h.text}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="What changed">
          <div className="space-y-5 text-[1.05rem] leading-[1.75] text-ink-2">
            {study.outcome.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Block>

        <Block title="What I learned">
          <ul className="space-y-5">
            {study.lessons.map((l) => (
              <li key={l} className="border-l-2 border-highlight pl-5 text-xl leading-snug font-semibold tracking-[-0.01em] text-ink-strong">
                {l}
              </li>
            ))}
          </ul>
        </Block>

        {next.slug !== study.slug && (
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-4 flex items-center justify-between gap-6 border-t py-12"
          >
            <span>
              <span className="block text-[0.85rem] font-semibold text-ink-2">Next story</span>
              <span className="mt-1 block text-3xl font-semibold tracking-[-0.03em] text-ink-strong transition-colors group-hover:text-accent-text md:text-4xl">
                {next.name}
              </span>
            </span>
            <FiArrowRight
              className="size-7 shrink-0 text-accent-text transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        )}
      </main>
      <Footer />
    </>
  );
}
