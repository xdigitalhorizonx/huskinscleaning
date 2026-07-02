/**
 * Generates public/og-image.png (1200×630) from an inline SVG using sharp.
 * Latin-only text so it renders reliably without extra fonts.
 * Run: node scripts/generate-og.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#080a12"/><stop offset="1" stop-color="#05060a"/>
    </linearGradient>
    <radialGradient id="r1" cx="0.1" cy="0.05" r="0.7">
      <stop stop-color="#ff5a3c" stop-opacity="0.32"/><stop offset="1" stop-color="#ff5a3c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="r2" cx="0.9" cy="0.45" r="0.6">
      <stop stop-color="#22e0ff" stop-opacity="0.2"/><stop offset="1" stop-color="#22e0ff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sun" x1="0" y1="180" x2="0" y2="420" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffb733"/><stop offset="1" stop-color="#ff5a3c"/>
    </linearGradient>
    <style>
      .h  { font-family: 'DejaVu Sans','Arial',sans-serif; font-weight: 700; fill: #eef1f8; }
      .amber { fill: #ffb733; }
      .mono { font-family: 'DejaVu Sans Mono','monospace'; }
      .a { fill: #ff9d00; }
      .cy { fill: #22e0ff; }
      .mut { fill: #8792a8; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#r1)"/>
  <rect width="1200" height="630" fill="url(#r2)"/>

  <g stroke="#94a3b8" stroke-opacity="0.06">
    ${Array.from({ length: 25 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="630"/>`).join("")}
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1200" y2="${i * 48}"/>`).join("")}
  </g>

  <rect x="18" y="18" width="1164" height="594" fill="none" stroke="#ff9d00" stroke-opacity="0.16" stroke-width="2"/>
  <rect x="18" y="18" width="8" height="594" fill="#ff5a3c"/>

  <!-- horizon motif, right -->
  <g transform="translate(940,300)">
    <g stroke="#ff9d00" stroke-width="6" stroke-linecap="round">
      <path d="M0 -150V-110"/><path d="M-106 -106 -78 -78"/><path d="M106 -106 78 -78"/>
      <path d="M-150 0H-110"/><path d="M150 0H110"/>
    </g>
    <circle cx="0" cy="0" r="78" fill="url(#sun)"/>
    <path d="M-200 40H200" stroke="#22e0ff" stroke-width="6" stroke-linecap="round"/>
    <path d="M-140 78H140" stroke="#22e0ff" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
  </g>

  <!-- brand row -->
  <g transform="translate(72,74)">
    <g stroke="#ff9d00" stroke-width="3" stroke-linecap="round">
      <path d="M32 4v10"/><path d="M12 12 20 20"/><path d="M52 12 44 20"/>
    </g>
    <circle cx="32" cy="34" r="15" fill="url(#sun)"/>
    <path d="M8 44H56" stroke="#22e0ff" stroke-width="4" stroke-linecap="round"/>
    <text x="80" y="30" class="h" font-size="30" letter-spacing="0.5">Digital <tspan class="amber">Horizon</tspan></text>
    <text x="80" y="58" class="mono a" font-size="15" letter-spacing="5">WEB · SEO · DIGITAL MARKETING</text>
  </g>

  <!-- headline -->
  <text x="72" y="300" class="h" font-size="64" letter-spacing="-1.5">Web design that brings</text>
  <text x="72" y="374" class="h amber" font-size="64" letter-spacing="-1.5">Northern Nevada</text>
  <text x="72" y="448" class="h" font-size="64" letter-spacing="-1.5">customers in.</text>

  <!-- bottom mono strip -->
  <text x="72" y="536" class="mono cy" font-size="19" letter-spacing="3">// THREE DISCIPLINES · ONE HORIZON</text>
  <text x="72" y="572" class="mono mut" font-size="17" letter-spacing="2">digitalhorizon.dev · Carson City, NV</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
