export async function fetchMeta(url: string) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const text = await res.text();

    const get = (pattern: RegExp) => {
      const m = text.match(pattern);
      return m ? m[1].trim() : undefined;
    };

    const description =
      get(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
      get(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
      undefined;

    const title = get(/<title[^>]*>([^<]+)<\/title>/i) || undefined;

    const linkMatch = text.match(/<link[^>]+rel=["']?(?:icon|shortcut icon|apple-touch-icon)["']?[^>]*href=["']?([^"'>\s]+)["']?[^>]*>/i);
    let favicon: string | undefined = linkMatch ? linkMatch[1] : undefined;

    if (favicon) {
      try {
        const u = new URL(favicon, url);
        favicon = u.toString();
      } catch (e) {
        // ignore
      }
    } else {
      try {
        const origin = new URL(url).origin;
        favicon = `${origin}/favicon.ico`;
      } catch (e) {
        favicon = undefined;
      }
    }

    return { title, description, favicon };
  } catch (err) {
    return { title: undefined, description: undefined, favicon: undefined };
  }
}
