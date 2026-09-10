const sharp = require('sharp');
const path = require('path');

const dir = __dirname;
const outDir = path.join(__dirname, '..', '..', 'images');

const files = [
  ['hahoe_riverside.jpg', 'hahoe_julbulnori_aerial_river.webp'],
  ['hahoe_village01.jpg', 'hahoe_julbulnori_countryside_field.webp'],
  ['gwangalli_beach_bridge.jpg', 'gwangalli_drone_beach_daytime.webp'],
  ['gwangalli_sculpture_street.jpg', 'gwangalli_drone_skyline_daytime.webp'],
  ['gwanghwamun_sejongdaero.jpg', 'gwanghwamun_sejongdaero_statue_daytime.webp'],
  ['gwanghwamun_yisunsin.jpg', 'gwanghwamun_yisunsin_fountain.webp'],
  ['hanseongbaekje_mongchon2.jpg', 'hanseongbaekje_mongchon_moat_path.webp'],
  ['hanseongbaekje_inner_wall.jpg', 'hanseongbaekje_mongchon_rampart_ridge.webp'],
];

(async () => {
  for (const [src, dest] of files) {
    const inPath = path.join(dir, src);
    const outPath = path.join(outDir, dest);
    await sharp(inPath).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(outPath);
    const meta = await sharp(outPath).metadata();
    console.log(dest, meta.width, meta.height);
  }
})();
