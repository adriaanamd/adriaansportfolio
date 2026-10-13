import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import path from "node:path"
import { defineConfig } from "vite"

export default defineConfig({
  // Emit Vercel's Build Output API when Vercel runs the deployment build.
  // Without this, Nitro falls back to a standalone node-server build and
  // Vercel does not receive the generated public asset files correctly.
  plugins: [
    tanstackStart(),
    nitro({ preset: "vercel" }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT || 8443),
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT || 8443),
  },
})
