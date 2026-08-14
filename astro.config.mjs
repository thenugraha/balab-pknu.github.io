import { defineConfig } from "astro/config";

// Static site for BALAB lab homepage. Deploys to Cloudflare Pages
// (build command: `astro build`, output dir: `dist`).
export default defineConfig({
  site: "https://balab.paz.works",
  build: { format: "directory" },
  // `astro preview` also serves the site on the tailnet; Vite rejects
  // non-localhost Host headers unless listed here.
  vite: { preview: { allowedHosts: ["home.tailcce2b.ts.net"] } },
});
