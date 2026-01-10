import { ReactNode } from "react";

export function SectionShell({
  title,
  eyebrow,
  description,
  children
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="section-shell glass relative overflow-hidden bg-gradient-to-b from-white/5 to-white/0">
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute left-12 top-10 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative z-10 space-y-4 p-6 md:p-10">
        <div className="space-y-2">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{eyebrow}</p> : null}
          <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
          {description ? <p className="max-w-3xl text-sm text-white/70">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
