const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

async function optimizeImages() {
  // Sprawdź, czy folder /public/images istnieje
  if (!fs.existsSync(imagesDir)) {
    console.warn(`⚠️  Warning: Directory not found: ${imagesDir}. Skipping image optimization.`);
    return;
  }

  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

      try {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);

        console.log(`✅ Optimized: ${file} -> ${path.basename(outputPath)}`);
      } catch (err) {
        console.error(`❌ Error optimizing ${file}:`, err);
      }
    }
  }

  console.log('🎉 Image optimization complete!');
}

optimizeImages();