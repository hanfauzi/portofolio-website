import { FiArrowUpRight } from "react-icons/fi";
import { journey } from "../data";

export const TimelineExperience = () => {
  return (
    <section id="work" data-backdrop="work" className="border-t">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-6xl lg:sticky lg:top-32">
            Professional
            <br />
            <span className="text-accent-text">Journey</span>
          </h2>
        </div>

        {/* Timeline: the vertical line and dots mark the order of events, newest first. */}
        <ol className="relative space-y-16 border-l pl-8 sm:pl-12 lg:col-span-8">
          {journey.map((m, i) => (
            <li key={m.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[calc(2rem+5px)] size-[9px] rounded-full sm:-left-[calc(3rem+5px)] ${
                  i === 0 ? "bg-highlight ring-4 ring-highlight/20" : "bg-ink-2/50"
                }`}
              />
              <p className={`text-[0.8125rem] font-medium ${i === 0 ? "text-highlight-text" : "text-ink-2"}`}>{m.period}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink-strong md:text-[1.75rem]">
                {m.title}
              </h3>
              <p className="mt-1 text-[0.9375rem] font-semibold text-accent-text">{m.place}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2">{m.summary}</p>

              {m.highlights && (
                <div className="mt-8 space-y-4">
                  {m.highlights.map((h) => (
                    <div key={h.name} className="rounded-lg border bg-surface p-5 sm:p-6">
                      <h4 className="text-[0.9375rem] font-semibold text-ink-strong">{h.name}</h4>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{h.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {m.links && (
                <div className="mt-4 flex gap-5">
                  {m.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[0.8125rem] font-semibold text-accent-text underline-offset-4 hover:underline"
                    >
                      {l.label}
                      <FiArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
