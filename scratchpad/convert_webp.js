const sharp = require('sharp');
const path = require('path');

const SRC = 'C:/Projects/carsite/scratchpad/wiki_imgs';
const DST = 'C:/Projects/carsite/images';

const map = [
  ['Korea-Gyeongju-Daewangam-Underwater_tomb_of_King_Munmu_of_Silla-01.jpg', 'wiki_munmudaewangneung_tomb.webp'],
  ['Gyeongju_Yangnam_Jusangjeolli_Cliff.jpg', 'wiki_yangnam_jusangjeolli_cliff.webp'],
  ['Daewangam_Park.jpg', 'wiki_ulsan_daewangam_park_bridge.webp'],
  ['Ganjeolgot,_Ulsan_on_August_16th,_2018.jpg', 'wiki_ganjeolgot_mailbox.webp'],
  ['Korea-Gyeongju-Gampo.port-01.jpg', 'wiki_gampo_port_harbor.webp'],
  ['Igyeondae.jpg', 'wiki_igyeondae_pavilion.webp'],
  ['Korea-Gyeongju-Gampo_Port-Ships-01.jpg', 'wiki_gampo_port_fishing_boats.webp'],
];

(async () => {
  for (const [src, dst] of map) {
    const inPath = path.join(SRC, src);
    const outPath = path.join(DST, dst);
    await sharp(inPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);
    console.log('done', dst);
  }
})().catch(e => { console.error(e); process.exit(1); });
