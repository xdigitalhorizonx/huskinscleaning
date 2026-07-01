/**
 * Generates PWA / apple-touch icons (full-bleed) into public/.
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

// Full-bleed square mark (no transparent corners) for app icons.
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b8ef0"/><stop offset="1" stop-color="#0d4791"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#g)"/>
  <path d="M256 118c37 55 70 88 70 133a70 70 0 0 1-140 0c0-45 33-78 70-133Z" fill="#ffffff" opacity="0.97"/>
  <path d="M356 286l11 33 33 11-33 11-11 33-11-33-33-11 33-11z" fill="#ffd48a"/>
</svg>`;

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(Buffer.from(icon(size))).resize(size, size).png().toFile(resolve(pub, name));
  console.log("Wrote", name);
}
