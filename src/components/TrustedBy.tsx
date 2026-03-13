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
  const domainBase = partner.domain.replace(/^www\./, "").split(".")[0];
  const nameSlug = partner.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const backgroundCandidates = Array.from(new Set([domainBase, nameSlug]))
    .filter(Boolean)
    .map((slug) => `/backgroundClient/${slug}.png`);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const hasBackgroundImage = backgroundIndex < backgroundCandidates.length;

  return (
    <div className="group relative flex min-h-[170px] flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-left transition-[border-color,background-color,box-shadow] duration-200 hover:border-primary/30 hover:bg-white/[0.055] hover:shadow-[0_0_24px_rgba(125,208,255,0.06)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {hasBackgroundImage ? (
          <Image
            src={backgroundCandidates[backgroundIndex]}
            alt=""
            fill
            className="object-cover opacity-[0.4]"
            sizes="(max-width: 640px) 50vw, 33vw"
            onError={() => setBackgroundIndex((idx) => idx + 1)}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-36"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="absolute left-3 right-3 top-3 h-5 rounded border border-white/15" />
            <div className="absolute left-5 right-5 top-11 h-2 rounded bg-white/10" />
            <div className="absolute left-5 top-16 h-2 w-2/3 rounded bg-white/10" />
            <div className="absolute left-5 top-21 h-2 w-1/2 rounded bg-white/10" />
            <div className="absolute bottom-4 right-4 rounded border border-white/15 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
              {partner.domain}
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-black/42 transition-colors duration-200 group-hover:bg-black/38" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
      </div>

      <div className="relative z-10 flex items-center gap-3 pr-16">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-[1px]">
          <Image
            src={logoUrl}
            alt={`Logo ${partner.name}`}
            width={56}
            height={56}
            className="h-9 w-9 object-contain"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (!img.src.includes("favicons")) {
                img.src = faviconUrl;
              }
            }}
            unoptimized
          />
        </div>
        <p className="line-clamp-2 text-sm font-semibold leading-tight text-white/95">{partner.name}</p>
      </div>

      <a
        href={partner.url}
        target="_blank"
        rel="noreferrer noopener"
        className="absolute bottom-4 right-4 z-10 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black/85 shadow-sm transition-colors duration-200 hover:bg-white/90"
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

        {/* Bouton d'action */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://dev.mateojourniac.com"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-white/90"
          >
            Je veux un site
          </a>
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
