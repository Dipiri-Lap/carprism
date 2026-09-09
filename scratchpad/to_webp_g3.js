const sharp = require('sharp');
const path = require('path');

const files = [
  ['genesis_lslm_1.jpg', 'genesis_gmr001_lonestar_texasflag.webp'],
  ['genesis_lslm_2.jpg', 'genesis_gmr001_lonestar_car19_side.webp'],
  ['genesis_lslm_3.jpg', 'genesis_gmr001_lonestar_pack_battle.webp'],
  ['genesis_lslm_4.jpg', 'genesis_gmr001_lonestar_car17_corner.webp'],
];

const srcDir = path.join(__dirname, 'imgs_g3');
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
