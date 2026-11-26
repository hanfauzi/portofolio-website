"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiSearch, FiSun } from "react-icons/fi";
import { CommandPalette, SECTIONS } from "@/components/CommandPalette";
import { useThemeToggle } from "@/hooks/use-theme-toggle";
import { Link, usePathname } from "@/i18n/navigation";

// Glass is used on these floating pills only, because they sit on top of the hero photo.
const pill =
  "rounded-full border border-black/10 bg-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/15 dark:bg-black/70 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.4)]";

export const Navbar = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const { mounted, isDark, toggleTheme } = useThemeToggle();
  const [paletteOpen, setPaletteOpen] = useState(false);
  // Shown in the shortcut hint; Macs use Cmd, everything else Ctrl.
  const [modKey, setModKey] = useState("Ctrl");
  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.userAgent)) setModKey("⌘");
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-16 lg:py-6">
      <div className={`inline-flex items-center gap-4 py-2.5 pr-2.5 pl-4 sm:gap-5 sm:pl-5 ${pill}`}>
        {/* Brand mark, deliberately not a link: the palette and the section links cover navigation. */}
        {/* HNF logo kit, variant A: the light-theme and dark-theme colour versions swap with the theme */}
        <Image
          src="/brand/hnf-light.svg"
          alt="Hanif Fauzi"
          width={347}
          height={256}
          priority
          className="h-8 w-auto shrink-0 dark:hidden"
        />
        <Image
          src="/brand/hnf-dark.svg"
          alt="Hanif Fauzi"
          width={347}
          height={256}
          priority
          className="hidden h-8 w-auto shrink-0 dark:block"
        />

        <span className="hidden h-[18px] w-px bg-black/10 md:block dark:bg-white/20" aria-hidden="true" />

        <nav aria-label={t("sections")} className="hidden items-center gap-5 md:flex">
          {SECTIONS.map((id) => (
            <Link
              key={id}
              href={`/#${id}`}
              className="text-[0.825rem] font-medium whitespace-nowrap text-ink-2 transition-colors hover:text-ink-strong"
            >
              {t(id)}
            </Link>
          ))}
        </nav>

        {/* Opens the command palette. Phones have no section links, so here it doubles as the menu button. */}
        <button
          type="button"
          onClick={() => setPaletteOpen(true)}
          aria-label={t("openPalette")}
          aria-haspopup="dialog"
          className="inline-flex h-8 cursor-pointer items-center gap-2 rounded-full bg-black/5 px-2.5 text-ink-2 transition-colors hover:bg-black/10 hover:text-ink-strong dark:bg-white/10 dark:hover:bg-white/15"
        >
          <FiMenu className="size-4 md:hidden" aria-hidden="true" />
          <FiSearch className="hidden size-3.5 md:block" aria-hidden="true" />
          <kbd className="hidden font-sans text-[0.6875rem] font-semibold md:block">{modKey} K</kbd>
        </button>
      </div>

      <div className="flex items-center gap-2">
        {/* Same page in the other language. scroll={false}: stay where you are reading instead of jumping to the top. */}
        <Link
          href={pathname}
          locale={locale === "en" ? "id" : "en"}
          scroll={false}
          aria-label={t("language")}
          title={t("language")}
          className={`inline-flex h-[42px] items-center px-3.5 text-[0.625rem] font-bold tracking-[0.2em] text-ink-strong uppercase ${pill}`}
        >
          {t("languageShort")}
        </Link>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? t("toLight") : t("toDark")}
          className={`inline-flex h-[42px] cursor-pointer items-center gap-3 px-3.5 sm:px-4 text-[0.625rem] font-bold tracking-[0.25em] uppercase ${pill}`}
        >
          <span
            className={`hidden transition-colors duration-500 sm:inline ${mounted && !isDark ? "text-ink-strong" : "text-ink-2/60"}`}
          >
            {t("light")}
          </span>
          {/* Phones: just an icon, there is no room for the Light / Dark labels next to the language pill. */}
          {isDark ? (
            <FiSun className="size-4 text-ink-strong sm:hidden" aria-hidden="true" />
          ) : (
            <FiMoon className="size-4 text-ink-strong sm:hidden" aria-hidden="true" />
          )}
          <span className="relative hidden h-px w-8 overflow-hidden bg-ink-2/30 sm:block" aria-hidden="true">
            <motion.span
              initial={false}
              animate={{ x: isDark ? 16 : -16 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="absolute inset-0 bg-ink-strong"
            />
          </span>
          <span className={`hidden transition-colors duration-500 sm:inline ${isDark ? "text-ink-strong" : "text-ink-2/60"}`}>
            {t("dark")}
          </span>
        </button>
      </div>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </header>
  );
};
