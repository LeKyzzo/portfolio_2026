"use client";

import Link from "next/link";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiCplusplus,
  SiC,
  SiDotnet,
  SiGo,
  SiRust,
  SiPhp,
  SiSymfony,
  SiLaravel,
  SiVuedotjs,
  SiSvelte,
  SiGnubash,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachespark,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAwsamplify,
  SiGooglecloud,
  SiVercel,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
  SiOpenapiinitiative,
  SiGithubactions,
  SiTestinglibrary,
  SiWebpack
} from "react-icons/si";
import { IconType } from "react-icons";
import ScrollMouse from "./ScrollMouse";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function DemoBackgroundPaths() {
  return <BackgroundPaths title="Background Paths" />;
}

const techStack: { label: string; Icon: IconType; color?: string }[] = [
  { label: "HTML", Icon: SiHtml5, color: "#e34f26" },
  { label: "CSS", Icon: SiCss3, color: "#1572b6" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { label: "React", Icon: SiReact, color: "#61dafb" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#00dc82" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#68a063" },
  { label: "Python", Icon: SiPython, color: "#3776ab" },
  { label: "Django", Icon: SiDjango, color: "#0c4b33" },
  { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { label: "C", Icon: SiC, color: "#a8b9cc" },
  { label: "C++", Icon: SiCplusplus, color: "#00599c" },
  { label: ".NET", Icon: SiDotnet, color: "#512bd4" },
  { label: "Go", Icon: SiGo, color: "#00add8" },
  { label: "Rust", Icon: SiRust, color: "#dea584" },
  { label: "PHP", Icon: SiPhp, color: "#777bb3" },
  { label: "Symfony", Icon: SiSymfony, color: "#a3b1c6" },
  { label: "Laravel", Icon: SiLaravel, color: "#f9322c" },
  { label: "Vue", Icon: SiVuedotjs, color: "#41b883" },
  { label: "Svelte", Icon: SiSvelte, color: "#ff3e00" },
  { label: "Bash", Icon: SiGnubash, color: "#3e474a" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { label: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { label: "Redis", Icon: SiRedis, color: "#dc382d" },
  { label: "Kafka", Icon: SiApachekafka, color: "#fca311" },
  { label: "Spark", Icon: SiApachespark, color: "#e25a1c" },
  { label: "Docker", Icon: SiDocker, color: "#2496ed" },
  { label: "Kubernetes", Icon: SiKubernetes, color: "#326ce5" },
  { label: "Terraform", Icon: SiTerraform, color: "#7b42bc" },
  { label: "AWS", Icon: SiAwsamplify, color: "#ff9900" },
  { label: "GCP", Icon: SiGooglecloud, color: "#4285f4" },
  { label: "Vercel", Icon: SiVercel, color: "#e5e7eb" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { label: "Framer Motion", Icon: SiFramer, color: "#00c6ff" },
  { label: "GraphQL", Icon: SiGraphql, color: "#e535ab" },
  { label: "OpenAPI", Icon: SiOpenapiinitiative, color: "#6ba539" },
  { label: "GitHub Actions", Icon: SiGithubactions, color: "#2088ff" },
  { label: "Testing", Icon: SiTestinglibrary, color: "#e33332" },
  { label: "Webpack", Icon: SiWebpack, color: "#8dd6f9" }
];

export function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full flex items-center overflow-hidden bg-transparent px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <DemoBackgroundPaths />
      </div>

      {/* Halo doux derrière le contenu pour améliorer la lisibilité */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5,6,11,0.65) 0%, rgba(5,6,11,0.2) 55%, transparent 100%)"
        }}
      />

      <div className="relative z-10 w-full space-y-8 md:space-y-10">
        {/* Badge disponibilité */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Disponible pour de nouveaux projets
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/50">
            Matéo Journiac · Ingénieur software full stack
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.4rem] lg:leading-[1.12]">
            Je design des expériences web{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #7dd0ff 0%, #a68dff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              immersives
            </span>{" "}
            et j'orchestre des plateformes{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #a68dff 0%, #7dd0ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              scalables.
            </span>
          </h1>
          <p className="max-w-xl text-base text-white/65 sm:text-lg">
            Produits premium, données en temps réel et CI/CD sans friction. Je combine design, code et ops pour livrer vite et en confiance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            href="/projets"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-[#05060b] shadow-[0_0_24px_rgba(125,208,255,0.35)] transition hover:shadow-[0_0_36px_rgba(125,208,255,0.5)] hover:scale-[1.02]"
          >
            Voir mes projets
          </Link>
          <Link
            href="/plateformes"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            Mes services
          </Link>
        </div>

        <div className="relative mt-8 overflow-hidden">
          {/* Fondu sur les bords du carrousel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
            style={{ background: "linear-gradient(to right, #05060b, transparent)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
            style={{ background: "linear-gradient(to left, #05060b, transparent)" }}
          />
          <div className="marquee">
            <div className="marquee-track">
              {[...techStack, ...techStack].map(({ label, Icon, color }, idx) => (
                <span
                  key={`${label}-${idx}`}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/60"
                >
                  <Icon aria-hidden className="h-5 w-5 flex-shrink-0" style={{ color }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollMouse position="hero" />
    </section>
  );
}
