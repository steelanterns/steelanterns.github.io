import { createFileRoute } from "@tanstack/react-router"
import { MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTitle } from "@/components/page-title"
import { brandIcons } from "@/components/brand-icons"
import { profile, socials } from "@/data/profile"

export const Route = createFileRoute("/contact")({
  component: Contact,
})

function Contact() {
  return (
    <>
      <PageTitle title="Contact">
        Un projet d'application, une mission ou une question ? Écrivez-moi, je réponds par e-mail.
      </PageTitle>

      <Button asChild size="lg">
        <a href={`mailto:${profile.email}`}>
          <MailIcon />
          {profile.email}
        </a>
      </Button>

      <ul className="mt-12 flex flex-col gap-3">
        {socials.map((s) => {
          const Icon = brandIcons[s.icon]
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg hover:text-primary"
              >
                <Icon className="size-5" />
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
