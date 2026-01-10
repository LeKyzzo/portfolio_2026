import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { SectionShell } from "@/components/SectionShell";

export const metadata = {
  title: "Contact · Portfolio"
};

export default function ContactPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <SectionShell
        eyebrow="Contact"
        title="Discutons de votre projet"
        description="Parlez-moi de votre produit, de votre stack actuelle et du résultat visé. Je réponds sous 24h."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm text-white/70">
              Je peux intervenir sur des missions courtes (audit, cadrage) ou longues (build & scale). Basé à distance, disponible pour des horaires flexibles.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Coordonnées</p>
              <p className="mt-2 font-semibold text-white">contact@votre-domaine.com</p>
              <p className="text-white/70">+33 6 00 00 00 00</p>
            </div>
          </div>
          <form className="glass space-y-3 rounded-3xl border border-white/10 p-5 text-sm text-white/80">
            <div>
              <label className="text-xs uppercase tracking-[0.14em] text-white/50">Nom</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white" placeholder="Votre nom" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.14em] text-white/50">Email</label>
              <input
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white"
                placeholder="vous@entreprise.com"
                type="email"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.14em] text-white/50">Message</label>
              <textarea
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white"
                rows={4}
                placeholder="Parlez-moi de votre projet, contexte, délais..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 font-semibold text-black shadow-glow"
              >
                Envoyer (mailto)
              </button>
              <Link
                href="mailto:contact@votre-domaine.com"
                className="rounded-full border border-white/15 px-4 py-2 font-semibold text-white/80 hover:border-white/30"
              >
                Ouvrir votre messagerie
              </Link>
            </div>
            <p className="text-xs text-white/60">Ce formulaire est statique : choisissez l'email ou intégrez votre backend préféré.</p>
          </form>
        </div>
      </SectionShell>

      <ContactCta />
    </div>
  );
}
