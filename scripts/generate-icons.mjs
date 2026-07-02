/**
 * Generates PWA / apple-touch icons (full-bleed) into public/.
 * Digital Horizon emblem: a neon sun rising over a horizon line.
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.44" r="0.55">
      <stop stop-color="#ff9d00" stop-opacity="0.3"/><stop offset="1" stop-color="#ff9d00" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sun" x1="0" y1="150" x2="0" y2="360" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffb733"/><stop offset="1" stop-color="#ff5a3c"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="#05060a"/>
  <rect width="512" height="512" fill="url(#glow)"/>
  <g stroke="#ff9d00" stroke-width="20" stroke-linecap="round">
    <path d="M256 70v56"/><path d="M118 118 158 158"/><path d="M394 118 354 158"/>
  </g>
  <circle cx="256" cy="262" r="104" fill="url(#sun)"/>
  <path d="M64 322H448" stroke="#22e0ff" stroke-width="30" stroke-linecap="round"/>
  <path d="M140 384H372" stroke="#22e0ff" stroke-width="20" stroke-linecap="round" opacity="0.45"/>
</svg>`;

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(Buffer.from(icon(size))).resize(size, size).png().toFile(resolve(pub, name));
  console.log("Wrote", name);
}
