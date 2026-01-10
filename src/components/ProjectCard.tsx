import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="card-hover gradient-border group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-6 transition"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">{project.year}</p>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{project.tagline}</span>
      </div>
      <p className="text-sm text-white/70">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((stack) => (
          <span key={stack} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
            {stack}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
        Découvrir le projet
        <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
