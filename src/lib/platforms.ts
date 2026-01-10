export type Platform = {
  slug: string;
  name: string;
  description: string;
  image: string;
  link?: string;
  focus: string;
};

export const platforms: Platform[] = [
  {
    slug: "launchpad-studio",
    name: "Launchpad Studio",
    description: "Un studio produit pour prototyper, tester et lancer vite avec un socle Next.js + edge + analytics ready.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    link: "https://launchpad.example.com",
    focus: "Prototypage et shipping rapide"
  },
  {
    slug: "ops-console",
    name: "Ops Console",
    description: "Console d'observabilité et d'orchestration CI/CD avec feature flags, canary et dashboards corrélés.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    link: "https://ops-console.example.com",
    focus: "Livraison continue et visibilité"
  },
  {
    slug: "realtime-lab",
    name: "Realtime Lab",
    description: "Plateforme data temps réel pour flux events, websockets et expériences interactives à faible latence.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    link: "https://realtime-lab.example.com",
    focus: "Temps réel et data"
  }
];
