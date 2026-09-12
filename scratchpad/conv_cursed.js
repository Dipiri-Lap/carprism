const sharp = require('sharp');
const path = require('path');

const files = [
  ['C:\\Users\\coolguy\\.codex\\generated_images\\01a09552-90d5-7ff1-a067-79bcee119c9b\\exec-63a1dca3-dd86-4c3d-b40a-8aecac9afbe7.png', 'cursed-nameplate_edsel-1959.webp'],
  ['C:\\Users\\coolguy\\.codex\\generated_images\\01a09553-b6a8-7090-8b97-3fe2b1bdaf4b\\exec-0d171d80-9160-4c28-a5f0-bb802ba01bf8.png', 'cursed-nameplate_acura-zdx-2010.webp'],
  ['C:\\Users\\coolguy\\.codex\\generated_images\\01a09554-88ac-7f70-a695-c660a8c21d92\\exec-78e6146c-ea0e-40db-b17e-823497119006.png', 'cursed-nameplate_acura-zdx-2024.webp'],
  ['C:\\Users\\coolguy\\.codex\\generated_images\\01a09555-34bc-7982-beb7-00582892a89e\\exec-12df2911-38f4-4b18-b940-0f18e1b439aa.png', 'cursed-nameplate_acura-rsx-2004.webp'],
];

const outDir = path.join('C:\\Projects\\carsite', 'images');

(async () => {
  for (const [src, out] of files) {
    const outPath = path.join(outDir, out);
    try {
      const img = sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 });
      const info = await img.toFile(outPath);
      console.log('OK', out, info.width, info.height);
    } catch (e) {
      console.error('FAIL', src, e.message);
    }
  }
})();
