import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/yourname" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourname" },
  { label: "Email", href: "mailto:contact@votre-domaine.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Jourdain · Ingénieur Full Stack</p>
          <p className="text-xs text-white/60">Disponible pour missions produit & plateforme.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/70">
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
