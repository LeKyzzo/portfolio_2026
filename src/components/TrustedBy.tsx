"use client";

import { useState } from "react";
import Image from "next/image";
import partners from "@/lib/partners.json";

type Partner = {
  name: string;
  url: string;
  domain: string;
};

const PAGE_SIZE = 6; // 2 lignes × 3 colonnes

function PartnerCard({ partner }: { partner: Partner }) {
  const logoUrl = `https://logo.clearbit.com/${partner.domain}`;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`;

  return (
    <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.055] hover:shadow-[0_0_28px_rgba(125,208,255,0.07)] hover:-translate-y-0.5">
      {/* Logo */}
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <Image
          src={logoUrl}
          alt={`Logo ${partner.name}`}
          width={56}
          height={56}
          className="h-10 w-10 object-contain transition group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.src.includes("favicons")) {
              img.src = faviconUrl;
            }
          }}
          unoptimized
        />
      </div>

      {/* Nom */}
      <p className="text-sm font-semibold text-white/90 leading-tight">{partner.name}</p>

      {/* CTA */}
      <a
        href={partner.url}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-auto rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-white/60 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
      >
        Voir le site →
      </a>
    </div>
  );
}

export function TrustedBy() {
  const total = (partners as Partner[]).length;
  const pageCount = Math.ceil(total / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const items = (partners as Partner[]).slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  if (total === 0) return null;

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* En-tête */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent/80">Références</p>
            <h2 className="text-2xl font-semibold text-white">Ils nous ont fait confiance</h2>
            <p className="text-sm text-white/55">Entreprises et projets avec lesquels j'ai collaboré.</p>
          </div>
          {pageCount > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Page précédente"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>
              <span className="text-xs text-white/30">{page + 1} / {pageCount}</span>
              <button
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                disabled={page === pageCount - 1}
                aria-label="Page suivante"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Grille 2×3 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((partner) => (
            <PartnerCard key={partner.domain} partner={partner} />
          ))}
          {/* Cellules fantômes pour maintenir la grille quand < 6 */}
          {items.length < PAGE_SIZE &&
            Array.from({ length: PAGE_SIZE - items.length }).map((_, i) => (
              <div key={`ghost-${i}`} aria-hidden className="rounded-2xl border border-white/[0.03] bg-white/[0.01] opacity-40" />
            ))}
        </div>

        {/* Dots de navigation */}
        {pageCount > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Aller à la page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
