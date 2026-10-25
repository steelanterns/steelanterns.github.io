# steelanterns.github.io

Portfolio de Steeve Jean Chilles.

Stack : Vite 8, React 19, TanStack Router (routes par fichiers), Tailwind CSS 4, shadcn/ui, Paraglide JS (i18n), TypeScript 7, bun.

Langues : anglais par défaut (`/projects`), français sous `/fr` (`/fr/projects`). Les routes sont en anglais dans les deux langues.

## Développer

```bash
bun install
bun run dev
```

## Mettre le contenu à jour

- Textes traduits (interface, bio, projets, compétences, formation) : `messages/en.json` et `messages/fr.json`. Chaque clé doit exister dans les deux fichiers.
- Données fixes (nom, liens, technologies, ordre des projets) : `src/data/profile.ts`.
- `src/paraglide/` est généré par Vite à partir des fichiers de messages : ne pas le modifier ni le committer.

## Déployer

Chaque push sur `master` construit et publie le site via GitHub Actions (`.github/workflows/deploy.yml`).
Dans les réglages du dépôt : Settings > Pages > Source = **GitHub Actions**.
