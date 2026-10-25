import { Link, createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { profile, skills, t } from "@/data/profile"
import { m } from "@/paraglide/messages"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const [first, ...rest] = profile.name.split(" ")

  return (
    <>
      <section aria-labelledby="hero" className="pb-20">
        <p className="text-muted-foreground">
          {profile.role()}, {profile.location()}
        </p>
        <h1
          id="hero"
          className="mt-4 text-[clamp(3.25rem,13vw,8.5rem)] leading-[0.9] font-bold tracking-[-0.04em] animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          {first}
          <br />
          {rest.join(" ")}
        </h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed">{profile.intro()}</p>

        <div className="mt-10 max-w-2xl border-l-4 border-signal py-1 pl-5">
          <p className="text-lg">{profile.now()}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/projects">{m.home_cta_projects()}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">{m.home_cta_contact()}</Link>
          </Button>
        </div>
      </section>

      <Separator />

      <section aria-labelledby="skills" className="pt-20">
        <h2 id="skills" className="text-3xl font-semibold">
          {m.home_skills_title()}
        </h2>
        <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.id}>
              <dt className="font-display text-lg font-semibold">{group.area()}</dt>
              <dd className="mt-2 text-muted-foreground">{group.items.map(t).join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
