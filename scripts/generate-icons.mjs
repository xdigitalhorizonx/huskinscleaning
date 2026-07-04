/**
 * Generates PWA / apple-touch icons (full-bleed) into public/.
 * Digital Horizon mark: three tapered rounded bars (pink / blue / green).
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512" fill="none" stroke-linecap="round">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fdeef5"/><stop offset="1" stop-color="#eaf2fd"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <line x1="96"  y1="176" x2="416" y2="176" stroke="#f28cb4" stroke-width="46"/>
  <line x1="156" y1="256" x2="356" y2="256" stroke="#5ea9ea" stroke-width="46"/>
  <line x1="216" y1="336" x2="296" y2="336" stroke="#7ecf97" stroke-width="46"/>
</svg>`;

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(Buffer.from(icon(size))).resize(size, size).png().toFile(resolve(pub, name));
  console.log("Wrote", name);
}
