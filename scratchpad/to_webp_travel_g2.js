const sharp = require('sharp');
const path = require('path');

const files = [
  ['paju_imjingak_selfie.jpg', 'paju_imjingak_selfie.webp'],
  ['paju_imjingak_dmz.jpg', 'paju_imjingak_dmz.webp'],
  ['paju_imjingak_peacewind.jpg', 'paju_imjingak_peacewind.webp'],
  ['paju_imjingak_spot.jpg', 'paju_imjingak_spot.webp'],
  ['paju_imjingak_gondola.jpg', 'paju_imjingak_gondola.webp'],
  ['paju_imjingak_freedombridge.jpg', 'paju_imjingak_freedombridge.webp'],
  ['paju_imjingak_windhill2.jpg', 'paju_imjingak_windhill2.webp'],
  ['siheung_gaetgol_greenschool.jpg', 'siheung_gaetgol_greenschool.webp'],
  ['siheung_gaetgol_tower.jpg', 'siheung_gaetgol_tower.webp'],
  ['siheung_gaetgol_marine.jpg', 'siheung_gaetgol_marine.webp'],
  ['siheung_gaetgol_main.jpg', 'siheung_gaetgol_main.webp'],
  ['siheung_gaetgol_autumn.jpg', 'siheung_gaetgol_autumn.webp'],
  ['siheung_gaetgol_saltflower.jpg', 'siheung_gaetgol_saltflower.webp'],
  ['siheung_gaetgol_path.jpg', 'siheung_gaetgol_path.webp'],
  ['goesan_sanmagi_walk.jpg', 'goesan_sanmagi_walk.webp'],
  ['goesan_yeonpungsaejae.jpg', 'goesan_yeonpungsaejae.webp'],
  ['goesan_hiddentreasure.jpg', 'goesan_hiddentreasure.webp'],
  ['goesan_joryeongsan_village.jpg', 'goesan_joryeongsan_village.webp'],
  ['goesan_kids_trip.jpg', 'goesan_kids_trip.webp'],
  ['goesan_sanmagi_main.jpg', 'goesan_sanmagi_main.webp'],
  ['goesan_lake.jpg', 'goesan_lake.webp'],
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
