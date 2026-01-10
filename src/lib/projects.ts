export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
  year: number;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "observability-hub",
    title: "Observability Hub",
    tagline: "Plateforme temps réel pour traces, métriques et logs",
    description:
      "Un hub unifié pour collecter, normaliser et visualiser la télémétrie d'applications distribuées, avec pipelines temps réel et alertes intelligentes.",
    tech: ["Next.js", "TypeScript", "Kafka", "OpenTelemetry", "PostgreSQL", "Tailwind"],
    repo: "https://github.com/yourname/observability-hub",
    live: "https://observability-hub-demo.example.com",
    year: 2025,
    highlights: [
      "Ingestion 200k events/min avec buffering Kafka",
      "Dashboards dynamiques alimentés par WebSockets",
      "Corrélation traces/logs via OpenTelemetry"
    ]
  },
  {
    slug: "ai-release-bot",
    title: "AI Release Bot",
    tagline: "Automatisation CI/CD guidée par IA",
    description:
      "Un assistant de livraison continue qui surveille les branches principales, génère des changelogs, déclenche les déploiements canary et vérifie la santé post-release.",
    tech: ["Next.js", "Node.js", "LangChain", "GitHub Actions", "Redis"],
    repo: "https://github.com/yourname/ai-release-bot",
    year: 2024,
    highlights: [
      "Analyse automatique des PRs et génération de release notes",
      "Déploiements canary orchestrés et rollback sécurisé",
      "Tableau de bord temps réel des builds"
    ]
  },
  {
    slug: "realtime-collab-editor",
    title: "Realtime Collab Editor",
    tagline: "Éditeur collaboratif CRDT low-latency",
    description:
      "Un éditeur de documents temps réel basé sur CRDT avec présence multi-curseurs, historique local-first et synchronisation offline-first.",
    tech: ["Next.js", "TypeScript", "CRDT", "WebRTC", "Turso", "Tailwind"],
    repo: "https://github.com/yourname/realtime-collab-editor",
    year: 2024,
    highlights: [
      "Synchronisation peer-to-peer via WebRTC",
      "Stockage local-first et résilience offline",
      "Permissions granulaires par rôle"
    ]
  },
  {
    slug: "edge-analytics-kit",
    title: "Edge Analytics Kit",
    tagline: "Processing data à la périphérie",
    description:
      "Kit de déploiement d'analytique proche des utilisateurs avec transformations streaming, feature flags et export vers les data warehouses.",
    tech: ["Next.js", "Edge Functions", "ClickHouse", "Zod", "Tailwind"],
    repo: "https://github.com/yourname/edge-analytics-kit",
    year: 2025,
    highlights: [
      "Latence médiane < 40ms via exécution edge",
      "Pipelines de transformation configurables en UI",
      "Export batch vers BigQuery et Snowflake"
    ]
  }
];

export const pinnedProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
