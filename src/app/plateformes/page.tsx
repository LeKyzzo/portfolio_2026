import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import ServiceCard from "@/components/ServiceCard";
import services from "@/lib/services.json";
import ScrollMouse from "@/components/ScrollMouse";

export const metadata = {
	title: "Mes Services · Portfolio"
};

export default function PlateformesPage() {
	return (
			<div className="space-y-0">
			    <section className="relative flex min-h-screen w-full items-center bg-transparent">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
					<p className="text-xs uppercase tracking-[0.18em] text-white/50">Plateformes</p>
					<h1 className="text-3xl font-semibold text-white">Mes Services produits</h1>
					<p className="max-w-3xl text-sm text-white/70">
						Studio de prototypage, console d'observabilité, lab temps réel. Des plateformes brandables, mesurables et extensibles.
					</p>
					<div className="flex flex-wrap gap-3 text-sm text-white/70">
						<Link href="/contact" className="font-semibold text-primary hover:text-white">
							Parler d'une intégration →
						</Link>
					</div>
				</div>
				<ScrollMouse position="hero" />
			</section>

			<section className="w-full bg-black/85 py-10 md:py-12">
				<div className="mx-auto max-w-6xl space-y-8 px-6 md:px-10">
					<div className="grid gap-6 md:grid-cols-2">
						{services.map((service) => (
							<ServiceCard key={service.slug} service={service} />
						))}
					</div>

					<ContactCta />
				</div>
			</section>
		</div>
	);
}
