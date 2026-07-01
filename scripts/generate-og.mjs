/**
 * Generates public/og-image.png (1200×630) from an inline SVG using sharp.
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
      <stop stop-color="#0e2a52"/>
      <stop offset="1" stop-color="#0a1f3d"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.18" cy="0.1" r="0.8">
      <stop stop-color="#2f7deb" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#2f7deb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="1" cy="1" r="0.7">
      <stop stop-color="#ffb43a" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#ffb43a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b8ef0"/>
      <stop offset="1" stop-color="#0d4791"/>
    </linearGradient>
    <style>
      .h  { font-family: 'DejaVu Sans', Arial, sans-serif; font-weight: 700; fill: #ffffff; }
      .hl { font-family: 'DejaVu Sans', Arial, sans-serif; font-weight: 700; fill: #ffce7a; }
      .s  { font-family: 'DejaVu Sans', Arial, sans-serif; font-weight: 400; fill: #b9cfec; }
      .b  { font-family: 'DejaVu Sans', Arial, sans-serif; font-weight: 700; fill: #0a1f3d; }
      .w  { font-family: 'DejaVu Sans', Arial, sans-serif; font-weight: 700; fill: #ffffff; }
      .sub{ font-family: 'DejaVu Sans', Arial, sans-serif; font-weight: 700; fill: #cfe0f5; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect x="16" y="16" width="1168" height="598" rx="28" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2"/>

  <!-- Brand row -->
  <g transform="translate(90,90)">
    <rect width="86" height="86" rx="24" fill="url(#mark)"/>
    <path d="M43 18c5.8 9 11.2 14.5 11.2 22.6a11.2 11.2 0 0 1-22.4 0C31.8 32.5 37.2 27 43 18Z" fill="#ffffff" opacity="0.96"/>
    <path d="M59 47l1.7 5.4 5.4 1.7-5.4 1.7L59 61l-1.7-5.4-5.4-1.7 5.4-1.7z" fill="#ffd48a"/>
    <text x="108" y="40" class="w" font-size="40" letter-spacing="-1">Huskins Cleaning</text>
    <text x="108" y="72" class="sub" font-size="21" letter-spacing="3">OMAHA, NEBRASKA</text>
  </g>

  <!-- Headline -->
  <text x="90" y="300" class="h" font-size="76" letter-spacing="-2">Omaha's Trusted</text>
  <text x="90" y="384" class="h" font-size="76" letter-spacing="-2">Cleaning Team<tspan class="hl">.</tspan></text>

  <text x="92" y="442" class="s" font-size="29">House · Deep · Move-Out · Office · Pressure Washing</text>

  <!-- Tagline pill -->
  <g transform="translate(90,486)">
    <rect width="524" height="58" rx="29" fill="#ffb43a"/>
    <text x="34" y="38" class="b" font-size="26">Spotless Homes. Honest People.</text>
  </g>

  <!-- Trust row -->
  <text x="92" y="590" class="hl" font-size="26">★ 5.0   ·   BBB A+   ·   Family-Owned   ·   (402) 249-0449</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
