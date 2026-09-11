const sharp = require('sharp');
const path = require('path');

const base = 'C:\\Projects\\carsite\\scratchpad_img';
const outDir = path.join(__dirname, '..', 'images');

const files = [
  ['DC10010_I_09.JPG', 'mindungsan_ridge_trail_crowd.webp'],
  ['DC10010_I_10.JPG', 'mindungsan_ridge_boardwalk_aerial.webp'],
  ['DC10010_I_11.JPG', 'mindungsan_forest_entrance_hikers.webp'],
  ['DC10010_I_12.JPG', 'mindungsan_descent_grass_field.webp'],
  ['FE_20190107.jpg', 'mindungsan_summit_rest_area.webp'],
  ['FE_20190107_1.jpg', 'mindungsan_summit_stone_marker.webp'],
  ['FE_20190107_2.jpg', 'mindungsan_approach_farm_road.webp'],
  ['FE_20190107_3.jpg', 'mindungsan_parking_food_stalls.webp'],
  ['FE_20190107_5.jpg', 'mindungsan_parking_lot_aerial.webp'],
];

(async () => {
  for (const [src, out] of files) {
    const inPath = path.join(base, src);
    const outPath = path.join(outDir, out);
    try {
      await sharp(inPath).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(outPath);
      console.log('OK', out);
    } catch (e) {
      console.error('FAIL', src, e.message);
    }
  }
})();
