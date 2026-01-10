import Link from "next/link";
import type { Platform } from "@/lib/platforms";

export function PlatformCard({ platform }: { platform: Platform }) {
  const content = (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75 transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(5,6,11,0.2), rgba(5,6,11,0.8)), url(${platform.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/60">
          <span className="rounded-full bg-white/10 px-3 py-1">{platform.focus}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
        <p className="text-sm text-white/70">{platform.description}</p>
        <span className="text-sm font-semibold text-primary transition group-hover:text-white">
          {platform.link ? "Accéder" : "En savoir plus"} →
        </span>
      </div>
    </div>
  );

  return platform.link ? (
    <Link href={platform.link} target="_blank" rel="noreferrer" className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
