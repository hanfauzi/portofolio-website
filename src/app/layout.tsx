import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/porto/components/Navbar";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/ThemesProvider";

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

const title = "Muhammad Hanif Fauzi | Portfolio";
const description =
  "Portfolio of Muhammad Hanif Fauzi, a fullstack developer who builds web applications from start to finish.";

// The preview image comes from src/app/opengraph-image.tsx (logo, name and "Portfolio").
export const metadata: Metadata = {
  metadataBase: new URL("https://haniffauzi.vercel.app"),
  title,
  description,
  applicationName: "Hanif Fauzi Portfolio",
  authors: [{ name: "Muhammad Hanif Fauzi", url: "https://haniffauzi.vercel.app" }],
  keywords: ["Muhammad Hanif Fauzi", "Hanif Fauzi", "fullstack developer", "web developer", "portfolio"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Hanif Fauzi",
    title,
    description,
    locale: "en_US",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${nunito.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
