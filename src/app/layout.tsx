import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato", 
});

export const metadata: Metadata = {
  title: "Eric Moura | Frontend Software Engineer",
  description: "Engenheiro de Software focado no ecossistema React, Next.js e arquiteturas web de alta performance.",
  keywords: ["Frontend", "React", "Next.js", "TypeScript", "Software Engineer", "Desenvolvedor Web"],
  openGraph: {
    title: "Eric Moura | Frontend Software Engineer",
    description: "Engenheiro de Software focado no ecossistema React, Next.js e arquiteturas web de alta performance.",
    url: "https://emouradev.vercel.app",
    siteName: "Eric Moura Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Preview do Portefólio de Eric Moura",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} font-sans bg-black text-slate-200 antialiased overflow-x-hidden`}>
        <SplashScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}