const skills = [
  {
    title: "Product Engineering",
    points: ["Discovery technique", "UX-first", "Design Systems"],
    accent: "from-primary/20 to-accent/10"
  },
  {
    title: "Platform & CI/CD",
    points: ["Pipelines GitHub Actions", "Observabilité by default", "Sécurité applicative"],
    accent: "from-accent/20 to-primary/10"
  },
  {
    title: "Scalabilité",
    points: ["Edge & CDN", "Caching avancé", "Cost awareness"],
    accent: "from-white/10 to-primary/5"
  }
];

export function SkillGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className={`card-hover relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${skill.accent} p-5`}
        >
          <p className="text-sm font-semibold text-white">{skill.title}</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {skill.points.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
