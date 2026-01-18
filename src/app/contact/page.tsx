import Link from "next/link";
import { SectionShell } from "@/components/SectionShell";
import ContactFormClient from "@/components/ContactFormClient";
import socials from "@/lib/socials.json";

export const metadata = {
  title: "Contact · Portfolio"
};

export default function ContactPage() {
  const contactEmail = socials.find((s: any) => s.type === "contact" || s.name.toLowerCase() === "email");

  return (
    <div className="space-y-10 md:space-y-14">
      <SectionShell
        eyebrow="Contact"
        title="Discutons de votre projet"
        description="Parlez-moi de votre idée, projets, de votre situation actuelle et du résultat visé. Je réponds sous 24h."
      >
        <div className="grid gap-8 md:grid-cols-[0.7fr,1.3fr]">
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white/80 text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Coordonnées</p>
              {(() => {
                const email = socials.find((s: any) => s.type === "contact" || s.name.toLowerCase() === "email");
                return (
                  <>
                    <p className="mt-2 font-semibold text-white">{email ? email.handle : "journiacmateo.pro@gmail.com"}</p>
                    {/* phone left intentionally if available in your data */}
                  </>
                );
              })()}

              <div className="mt-3 space-y-2">
                <p className="text-xs uppercase tracking-[0.12em] text-white/50">Réseaux</p>
                <ul className="space-y-1">
                  {socials.map((s: any) => (
                    <li key={s.name}>
                      <a href={s.url} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                        {s.name}{s.handle ? ` · ${s.handle}` : ""}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="text-left">
            <ContactFormClient email={contactEmail ? contactEmail.handle : "contact@votre-domaine.com"} />
          </div>
        </div>
      </SectionShell>

      
    </div>
  );
}
