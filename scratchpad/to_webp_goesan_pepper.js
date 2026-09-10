const sharp = require('sharp');
const path = require('path');

const files = [
  ['goesan_pepper_plants.jpg', 'goesan_pepper_field_2026.webp'],
  ['goesan_pepper_drying.jpg', 'goesan_pepper_drying_market.webp'],
  ['goesan_market2.jpg', 'goesan_traditional_market_gate.webp'],
  ['goesan_lake.jpg', 'goesan_lake_view.webp'],
  ['goesan_sanmagi_walk.jpg', 'goesan_sanmagi_deck_path.webp'],
  ['goesan_sanmagi_main.jpg', 'goesan_river_bend_aerial.webp'],
  ['goesan_sanmagi_trail1.jpg', 'goesan_gosanjeong_pavilion.webp'],
];

const srcDir = path.join(__dirname, 'imgs_travel_g2');
const outDir = path.join(__dirname, '..', 'images');

(async () => {
  for (const [src, out] of files) {
    const inPath = path.join(srcDir, src);
    const outPath = path.join(outDir, out);
    try {
      await sharp(inPath).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(outPath);
      console.log('OK', out);
    } catch (e) {
      console.error('FAIL', src, e.message);
    }
  }
})();
