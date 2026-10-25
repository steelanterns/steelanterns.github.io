import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import { paraglideVitePlugin } from "@inlang/paraglide-js"

export default defineConfig({
  plugins: [
    // Config reprise de l'exemple officiel TanStack Router "i18n-paraglide"
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      outputStructure: "message-modules",
      cookieName: "PARAGLIDE_LOCALE",
      strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
      // Mêmes routes en anglais pour les deux langues : seul le préfixe /fr change
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["fr", "/fr/:path(.*)?"],
            ["en", "/:path(.*)?"],
          ],
        },
      ],
    }),
    // Doit passer avant le plugin React (doc TanStack Router)
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Lit l'alias "@/*" directement depuis tsconfig (Vite 8)
    tsconfigPaths: true,
  },
})
