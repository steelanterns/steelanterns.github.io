import { createFileRoute } from "@tanstack/react-router"
import { ExternalLinkIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PageTitle } from "@/components/page-title"
import { projects, t } from "@/data/profile"
import { m } from "@/paraglide/messages"

export const Route = createFileRoute("/projects")({
  component: Projects,
})

function Projects() {
  return (
    <>
      <PageTitle title={m.projects_title()}>{m.projects_intro()}</PageTitle>

      <ul className="divide-y border-y">
        {projects.map((project) => (
          <li key={project.id} className="grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <div>
              <h2 className="text-2xl font-semibold">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    {t(project.name)}
                    <ExternalLinkIcon className="size-4" aria-label={m.projects_external_link()} />
                  </a>
                ) : (
                  t(project.name)
                )}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{project.role()}</p>
            </div>
            <div>
              <p className="text-lg">{project.summary()}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={m.projects_stack_label()}>
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant="secondary">{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
