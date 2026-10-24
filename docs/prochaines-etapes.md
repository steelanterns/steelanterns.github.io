# Prochaines étapes

État au 24/10/2026 : refonte en ligne (Vite 8, React 19, TanStack Router, Tailwind CSS 4, shadcn/ui, TypeScript 7, bun), site en français uniquement, publié par GitHub Actions à chaque push sur `main`.

## 1. Version bilingue avec Paraglide (prochaine session)

Objectif : site en anglais par défaut, avec une version française.

- [ ] Lire la doc officielle à jour de Paraglide JS (inlang) et son guide d'intégration avec TanStack Router / Vite, et vérifier la dernière version avant d'installer quoi que ce soit.
- [ ] Installer avec bun et ajouter le plugin Vite de Paraglide.
- [ ] Langue de base : `en` ; langues : `en`, `fr`.
- [ ] Choisir la stratégie d'URL. Proposition : anglais sans préfixe (`/`, `/projects`, `/background`, `/contact`) et français préfixé (`/fr`, `/fr/projets`, `/fr/parcours`, `/fr/contact`). Vérifier que la réécriture d'URL de Paraglide fonctionne sur GitHub Pages (site statique, la redirection passe par `404.html`).
- [ ] Déplacer tous les textes dans les fichiers de messages (`messages/en.json`, `messages/fr.json`) :
  - textes de l'interface : navigation, boutons, titres de pages, page 404, lien d'évitement ;
  - contenu de `src/data/profile.ts` : intro, « en ce moment », résumés et rôles des projets, compétences, formation, certifications.
- [ ] Ajouter un sélecteur de langue dans l'en-tête (et dans le menu mobile).
- [ ] Mettre à jour `lang` sur `<html>`, le `<title>` et la meta description selon la langue.
- [ ] Ajouter les balises `hreflang` si la stratégie d'URL le permet.
- [ ] Rédiger les textes anglais (l'ancien site 2020 était en anglais : `../legacy-src` peut servir de point de départ pour le ton).
- [ ] Tester : build, `tsc -b` (TypeScript 7), oxlint, navigation directe sur chaque URL dans les deux langues, page 404, mobile.

## 2. Contenu à compléter (à demander à Steeve)

- [ ] Formation : intitulé exact, établissement et année du master et de la licence (`education` dans `src/data/profile.ts` ; le master s'affiche pour l'instant sans établissement).
- [ ] Confirmer que les projets Ozee (anonsel, Ozee Keycloak) peuvent être montrés publiquement, sinon les retirer ou les anonymiser.
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
- Code source du site 2020 récupéré depuis les source maps : `/home/steeve/Documents/me/legacy-src`.
