import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { SectionShell } from "@/components/SectionShell";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.title} · Projet`,
    description: project.description
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <div className="space-y-10 md:space-y-14">
      <SectionShell
        eyebrow={`Projet · ${project.year}`}
        title={project.title}
        description={project.description}
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-start">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Ce que j'ai livré</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Stack</p>
            <div className="flex flex-wrap gap-2 text-xs text-white/70">
              {project.tech.map((stack) => (
                <span key={stack} className="rounded-full bg-black/60 px-3 py-1">
                  {stack}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <Link
                href={project.repo}
                className="rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
                target="_blank"
                rel="noreferrer"
              >
                Voir le repo GitHub
              </Link>
              {project.live ? (
                <Link
                  href={project.live}
                  className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-center text-black shadow-glow transition hover:scale-[1.01]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Démo live
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </SectionShell>

      <ContactCta />
    </div>
  );
}
