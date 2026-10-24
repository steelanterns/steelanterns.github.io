import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { profile } from "@/data/profile"

const links = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/parcours", label: "Parcours" },
  { to: "/contact", label: "Contact" },
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
      {link.label}
    </Link>
  ))
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-lg font-semibold">
          {profile.name}
        </Link>

        <nav aria-label="Navigation principale" className="hidden gap-1 sm:flex">
          <NavLinks />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Ouvrir le menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Navigation mobile" className="flex flex-col px-2">
              <NavLinks onNavigate={() => setOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
