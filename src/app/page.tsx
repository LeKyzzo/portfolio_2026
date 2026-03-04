import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Hero } from "@/components/Hero";
import RepoCard from "@/components/RepoCard";
import ScrollMouse from "@/components/ScrollMouse";
import { TrustedBy } from "@/components/TrustedBy";

export const metadata = {
  title: "Accueil · Matéo Journiac",
  description: "Accueil — portfolio de Matéo Journiac, ingénieur full stack : projets, services et contact.",
  openGraph: {
    images: ["/og-image.svg"]
  }
};

const GITHUB_USER = process.env.GITHUB_USER ?? "mateojourniac";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchReposWithContribs() {
  const isAuth = Boolean(GITHUB_TOKEN);
  const url = isAuth
    ? `https://api.github.com/user/repos?per_page=100&visibility=all&affiliation=owner,collaborator&sort=updated`
    : `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`;

  const res = await fetch(url, {
    headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : undefined,
    next: { revalidate: 3600 }
  });
  if (!res.ok) return [];
  const repos = await res.json();

  // fetch contributors counts in parallel (for commit counts by user)
  const withContribs = await Promise.all(
    (repos as any[]).map(async (r) => {
      try {
        const fullName = r.full_name || `${GITHUB_USER}/${r.name}`;
        const contribUrl = `https://api.github.com/repos/${fullName}/contributors?per_page=100`;
        const cRes = await fetch(contribUrl, {
          headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : undefined,
          next: { revalidate: 3600 }
        });
        if (!cRes.ok) return { repo: r, contributions: 0 };
        const contribs = await cRes.json();
        const me = Array.isArray(contribs) ? contribs.find((c: any) => c.login === GITHUB_USER) : null;
        return { repo: r, contributions: me ? me.contributions : 0 };
      } catch (e) {
        return { repo: r, contributions: 0 };
      }
    })
  );

  // sort by contributions desc and take top 4
  return withContribs
    .filter((x) => x.repo)
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, 4);
}

export default async function HomePage() {
  const top = await fetchReposWithContribs();

  return (
    <div className="space-y-0">
      <Hero />

      {/* Ils nous ont fait confiance */}
      <TrustedBy />

      {/* Section principale */}
      <section className="w-full py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">

          {/* Projets phares */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">Sélection GitHub</p>
                <h2 className="text-2xl font-semibold text-white">Projets phares</h2>
                <p className="text-sm text-white/60">Architecture solide, UX premium, delivery rapide.</p>
              </div>
              <Link href="/projets" className="group text-sm font-semibold text-white/60 transition hover:text-primary">
                Voir tous les projets <span className="inline-block transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
            {top.length === 0 ? (
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-6 py-8 text-sm text-white/50">
                Aucun projet disponible — ajoute ton <code className="text-primary">GITHUB_TOKEN</code> si nécessaire.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 items-stretch">
              {top.map(({ repo, contributions }) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
          </div>

          {/* Approche */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.15fr,0.85fr] md:items-start">
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">Approche</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Ingénierie full stack orientée produit</h2>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Storytelling d'interface, performance perçue, instrumentation dès le jour 1. Chaque feature est pensée pour être mesurable, déployable et réversible.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Design systems et animations subtiles pour une expérience cohérente.",
                    "APIs fiables, tests contractuels, observabilité corrélée (logs, métriques, traces).",
                    "Delivery cadence : feature flags, canary, rollback prêt, dashboards temps réel."
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 border-t border-white/8 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Stack quotidienne</p>
                <div className="grid gap-4 text-sm sm:grid-cols-2">
                  {[
                    { title: "Frontend", desc: "Next.js, TypeScript, Tailwind, Framer Motion." },
                    { title: "Backend & Data", desc: "Node.js, PostgreSQL, Kafka, ClickHouse." },
                    { title: "Ops & Qualité", desc: "Docker, Kubernetes, GitHub Actions, OTel/Grafana." },
                    { title: "Livraison", desc: "Feature flags, canary, SLO/SLA, alerting auto." }
                  ].map(({ title, desc }) => (
                    <div key={title} className="space-y-1">
                      <p className="font-semibold text-white/90">{title}</p>
                      <p className="text-white/50">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Plateformes */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-6 py-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent/80">Plateformes</p>
              <p className="mt-0.5 text-sm text-white/60">J'opère plusieurs plateformes produits pour explorer, lancer et scaler des business.</p>
            </div>
            <Link href="/plateformes" className="group text-sm font-semibold text-accent/80 transition hover:text-accent">
              Voir les plateformes <span className="inline-block transition group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* CTA Contact */}
          <div>
            <ContactCta />
          </div>
        </div>
      </section>
    </div>
  );
}

// ProjectRow replaced by ProjectAccordion component for inline details
