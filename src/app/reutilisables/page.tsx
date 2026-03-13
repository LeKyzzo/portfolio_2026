import ReusableElementCard from "@/components/ReusableElementCard";
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
    <main className="w-full bg-black/85 py-12 md:py-14">
      <div className="mx-auto max-w-6xl space-y-6 px-6 md:px-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Kit Réutilisable</p>
          <h1 className="text-3xl font-semibold text-white">Snippets et composants réutilisables</h1>
          <p className="max-w-3xl text-sm text-white/70">
            Catalogue simple pour copier rapidement les éléments et les intégrer sur tes autres projets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reusableElements.map((item) => (
            <ReusableElementCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
