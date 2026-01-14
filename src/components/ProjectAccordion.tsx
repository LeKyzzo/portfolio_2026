"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectAccordion({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group py-4">
      <div className="flex w-full items-start justify-between gap-4">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start gap-4 text-left"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em]">{project.year}</span>
              <span className="text-white/70">{project.tagline}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-white/70">{project.description}</p>
          </div>
        </button>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={`/projets/${project.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-primary"
          >
            Page
          </Link>
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
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{t}</span>
            ))}
          </div>
          <div className="text-sm text-white/70">
            <p className="mb-2">Points clés :</p>
            <ul className="list-inside list-disc space-y-1">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={project.repo} className="text-sm font-semibold text-white/80" target="_blank" rel="noreferrer">
              Repo
            </Link>
            {project.live ? (
              <Link href={project.live} className="text-sm font-semibold text-primary" target="_blank" rel="noreferrer">
                Live
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
