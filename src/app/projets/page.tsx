import { ContactCta } from "@/components/ContactCta";
import RepoCard from "@/components/RepoCard";

export const metadata = {
  title: "Projets · Portfolio"
};

const GITHUB_USER = process.env.GITHUB_USER ?? "mateojourniac";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchRepos() {
  const isAuth = Boolean(GITHUB_TOKEN);
  const url = isAuth
    ? `https://api.github.com/user/repos?per_page=100&visibility=all&affiliation=owner,collaborator&sort=updated`
    : `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`;

  const res = await fetch(url, {
    headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : undefined,
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    console.error("GitHub repos fetch failed", res.status);
    return [];
  }
  const data = await res.json();
  // filter out forks
  return (data as any[]).filter((r) => !r.fork).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
}

export default async function ProjectsPage() {
  const repos = await fetchRepos();

  return (
    <div className="space-y-0">
      <section className="flex min-h-screen w-full items-center bg-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
          <div className="flex items-center gap-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.762-1.606-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.65.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.62-5.48 5.92.43.372.815 1.102.815 2.222 0 1.605-.015 2.897-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Code & Plateformes</p>
              <h1 className="text-3xl font-semibold text-white">Projets GitHub</h1>
              <p className="text-sm text-white/70">Repos publics et privés, live previews quand dispo.</p>
            </div>
          </div>
        </div>
      </section>

      <main className="w-full bg-black/85 py-10 md:py-12">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {repos.length === 0 ? (
              <div className="text-sm text-white/70">Aucun repo trouvé — ajoute ton `GITHUB_TOKEN` dans `.env.local` si nécessaire.</div>
            ) : (
              repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
            )}
          </div>

          <ContactCta />
        </div>
      </main>
    </div>
  );
}
