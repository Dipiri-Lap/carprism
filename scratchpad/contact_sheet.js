const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeSheet(dir, files, outPath, cols = 3) {
  const cellW = 320, cellH = 220;
  const rows = Math.ceil(files.length / cols);
  const composites = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const buf = await sharp(path.join(dir, f)).resize(cellW, cellH, { fit: 'cover' }).toBuffer();
    const x = (i % cols) * cellW;
    const y = Math.floor(i / cols) * cellH;
    composites.push({ input: buf, left: x, top: y });
  }
  await sharp({ create: { width: cellW * cols, height: cellH * rows, channels: 3, background: '#fff' } })
    .composite(composites)
    .jpeg({ quality: 70 })
    .toFile(outPath);
  console.log('done', outPath);
}

(async () => {
  const base = __dirname + '/imgs_travel_g3';
  const pc = fs.readdirSync(base + '/pc').sort();
  const mn = fs.readdirSync(base + '/mn').sort();
  const ja = fs.readdirSync(base + '/ja').sort();
  await makeSheet(base + '/pc', pc, base + '/sheet_pc.jpg');
  await makeSheet(base + '/mn', mn, base + '/sheet_mn.jpg');
  await makeSheet(base + '/ja', ja, base + '/sheet_ja.jpg');
})();
