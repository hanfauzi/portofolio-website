import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/porto/components/Navbar";
import { Footer } from "@/features/porto/components/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/ThemesProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Hanif | Portofolio",
  description: "Muhammad Hanif Fauzi Portofolio",
  keywords: ["full-stack developer", "software engineer", "portofolio"],
  openGraph: {
    title: "Hanif | Portofolio",
    description: "Portofolio Muhammad Hanif Fauzi",
    images: [
      {
        url: "https://haniffauzi.vercel.app/HNF.png",
        width: 1200,
        height: 630,
        alt: "Logo Arunika",
      },
    ],
  },
  icons: {
    icon: "/HNF.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar />
          {children}
        <ToastContainer position="top-right" autoClose={3000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
