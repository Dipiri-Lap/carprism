const sharp = require('sharp');
const path = require('path');

const base = path.join(__dirname, 'imgs_travel_g3');
const outDir = path.join(__dirname, '..', 'images');

const files = [
  // Pyeongchang Hyoseok Culture Festival
  ['pc/pc_103.jpg', 'pyeongchang_hyoseok_buckwheat_sunset_path.webp'],
  ['pc/pc_104.jpg', 'pyeongchang_hyoseok_buckwheat_field_market.webp'],
  ['pc/pc_105.jpg', 'pyeongchang_hyoseok_parade_yellow_hanbok.webp'],
  ['pc/pc_106.jpg', 'pyeongchang_hyoseok_lantern_dusk_field.webp'],
  ['pc/pc_107.jpg', 'pyeongchang_hyoseok_stage_traditional_dance.webp'],
  ['pc/pc_108.jpg', 'pyeongchang_hyoseok_aerial_river_heart.webp'],
  ['pc/pc_109.jpg', 'pyeongchang_hyoseok_aerial_village.webp'],
  ['pc/pc_111.jpg', 'pyeongchang_hyoseok_arari_costume_group.webp'],
  // Myeongnyang Daecheop Festival
  ['mn/mn_36.jpg', 'myeongnyang_daecheop_fire_performance.webp'],
  ['mn/mn_37.jpg', 'myeongnyang_daecheop_honor_guard_gate.webp'],
  ['mn/mn_38.jpg', 'myeongnyang_daecheop_torch_stage.webp'],
  ['mn/mn_39.jpg', 'myeongnyang_daecheop_traditional_dance_circle.webp'],
  ['mn/mn_40.jpg', 'myeongnyang_daecheop_banner_performance.webp'],
  ['mn/mn_41.jpg', 'myeongnyang_daecheop_flag_parade.webp'],
  ['mn/mn_43.jpg', 'myeongnyang_daecheop_jindo_bridge_night.webp'],
  ['mn/mn_44.jpg', 'myeongnyang_daecheop_briefing_session.webp'],
  // Jinan Red Ginseng Festival
  ['ja/ja_51.jpg', 'jinan_ginseng_game_experience.webp'],
  ['ja/ja_52.jpg', 'jinan_ginseng_harvest_closeup.webp'],
  ['ja/ja_53.jpg', 'jinan_ginseng_fishing_pond_kids.webp'],
  ['ja/ja_54.jpg', 'jinan_ginseng_umbrella_audience.webp'],
  ['ja/ja_55.jpg', 'jinan_ginseng_energy_dance_parade.webp'],
  ['ja/ja_56.jpg', 'jinan_ginseng_basket_float_parade.webp'],
  ['ja/ja_58.jpg', 'jinan_ginseng_aerial_night_market.webp'],
  ['ja/ja_59.jpg', 'jinan_ginseng_fireworks_night.webp'],
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
