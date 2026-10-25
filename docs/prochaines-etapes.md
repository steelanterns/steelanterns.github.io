# Prochaines étapes

État au 24/10/2026 : refonte en ligne (Vite 8, React 19, TanStack Router, Tailwind CSS 4, shadcn/ui, TypeScript 7, bun), site en français uniquement, publié par GitHub Actions à chaque push sur `master`.

## 1. Version bilingue avec Paraglide (fait le 25/10/2026)

Basée sur l'exemple officiel TanStack Router `examples/react/i18n-paraglide` (Paraglide JS 2.29).

- Anglais par défaut sans préfixe, français sous `/fr`. Les routes restent en anglais dans les deux langues (`/fr/projects`, `/fr/background`).
- Anciennes adresses françaises `/projets` et `/parcours` redirigées vers `/fr/projects` et `/fr/background` (`__root.tsx`).
- Sélecteur EN / FR dans l'en-tête et le menu mobile ; `lang` et meta description mis à jour selon la langue.
- Projets Ozee Keycloak et AyitiCashHub retirés (seul anonsel peut être montré parmi les projets Ozee ; AyitiCashHub n'est pas terminé et va changer de nom). anonsel pointe vers https://anonsel.com et garde la mention « du groupe Ozee ».
- Reste possible : balises `hreflang`.

## 2. Contenu

- [x] Formation renseignée d'après les documents de l'Université INUKA (mars 2023) : licence en sciences informatiques et formation spéciale en génie logiciel (équivalent Master 1, BAC+5). Les scans des deux documents ne sont pas publiés (date et lieu de naissance, numéro d'enregistrement, signatures).
- [ ] Éventuellement une photo, un CV téléchargeable et une capture d'écran d'anonsel.

## 3. Améliorations possibles

- [x] Titre de page par route (option `head` + `<HeadContent />` dans `__root.tsx`, doc « Document Head Management »).
- [ ] Ne charger que le sous-ensemble latin des polices pour alléger le build.
- [ ] Compresser l'image du certificat marketing (360 Ko).
- [x] Image de partage `public/og-image.png` (1200×630) et balises Open Graph en dur dans `index.html` : les robots de LinkedIn, WhatsApp, etc. ne lancent pas le JavaScript, l'aperçu est donc le même (en anglais) pour toutes les pages.

## Rappels techniques

- Le site se publie uniquement depuis `master` (branche `main` supprimée le 25/10/2026).
- Gestionnaire de paquets : bun (pas pnpm ni npm).
- TypeScript 7 : `baseUrl` n'existe plus, les alias sont dans `paths` ; `types` doit lister explicitement les types globaux.
- `routeTree.gen.ts` est généré par Vite : le build lance `vite build` avant `tsc -b`.
- Paraglide génère du JS typé par JSDoc dans `src/paraglide` : `allowJs` est activé dans `tsconfig.app.json`.
- Code source du site 2020 récupéré depuis les source maps : `/home/steeve/Documents/me/legacy-src`.
