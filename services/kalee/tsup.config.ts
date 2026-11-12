import { existsSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { defineConfig } from "tsup";

// Cloud Build installs deps with npm, which can't read pnpm's "workspace:*".
// @repo/* packages are bundled (noExternal), so dist/ only needs runtime deps.
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  target: "node22",
  outDir: "dist",
  // NEVER set clean: true here. dist/node_modules is a symlink, and tsup's
  // clean follows it and deletes the real packages (incl. packages/*).
  clean: false,
  noExternal: [/^@repo\//],
  onSuccess: async () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8"));
    const deployPkg = {
      name: pkg.name,
      private: true,
      main: "index.js",
      engines: pkg.engines,
      dependencies: pkg.dependencies,
    };
    writeFileSync("dist/package.json", JSON.stringify(deployPkg, null, 2));
    // The Firebase CLI loads the code locally to find the functions, so it
    // needs node_modules in dist/. Link to ours; deploys skip node_modules.
    if (!existsSync("dist/node_modules")) {
      symlinkSync("../node_modules", "dist/node_modules", "dir");
    }
  },
});
