"use client";

import { useState } from "react";
import type { ReusableElement } from "@/lib/reusableElements";

type ReusableElementCardProps = {
  item: ReusableElement;
};

export default function ReusableElementCard({ item }: ReusableElementCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="mb-5 space-y-2 border-b border-white/10 pb-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-primary/85">{item.category}</p>
        <h2 className="text-xl font-semibold text-white">{item.title}</h2>
        <p className="text-sm text-white/70">{item.description}</p>
      </div>

      <div className="mb-4 rounded-xl border border-white/10 bg-black/50 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Doc rapide</p>
        <ul className="space-y-1 text-sm text-white/70">
          {item.usage.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-x-auto rounded-xl border border-white/10 bg-black/70 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Code d’intégration</p>
          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copier le code"
            title={copied ? "Copié" : "Copier"}
            className={`relative inline-flex h-7 w-7 items-center justify-center rounded-md border text-white/80 transition-all duration-200 hover:text-white ${
              copied ? "border-primary/45 bg-primary/10" : "border-white/15 hover:border-white/35"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
              className={`absolute transition-all duration-200 ${copied ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
            >
              <rect x="9" y="9" width="10" height="10" rx="2" />
              <path d="M6 15H5a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v1" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
              className={`absolute transition-all duration-200 ${copied ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
            >
              <path d="M5 12.5l4.2 4.2L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <pre className="text-xs leading-relaxed text-white/80">
          <code>{item.snippet}</code>
        </pre>
      </div>
    </article>
  );
}
