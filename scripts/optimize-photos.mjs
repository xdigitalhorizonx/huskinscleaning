/**
 * Optimizes licensed Adobe Stock source photos into web-ready WebP assets in
 * public/images/. Source JPEGs are passed via a raw directory (not committed).
 *
 * Usage: node scripts/optimize-photos.mjs [RAW_DIR]
 *
 * Photo sources (Adobe Stock, licensed): see public/images/CREDITS.txt
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";
import { mkdirSync, existsSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = process.argv[2] || resolve(__dirname, "../.photo-src");
const OUT_DIR = resolve(__dirname, "../public/images");
mkdirSync(OUT_DIR, { recursive: true });

const ATTENTION = sharp.strategy.attention;

/** [source file, output name, width, height, quality, crop-focus] */
const jobs = [
  ["hero.jpg",             "hero-home",        2200, 1300, 70, "entropy"],
  ["kitchen.jpg",          "kitchen",          1700, 1150, 72, "entropy"],
  ["exterior.jpg",         "exterior",         1800, 1100, 72, "entropy"],
  ["cleaner_team.jpg",     "team",             1500, 1150, 78, ATTENTION],
  ["cleaning_service.jpg", "house-cleaning",   1500, 1000, 74, ATTENTION],
  ["bathroom.jpg",         "deep-cleaning",    1500, 1000, 74, "entropy"],
  ["empty_room.jpg",       "move-in-move-out", 1500, 1000, 74, "entropy"],
  ["office.jpg",           "commercial",       1500, 1000, 74, "entropy"],
  ["postconstruction.jpg", "post-construction",1500, 1000, 74, "entropy"],
  ["pressure.jpg",         "pressure-washing", 1500, 1000, 74, ATTENTION],
];

let ok = 0;
for (const [src, name, w, h, q, position] of jobs) {
  const input = join(RAW_DIR, src);
  if (!existsSync(input)) {
    console.warn(`! skip ${name} — missing ${input}`);
    continue;
  }
  const out = join(OUT_DIR, `${name}.webp`);
  await sharp(input)
    .rotate()
    .resize({ width: w, height: h, fit: "cover", position })
    .webp({ quality: q, effort: 6 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`✓ ${name}.webp  ${meta.width}×${meta.height}  ${(meta.size / 1024).toFixed(0)}kb`);
  ok++;
}
console.log(`\nDone — ${ok}/${jobs.length} images written to public/images/`);
