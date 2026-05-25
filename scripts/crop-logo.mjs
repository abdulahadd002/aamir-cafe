// One-shot: crop the kraft-paper backdrop off the Aamir Cafe logo, mask to a
// clean circle with transparent corners, upscale + sharpen. Outputs a new PNG
// alongside the original; the original is preserved as -original.png in case
// we need to re-run.

import sharp from "sharp";
import { copyFile, rename } from "node:fs/promises";
import { existsSync } from "node:fs";

const src = "public/brand/aamir-cafe-logo.png";
const backup = "public/brand/aamir-cafe-logo-original.png";
const out = "public/brand/aamir-cafe-logo.png";
const outSize = 800;       // upscaled output resolution
const innerCropRatio = 0.87; // sweet spot: badge fills the circle, no kraft, no clipping

if (!existsSync(backup)) {
  await copyFile(src, backup);
  console.log("backed up original →", backup);
}

const meta = await sharp(backup).metadata();
const short = Math.min(meta.width, meta.height);
const innerSize = Math.floor(short * innerCropRatio);
const left = Math.floor((meta.width - innerSize) / 2);
const top = Math.floor((meta.height - innerSize) / 2);

// SVG circular mask matching the output canvas
const mask = Buffer.from(
  `<svg width="${outSize}" height="${outSize}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${outSize / 2}" cy="${outSize / 2}" r="${outSize / 2}" fill="white"/>
  </svg>`,
);

await sharp(backup)
  .extract({ left, top, width: innerSize, height: innerSize })
  .resize(outSize, outSize, { kernel: sharp.kernel.lanczos3 })
  .modulate({ brightness: 1.02, saturation: 1.08 })
  .sharpen({ sigma: 0.8, m1: 0.4, m2: 1.2 })
  .composite([{ input: mask, blend: "dest-in" }])
  .png({ compressionLevel: 9, palette: false })
  .toFile(out + ".tmp");

await rename(out + ".tmp", out);

const final = await sharp(out).metadata();
console.log(
  `cropped from ${meta.width}×${meta.height}  →  ${final.width}×${final.height} (${meta.channels}→${final.channels} channels, transparent corners)`,
);
