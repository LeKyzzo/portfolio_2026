import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Profil · Matéo Journiac",
  description:
    "Profil de Matéo Journiac — ingénieur full stack spécialisé en interfaces immersives, APIs et plateformes. Disponible pour missions front, full stack et plateforme.",
  openGraph: {
    images: ["/images/mateo_cartoon.png"]
  }
};

const stats = [
  { label: "Années d'expérience", value: "6+" },
  { label: "Projets livrés", value: "40+" },
  { label: "Stacks opérées", value: "Front, Back, Ops" }
];

const highlights = [
  {
    title: "Design systems & UX motion",
    detail: "Systèmes cohérents, micro-interactions et accessibilité par défaut."
  },
  {
    title: "APIs et data temps réel",
    detail: "GraphQL/REST, events streaming, observabilité corrélée (logs/metrics/traces)."
  },
  {
    title: "CI/CD et fiabilité",
    detail: "Pipelines, feature flags, canary, rollback prêt, alerting avec SLO/SLA."
  }
];

const timeline = [
  {
    title: "Lead full stack · Produits data",
    detail: "Architecture, orchestrations temps réel, dashboards et intégrations partenaires."
  },
  {
    title: "Senior front · Expériences immersives",
    detail: "Next.js, animations, design systems, perf perçue, analytics produit."
  },
  {
    title: "Ops · Observabilité & plateforme",
    detail: "GitHub Actions, Docker/K8s, traces distribuées, budgets de perf, sécurité."
  }
];

export default function ProfilPage() {
  return (
    <div className="space-y-0">
      <section className="flex min-h-screen w-full items-center bg-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
          <div className="flex items-center gap-6">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/10">
              <Image src="/images/mateo_cartoon.png" alt="Matéo Journiac" fill className="object-cover" priority />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Profil</p>
              <h1 className="text-3xl font-semibold text-white">Matéo Journiac</h1>
            </div>
          </div>
          <p className="max-w-3xl text-sm text-white/70">
            Ingénieur full stack orienté produit. Je conçois des expériences web immersives, des APIs robustes et j'opère l'infra pour livrer vite et en confiance.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <Link href="/projets" className="rounded-full bg-white px-4 py-2 text-black font-semibold">Voir mes projets</Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:text-white">Me contacter</Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-black/85 py-10 md:py-12">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:px-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center shadow-lg shadow-black/30">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Focus</p>
              <h2 className="text-xl font-semibold text-white">Ce que je fais</h2>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Parcours</p>
              <h2 className="text-xl font-semibold text-white">Expérience</h2>
              <div className="space-y-3">
                {timeline.map((item, idx) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-semibold text-white">{item.title}</span>
                    </div>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Collaboration</p>
                <p className="text-sm text-white/70">Disponible pour missions front, full stack ou plateforme.</p>
              </div>
              <Link href="/contact" className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-black">
                Discuter d'un projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
