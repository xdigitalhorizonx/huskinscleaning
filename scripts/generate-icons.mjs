/**
 * Generates PWA / apple-touch icons (full-bleed) into public/.
 * Digital Horizon emblem: a pastel sun rising over a blue horizon line.
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fdeef5"/><stop offset="1" stop-color="#eaf2fd"/>
    </linearGradient>
    <linearGradient id="sun" x1="0" y1="150" x2="0" y2="360" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f4a3c4"/><stop offset="1" stop-color="#e85c97"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <g stroke="#e85c97" stroke-width="20" stroke-linecap="round">
    <path d="M256 70v56"/><path d="M118 118 158 158"/><path d="M394 118 354 158"/>
  </g>
  <circle cx="256" cy="262" r="104" fill="url(#sun)"/>
  <path d="M64 322H448" stroke="#4f93da" stroke-width="30" stroke-linecap="round"/>
  <path d="M140 384H372" stroke="#4f93da" stroke-width="20" stroke-linecap="round" opacity="0.5"/>
</svg>`;

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(Buffer.from(icon(size))).resize(size, size).png().toFile(resolve(pub, name));
  console.log("Wrote", name);
}
