/**
 * Generates public/og-image.png (1200×630) — pastel light theme.
 * Mark: three tapered rounded bars (pink / blue / green).
 * Run: node scripts/generate-og.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" stroke-linecap="round">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/><stop offset="1" stop-color="#fdf3f8"/>
    </linearGradient>
    <radialGradient id="r1" cx="0.1" cy="0.05" r="0.7">
      <stop stop-color="#f8c6dc" stop-opacity="0.6"/><stop offset="1" stop-color="#f8c6dc" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="r2" cx="0.9" cy="0.45" r="0.6">
      <stop stop-color="#cfe4fb" stop-opacity="0.7"/><stop offset="1" stop-color="#cfe4fb" stop-opacity="0"/>
    </radialGradient>
    <style>
      .h  { font-family: 'DejaVu Sans','Arial',sans-serif; font-weight: 700; fill: #201820; }
      .pink { fill: #e0508c; }
      .mono { font-family: 'DejaVu Sans Mono','monospace'; }
      .blue { fill: #4f93da; }
      .mut { fill: #8a8090; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#r1)"/>
  <rect width="1200" height="630" fill="url(#r2)"/>

  <g stroke="#b8a8c0" stroke-opacity="0.14">
    ${Array.from({ length: 25 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="630"/>`).join("")}
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1200" y2="${i * 48}"/>`).join("")}
  </g>

  <rect x="18" y="18" width="1164" height="594" fill="none" stroke="#e85c97" stroke-opacity="0.25" stroke-width="2"/>
  <rect x="18" y="18" width="8" height="594" fill="#e85c97"/>

  <!-- large three-bar mark, right -->
  <g transform="translate(950,300)">
    <line x1="-150" y1="-64" x2="150" y2="-64" stroke="#f28cb4" stroke-width="36"/>
    <line x1="-95"  y1="0"   x2="95"  y2="0"   stroke="#5ea9ea" stroke-width="36"/>
    <line x1="-45"  y1="64"  x2="45"  y2="64"  stroke="#7ecf97" stroke-width="36"/>
  </g>

  <!-- brand row -->
  <g transform="translate(72,74)">
    <line x1="0"  y1="14" x2="64" y2="14" stroke="#f28cb4" stroke-width="8"/>
    <line x1="12" y1="31" x2="52" y2="31" stroke="#5ea9ea" stroke-width="8"/>
    <line x1="22" y1="48" x2="42" y2="48" stroke="#7ecf97" stroke-width="8"/>
    <text x="88" y="34" class="h" font-size="32" letter-spacing="0.5">Digital Horizon</text>
    <text x="88" y="60" class="mono blue" font-size="15" letter-spacing="5">WEB · SEO · DIGITAL MARKETING</text>
  </g>

  <!-- headline -->
  <text x="72" y="300" class="h" font-size="64" letter-spacing="-1.5">Web design that brings</text>
  <text x="72" y="374" class="h pink" font-size="64" letter-spacing="-1.5">Northern Nevada</text>
  <text x="72" y="448" class="h" font-size="64" letter-spacing="-1.5">customers in.</text>

  <!-- bottom mono strip -->
  <text x="72" y="536" class="mono blue" font-size="19" letter-spacing="3">// THREE DISCIPLINES · ONE HORIZON</text>
  <text x="72" y="572" class="mono mut" font-size="17" letter-spacing="2">digitalhorizon.dev · Carson City, NV</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
