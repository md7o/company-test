import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  target: "node22",
  outDir: "lib",
  clean: true,
  noExternal: [/^@repo\//],
});
