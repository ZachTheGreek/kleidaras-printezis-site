// Source of the logo mark (brand_assets/logo-mark*.svg). Own construction, all numbers in a 512 grid.
//   1) node docs/logo-drafts/build-logo.mjs          → docs/logo-drafts/*-source.svg (stroke + clipPath)
//   2) picosvg X-source.svg > X-pico.svg              (pip install picosvg; strokes/clips → fills)
//   3) python docs/logo-drafts/union.py X-pico.svg brand_assets/X.svg   (one compound path, safe for vinyl cutting)
import { writeFileSync } from 'node:fs';

const out = new URL('.', import.meta.url).pathname;
const f = (n) => +n.toFixed(2);
const circle = (cx, cy, r, ccw) =>
  `M${cx} ${cy - r}a${r} ${r} 0 1 ${ccw ? 0 : 1} 0 ${2 * r}a${r} ${r} 0 1 ${ccw ? 0 : 1} 0 ${-2 * r}Z`;

// Rules: one weight (S) everywhere; heraldic "heater" shield = circular top arc (sagitta h),
// straight sides, bottom = two arcs of radius = shield width centred on the opposite side.
const P = {
  S: 28, cx: 256, halfW: 118, top: 178, h: 32, side: 30,
  head: [142, 54], holeR: 18, gap: 20, shaftW: 28, tipStart: 346,
  teeth: [[266, 16, 20], [292, 16, 28], [318, 16, 22]], // [y, height, length from shaft edge]
  color: '#7A1F2B',
};

function source(vb) {
  const { S, cx, halfW, top, h, side, head: [cy, r], holeR, gap, shaftW, tipStart, teeth, color } = P;
  const L = cx - halfW, R = cx + halfW, w = 2 * halfW;
  const Rt = (halfW * halfW + h * h) / (2 * h);
  const yS = top + side;
  const tipY = yS + Math.sqrt(w * w - halfW * halfW);
  const shield =
    `M${cx} ${top - h}A${f(Rt)} ${f(Rt)} 0 0 0 ${L} ${top}L${L} ${yS}` +
    `A${w} ${w} 0 0 0 ${cx} ${f(tipY)}A${w} ${w} 0 0 0 ${R} ${yS}` +
    `L${R} ${top}A${f(Rt)} ${f(Rt)} 0 0 0 ${cx} ${top - h}Z`;
  const sl = cx - shaftW / 2, sr = cx + shaftW / 2;
  let shaft = `M${sl} ${cy + r - 4}H${sr}`;
  for (const [y, th, len] of teeth) shaft += `V${y}H${sr + len}V${y + th}H${sr}`;
  shaft += `V${tipStart}L${cx} ${tipStart + shaftW / 2}L${sl} ${tipStart}Z`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}">
  <defs>
    <clipPath id="halo"><path clip-rule="evenodd" d="M0 0H512V512H0Z${circle(cx, cy, r + gap)}"/></clipPath>
  </defs>
  <path clip-path="url(#halo)" d="${shield}" fill="none" stroke="${color}" stroke-width="${S}" stroke-linejoin="round"/>
  <path fill="${color}" fill-rule="evenodd" d="${circle(cx, cy, r)}${circle(cx, cy, holeR, true)}"/>
  <path fill="${color}" d="${shaft}"/>
</svg>
`;
}

writeFileSync(`${out}logo-mark-source.svg`, source([124, 88, 264, 339])); // tight bounds
writeFileSync(`${out}logo-mark-square-source.svg`, source([72, 73, 368, 368])); // favicon / avatar
console.log('written:', `${out}logo-mark-source.svg`, `${out}logo-mark-square-source.svg`);
