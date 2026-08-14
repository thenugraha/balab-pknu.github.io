#!/usr/bin/env bash
# start.sh — serve the built site (dist/) on :4002. Idempotent.
# Exposed on the tailnet as https://home.tailcce2b.ts.net (see ../tailscale-nodes).
# After changing src/, run `npm run build` first — this serves dist/ only.
# NOT `astro preview`: Astro 4's static preview hardcodes Vite's config and
# drops vite.preview.allowedHosts, so Vite 403s any non-localhost Host header
# (e.g. home.tailcce2b.ts.net). A plain static server has no host check.
set -euo pipefail
cd "$(dirname "$0")"

if curl -sf -o /dev/null --max-time 3 http://localhost:4002/; then
    echo "homepage: already serving on :4002"
    exit 0
fi

mkdir -p logs
nohup python3 -m http.server 4002 --bind 0.0.0.0 --directory dist > logs/preview.out 2>&1 &
echo $! > preview.pid

for i in $(seq 1 15); do
    sleep 1
    if curl -sf -o /dev/null http://localhost:4002/; then
        echo "homepage: up — http://localhost:4002 (https://home.tailcce2b.ts.net)"
        exit 0
    fi
done
echo "homepage: FAILED — see logs/preview.out"
exit 1
