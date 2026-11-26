import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// Everything except API routes, Next/Vercel internals and files with an extension (images, the CV PDF...).
export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
