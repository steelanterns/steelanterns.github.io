import { createFileRoute } from "@tanstack/react-router"
import { MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTitle } from "@/components/page-title"
import { brandIcons } from "@/components/brand-icons"
import { profile, socials } from "@/data/profile"
import { m } from "@/paraglide/messages"

export const Route = createFileRoute("/contact")({
  component: Contact,
})

function Contact() {
  return (
    <>
      <PageTitle title={m.contact_title()}>{m.contact_intro()}</PageTitle>

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
