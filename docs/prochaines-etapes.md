# Prochaines étapes

État au 24/10/2026 : refonte en ligne (Vite 8, React 19, TanStack Router, Tailwind CSS 4, shadcn/ui, TypeScript 7, bun), site en français uniquement, publié par GitHub Actions à chaque push sur `master`.

## 1. Version bilingue avec Paraglide (fait le 25/10/2026)

Basée sur l'exemple officiel TanStack Router `examples/react/i18n-paraglide` (Paraglide JS 2.29).

- Anglais par défaut sans préfixe, français sous `/fr`. Les routes restent en anglais dans les deux langues (`/fr/projects`, `/fr/background`).
- Anciennes adresses françaises `/projets` et `/parcours` redirigées vers `/fr/projects` et `/fr/background` (`__root.tsx`).
- Sélecteur EN / FR dans l'en-tête et le menu mobile ; `lang` et meta description mis à jour selon la langue.
- Projets Ozee Keycloak et AyitiCashHub retirés (seul anonsel peut être montré parmi les projets Ozee ; AyitiCashHub n'est pas terminé et va changer de nom). anonsel pointe vers https://anonsel.com et garde la mention « du groupe Ozee ».
- Reste possible : balises `hreflang`, titre de page par route.

## 2. Contenu à compléter (à demander à Steeve)

- [ ] Formation : intitulé exact, établissement et année du master et de la licence (`education` dans `src/data/profile.ts` ; le master s'affiche pour l'instant sans établissement).
- [ ] Ajouter des liens publics vers les projets s'il y en a (démo, dépôt).
- [ ] Éventuellement une photo et un CV téléchargeable.

## 3. Améliorations possibles

- [ ] Titre de page par route (via `head` + `HeadContent` de TanStack Router, à vérifier dans la doc).
- [ ] Ne charger que le sous-ensemble latin des polices pour alléger le build.
- [ ] Compresser l'image du certificat marketing (360 Ko).
- [ ] Image Open Graph pour le partage sur les réseaux.

## Rappels techniques

- Gestionnaire de paquets : bun (pas pnpm ni npm).
- TypeScript 7 : `baseUrl` n'existe plus, les alias sont dans `paths` ; `types` doit lister explicitement les types globaux.
- `routeTree.gen.ts` est généré par Vite : le build lance `vite build` avant `tsc -b`.
- Paraglide génère du JS typé par JSDoc dans `src/paraglide` : `allowJs` est activé dans `tsconfig.app.json`.
- Code source du site 2020 récupéré depuis les source maps : `/home/steeve/Documents/me/legacy-src`.
