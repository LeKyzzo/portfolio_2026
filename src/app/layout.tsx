import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundHyperspeed } from "@/components/BackgroundHyperspeed";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Portfolio · Ingénieur Full Stack",
  description: "Portfolio Next.js · parallax · animations pour Jourdain, ingénieur full stack.",
  metadataBase: new URL("https://portfolio.example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-surface text-white antialiased">
        <BackgroundHyperspeed />
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 38vh, transparent 60vh, #05060b 100vh, #0b0c11 140vh, #0f1117 200vh)"
          }}
        />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <main className="flex w-full flex-col gap-0 px-0 pt-0 pb-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
