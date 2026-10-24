import { brandIcons } from "@/components/brand-icons"
import { profile, socials } from "@/data/profile"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <ul className="flex gap-2">
          {socials.map((s) => {
            const Icon = brandIcons[s.icon]
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent hover:text-foreground"
                >
                  <Icon className="size-4" />
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
