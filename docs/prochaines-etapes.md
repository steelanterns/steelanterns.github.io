# Prochaines étapes

État au 25/10/2026 : site bilingue en ligne sur https://steelanterns.github.io (Vite 8, React 19, TanStack Router, Tailwind CSS 4, shadcn/ui, Paraglide JS, TypeScript 7, bun), publié par GitHub Actions à chaque push sur `master`.

## À faire

### Contenu (à demander à Steeve)

- [ ] Photo de profil.
- [ ] CV téléchargeable (PDF), en anglais et en français ?
- [ ] Capture d'écran d'anonsel pour la page Projets.
- [ ] Ajouter le projet anciennement appelé AyitiCashHub quand il aura son nouveau nom et sera terminé.
- [ ] Rust est classé en back-end : à corriger si Steeve l'utilise pour autre chose (outils, système, desktop).

### Améliorations techniques

- [ ] Balises `hreflang` (pages anglaises et françaises liées pour Google).
- [ ] Ne charger que le sous-ensemble latin des polices pour alléger le build.
- [ ] Compresser l'image du certificat marketing (360 Ko).

## Fait

### 25/10/2026

- **Version bilingue** basée sur l'exemple officiel TanStack Router `examples/react/i18n-paraglide` (Paraglide JS 2.29) :
  - anglais par défaut sans préfixe, français sous `/fr` ; routes en anglais dans les deux langues (`/fr/projects`, `/fr/background`) ;
  - anciennes adresses `/projets` et `/parcours` redirigées vers `/fr/projects` et `/fr/background` (`__root.tsx`) ;
  - sélecteur EN / FR dans l'en-tête et le menu mobile.
- **Titre d'onglet par page** : option `head` + `<HeadContent />` dans `__root.tsx` (doc « Document Head Management »).
- **Image de partage** `public/og-image.png` (1200×630) et balises Open Graph en dur dans `index.html` : les robots de LinkedIn, WhatsApp, etc. ne lancent pas le JavaScript, l'aperçu est donc le même (en anglais) pour toutes les pages.
- **Projets** : seuls anonsel (lien https://anonsel.com, mention « du groupe Ozee » conservée) et la contribution à oidc-spa. Ozee Keycloak retiré (confidentiel), AyitiCashHub retiré (pas terminé, va changer de nom).
- **Accueil** : expérience calculée automatiquement depuis mai 2022 (« Plus de 4 ans » / « Près de 5 ans »), poste d'analyste programmeur chez Turbo System S.A. (projets confidentiels, ne rien détailler), projets personnels gardés privés. Compétences : ajout de Rust, LogicalDOC et JasperReports.
- **Formation** d'après les documents de l'Université INUKA (mars 2023) : licence en sciences informatiques, et formation spéciale en génie logiciel **équivalente au Master 1** (ne pas écrire « Master »). Les scans ne sont pas publiés (date et lieu de naissance, numéro d'enregistrement, signatures).
- **Ménage** : branche `main` supprimée ; seul `master` est autorisé à publier sur l'environnement `github-pages`.

## Rappels techniques

- Textes traduits : `messages/en.json` et `messages/fr.json` (chaque clé dans les deux fichiers). Données fixes : `src/data/profile.ts`.
- `src/paraglide/` est généré par Vite : ne pas le modifier ni le committer. `allowJs` est activé dans `tsconfig.app.json` pour ses fichiers JSDoc.
- Gestionnaire de paquets : bun (pas pnpm ni npm).
- TypeScript 7 : `baseUrl` n'existe plus, les alias sont dans `paths` ; `types` doit lister explicitement les types globaux.
- `routeTree.gen.ts` est généré par Vite : le build lance `vite build` avant `tsc -b`.
- GitHub Pages sert `404.html` (copie de `index.html`) pour les adresses comme `/fr/projects` : le site s'affiche, mais le code HTTP est 404.
- Source de l'image de partage : page HTML capturée en 1200×630 avec Chrome headless (polices et couleurs du site).
- Infos de carrière : profil LinkedIn https://www.linkedin.com/in/steeve-jean-chilles-6a0658186/.
- Code source du site 2020 récupéré depuis les source maps : `/home/steeve/Documents/me/legacy-src`.
