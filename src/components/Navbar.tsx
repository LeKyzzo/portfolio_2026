"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/plateformes", label: "Mes Services" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition ${scrolled ? "bg-black/65 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"}`}
    >
      <div className="relative mx-auto flex max-w-6xl h-16 items-center justify-between gap-6 px-4 text-sm font-semibold text-white/80">
        <Link
          href="/profil"
          className="text-sm font-semibold text-white md:text-xs md:uppercase md:tracking-[0.24em] md:text-white/70 md:hover:text-white"
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

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
          >
            Me contacter
          </Link>
        </div>

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
        <div className="md:hidden border-t border-white/10 bg-black/90">
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
            <Link
              href="/contact"
              className="mt-2 rounded-full border border-white/30 px-3 py-2 text-center font-semibold text-white hover:border-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Me contacter
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
