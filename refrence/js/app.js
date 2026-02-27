/* ============================================================
   COSMIC NUMBERS — Vedic Numerology Luck Oracle
   app.js — All logic: data, calculation, UI
   Author: Astro Pankaj Seth
   ============================================================ */

'use strict';

// ── PLANET MEANINGS ────────────────────────────────────────
const MEANINGS = {
  1: 'The Leader — Sun',
  2: 'The Diplomat — Moon',
  3: 'The Creator — Jupiter',
  4: 'The Builder — Rahu',
  5: 'The Adventurer — Mercury',
  6: 'The Nurturer — Venus',
  7: 'The Seeker — Ketu',
  8: 'The Achiever — Saturn',
  9: 'The Humanitarian — Mars',
};

// ── VEDIC COMPATIBILITY TABLE ──────────────────────────────
// Source: Astro Pankaj Seth — Matchmaking by Numerology PDF
// Rule: Same number = Best Friend (self)
// Levels: bestfriend | friend | neutral | enemy
const COMPAT = {
  1: { 1:'bestfriend', 2:'friend',     3:'friend',     4:'enemy',      5:'enemy',      6:'friend',     7:'friend',     8:'neutral',    9:'friend'     },
  2: { 1:'friend',     2:'bestfriend', 3:'neutral',    4:'friend',     5:'enemy',      6:'bestfriend', 7:'friend',     8:'neutral',    9:'bestfriend' },
  3: { 1:'friend',     2:'neutral',    3:'bestfriend', 4:'neutral',    5:'friend',     6:'bestfriend', 7:'neutral',    8:'enemy',      9:'bestfriend' },
  4: { 1:'enemy',      2:'friend',     3:'neutral',    4:'bestfriend', 5:'neutral',    6:'bestfriend', 7:'friend',     8:'friend',     9:'friend'     },
  5: { 1:'enemy',      2:'enemy',      3:'friend',     4:'neutral',    5:'bestfriend', 6:'neutral',    7:'neutral',    8:'neutral',    9:'neutral'    },
  6: { 1:'friend',     2:'bestfriend', 3:'bestfriend', 4:'bestfriend', 5:'neutral',    6:'bestfriend', 7:'neutral',    8:'neutral',    9:'bestfriend' },
  7: { 1:'friend',     2:'friend',     3:'neutral',    4:'friend',     5:'neutral',    6:'friend',     7:'bestfriend', 8:'neutral',    9:'bestfriend' },
  8: { 1:'neutral',    2:'neutral',    3:'enemy',      4:'friend',     5:'neutral',    6:'friend',     7:'neutral',    8:'bestfriend', 9:'neutral'    },
  9: { 1:'friend',     2:'bestfriend', 3:'bestfriend', 4:'friend',     5:'neutral',    6:'bestfriend', 7:'bestfriend', 8:'neutral',    9:'bestfriend' },
};

// ── COMPATIBILITY WEIGHTS ──────────────────────────────────
const COMPAT_LABEL = {
  bestfriend: { text: 'Best Friend', weight: 100 },
  friend:     { text: 'Friend',      weight: 75  },
  neutral:    { text: 'Neutral',     weight: 50  },
  enemy:      { text: 'Enemy',       weight: 10  },
};

// ── VEDIC RESULT SCALE 1–10 ────────────────────────────────
const VERDICT_SCALE = {
  1:  { title: 'Graha Dosha',     hindi: 'ग्रह दोष',        emoji: '💀', cat: 'LOW',        color: '#f07878' },
  2:  { title: 'Krodhit Graha',   hindi: 'क्रोधित ग्रह',    emoji: '🌑', cat: 'LOW',        color: '#f07878' },
  3:  { title: 'Ashubh Yog',      hindi: 'अशुभ योग',         emoji: '⛈️', cat: 'LOW',        color: '#f07878' },
  4:  { title: 'Saam Sthiti',     hindi: 'सम स्थिति',        emoji: '🌫️', cat: 'AVERAGE',    color: '#c9a84c' },
  5:  { title: 'Madhyam Bhagya',  hindi: 'मध्यम भाग्य',      emoji: '⚖️', cat: 'AVERAGE',    color: '#c9a84c' },
  6:  { title: 'Shubh Aarambh',   hindi: 'शुभ आरम्भ',        emoji: '🌤️', cat: 'AVERAGE',    color: '#c9a84c' },
  7:  { title: 'Shubh Yog',       hindi: 'शुभ योग',           emoji: '✨', cat: 'BEST',       color: '#7ceba0' },
  8:  { title: 'Grah Kripa',      hindi: 'ग्रह कृपा',         emoji: '🌟', cat: 'BEST',       color: '#7ceba0' },
  9:  { title: 'Raj Yog',         hindi: 'राज योग',            emoji: '🔱', cat: 'SUPER LUCK', color: '#f0d080' },
  10: { title: 'Maha Bhagya Yog', hindi: 'महा भाग्य योग',    emoji: '👑', cat: 'SUPER LUCK', color: '#f0d080',
        special: 'YOU ARE BORN LUCKY! UNIVERSE IS CELEBRATING YOU! 🎉🎊' },
};

// ── STATE ──────────────────────────────────────────────────
const state = { root: null, fortune: null, chosen: null };

// ── HELPER: REDUCE TO SINGLE DIGIT ────────────────────────
function reduce(n) {
  n = Math.abs(parseInt(n));
  while (n > 9) {
    n = String(n).split('').reduce((sum, d) => sum + parseInt(d), 0);
  }
  return n;
}

// ── HELPER: SUM ALL DIGITS IN STRING ──────────────────────
function sumDigits(str) {
  return str.replace(/\D/g, '').split('').reduce((sum, d) => sum + parseInt(d), 0);
}

// ── TODAY'S DATE NUMBER (only DD) ─────────────────────────
// e.g. today = 26 → 2+6 = 8
function getTodayNumber() {
  return reduce(new Date().getDate());
}

// ── CALCULATE ROOT & FORTUNE FROM DOB ─────────────────────
// Root    = reduce(DD only)
// Fortune = reduce(all digits of DD + MM + YYYY)
function calcDOB(dd, mm, yyyy) {
  const root    = reduce(dd);
  const fortune = reduce(sumDigits(String(dd) + String(mm) + String(yyyy)));
  return { root, fortune };
}

// ── GET RELATION FROM COMPAT TABLE ────────────────────────
function getRelation(from, to) {
  if (!from || !to) return 'neutral';
  return COMPAT[from]?.[to] ?? 'neutral';
}

// ── RANDOM NUMBER: Math.ceil logic ────────────────────────
// Math.random() → 0.0 to 1.0
// × 9 → 0.0 to 9.0
// Math.ceil → 1 to 9 (0.1→1, 1.1→2 ... 8.9→9)
function generateRandom() {
  return Math.ceil(Math.random() * 9);
}

// ── MAIN LUCK CALCULATION ──────────────────────────────────
function calcLuck() {
  const random   = generateRandom();
  const todayNum = getTodayNumber();
  const client   = state.chosen;
  const root     = state.root;
  const fortune  = state.fortune;

  // PART 1 — Client Given Number (50% weight)
  // Match client number against: Root, Fortune, Today, Random
  const p1 = [
    { label: 'Your No. → Root',    from: client, to: root     },
    { label: 'Your No. → Fortune', from: client, to: fortune  },
    { label: 'Your No. → Today',   from: client, to: todayNum },
    { label: 'Your No. → Random',  from: client, to: random   },
  ];

  // PART 2 — Random Number (50% weight)
  // Match random number against: Root, Fortune, Today, Client
  const p2 = [
    { label: 'Random → Root',      from: random, to: root     },
    { label: 'Random → Fortune',   from: random, to: fortune  },
    { label: 'Random → Today',     from: random, to: todayNum },
    { label: 'Random → Your No.',  from: random, to: client   },
  ];

  // Score each match set
  function scoreMatches(matches) {
    let total = 0;
    matches.forEach(m => {
      m.rel   = getRelation(m.from, m.to);
      total  += COMPAT_LABEL[m.rel].weight;
    });
    return total / matches.length;
  }

  const part1Score = scoreMatches(p1); // 0–100
  const part2Score = scoreMatches(p2); // 0–100
  const finalScore = (part1Score * 0.5) + (part2Score * 0.5);

  // Convert 0–100 → 1–10
  let scale = Math.ceil(finalScore / 10);
  scale = Math.max(1, Math.min(10, scale));

  return { random, todayNum, client, root, fortune, part1Score, part2Score, finalScore, scale, p1, p2 };
}

// ── DOM REFS ───────────────────────────────────────────────
const dobInput      = document.getElementById('dob');
const dobError      = document.getElementById('dob-error');
const chosenInput   = document.getElementById('chosen');
const oracleBtn     = document.getElementById('oracle-btn');
const oracleSection = document.getElementById('oracle-section');
const chosenSection = document.getElementById('chosen-section');

// ── ENABLE / DISABLE BUTTON ────────────────────────────────
function checkReady() {
  oracleBtn.disabled = !(state.root && state.fortune && state.chosen);
}

// ── HIDE INPUT SECTIONS ────────────────────────────────────
function hideInputSections() {
  chosenSection.style.display = 'none';
}

// ── DOB AUTO-FORMAT: DD / MM / YYYY ───────────────────────
dobInput.addEventListener('input', () => {
  const raw = dobInput.value.replace(/\D/g, '').substring(0, 8);
  let fmt   = raw.substring(0, 2);
  if (raw.length > 2) fmt += ' / ' + raw.substring(2, 4);
  if (raw.length > 4) fmt += ' / ' + raw.substring(4, 8);
  dobInput.value = fmt;
  validateDOB();
});

dobInput.addEventListener('keydown', e => {
  if (e.key === 'Backspace') setTimeout(validateDOB, 10);
});

// ── DOB VALIDATION ─────────────────────────────────────────
function validateDOB() {
  const raw = dobInput.value.replace(/\D/g, '');
  dobError.textContent = '';
  state.root    = null;
  state.fortune = null;

  if (raw.length < 8) {
    hideInputSections();
    checkReady();
    return;
  }

  const dd   = parseInt(raw.substring(0, 2));
  const mm   = parseInt(raw.substring(2, 4));
  const yyyy = parseInt(raw.substring(4, 8));

  if (dd < 1 || dd > 31) {
    dobError.textContent = '✗ Day must be 01–31';
    hideInputSections(); checkReady(); return;
  }
  if (mm < 1 || mm > 12) {
    dobError.textContent = '✗ Month must be 01–12';
    hideInputSections(); checkReady(); return;
  }
  if (yyyy < 1900 || yyyy > new Date().getFullYear()) {
    dobError.textContent = '✗ Enter a valid year';
    hideInputSections(); checkReady(); return;
  }

  const daysInMonth = new Date(yyyy, mm, 0).getDate();
  if (dd > daysInMonth) {
    dobError.textContent = `✗ ${mm}/${yyyy} has only ${daysInMonth} days`;
    hideInputSections(); checkReady(); return;
  }

  // Valid DOB — calculate numbers
  const { root, fortune } = calcDOB(dd, mm, yyyy);
  state.root    = root;
  state.fortune = fortune;

  // Show chosen number input
  chosenSection.style.display = 'block';
  checkReady();
}

// ── CHOSEN NUMBER INPUT ────────────────────────────────────
chosenInput.addEventListener('input', () => {
  const v      = chosenInput.value.trim();
  state.chosen = (!v || isNaN(v) || parseInt(v) < 1) ? null : reduce(parseInt(v));
  checkReady();
});

// ── ORACLE BUTTON CLICK ────────────────────────────────────
oracleBtn.addEventListener('click', () => {
  oracleSection.classList.remove('visible');
  oracleSection.style.display = 'none';
  oracleBtn.disabled    = true;
  oracleBtn.textContent = '⧖ Reading the Stars…';

  setTimeout(() => {
    const result = calcLuck();
    displayResult(result);

    oracleSection.style.display = 'block';
    // Force reflow so animation replays
    oracleSection.offsetHeight;
    oracleSection.classList.add('visible');
    oracleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    oracleBtn.disabled    = false;
    oracleBtn.textContent = '✦ Check My Luck ✦';
  }, 1600);
});

// ── DISPLAY RESULT ─────────────────────────────────────────
function displayResult(r) {
  const v = VERDICT_SCALE[r.scale];

  // Random & Today numbers
  document.getElementById('lucky-num').textContent        = r.random;
  document.getElementById('today-num-display').textContent = r.todayNum;

  // Part scores
  document.getElementById('part1-score').textContent = Math.round(r.part1Score);
  document.getElementById('part2-score').textContent = Math.round(r.part2Score);

  // Scale display
  const scaleBig   = document.getElementById('luck-scale-big');
  const scaleLabel = document.getElementById('luck-scale-label');
  scaleBig.textContent   = r.scale + ' / 10';
  scaleLabel.textContent = r.scale + '/10';
  scaleBig.style.color   = v.color;

  // Meter fill
  const fill = document.getElementById('luck-fill');
  if      (r.scale <= 3) fill.style.background = 'linear-gradient(90deg, #8b2020, #f07878)';
  else if (r.scale <= 6) fill.style.background = 'linear-gradient(90deg, #7a5020, #c9a84c)';
  else if (r.scale <= 8) fill.style.background = 'linear-gradient(90deg, #1a6e40, #7ceba0)';
  else                   fill.style.background = 'linear-gradient(90deg, #7a6010, #f0d080)';

  requestAnimationFrame(() => requestAnimationFrame(() => {
    fill.style.width = (r.scale * 10) + '%';
  }));

  // Verdict banner
  const banner = document.getElementById('verdict-banner');
  banner.style.borderColor = v.color + '66';
  banner.style.color       = v.color;
  document.getElementById('verdict-emoji').textContent = v.emoji;
  document.getElementById('verdict-title').textContent = v.title;
  document.getElementById('verdict-hindi').textContent = v.hindi;
  document.getElementById('verdict-cat').textContent   = v.cat;
  document.getElementById('verdict-cat').style.color   = v.color;
  document.getElementById('verdict-desc').textContent  = v.special || '';

  // Match breakdown
  buildMatchGrid(r);

  // Compat table (only once)
  buildCompatTable();
}

// ── BUILD MATCH GRID ───────────────────────────────────────
function buildMatchGrid(r) {
  const grid = document.getElementById('match-grid');
  grid.innerHTML = '';

  const sections = [
    { heading: 'Part 1 — Your Number (50%)', items: r.p1 },
    { heading: 'Part 2 — Random Number (50%)', items: r.p2 },
  ];

  sections.forEach((sec, si) => {
    // Section header
    const hdr = document.createElement('div');
    hdr.className   = 'match-section-header';
    hdr.textContent = sec.heading;
    grid.appendChild(hdr);

    // Match cards
    sec.items.forEach((m, i) => {
      const info   = COMPAT_LABEL[m.rel];
      const clsCat = m.rel === 'bestfriend' ? 'bestfriend'
                   : m.rel === 'friend'     ? 'friend'
                   : m.rel === 'neutral'    ? 'neutral'
                   : 'enemy';

      const card = document.createElement('div');
      card.className           = `match-item ${clsCat}`;
      card.style.animationDelay = ((si * 4 + i) * 0.07) + 's';
      card.innerHTML = `
        <div class="match-type-label">${m.label}</div>
        <div class="match-num">${m.from} ↔ ${m.to}</div>
        <div class="match-planet">${MEANINGS[m.from] || ''}</div>
        <div class="match-relation">${info.text}</div>
        <span class="match-verdict">${info.weight} pts</span>
      `;
      grid.appendChild(card);
    });
  });
}

// ── BUILD COMPAT REFERENCE TABLE ──────────────────────────
function buildCompatTable() {
  const table = document.getElementById('compat-table');
  if (table.innerHTML) return; // Build only once

  const planets = ['Sun', 'Moon', 'Jupiter', 'Rahu', 'Mercury', 'Venus', 'Ketu', 'Saturn', 'Mars'];

  table.innerHTML = `
    <tr>
      <th>No.</th>
      <th>Planet</th>
      <th style="color:#f0d080">Best Friend</th>
      <th style="color:#7ceba0">Friend</th>
      <th style="color:#6090c0">Neutral</th>
      <th style="color:#f07878">Enemy</th>
    </tr>
  `;

  for (let n = 1; n <= 9; n++) {
    const entries = Object.entries(COMPAT[n]);
    const bf = entries.filter(([, v]) => v === 'bestfriend').map(([k]) => k).join(', ') || '—';
    const fr = entries.filter(([, v]) => v === 'friend').map(([k]) => k).join(', ')     || '—';
    const ne = entries.filter(([, v]) => v === 'neutral').map(([k]) => k).join(', ')    || '—';
    const en = entries.filter(([, v]) => v === 'enemy').map(([k]) => k).join(', ')      || '—';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${n}</td>
      <td>${planets[n - 1]}</td>
      <td style="color:#f0d080">${bf}</td>
      <td style="color:#7ceba0">${fr}</td>
      <td style="color:#6090c0">${ne}</td>
      <td style="color:#f07878">${en}</td>
    `;
    table.appendChild(row);
  }
}

// ── STARFIELD GENERATOR ────────────────────────────────────
function createStarfield() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 160; i++) {
    const star  = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${2 + Math.random() * 5}s;
      --max-op: ${0.3 + Math.random() * 0.7};
      animation-delay: ${Math.random() * 6}s;
    `;
    container.appendChild(star);
  }
}

// ── RESET ──────────────────────────────────────────────────
function resetOracle() {
  oracleSection.classList.remove('visible');
  oracleSection.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createStarfield();
});
