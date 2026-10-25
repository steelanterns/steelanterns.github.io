import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { profile } from "@/data/profile"
import { getLocale, locales, setLocale } from "@/paraglide/runtime"
import { m } from "@/paraglide/messages"

const links = [
  { to: "/", label: m.nav_home },
  { to: "/projects", label: m.nav_projects },
  { to: "/background", label: m.nav_background },
  { to: "/contact", label: m.nav_contact },
] as const

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return links.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      onClick={onNavigate}
      activeOptions={{ exact: link.to === "/" }}
      className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:underline data-[status=active]:decoration-2 data-[status=active]:underline-offset-8"
    >
      {link.label()}
    </Link>
  ))
}

/** Bascule EN / FR : setLocale recharge la page sur la même route dans l'autre langue. */
function LanguageSwitcher({ className }: { className?: string }) {
  const current = getLocale()

  return (
    <div role="group" aria-label={m.language_label()} className={className}>
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          onClick={() => setLocale(locale)}
          aria-pressed={locale === current}
          title={locale === current ? undefined : m.language_switch()}
          className="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:text-foreground aria-pressed:bg-secondary aria-pressed:text-foreground"
        >
          {locale}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="font-display text-lg font-semibold">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-4 sm:flex">
          <nav aria-label={m.nav_main_label()} className="flex gap-1">
            <NavLinks />
          </nav>
          <LanguageSwitcher className="flex gap-1 border-l pl-4" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden" aria-label={m.menu_open()}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>{m.menu_title()}</SheetTitle>
            </SheetHeader>
            <nav aria-label={m.nav_mobile_label()} className="flex flex-col px-2">
              <NavLinks onNavigate={() => setOpen(false)} />
            </nav>
            <LanguageSwitcher className="mx-4 mt-4 flex gap-1 border-t pt-4" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
