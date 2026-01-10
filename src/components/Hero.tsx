import Link from "next/link";
import { ParallaxBackdrop } from "./ParallaxBackdrop";

export function Hero() {
  return (
    <ParallaxBackdrop>
      <section className="relative overflow-hidden px-2 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,141,255,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(125,208,255,0.16),transparent_28%)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative z-10 space-y-10 md:space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/60">Matéo Journiac · Ingénieur software / full stack</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Je design des expériences web immersives et j'orchestre des plateformes scalables pour les lancer vite, bien et en confiance.
            </h1>
            <p className="max-w-3xl text-lg text-white/70">
              Produits premium, données en temps réel, CI/CD sans friction et observabilité native. J'opère à la croisée du design, du code et de l'ops pour que chaque release soit maîtrisée.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Focus</p>
              <p className="text-lg font-semibold text-white">Produits web immersifs</p>
              <p className="text-sm text-white/70">Narration soignée, interactions riches, performance perçue et accessibilité par défaut.</p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Plateforme</p>
              <p className="text-lg font-semibold text-white">Stack moderne et observable</p>
              <p className="text-sm text-white/70">Next.js App Router, TypeScript, edge functions, pipelines data, traces/logs corrélées.</p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Livraison</p>
              <p className="text-lg font-semibold text-white">Release en confiance</p>
              <p className="text-sm text-white/70">CI/CD GitHub Actions, canary/feature flags, tests E2E, SLO clairs.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/projets"
              className="rounded-full bg-white px-5 py-2.5 text-black transition hover:scale-[1.01]"
            >
              Voir les projets
            </Link>
            <Link
              href="/plateformes"
              className="rounded-full border border-white/20 px-5 py-2.5 text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Découvrir mes plateformes
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 px-5 py-2.5 text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Planifier un échange
            </Link>
          </div>

          <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-4">
            <Metric label="Livraisons produits" value="40+" />
            <Metric label="Temps réel" value="<120ms P95" />
            <Metric label="Disponibilité" value=">99.9%" />
            <Metric label="Terrains" value="B2B SaaS · Data · IA" />
          </div>
        </div>
      </section>
    </ParallaxBackdrop>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.16em] text-white/50">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
