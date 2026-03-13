import Link from "next/link";

type SiteCreditFooterProps = {
  color?: string;
  href?: string;
  author?: string;
  ctaLabel?: string;
  className?: string;
};

export function SiteCreditFooter({
  color = "#7dd0ff",
  href = "https://mateojourniac.com",
  author = "Matéo Journiac",
  ctaLabel = "Voir mes prestations",
  className = "",
}: SiteCreditFooterProps) {
  return (
    <div className={`border-t border-white/10 bg-black/80 ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-3 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-white/65">
          Site réalisé par <span style={{ color }} className="font-semibold">{author}</span>
        </p>

        <Link
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ color }}
        >
          {ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
