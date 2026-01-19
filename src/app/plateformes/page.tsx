import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import ServiceCard from "@/components/ServiceCard";
import services from "@/lib/services.json";
import ScrollMouse from "@/components/ScrollMouse";
import { fetchMeta } from "@/lib/fetchMeta";

export const metadata = {
	title: "Mes Services · Matéo Journiac",
	description:
		"Mes plateformes et services : sites, webapps et solutions sur-mesure pour product teams et entreprises.",
	openGraph: {
		images: ["/og-image.svg"]
	}
};

export default async function PlateformesPage() {
	const enriched = await Promise.all(
		services.map(async (s: any) => {
			const meta = await fetchMeta(s.link);
			return {
				...s,
				title: s.title ?? meta.title ?? s.link,
				description: meta.description ?? s.description ?? s.short ?? "",
				image: meta.favicon ?? s.image,
			};
		})
	);

	return (
		<div className="space-y-0">
			<section className="relative flex min-h-screen w-full items-center bg-transparent">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
					<p className="text-xs uppercase tracking-[0.18em] text-white/50">Plateformes</p>
					<h1 className="text-3xl font-semibold text-white">Mes Services</h1>
					<p className="max-w-3xl text-sm text-white/70">
						Services automobile, créations de site internet, WebApp ou autres logiciels, et art automobiles, découvres mes plateformes sur-mesure :
					</p>
					<div className="flex flex-wrap gap-3 text-sm text-white/70">
						<Link href="/contact" className="font-semibold text-primary hover:text-white">
							Vous avez une question ? →
						</Link>
					</div>
				</div>
				<ScrollMouse position="hero" />
			</section>

			<section className="w-full bg-black/85 py-10 md:py-12">
				<div className="mx-auto max-w-6xl space-y-8 px-6 md:px-10">
					<div className="grid gap-6 md:grid-cols-2">
						{enriched.map((service: any) => (
							<ServiceCard key={service.slug} service={service} />
						))}
					</div>

					<ContactCta />
				</div>
			</section>
		</div>
	);
}
