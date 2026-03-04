import Link from "next/link";
import socials from "@/lib/socials.json";

export function ContactCta() {
  const email = socials.find((s) => s.type === "contact")?.url ?? "/contact";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-primary/[0.04] to-accent/[0.05] px-7 py-8 md:px-10 md:py-10">
      {/* Halo décoratif */}
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary/70">Collaboration</p>
          <p className="text-lg font-semibold text-white">Un projet en tête ?</p>
          <p className="text-sm text-white/55">
            Parlez‑moi de votre idée — je réponds rapidement et sans engagement.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <a
            href={email}
            className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-[#05060b] shadow-[0_0_24px_rgba(125,208,255,0.3)] transition hover:shadow-[0_0_36px_rgba(125,208,255,0.5)] hover:scale-[1.02]"
          >
            Me contacter
          </a>
          <Link
            href="/projets"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition hover:border-white/30 hover:text-white"
          >
            Voir mes projets
          </Link>
        </div>
      </div>
    </div>
  );
}
