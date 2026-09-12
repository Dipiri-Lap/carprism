const sharp = require('sharp');
const path = require('path');
const jobs = [
  ['scratchpad/miata_img/miata_front.jpg', 'images/mazda-miata-reliability_1.webp'],
  ['scratchpad/miata_img/miata_interior.jpg', 'images/mazda-miata-reliability_2.webp'],
  ['scratchpad/miata_img/mustang_front.jpg', 'images/mazda-miata-reliability_3.webp'],
  ['scratchpad/miata_img/brz_front.jpg', 'images/mazda-miata-reliability_4.webp'],
];
(async () => {
  for (const [src, dst] of jobs) {
    await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(dst);
    console.log('done', dst);
  }
})();
