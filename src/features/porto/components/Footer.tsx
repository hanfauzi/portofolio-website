import { profile } from "../data";

// Release name of this portfolio design. v4.0 = the style.ai.id-based redesign.
const SITE_VERSION = "Arunika v4.0";

export const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 py-8 text-[13px] text-ink-2 sm:px-6">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-ink">{profile.name}</span>
      </p>
      <p className="text-xs font-bold tracking-[0.2em] uppercase">{SITE_VERSION}</p>
    </div>
  </footer>
);
