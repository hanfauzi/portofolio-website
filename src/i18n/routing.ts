import { defineRouting } from "next-intl/routing";

// English stays at "/" so every link already shared keeps working; Indonesian lives under "/id".
// No browser-language detection: everyone lands on English and switches on purpose.
export const routing = defineRouting({
  locales: ["en", "id"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
