const sharp = require('sharp');
const jobs = [
  ['C:/Users/coolguy/.codex/generated_images/01a09617-2825-7e11-b3fc-b5d5e3776354/exec-55bdb7b2-3b15-45cf-a9f0-0db10e02f616.png', 'C:/Projects/carsite/images/heated_seat_steering_dashboard_button.webp'],
  ['C:/Users/coolguy/.codex/generated_images/01a09618-1139-7150-81df-fcab9b40e17e/exec-8d5993ac-8661-4463-ab65-afa718c726ee.png', 'C:/Projects/carsite/images/heated_seat_wiring_connector_check.webp'],
  ['C:/Users/coolguy/.codex/generated_images/01a09618-ef25-7662-9a28-91a826de7842/exec-709be34f-fcc5-4e4c-8802-3c2b1da84ebd.png', 'C:/Projects/carsite/images/heated_steering_wheel_driving_icon.webp'],
  ['C:/Users/coolguy/.codex/generated_images/01a0961a-ce67-7c32-b72d-c7561e0bcbc6/exec-552a4fad-a755-4a21-9e23-9ec0fd6aa330.png', 'C:/Projects/carsite/images/heated_steering_wheel_film_element.webp'],
];
(async () => {
  for (const [src, out] of jobs) {
    await sharp(src).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    console.log('done', out);
  }
})();
