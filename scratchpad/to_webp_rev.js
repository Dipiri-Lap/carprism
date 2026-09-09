const sharp = require('sharp');
const path = require('path');

const files = [
  ['byd_seal_interior.jpg', 'byd_seal_sedan_interior.webp'],
  ['byd_seal_rear.jpg', 'byd_seal_sedan_rear.webp'],
  ['leaf_2011_original.jpg', 'nissan_leaf_2011_zeo_front.webp'],
  ['leaf_2024_ze1_front.jpg', 'nissan_leaf_ze1_2024_front.webp'],
  ['leaf_2024_ze1_rear.jpg', 'nissan_leaf_ze1_2024_rear.webp'],
  ['leaf_ze1_dashboard.jpg', 'nissan_leaf_ze1_dashboard.webp'],
];

const srcDir = path.join(__dirname, 'imgs_import_rev');
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
