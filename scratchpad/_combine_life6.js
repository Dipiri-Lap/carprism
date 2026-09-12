const fs = require("fs");
const files = [
  "C:/Users/coolguy/AppData/Local/Temp/claude/c--Projects-carsite/3ae6286f-6a87-41db-b470-4b8b7f159309/scratchpad/winter-battery-voltage-management-2026.spec.data.json",
  "C:/Projects/carsite/scratchpad/individual-consumption-tax-extension-2026-spec.data.json",
  "C:/Users/coolguy/AppData/Local/Temp/claude/c--Projects-carsite/3ae6286f-6a87-41db-b470-4b8b7f159309/scratchpad/ev-battery-info-disclosure-2026.spec.data.json",
  "C:/Projects/carsite/scratchpad/driving-habit-insurance-discount-2026.spec.data.json",
  "C:/Projects/carsite/scratchpad/autumn-camping-vanlife-precheck-2026.spec.data.json",
  "C:/Projects/carsite/scratchpad/heated-seat-steering-wheel-maintenance-2026.spec.data.json"
];
let all = [];
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(f, "utf8"));
  all = all.concat(arr);
}
fs.writeFileSync("C:/Projects/carsite/scratchpad/_life6_combined.data.json", JSON.stringify(all, null, 2));
console.log("combined:", all.length, "entries");
console.log(all.map(e => e.slug));
