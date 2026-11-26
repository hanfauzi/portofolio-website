import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { ToastContainer } from "react-toastify";
import "../globals.css";
import { Navbar } from "@/features/porto/components/Navbar";
import { ThemeProvider } from "@/components/ThemesProvider";
import { Preloader } from "@/components/Preloader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReadingProgress } from "@/components/ReadingProgress";
import { routing } from "@/i18n/routing";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-nunito",
});

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// The preview image comes from ./opengraph-image.tsx (logo, name and "Portfolio").
export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: hasLocale(routing.locales, locale) ? locale : "en", namespace: "meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL("https://haniffauzi.vercel.app"),
    title,
    description,
    applicationName: "Hanif Fauzi Portfolio",
    authors: [{ name: "Muhammad Hanif Fauzi", url: "https://haniffauzi.vercel.app" }],
    keywords: ["Muhammad Hanif Fauzi", "Hanif Fauzi", "fullstack developer", "web developer", "portfolio"],
    alternates: {
      canonical: locale === "id" ? "/id" : "/",
      languages: { en: "/", id: "/id" },
    },
    openGraph: {
      type: "website",
      url: locale === "id" ? "/id" : "/",
      siteName: "Muhammad Hanif Fauzi",
      title,
      description,
      locale: locale === "id" ? "id_ID" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // Lets every page under this layout render statically.
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to <body> before hydration. */}
      <body className={`${jakarta.variable} ${nunito.variable} font-sans antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Preloader />
            <ReadingProgress />
            <Navbar />
            {children}
            <ScrollToTop />
            <ToastContainer position="top-right" autoClose={3000} />
          </ThemeProvider>
        </NextIntlClientProvider>
        {/* Page views on the Vercel dashboard. Only active on Vercel deployments, silent in dev. */}
        <Analytics />
      </body>
    </html>
  );
}
