import { useLocale, useTranslations } from "next-intl";
import { getPorto } from "../data";

export const AboutMe = () => {
  const t = useTranslations("about");
  const { facts } = getPorto(useLocale());

  return (
    <section id="about" data-backdrop="about">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-5">
          <h2 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink-strong md:text-6xl">
            {t("titleA")}
            <br />
            <span className="text-accent-text">{t("titleB")}</span>
          </h2>

          <dl className="mt-10 divide-y border-y">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <dt className="text-[0.9375rem] font-medium text-accent-text">{f.label}</dt>
                <dd className={`text-[0.9375rem] font-semibold ${f.highlight ? "text-highlight-text" : "text-ink-strong"}`}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6 text-[1.05rem] leading-[1.75] text-ink-2 lg:col-span-7 lg:pt-2 lg:text-lg">
          <p>
            {t.rich("p1", {
              hl: (chunks) => <span className="font-semibold text-highlight-text">{chunks}</span>,
            })}
          </p>

          <p>
            {t.rich("p2", {
              strong: (chunks) => <span className="font-semibold text-ink-strong">{chunks}</span>,
            })}
          </p>

          <p>{t("p3")}</p>

          <blockquote className="border-t pt-8 text-2xl leading-snug font-semibold tracking-[-0.02em] text-ink-strong md:text-3xl">
            &ldquo;{t("quote")}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
