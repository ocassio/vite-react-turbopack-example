import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import * as packageJson from "./package.json";

// function relativePaths(paths) {
//     return paths.map(p => path.resolve(__dirname, p));
// }

// const entries = relativePaths([
//     'components/counter.ts',
//     'components/header.ts',
//     'utils/counter.ts'
// ]);

export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "@repo/ui",
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});
