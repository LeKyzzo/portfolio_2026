import { NextResponse } from "next/server";

export const dynamic = "force-static";

const widgetScript = `(() => {
  if (window.__mateoFooterWidgetLoaded) return;
  window.__mateoFooterWidgetLoaded = true;

  const script = document.currentScript;
  if (!script) return;

  const color = script.getAttribute("data-color") || "#7dd0ff";
  const href = script.getAttribute("data-href") || "https://mateojourniac.com";
  const author = script.getAttribute("data-author") || "Matéo Journiac";
  const ctaLabel = script.getAttribute("data-cta") || "Voir mes prestations";
  const text = script.getAttribute("data-text") || "Site réalisé par";
  const theme = script.getAttribute("data-theme") || "dark";
  const customBackground = script.getAttribute("data-background") || script.getAttribute("data-bg");

  const host = document.createElement("div");
  host.setAttribute("data-mateo-footer-widget", "");

  const root = host.attachShadow({ mode: "open" });

  const isLight = theme === "light";
  const background = customBackground || (isLight ? "#ffffff" : "rgba(0,0,0,0.85)");
  const border = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  const textColor = isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.65)";

  root.innerHTML =
    '<style>' +
      ':host{display:block;width:100%;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;}' +
      '.wrap{box-sizing:border-box;width:100%;border-top:1px solid ' + border + ';background:' + background + ';}' +
      '.inner{box-sizing:border-box;max-width:1120px;margin:0 auto;padding:10px 16px;display:flex;gap:8px;align-items:center;justify-content:space-between;}' +
      'p{margin:0;font-size:12px;line-height:1.4;color:' + textColor + ';}' +
      '.author{color:' + color + ';font-weight:600;}' +
      'a{color:' + color + ';text-decoration:none;font-size:12px;font-weight:600;white-space:nowrap;}' +
      'a:hover{opacity:0.85;}' +
      '@media (max-width:640px){.inner{flex-direction:column;text-align:center;justify-content:center;}}' +
    '</style>' +
    '<div class="wrap"><div class="inner"><p>' + text + ' <span class="author">' + author + '</span></p><a href="' + href + '" target="_blank" rel="noreferrer noopener">' + ctaLabel + ' →</a></div></div>';

  script.insertAdjacentElement("afterend", host);
})();`;

export async function GET() {
  return new NextResponse(widgetScript, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
