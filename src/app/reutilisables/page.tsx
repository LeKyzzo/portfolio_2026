import Link from "next/link";
import ScrollMouse from "@/components/ScrollMouse";
import { reusableElements } from "@/lib/reusableElements";

export const metadata = {
  title: "Éléments réutilisables · Matéo Journiac",
  description: "Bibliothèque d'éléments réutilisables (widgets, snippets, composants) prêts à intégrer sur d'autres projets.",
  openGraph: {
    images: ["/og-image.svg"],
  },
};

export default function ReutilisablesPage() {
  return (
    <div className="space-y-0">
      <section className="relative flex min-h-screen w-full items-center bg-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Kit Réutilisable</p>
          <h1 className="text-3xl font-semibold text-white">Éléments réutilisables</h1>
          <p className="max-w-3xl text-sm text-white/70">
            Base d'éléments que tu peux copier/intégrer sur d'autres sites. Cette page est pensée pour en ajouter d'autres au fil du temps.
          </p>
        </div>
        <ScrollMouse position="hero" />
      </section>

      <main className="w-full bg-black/85 py-10 md:py-12">
        <div className="mx-auto max-w-6xl space-y-6 px-6 md:px-10">
          <div className="grid gap-6">
            {reusableElements.map((item) => (
              <article
                key={item.slug}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-primary/85">{item.category}</p>
                    <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                    <p className="max-w-3xl text-sm text-white/65">{item.description}</p>
                  </div>

                  <Link
                    href={item.docsHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
                  >
                    {item.docsLabel} →
                  </Link>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/60 p-4">
                  <pre className="text-xs leading-relaxed text-white/80">
                    <code>{item.snippet}</code>
                  </pre>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
