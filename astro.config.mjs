import { defineConfig } from "astro/config";

// Static site for BALAB lab homepage. Deploys to GitHub Pages
// (org root site: https://balab-pknu.github.io) via .github/workflows/deploy.yml.
export default defineConfig({
  site: "https://balab-pknu.github.io",
  build: { format: "directory" },
  // `astro preview` also serves the site on the tailnet; Vite rejects
  // non-localhost Host headers unless listed here.
  vite: { preview: { allowedHosts: ["home.tailcce2b.ts.net"] } },
});
