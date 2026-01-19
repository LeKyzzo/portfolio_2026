import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundHyperspeed } from "@/components/BackgroundHyperspeed";
import "./globals.css";
import socials from "@/lib/socials.json";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Matéo Journiac — Portfolio · Ingénieur Full Stack",
  description:
    "Matéo Journiac — ingénieur full stack : interfaces immersives, APIs robustes et plateforme fiable. Portfolio, projets et contact.",
  keywords: ["Matéo Journiac", "portfolio", "full stack", "Next.js", "React", "ingénieur"],
  metadataBase: new URL("https://portfolio.example.com"),
  openGraph: {
    title: "Matéo Journiac — Portfolio",
    description:
      "Ingénieur full stack orienté produit. Découvrez mes projets, compétences et services.",
    url: "https://portfolio.example.com",
    siteName: "Matéo Journiac — Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Matéo Journiac"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    title: "Matéo Journiac — Portfolio",
    card: "summary_large_image",
    description: "Ingénieur full stack — interfaces, APIs, infra.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = (socials || [])
    .map((s: any) => s.url)
    .filter((u: string) => u && !u.startsWith("mailto:"));

  const contact = socials.find((s: any) => s.type === "contact" || s.name.toLowerCase() === "email");

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matéo Journiac",
    url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://portfolio.example.com",
    sameAs,
    email: contact ? contact.handle : undefined
  });

  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b0b0b" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
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
