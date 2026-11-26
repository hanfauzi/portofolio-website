/// <reference types="react/canary" />
// react/canary: types for <ViewTransition>, which Next 16's bundled React ships.

import type en from "../../messages/en.json";
import type { routing } from "./routing";

// Typed translation keys: a typo in t("...") or a key missing from en.json fails the type check.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en;
  }
}
