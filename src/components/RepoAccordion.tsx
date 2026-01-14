"use client";

import { useState } from "react";
import Link from "next/link";

export function RepoAccordion({ repo, contributions }: { repo: any; contributions: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group py-4">
      <div className="flex w-full items-start justify-between gap-4">
        <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-start gap-4 text-left">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em]">{new Date(repo.created_at).getFullYear()}</span>
              <span className="text-white/70">{repo.private ? "(privé)" : ""}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">{repo.name}</h3>
            {repo.description ? (
              <p className="mt-1 text-sm text-white/70">{repo.description}</p>
            ) : repo.private ? (
              <p className="mt-1 text-sm text-white/50">Description privée</p>
            ) : null}
          </div>
        </button>

        <div className="flex shrink-0 items-center gap-3">
          {!repo.private ? (
            <Link href={repo.html_url} className="text-xs font-semibold uppercase tracking-[0.12em] text-primary" target="_blank" rel="noreferrer">
              Repo
            </Link>
          ) : null}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer détails" : "Voir détails"}
            className="rounded-full border border-white/10 bg-white/3 p-2 text-white/80 hover:bg-white/5"
          >
            <svg className={`h-4 w-4 transition-transform ${open ? "rotate-90" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`mt-4 overflow-hidden transition-all ${open ? "max-h-[800px]" : "max-h-0"}`}>
        <div className="space-y-4 border-t border-white/6 pt-4">
          <div className="flex flex-wrap gap-3">
            {repo.language ? <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{repo.language}</span> : null}
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">⭐ {repo.stargazers_count ?? 0}</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Commits: {contributions}</span>
          </div>
          <div className="text-sm text-white/70">
            <p className="mb-2">Détails :</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Dernière mise à jour : {new Date(repo.updated_at).toLocaleDateString()}</li>
              <li>Taille du repo : {repo.size} KB</li>
            </ul>
          </div>
            {repo.homepage ? (
              <div className="mt-3">
                <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-primary font-semibold">
                  Voir live →
                </a>
              </div>
            ) : null}
        </div>
      </div>
    </div>
  );
}
