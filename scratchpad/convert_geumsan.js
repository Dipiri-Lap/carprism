const sharp = require('sharp');
const tmp = 'C:/Users/coolguy/AppData/Local/Temp/';
const codexdir = 'C:/Users/coolguy/.codex/generated_images/01a095a1-9e9c-7050-b2d3-c438cd17e365/';
const jobs = [
  [tmp+'kto_boseoksa.jpg', 'images/geumsan_boseoksa_daeungjeon.webp'],
  [tmp+'kto_jinaksan.jpg', 'images/geumsan_jinaksan_ridge_clouds.webp'],
  [tmp+'kto_market.jpg', 'images/geumsan_insam_yangnyeong_market.webp'],
  [tmp+'kto_remfest.jpg', 'images/geumsan_ginseng_festival_sculpture.webp'],
  [tmp+'wiki_gingko.jpg', 'images/geumsan_boseoksa_gingko_autumn.webp'],
  [tmp+'wiki_insamland.jpg', 'images/geumsan_insamland_service_area.webp'],
  [tmp+'kto_insamfry.jpg', 'images/geumsan_insam_twigim_food.webp'],
  [codexdir+'exec-98ceac40-3dd2-41c1-bcf7-d86064ed81c2.png', 'images/geumsan_ginseng_field_drive_illustration.webp'],
];
(async () => {
  for (const [src, dst] of jobs) {
    await sharp(src).webp({quality: 82}).toFile(dst);
    console.log('done', dst);
  }
})();
