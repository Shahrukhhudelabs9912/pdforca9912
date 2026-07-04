#!/usr/bin/env node
// Generates the three PWA icons required by app/manifest.ts:
//   - public/icon-192.png          (192x192, purpose=any)
//   - public/icon-512.png          (512x512, purpose=any)
//   - public/icon-maskable-512.png (512x512, purpose=maskable)
//
// Design: White orca "O" with dorsal fin and tail on a blue→indigo→purple
// gradient background (matching the website's theme). The maskable variant
// uses a 60% logo area so the icon survives Android's shape masks.
//
// Usage: node scripts/generate-icons.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");

function buildSvg(size, logoScale) {
  const cornerRadius = Math.round(size * 0.211); // matches rx=108 at 512
  const s = size / 512; // scale factor from the 512-base design

  // For maskable icons, offset and scale the logo into the safe zone
  const logoSize = Math.round(size * logoScale);
  const offset = Math.round((size - logoSize) / 2);
  const ls = (logoSize / size) * s;
  const ox = offset;
  const oy = offset;

  // Use a transform to position the logo within maskable safe zone
  const transform = logoScale < 1
    ? `transform="translate(${ox}, ${oy}) scale(${logoScale})"`
    : "";

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#9333ea"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#bg)"/>
  <g ${transform}>
    <circle cx="${256 * s}" cy="${256 * s}" r="${135 * s}" stroke="white" stroke-width="${50 * s}" fill="none"/>
    <path d="M ${238 * s} ${120 * s} Q ${250 * s} ${25 * s}, ${290 * s} ${60 * s} Q ${302 * s} ${82 * s}, ${290 * s} ${120 * s}" fill="white"/>
    <path d="M ${142 * s} ${320 * s} Q ${102 * s} ${342 * s}, ${90 * s} ${325 * s} Q ${96 * s} ${302 * s}, ${120 * s} ${302 * s} Z" fill="white"/>
  </g>
</svg>`.trim();
}

async function renderToPng(svg, size, outPath) {
  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log(`  ✓ ${path.relative(ROOT, outPath)}`);
}

async function main() {
  console.log("Generating PWA icons...");

  await renderToPng(
    buildSvg(192, 1.0),
    192,
    path.join(PUBLIC_DIR, "icon-192.png"),
  );

  await renderToPng(
    buildSvg(512, 1.0),
    512,
    path.join(PUBLIC_DIR, "icon-512.png"),
  );

  await renderToPng(
    buildSvg(512, 0.6),
    512,
    path.join(PUBLIC_DIR, "icon-maskable-512.png"),
  );

  console.log("\nDone. 3 PNG icons written to public/.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
