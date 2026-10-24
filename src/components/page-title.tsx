import type { ReactNode } from "react"

export function PageTitle({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
      {children && <p className="mt-4 text-lg text-muted-foreground">{children}</p>}
    </div>
  )
}
