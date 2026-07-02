/**
 * Generates public/og-image.png (1200×630) from an inline SVG using sharp.
 * Latin-only text (no CJK) so it renders reliably without a CJK font.
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
    <radialGradient id="r1" cx="0.12" cy="0.05" r="0.7">
      <stop stop-color="#ff2340" stop-opacity="0.35"/><stop offset="1" stop-color="#ff2340" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="r2" cx="0.95" cy="0.5" r="0.6">
      <stop stop-color="#22e0ff" stop-opacity="0.22"/><stop offset="1" stop-color="#22e0ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="eye" cx="0.5" cy="0.5" r="0.5">
      <stop stop-color="#7af0ff"/><stop offset="1" stop-color="#22e0ff"/>
    </radialGradient>
    <style>
      .h  { font-family: 'DejaVu Sans','Arial',sans-serif; font-weight: 700; fill: #eef1f8; }
      .r  { fill: #ff2340; }
      .mono { font-family: 'DejaVu Sans Mono','monospace'; }
      .amber { fill: #ff9d00; }
      .cyan { fill: #22e0ff; }
      .mut { fill: #8792a8; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#r1)"/>
  <rect width="1200" height="630" fill="url(#r2)"/>

  <!-- faint grid -->
  <g stroke="#94a3b8" stroke-opacity="0.06">
    ${Array.from({ length: 25 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="630"/>`).join("")}
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1200" y2="${i * 48}"/>`).join("")}
  </g>

  <!-- frame + left accent -->
  <rect x="18" y="18" width="1164" height="594" fill="none" stroke="#ff9d00" stroke-opacity="0.18" stroke-width="2"/>
  <rect x="18" y="18" width="8" height="594" fill="#ff2340"/>

  <!-- radar motif right -->
  <g transform="translate(960,300)" fill="none" stroke="#22e0ff" stroke-opacity="0.28">
    <circle r="70"/><circle r="130"/><circle r="185"/>
    <line x1="-185" y1="0" x2="185" y2="0"/><line x1="0" y1="-185" x2="0" y2="185"/>
  </g>
  <g transform="translate(960,300)">
    <path d="M0 0 L185 -60 A195 195 0 0 1 185 20 Z" fill="#22e0ff" fill-opacity="0.12"/>
    <circle cx="120" cy="-40" r="6" fill="#ff2340"/>
    <circle cx="-60" cy="90" r="6" fill="#ff2340"/>
    <circle cx="70" cy="120" r="6" fill="#ff2340"/>
  </g>

  <!-- brand row -->
  <g transform="translate(72,74)">
    <path d="M34 2 66 20V56L34 74 2 56V20Z" fill="none" stroke="#ff9d00" stroke-width="3"/>
    <circle cx="25" cy="34" r="5.5" fill="url(#eye)"/>
    <circle cx="43" cy="34" r="5.5" fill="url(#eye)"/>
    <path d="M18 54 34 64 50 54" fill="none" stroke="#ff2340" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="92" y="30" class="h" font-size="30" letter-spacing="1">FORWARD<tspan class="r">//</tspan>OBSERVATIONS</text>
    <text x="92" y="60" class="mono amber" font-size="16" letter-spacing="5">VETERAN MEDIA COLLECTIVE</text>
  </g>

  <!-- headline -->
  <text x="72" y="330" class="h" font-size="92" letter-spacing="-2">EYES <tspan class="r">FORWARD</tspan></text>
  <text x="72" y="424" class="h" font-size="92" letter-spacing="-2">OF THE LINE</text>

  <!-- bottom mono strip -->
  <text x="72" y="540" class="mono cyan" font-size="20" letter-spacing="3">// OBSERVE · REPORT · ADVANCE</text>
  <text x="72" y="574" class="mono mut" font-size="17" letter-spacing="2">forwardobservations.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
