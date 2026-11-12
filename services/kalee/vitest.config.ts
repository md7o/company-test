import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    // Only look in src/: dist/node_modules is a symlink back to node_modules.
    include: ["src/**/*.test.ts"],
  },
});
