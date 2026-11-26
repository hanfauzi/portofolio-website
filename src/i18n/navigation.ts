import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware replacements for next/link and next/navigation: hrefs get the "/id" prefix automatically.
export const { Link, usePathname, useRouter, getPathname } = createNavigation(routing);
