// Maverick offline stub (10 Nov 2026).
// Replaces the live maverick-james Worker so it no longer forwards anything
// to Anthropic. The original code is untouched in
// ../scvd-context/citt-maverick/worker.js, kept for the future
// Tame Grease Monkey module in Chasin' Curves.
// Deploy:  wrangler deploy --config wrangler.offline.toml
// Restore: wrangler deploy  (uses wrangler.toml → original code)

const CORS = {
  "Access-Control-Allow-Origin": "https://scvd-app.github.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }
    return new Response(
      JSON.stringify({ error: { type: "offline", message: "Maverick is offline for now." } }),
      { status: 503, headers: { "Content-Type": "application/json", ...CORS } }
    );
  },
};
