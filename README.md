# steelanterns.github.io

Portfolio de Steeve Jean Chilles.

Stack : Vite 8, React 19, TanStack Router (routes par fichiers), Tailwind CSS 4, shadcn/ui, TypeScript 7, bun.

## Développer

```bash
bun install
bun run dev
```

## Mettre le contenu à jour

Tout le texte (bio, projets, compétences, formation, liens) est dans `src/data/profile.ts`.

## Déployer

Chaque push sur `main` construit et publie le site via GitHub Actions (`.github/workflows/deploy.yml`).
Dans les réglages du dépôt : Settings > Pages > Source = **GitHub Actions**.
