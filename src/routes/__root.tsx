import { Link, Outlet, createRootRoute, redirect } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { getLocale, shouldRedirect } from "@/paraglide/runtime"
import { m } from "@/paraglide/messages"

// Adresses de l'ancienne version française du site (octobre 2026), à garder pour les liens déjà partagés
const legacyPaths: Record<string, string> = {
  "/projets": "/fr/projects",
  "/parcours": "/fr/background",
}

export const Route = createRootRoute({
  beforeLoad: async () => {
    const legacyTarget = legacyPaths[window.location.pathname.replace(/\/$/, "")]
    if (legacyTarget) {
      window.location.replace(legacyTarget)
      return
    }

    document.documentElement.setAttribute("lang", getLocale())
    document.querySelector('meta[name="description"]')?.setAttribute("content", m.meta_description())

    const decision = await shouldRedirect({ url: window.location.href })
    if (decision.redirectUrl) {
      throw redirect({ href: decision.redirectUrl.href })
    }
  },
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        {m.skip_to_content()}
      </a>
      <SiteHeader />
      <main id="content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        <Outlet />
      </main>
      <SiteFooter />
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </div>
  )
}

function NotFound() {
  return (
    <div className="max-w-xl">
      <h1 className="text-4xl font-semibold">{m.not_found_title()}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{m.not_found_text()}</p>
      <Button asChild className="mt-8">
        <Link to="/">{m.not_found_back()}</Link>
      </Button>
    </div>
  )
}
