"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FiArrowUp } from "react-icons/fi";

/** Floating button, bottom right. Appears once the visitor has scrolled past the first screen. */
export function ScrollToTop() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={t("scrollTop")}
      title={t("scrollTop")}
      // Hidden from keyboard and screen readers while invisible, so it doesn't add a dead tab stop.
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 bottom-4 z-40 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/75 text-ink-strong shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-[opacity,transform] duration-300 ease-out-soft hover:-translate-y-0.5 sm:right-8 sm:bottom-8 dark:border-white/15 dark:bg-black/70 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <FiArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
