import { ContactCta } from "@/components/ContactCta";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionShell } from "@/components/SectionShell";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projets · Portfolio"
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <SectionShell
        eyebrow="Portfolio"
        title="Projets GitHub"
        description="Des produits et plateformes où j'ai conçu l'architecture, développé l'UI, mis en place la CI/CD et l'observabilité."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionShell>

      <ContactCta />
    </div>
  );
}
