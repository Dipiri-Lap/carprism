const sharp = require('sharp');
const jobs = [
  ['C:/Users/coolguy/.codex/generated_images/01a090c4-696f-7cb0-8941-6c90cea81c16/exec-8b78b610-8492-43e2-944d-e0e8b1504bc4.png', 'images/camping-car-power-budget_1.webp'],
  ['C:/Users/coolguy/.codex/generated_images/01a090c4-6fbb-7b63-85a2-34ef6c292032/exec-89dfc459-3907-4eab-b6cb-5a78db29507e.png', 'images/camping-car-power-budget_2.webp'],
  ['C:/Users/coolguy/.codex/generated_images/01a090c4-7749-71b1-a481-cdc02632a7d0/exec-9c4572f8-4d81-458d-8f71-540804139757.png', 'images/camping-car-power-budget_3.webp'],
  ['C:/Users/coolguy/.codex/generated_images/01a090c4-7f36-71d1-afb1-b3749e062178/exec-5348999d-19b6-4ff0-8966-728626226573.png', 'images/camping-car-power-budget_4.webp'],
];
(async () => {
  for (const [src, dst] of jobs) {
    await sharp(src).webp({ quality: 82 }).toFile(dst);
    console.log('done', dst);
  }
})();
