import Link from "next/link";
import socials from "@/lib/socials.json";

export function ContactCta() {
  const email = socials.find((s) => s.type === "contact")?.url ?? "/contact";

  return (
    <div className="glass relative overflow-hidden rounded-3xl border border-white/10 px-6 py-8 md:px-10 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/6 to-transparent" />
      <div className="relative z-10 flex items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-white">Un projet ? Contactez‑moi</p>
          <p className="text-sm text-white/70">Parlez-moi de votre idée et je vous réponds rapidement.</p>
        </div>
        <div>
          <a
            href={email}
            className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-black shadow-glow"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}
