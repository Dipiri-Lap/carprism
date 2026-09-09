const sharp = require('sharp');
const path = require('path');

const files = [
  ['exeed_sterra_es_interior.jpg', 'exeed_sterra_es_interior.webp'],
  ['exeed_sterra_es_rear.jpg', 'exeed_sterra_es_rear.webp'],
  ['solid_state_battery_diagram.png', 'solid_state_battery_diagram.webp'],
];

const srcDir = path.join(__dirname, 'imgs_g5');
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
