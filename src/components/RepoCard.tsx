import React from "react";

export default function RepoCard({ repo }: { repo: any }) {
  const Content = (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-lg shadow-black/30 transition hover:border-white/20">
      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" aria-hidden />
        </span>
        <span className="truncate">{repo.full_name || repo.name}</span>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
            {repo.description ? (
              <p className="mt-1 text-sm text-white/70">{repo.description}</p>
            ) : repo.private ? (
              <p className="mt-1 text-sm text-white/50">Description privée</p>
            ) : null}
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            {repo.language ? <span className="text-xs text-white/70">{repo.language}</span> : null}
            <span className="text-xs text-white/60">⭐ {repo.stargazers_count ?? 0}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Mis à jour {new Date(repo.updated_at).toLocaleDateString()}</span>
          <div>
            {repo.private ? (
              repo.homepage ? (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-black"
                >
                  Voir live →
                </a>
              ) : (
                <span className="text-sm text-white/50">Privé</span>
              )
            ) : (
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-primary font-semibold">
                Voir le repo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{Content}</div>;
}
