const sharp = require('sharp');
const path = require('path');

const files = [
  ['pajucf_poster2.jpg', 'paju_folkfest_poster.webp'],
  ['pajufolk_nuripark_ggtour.jpg', 'paju_imjingak_nuripark.webp'],
  ['pajufolk_windhill_kogl.jpg', 'paju_imjingak_windhill.webp'],
  ['pajufolk_peacebell.jpg', 'paju_imjingak_peacebell.webp'],
  ['pajufolk_mangbaedan.jpg', 'paju_imjingak_mangbaedan.webp'],
  ['pajufolk_gondola.jpg', 'paju_imjingak_gondola_cabin.webp'],
  ['pajufolk_park_general.jpg', 'paju_imjingak_oldbuilding.webp'],
  ['pajufolk_freedombridge.jpg', 'paju_imjingak_ribbonfence.webp'],
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
