import Link from "next/link";

export function ContactCta() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl border border-white/10 px-6 py-8 md:px-10 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/12 to-transparent" />
      <div className="relative z-10 grid gap-6 md:grid-cols-[1.6fr,0.4fr] md:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Travaillons ensemble</p>
          <h3 className="text-2xl font-semibold text-white">Vous avez un produit à lancer ou un besoin plateforme ?</h3>
          <p className="max-w-2xl text-sm text-white/70">
            Je peux cadrer, designer l'architecture, mettre en place la CI/CD, instrumenter l'observabilité et livrer une UI Next.js premium.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/80">
          <Link
            href="mailto:contact@votre-domaine.com"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-center font-semibold text-black shadow-glow transition hover:scale-[1.01]"
          >
            contact@votre-domaine.com
          </Link>
          <Link
            href="https://cal.com/yourname/30min"
            className="rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Planifier un appel découverte
          </Link>
        </div>
      </div>
    </div>
  );
}
