// Tout le contenu du site est ici : modifier ce fichier suffit pour mettre le portfolio à jour.
import webDev from "@/assets/certificats/web-dev.png"
import marketing from "@/assets/certificats/marketing-numerique.png"

export const profile = {
  name: "Steeve Jean Chilles",
  fullName: "Steeve Ralph M. Jean Chilles",
  role: "Développeur full-stack",
  location: "Port-au-Prince, Haïti",
  intro:
    "Je conçois des applications web de bout en bout : l'interface en React, l'API en Spring Boot, l'authentification avec Keycloak et l'infrastructure qui fait tourner le tout.",
  now: "En ce moment, je construis anonsel, une plateforme de petites annonces, et AyitiCashHub, un outil de gestion pour les vendeurs MonCash et NatCash.",
  email: "steevejeanchilles@gmail.com",
}

export const socials = [
  { label: "GitHub", href: "https://github.com/steelanterns", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/steeve-jean-chilles-6a0658186/",
    icon: "linkedin",
  },
] as const

export type Project = {
  name: string
  summary: string
  role: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: "anonsel",
    summary:
      "Plateforme de petites annonces du groupe Ozee : dépôt d'annonces, modération, gestion des utilisateurs et des sanctions.",
    role: "Frontend, authentification et déploiement",
    stack: ["TanStack Start", "Spring Boot", "Keycloak", "Terraform", "DigitalOcean"],
  },
  {
    name: "AyitiCashHub",
    summary:
      "Application pour les vendeurs MonCash et NatCash en Haïti : ventes, dépôts, retraits et historique des transactions, pensée d'abord pour le mobile.",
    role: "Conception et développement",
    stack: ["TanStack Start", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
    href: "https://github.com/steelanterns/ach-ui",
  },
  {
    name: "Ozee Keycloak",
    summary:
      "Serveur d'authentification unique partagé entre les applications du groupe Ozee, avec thème personnalisé et realm versionné en configuration-as-code.",
    role: "Mise en place et maintenance",
    stack: ["Keycloak", "Docker", "GitHub Actions", "keycloak-config-cli"],
  },
  {
    name: "Contribution à oidc-spa",
    summary:
      "Correctif dans le plugin Vite de cette bibliothèque open source d'authentification OpenID Connect pour applications web.",
    role: "Contributeur open source",
    stack: ["TypeScript", "Vite", "OIDC"],
    href: "https://github.com/keycloakify/oidc-spa",
  },
]

export const skills = [
  { area: "Frontend", items: ["React", "TypeScript", "TanStack Start et Router", "Tailwind CSS", "shadcn/ui"] },
  { area: "Backend", items: ["Spring Boot", "Java", "PostgreSQL", "API REST"] },
  { area: "Authentification", items: ["Keycloak", "OpenID Connect", "SSO"] },
  { area: "Infrastructure", items: ["Docker", "Terraform", "DigitalOcean", "AWS", "GitHub Actions", "Cloudflare"] },
]

// TODO(Steeve) : préciser intitulés exacts, établissements et années (voir docs/prochaines-etapes.md).
export const education = [
  { title: "Master", school: "", year: "" },
  { title: "Licence en informatique", school: "Université Inuka", year: "" },
]

export const certificates = [
  { title: "Développement web", image: webDev },
  { title: "Fondamentaux du marketing numérique", image: marketing },
]
