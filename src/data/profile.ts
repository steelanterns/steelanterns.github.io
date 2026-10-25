// Données du site. Les textes traduits sont dans messages/en.json et messages/fr.json,
// ici on ne garde que ce qui ne se traduit pas (noms, liens, technologies).
// Les textes sont des fonctions m.xxx() : elles renvoient la langue courante au moment du rendu.
import { m } from "@/paraglide/messages"
import webDev from "@/assets/certificats/web-dev.png"
import marketing from "@/assets/certificats/marketing-numerique.png"

type Text = () => string

export const profile = {
  name: "Steeve Jean Chilles",
  fullName: "Steeve Ralph M. Jean Chilles",
  role: m.profile_role,
  location: m.profile_location,
  intro: m.profile_intro,
  now: m.profile_now,
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
  id: string
  name: string | Text
  summary: Text
  role: Text
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    id: "anonsel",
    name: "anonsel",
    summary: m.project_anonsel_summary,
    role: m.project_anonsel_role,
    stack: ["TanStack Start", "Spring Boot", "Keycloak", "Terraform", "DigitalOcean"],
    href: "https://anonsel.com",
  },
  {
    id: "oidc-spa",
    name: m.project_oidc_name,
    summary: m.project_oidc_summary,
    role: m.project_oidc_role,
    stack: ["TypeScript", "Vite", "OIDC"],
    href: "https://github.com/keycloakify/oidc-spa",
  },
]

export const skills: { id: string; area: Text; items: (string | Text)[] }[] = [
  { id: "frontend", area: m.skills_frontend, items: ["React", "TypeScript", m.skills_tanstack, "Tailwind CSS", "shadcn/ui"] },
  { id: "backend", area: m.skills_backend, items: ["Spring Boot", "Java", "PostgreSQL", m.skills_rest] },
  { id: "auth", area: m.skills_auth, items: ["Keycloak", "OpenID Connect", "SSO"] },
  { id: "infra", area: m.skills_infra, items: ["Docker", "Terraform", "DigitalOcean", "AWS", "GitHub Actions", "Cloudflare"] },
]

// D'après les documents de l'Université INUKA (mars 2023). Les scans ne sont pas publiés : ils contiennent
// des données personnelles (date et lieu de naissance, numéro d'enregistrement, signatures).
export const education = [
  { id: "master", title: m.education_master, school: "Université INUKA", year: "2023" },
  { id: "bachelor", title: m.education_bachelor, school: "Université INUKA", year: "2023" },
]

export const certificates = [
  { id: "web-dev", title: m.certificate_web_dev, image: webDev },
  { id: "marketing", title: m.certificate_marketing, image: marketing },
]

/** Titre d'onglet d'une page : « Projets · Steeve Jean Chilles ». */
export function pageTitle(page: string) {
  return `${page} · ${profile.name}`
}

/** Affiche un texte fixe ou traduit. */
export function t(value: string | Text) {
  return typeof value === "function" ? value() : value
}
