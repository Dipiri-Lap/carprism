const sharp = require('sharp');
const path = require('path');

const files = [
  ['cand_cnb.jpg', 'siheung_gaetgol_festival_poster.webp'],
  ['siheung_warehouse_a.jpg', 'siheung_saltwarehouse_front.webp'],
  ['siheung_warehouses_wide.jpg', 'siheung_saltwarehouse_wide.webp'],
  ['siheung_saltpond1.jpg', 'siheung_saltpond_crystal.webp'],
  ['siheung_waterwheel.jpg', 'siheung_waterwheel_field.webp'],
  ['siheung_visitorcenter.jpg', 'siheung_visitorcenter_tower.webp'],
  ['siheung_wetland_sign.jpg', 'siheung_wetland_infopanel.webp'],
  ['siheung_guidemap.jpg', 'siheung_park_guidemap.webp'],
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
