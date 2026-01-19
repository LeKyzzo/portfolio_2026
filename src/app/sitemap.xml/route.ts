const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://portfolio.example.com";

async function fetchRepoSlugs() {
  try {
    const user = process.env.GITHUB_USER ?? "mateojourniac";
    const token = process.env.GITHUB_TOKEN;
    const url = token
      ? `https://api.github.com/user/repos?per_page=100&visibility=all&affiliation=owner,collaborator&sort=updated`
      : `https://api.github.com/users/${user}/repos?per_page=100&type=owner&sort=updated`;
    const res = await fetch(url, {
      headers: token ? { Authorization: `token ${token}` } : undefined,
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data as any[]).filter((r) => !r.fork).map((r) => r.name);
  } catch (e) {
    return [];
  }
}

export async function GET() {
  const pages = ["/", "/profil", "/projets", "/plateformes", "/contact"];
  const repoSlugs = await fetchRepoSlugs();

  const urls = [...pages, ...repoSlugs.map((s) => `/projets/${s}`)];

  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
