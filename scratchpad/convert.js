const sharp = require('sharp');
const path = require('path');

const IN = 'C:/Projects/carsite/scratchpad/imgs';
const OUT = 'C:/Projects/carsite/images';

const map = {
  'ttarabi1.jpg': 'jeju_ttarabi_oreum_silvergrass_sunset.webp',
  'suwolbong2.jpg': 'jeju_suwolbong_aerial_cliff.webp',
  'suwolbong1.jpg': 'jeju_suwolbong_parking_signage.webp',
  'gwangchigi1.jpg': 'jeju_gwangchigi_beach_seongsan_ilchulbong.webp',
  'singgyemul1.jpg': 'jeju_sinchang_singgyemul_windmill_sunset.webp',
  'gimnyeong1.jpg': 'jeju_gimnyeong_beach_windmills.webp',
  'hyeopjae1.jpg': 'jeju_hyeopjae_beach_aerial.webp',
};

(async () => {
  for (const [src, dst] of Object.entries(map)) {
    await sharp(path.join(IN, src)).webp({ quality: 82 }).toFile(path.join(OUT, dst));
    const meta = await sharp(path.join(OUT, dst)).metadata();
    console.log(dst, meta.width, meta.height);
  }
})();
