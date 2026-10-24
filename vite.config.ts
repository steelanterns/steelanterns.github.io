import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"

export default defineConfig({
  plugins: [
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
