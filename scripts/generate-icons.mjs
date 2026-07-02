/**
 * Generates PWA / apple-touch icons (full-bleed) into public/.
 * FOG emblem: void field, amber hex frame, twin cyan NVG eyes, red chevron.
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.42" r="0.55">
      <stop stop-color="#ff2340" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#ff2340" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="eye" cx="0.5" cy="0.5" r="0.5">
      <stop stop-color="#7af0ff"/>
      <stop offset="1" stop-color="#22e0ff"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" fill="#05060a"/>
  <rect width="512" height="512" fill="url(#glow)"/>
  <path d="M256 58 454 160V352L256 454 58 352V160Z" fill="none" stroke="#ff9d00" stroke-width="15"/>
  <path d="M256 104 414 185V327L256 408 98 327V185Z" fill="none" stroke="#ff9d00" stroke-width="6" opacity="0.4"/>
  <circle cx="198" cy="238" r="33" fill="url(#eye)"/>
  <circle cx="314" cy="238" r="33" fill="url(#eye)"/>
  <path d="M150 330 256 400 362 330" fill="none" stroke="#ff2340" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(Buffer.from(icon(size))).resize(size, size).png().toFile(resolve(pub, name));
  console.log("Wrote", name);
}
