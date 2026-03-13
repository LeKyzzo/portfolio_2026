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

## Widget Footer live (réutilisable)

Le widget est exposé sur la route suivante :

- `/widget/footer.js`

Exemple d'intégration dans n'importe quel site :

```html
<script
	src="https://votre-domaine.com/widget/footer.js"
	data-color="#7dd0ff"
	data-href="https://mateojourniac.com"
	data-author="Matéo Journiac"
	data-cta="Voir mes prestations"
	data-text="Site réalisé par"
	data-theme="dark"
></script>
```

Attributs disponibles :

- `data-color` : couleur d'accent
- `data-href` : URL de redirection
- `data-author` : nom affiché
- `data-cta` : texte du lien
- `data-text` : texte de préfixe
- `data-theme` : `dark` ou `light`

Si vous mettez à jour ce repo puis redéployez, tous les sites qui chargent ce script récupèrent automatiquement la nouvelle version.
