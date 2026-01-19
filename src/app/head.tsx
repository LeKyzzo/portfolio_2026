import socials from "@/lib/socials.json";

export default function Head() {
  const sameAs = (socials || []).map((s: any) => s.url).filter((u: string) => u && !u.startsWith("mailto:"));
  const contact = socials.find((s: any) => s.type === "contact" || s.name.toLowerCase() === "email");

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matéo Journiac",
    url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://portfolio.example.com",
    sameAs,
    email: contact ? contact.handle : undefined
  });

  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#0b0b0b" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}
