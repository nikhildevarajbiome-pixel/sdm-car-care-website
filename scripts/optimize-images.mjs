import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = "public/images";
const outputDir = "public/optimized-images";

async function optimizeFolder(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await optimizeFolder(fullPath);
      continue;
    }

    if (!/\.(jpg|jpeg|png)$/i.test(entry.name)) continue;

    const relativePath = path.relative(inputDir, fullPath);

    const outputPath = path.join(
      outputDir,
      relativePath.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    );

    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    await sharp(fullPath)
      .rotate()
      .resize({
        width: 1920,
        height: 1920,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 78 })
      .toFile(outputPath);

    console.log("Optimized:", relativePath);
  }
}

await optimizeFolder(inputDir);

console.log("Done! Original images are unchanged.");