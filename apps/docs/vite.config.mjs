import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    react({
      include: "**/*.tsx",
    }),
  ],
  optimizeDeps: {
    exclude: ["@repo/ui"]
  }
});
