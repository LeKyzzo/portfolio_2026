# Portfolio Next.js · 2026

Portfolio Next.js (App Router) en thème noir avec effets parallaxe et animations pour présenter une activité d'ingénieur full stack.

## Démarrage

```bash
npm install
npm run dev
```

- Dev server : http://localhost:3000
- Pages : accueil (/), projets (/projets), détail projet (/projets/[slug]), contact (/contact)

## Scripts

- `npm run dev` : lancer le mode développement
- `npm run build` : build de production
- `npm run start` : démarrer le serveur de prod
- `npm run lint` : linting

## Personnalisation

- Mettez vos liens GitHub/LinkedIn/email dans les composants `Footer` et `ContactCta`.
- Mettez vos projets dans `src/lib/projects.ts` (slug, tech, liens GitHub/démo).
- Ajustez la palette dans `tailwind.config.ts` et les backgrounds dans `src/app/globals.css`.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- CSS custom pour parallaxe/animations légères

## Production

- Déploiement recommandé : Vercel (`npm run build` puis push).
- Activez les checks `npm run lint` dans votre CI.
