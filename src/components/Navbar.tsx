"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/plateformes", label: "Mes plateformes" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-5 text-sm font-semibold text-white/80 md:justify-center">
        <Link
          href="/"
          className="text-sm font-semibold text-white md:absolute md:left-4 md:text-xs md:uppercase md:tracking-[0.24em] md:text-white/60 md:hover:text-white"
        >
          Matéo Journiac
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition hover:text-white ${active ? "text-white" : ""}`}
              >
                {link.label}
                {active ? <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-accent" /> : null}
              </Link>
            );
          })}
        </nav>
        <button
          className="md:hidden rounded-lg border border-white/10 p-2 text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open ? (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm font-medium text-white/80">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 transition hover:text-white ${active ? "text-white" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
