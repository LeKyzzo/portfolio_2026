import Link from "next/link";
import socials from "@/lib/socials.json";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">Matéo Journiac · Ingénieur Full Stack</p>
          <p className="text-xs text-white/60">Paris · Remote · Produits & plateformes.</p>
        </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            {socials.map((s) => (
              <Link
                key={s.url}
                href={s.url}
                className="transition hover:text-white"
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel={s.url.startsWith("http") ? "noreferrer" : undefined}
              >
                {s.name}
              </Link>
            ))}
          </div>
      </div>
    </footer>
  );
}
