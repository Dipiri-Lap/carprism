const sharp = require('sharp');
const path = require('path');

const files = [
  ['deoksugung_night_seokjojeon.jpg', 'deoksugung_night_seokjojeon.webp'],
  ['deoksugung_day_seokjojeon1.jpg', 'deoksugung_day_seokjojeon1.webp'],
  ['deoksugung_day_seokjojeon2.jpg', 'deoksugung_day_seokjojeon2.webp'],
  ['changgyeong_night_myeongjeong.jpg', 'changgyeong_night_myeongjeong.webp'],
  ['changgyeong_day_myeongjeong.jpg', 'changgyeong_day_myeongjeong.webp'],
  ['changgyeong_day_honghwamun.jpg', 'changgyeong_day_honghwamun.webp'],
];

const srcDir = path.join(__dirname, 'imgs');
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
