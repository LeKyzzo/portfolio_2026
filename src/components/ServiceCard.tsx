import Link from "next/link";

export default function ServiceCard({ service }: { service: any }) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="flex gap-4">
        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md bg-black/20 flex items-center justify-center">
          {service.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={service.image}
              alt={service.title}
              width={32}
              height={32}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="h-8 w-8 bg-white/5" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
          <p className="mt-2 text-sm text-white/70">{service.description ?? service.short}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <ul className="text-sm text-white/70 space-y-2">
          {service.details?.slice(0, 3).map((d: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center justify-end">
          {service.link ? (
            <a
              href={service.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-black shadow-sm transition-transform hover:scale-105"
            >
              Y accéder
            </a>
          ) : (
            <a
              href="/contact"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/5"
            >
              Contactez‑moi
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
