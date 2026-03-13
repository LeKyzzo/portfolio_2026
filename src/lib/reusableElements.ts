export type ReusableElement = {
  slug: string;
  title: string;
  category: string;
  description: string;
  docsLabel: string;
  docsHref: string;
  snippet: string;
};

export const reusableElements: ReusableElement[] = [
  {
    slug: "footer-widget",
    title: "Footer live (script)",
    category: "Widget",
    description:
      "Footer réutilisable sur n'importe quel site via un script externe. Toute mise à jour ici est propagée après redeploy.",
    docsLabel: "Voir mes prestations",
    docsHref: "https://mateojourniac.com",
    snippet:
      '<script src="https://mateojourniac.com/widget/footer.js" data-color="#7dd0ff" data-background="rgba(0,0,0,0.85)" data-href="https://mateojourniac.com"></script>',
  },
];
