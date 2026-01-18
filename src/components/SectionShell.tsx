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
    <section className="relative overflow-hidden h-screen">
      <div className="relative z-10 p-6 md:p-10 h-full">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-20 text-center flex flex-col h-full">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{eyebrow}</p>
          ) : null}
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">{title}</h2>
          {description ? <p className="mt-3 max-w-3xl mx-auto text-sm text-white/70">{description}</p> : null}

          <div className="mt-8 flex-1 overflow-auto">{children}</div>
        </div>
      </div>
    </section>
  );
}
