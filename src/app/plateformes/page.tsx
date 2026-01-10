import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PlatformCard } from "@/components/PlatformCard";
import { platforms } from "@/lib/platforms";

export const metadata = {
  title: "Mes plateformes · Portfolio"
};

export default function PlateformesPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-white/50">Plateformes</p>
        <h1 className="text-3xl font-semibold text-white">Mes plateformes produits</h1>
        <p className="max-w-3xl text-sm text-white/70">
          Des espaces où je conçois, itère et opère des business : studio de prototypage, console d'observabilité, lab temps réel. Chaque
          plateforme est pensée pour être brandable, mesurable et extensible.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          <Link href="/contact" className="font-semibold text-primary hover:text-white">
            Parler d'une intégration →
          </Link>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {platforms.map((platform) => (
          <PlatformCard key={platform.slug} platform={platform} />
        ))}
      </div>

      <ContactCta />
    </div>
  );
}
