// figure1_for_html.js
// מגדיר אובייקט גלובלי figure1 עם data/layout/config לשימוש ישיר ב-Plotly.newPlot

// סדרה ראשונה: סליל (helix) אדום
const N = 80;
const xa = [], ya = [], za = [];
for (let i = 0; i < N; i++) {
  const t = i * 0.2;
  xa.push(Math.cos(t));
  ya.push(Math.sin(t));
  za.push(t * 0.1);
}

// סדרה שנייה: ענן נקודות אקראי בכיפה (seed דטרמיניסטי)
const xb = [], yb = [], zb = [];
let seed = 12345;
function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
for (let i = 0; i < 120; i++) {
  const u = rnd();               // 0..1
  const v = rnd();               // 0..1
  const theta = 2 * Math.PI * u; // זווית
  const r = Math.sqrt(v) * 0.9;  // רדיוס
  xb.push(r * Math.cos(theta));
  yb.push(r * Math.sin(theta));
  zb.push((rnd() * 0.8) + 0.1);  // 0.1..0.9
}

// בניית ה-traces
const traceA = {
  type: 'scatter3d',
  mode: 'lines+markers',
  name: 'Series A',
  x: xa, y: ya, z: za,
  line:   { color: 'crimson', width: 4 },
  marker: { color: 'crimson', size: 3, opacity: 0.9 }
};

const traceB = {
  type: 'scatter3d',
  mode: 'markers',
  name: 'Series B',
  x: xb, y: yb, z: zb,
  marker: { color: 'royalblue', size: 3, opacity: 0.7, symbol: 'circle' }
};

// layout בסיסי ל-3D
const layout = {
  title: { text: '3D Scatter — Two Series', font: { size: 16 } },
  margin: { l: 0, r: 0, t: 40, b: 0 },
  scene: {
    xaxis: { title: 'X' },
    yaxis: { title: 'Y' },
    zaxis: { title: 'Z' },
    aspectmode: 'cube'
  }
};

const config = {};

const figure1 = {
  data: [traceA, traceB],
  layout: layout,
  config: config
};

window.figure1 = figure1;