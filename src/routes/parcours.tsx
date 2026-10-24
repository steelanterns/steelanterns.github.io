import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { certificates, education } from "@/data/profile"

export const Route = createFileRoute("/parcours")({
  component: Background,
})

function Background() {
  return (
    <>
      <PageTitle title="Parcours">Formation et certifications.</PageTitle>

      <section aria-labelledby="formation">
        <h2 id="formation" className="text-2xl font-semibold">
          Formation
        </h2>
        <ol className="mt-6 border-l-2 border-primary/30">
          {education.map((item) => (
            <li key={item.title} className="relative pb-8 pl-6 last:pb-0">
              <span className="absolute top-2 -left-[7px] size-3 rounded-full bg-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">
                {[item.school, item.year].filter(Boolean).join(", ")}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="certifications" className="mt-20">
        <h2 id="certifications" className="text-2xl font-semibold">
          Certifications
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <Card className="overflow-hidden py-0">
                <img src={cert.image} alt={`Certificat : ${cert.title}`} className="aspect-[4/3] w-full bg-muted object-contain" />
                <CardContent className="pb-5">
                  <p className="font-medium">{cert.title}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
