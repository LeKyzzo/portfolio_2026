import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
        <div className="min-h-screen bg-[radial-gradient(circle_at_10%_20%,rgba(168,141,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(125,208,255,0.07),transparent_35%),var(--bg)]">
          <Navbar />
          <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:gap-12 md:py-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
