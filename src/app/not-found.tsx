import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">404</p>
      <h1 className="text-3xl font-semibold text-white">Page introuvable</h1>
      <p className="max-w-md text-sm text-white/70">Le contenu recherché n'existe pas ou a été déplacé.</p>
      <Link href="/" className="rounded-full bg-white/10 px-5 py-2 text-white hover:bg-white/20">
        Retour à l'accueil
      </Link>
    </div>
  );
}
