import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import config from "./scripts/iconset";

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: [
          ...config.entries
            .map((entry) => entry.name.toLocaleLowerCase())
            .map((name) => `./src/components/icons/${name}.tsx`),
          "./src/entry.lib.ts",
        ],
        formats: ["es", "cjs"],
        fileName: (format, entry) =>
          `${entry}.index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
    },
    plugins: [qwikVite()],
  };
});
