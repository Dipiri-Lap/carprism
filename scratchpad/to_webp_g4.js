const sharp = require('sharp');
const path = require('path');

const files = [
  ['gv60_magma_orange.jpg', 'genesis_gv60_magma_orange_front.webp'],
  ['gv70_ceres_matte.jpg', 'genesis_gv70_ceres_blue_matte.webp'],
  ['gv80_storr_green.jpg', 'genesis_gv80_storr_green.webp'],
  ['g90_black_vikblack.jpg', 'genesis_g90_black_vikblack.webp'],
  ['ioniq5_gravity_gold.jpg', 'hyundai_ioniq5_gravity_gold.webp'],
  ['ev6_gtline_white.jpg', 'kia_ev6_gtline_white.webp'],
  ['byd_seal_2023.jpg', 'byd_seal_2023_shanghai.webp'],
  ['gv60_uyuni_white.jpg', 'genesis_gv60_uyuni_white.webp'],
  ['casper_electric_silver.jpg', 'hyundai_casper_electric_silver.webp'],
  ['nissan_leaf_white_front.jpg', 'nissan_leaf_white_front.webp'],
  ['ioniq5_atlas_white.jpg', 'hyundai_ioniq5_atlas_white.webp'],
  ['ev_charging_restarea.jpg', 'ev_charging_station_gwangju_restarea.webp'],
];

const srcDir = path.join(__dirname, 'imgs_g4');
const outDir = path.join(__dirname, '..', 'images');

(async () => {
  for (const [src, out] of files) {
    const inPath = path.join(srcDir, src);
    const outPath = path.join(outDir, out);
    try {
      const fs = require('fs');
      if (!fs.existsSync(inPath)) { console.log('SKIP (missing)', src); continue; }
      const stat = fs.statSync(inPath);
      if (stat.size < 10000) { console.log('SKIP (too small, likely error page)', src, stat.size); continue; }
      const info = await sharp(inPath).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(outPath);
      console.log('OK', out, info.width, info.height);
    } catch (e) {
      console.error('FAIL', src, e.message);
    }
  }
})();
