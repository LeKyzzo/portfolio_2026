import React from "react";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  Go: "#00add8",
  Rust: "#dea584",
  PHP: "#777bb3",
  "C++": "#00599c",
  C: "#a8b9cc",
  CSS: "#1572b6",
  HTML: "#e34f26",
  Shell: "#3e474a"
};

export default function RepoCard({ repo }: { repo: any }) {
  const langColor = repo.language ? (LANG_COLORS[repo.language] ?? "#888") : null;

  const Content = (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(125,208,255,0.08)] hover:-translate-y-0.5">
      {/* Barre macOS stylisée */}
      <div className="flex items-center gap-1.5 border-b border-white/6 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" aria-hidden />
        <span className="ml-2 truncate text-[10px] tracking-wide text-white/35">{repo.full_name || repo.name}</span>
      </div>

      <div className="flex flex-col gap-4 p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="truncate text-[15px] font-semibold text-white">{repo.name}</h3>
            {repo.description ? (
              <p className="mt-1 text-[13px] leading-relaxed text-white/55 line-clamp-2">{repo.description}</p>
            ) : repo.private ? (
              <p className="mt-1 text-[13px] text-white/35 italic">Description privée</p>
            ) : null}
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0 text-right">
            {langColor && (
              <span className="flex items-center gap-1.5 text-xs text-white/55">
                <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: langColor }} />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="text-xs text-white/40">★ {repo.stargazers_count}</span>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between text-xs text-white/40">
          <span>Mis à jour {new Date(repo.updated_at).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}</span>
          <div>
            {repo.private ? (
              repo.homepage ? (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold text-[#05060b] shadow-[0_0_16px_rgba(125,208,255,0.25)] transition hover:shadow-[0_0_24px_rgba(125,208,255,0.4)]"
                >
                  Voir live →
                </a>
              ) : (
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/30">Privé</span>
              )
            ) : (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary/80 transition hover:text-primary"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{Content}</div>;
}
