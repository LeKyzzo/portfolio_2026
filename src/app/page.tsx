import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Hero } from "@/components/Hero";
import RepoCard from "@/components/RepoCard";
import ScrollMouse from "@/components/ScrollMouse";

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

      <section className="w-full bg-black/85 py-10 md:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10">
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
          {top.length === 0 ? (
            <div className="text-sm text-white/70">Aucun projet phare disponible — ajoute ton `GITHUB_TOKEN` si nécessaire.</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch">
              {top.map(({ repo, contributions }) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
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
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Plateformes</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span>J'opère plusieurs plateformes produits pour explorer, lancer et scaler des business.</span>
              <Link href="/plateformes" className="font-semibold text-primary hover:text-white">
                Voir les plateformes →
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <ContactCta />
          </div>
        </div>
      </section>
    </div>
  );
}

// ProjectRow replaced by ProjectAccordion component for inline details
