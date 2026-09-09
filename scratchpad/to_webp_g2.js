const sharp = require('sharp');
const path = require('path');

const files = [
  ['avante_techday_stage_engineer.jpg', 'avante_techday_stage_engineer.webp'],
  ['avante_ride_handling_infographic.jpg', 'avante_ride_handling_infographic.webp'],
  ['avante_body_structure_highlight.jpg', 'avante_body_structure_highlight.webp'],
  ['avante_hybrid_powertrain_overlay.jpg', 'avante_hybrid_powertrain_overlay.webp'],
];

const srcDir = path.join(__dirname, 'imgs_g2');
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
