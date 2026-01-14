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

      <div className="relative z-10 w-full space-y-6 md:space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/60">Matéo Journiac · Ingénieur software / full stack</p>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Je design des expériences web immersives et j'orchestre des plateformes scalables.
          </h1>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Produits premium, données en temps réel et CI/CD sans friction. Je combine design, code et ops pour livrer vite et en confiance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <Link href="/projets" className="rounded-full bg-white px-5 py-2.5 text-black transition hover:scale-[1.01]">
            Voir mes projets
          </Link>
          <Link
            href="/plateformes"
            className="rounded-full border border-white/20 px-5 py-2.5 text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Voir mes services
          </Link>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div className="marquee">
            <div className="marquee-track">
              {[...techStack, ...techStack].map(({ label, Icon, color }, idx) => (
                <span
                  key={`${label}-${idx}`}
                  className="flex items-center gap-4 whitespace-nowrap text-lg font-semibold text-white"
                >
                  <Icon aria-hidden className="h-7 w-7" style={{ color }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
