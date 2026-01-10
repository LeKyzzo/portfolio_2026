import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Hero } from "@/components/Hero";
import { pinnedProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Hero />
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Sélection</p>
            <h2 className="text-2xl font-semibold text-white">Projets phares</h2>
            <p className="text-sm text-white/70">Architecture solide, UX premium, delivery rapide.</p>
          </div>
          <Link href="/projets" className="text-sm font-semibold text-primary hover:text-white">
            Voir tous les projets →
          </Link>
        </div>
        <div className="divide-y divide-white/10">
          {pinnedProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Approche</p>
          <h2 className="text-2xl font-semibold text-white">Ingénierie full stack orientée produit</h2>
          <p className="text-sm text-white/70">
            Storytelling d'interface, performance perçue, instrumentation dès le jour 1. Chaque feature est pensée pour être mesurable, déployable et réversible.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Design systems et animations subtiles pour une expérience cohérente.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>APIs fiables, tests contractuels, observabilité corrélée (logs, métriques, traces).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Delivery cadence : feature flags, canary, rollback prêt, dashboards temps réel.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-3 border-t border-white/10 pt-4 md:border-none md:pt-0">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Stack quotidienne</p>
          <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-white font-semibold">Frontend</p>
              <p className="text-sm text-white/70">Next.js App Router, TypeScript, Tailwind, Framer Motion, design systems.</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-semibold">Backend & Data</p>
              <p>Node.js, edge functions, PostgreSQL, Turso, Kafka, ClickHouse.</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-semibold">Ops & Qualité</p>
              <p>GitHub Actions, Docker, Vercel, Kubernetes, tests E2E, observabilité OTel/Grafana.</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-semibold">Livraison</p>
              <p>Feature flags, canary, SLO/SLA, alerting, rétro de release automatisée.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 border-t border-white/10 pt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-white/50">Plateformes</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span>J'opère plusieurs plateformes produits pour explorer, lancer et scaler des business.</span>
          <Link href="/plateformes" className="font-semibold text-primary hover:text-white">
            Voir les plateformes →
          </Link>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}

function ProjectRow({ project }: { project: (typeof pinnedProjects)[number] }) {
  return (
    <Link href={`/projets/${project.slug}`} className="group flex flex-col gap-2 py-6 transition hover:text-white">
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-white">
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em]">{project.year}</span>
          <span className="text-white/70">{project.tagline}</span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary group-hover:text-white">Découvrir</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-sm text-white/70">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-white/60">
        {project.tech.slice(0, 4).map((stack) => (
          <span key={stack} className="rounded-full border border-white/10 px-3 py-1">
            {stack}
          </span>
        ))}
      </div>
    </Link>
  );
}
