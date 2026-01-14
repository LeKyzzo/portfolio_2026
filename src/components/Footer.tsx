import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/mateojourniac" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mateojourniac" },
  { label: "Email", href: "mailto:contact@mateojourniac.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">Matéo Journiac · Ingénieur Full Stack</p>
          <p className="text-xs text-white/60">Paris · Remote · Produits & plateformes.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/80">
          {socials.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
