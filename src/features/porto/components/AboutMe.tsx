import { facts } from "../data";

export const AboutMe = () => {
  return (
    <section id="about" className="bg-canvas">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-5">
          <h2 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-6xl">
            The story
            <br />
            <span className="text-accent-text">so far</span>
          </h2>

          <dl className="mt-10 divide-y border-y">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="text-[0.9375rem] font-medium text-accent-text">{f.label}</dt>
                <dd className={`text-[0.9375rem] font-semibold ${f.label === "Status" ? "text-highlight" : "text-ink-strong"}`}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6 text-[1.05rem] leading-[1.75] text-ink-2 lg:col-span-7 lg:pt-2 lg:text-lg">
          <p>
            Hi, I&apos;m Muhammad <span className="font-semibold text-highlight">Hanif</span> Fauzi, a fullstack
            developer based in South Tangerang. I like taking a feature from the first idea all the way to the version
            people actually use, and I care as much about what runs behind the screen as what shows on it.
          </p>

          <p>
            My path into tech wasn&apos;t a straight line. I studied Islamic Family Law, then joined Purwadhika&apos;s
            fullstack bootcamp in 2025 and graduated as Best Student of Batch 33. Today I work at Notch Creative
            Digital Agency, where I helped rebuild{" "}
            <span className="font-semibold text-ink-strong">UNICEF Indonesia&apos;s donation platform</span>.
          </p>

          <p>
            That journey shaped how I build: begin with something small that works, get the foundations right, and
            let it grow with the people who use it.
          </p>

          <blockquote className="border-t pt-8 text-2xl leading-snug font-semibold tracking-[-0.02em] text-ink-strong md:text-3xl">
            &ldquo;Start small, build it right, and let it grow.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
