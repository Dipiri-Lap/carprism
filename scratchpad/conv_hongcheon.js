const sharp = require('sharp');
const SP = 'C:/Users/coolguy/AppData/Local/Temp/claude/c--Projects-carsite/3ae6286f-6a87-41db-b470-4b8b7f159309/scratchpad';
const jobs = [
  [`${SP}/kto_17.jpg`, 'images/hongcheon_river_bridge_sunset.webp'],
  [`${SP}/kto_1.jpg`, 'images/hongcheon_river_bend_aerial_fog.webp'],
  [`${SP}/kto_6.jpg`, 'images/palbongsan_summit_hiker_view.webp'],
  [`${SP}/kto_8.jpg`, 'images/palbongsan_river_bend_view.webp'],
  [`${SP}/kto_9.jpg`, 'images/hongcheon_riverside_camping_rafting.webp'],
  [`${SP}/kto_10.jpg`, 'images/palbongsan_tourist_area_entrance.webp'],
];
(async () => {
  for (const [src, dst] of jobs) {
    await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(dst);
    console.log('done', dst);
  }
})();
