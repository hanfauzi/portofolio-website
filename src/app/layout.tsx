import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/porto/components/Navbar";
import { Footer } from "@/features/porto/components/Footer";
import { ToastContainer } from 'react-toastify';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARUNIKA",
  description: "Muhammad Hanif Fauzi Portofolio",
  keywords: ["full-stack developer", "software engineer", "portofolio"],
  openGraph: {
    title: "ARUNIKA",
    description: "Portofolio Muhammad Hanif Fauzi",
    images: [
      {
        url: "https://haniffauzi.vercel.app/arunika-logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Arunika",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistMono.variable} font-mono antialiased`}>
        <Navbar />
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </body>
    </html>
  );
}
