// ============================================================
// DobNumberCard.jsx — Date of Birth full prediction card
// Based on exact birth day (1–31), not reduced root
// Shows compound number + ruling planet + full bilingual prediction
// ============================================================

import "./DobNumberCard.css";

const PLANET_GEM = {
  Sun:     "🔴",
  Moon:    "🤍",
  Jupiter: "💛",
  Rahu:    "🟤",
  Mercury: "💚",
  Venus:   "💎",
  Ketu:    "🟡",
  Saturn:  "🔵",
  Mars:    "🔴",
};

export default function DobNumberCard({ dobData }) {
  if (!dobData) return null;

  const gemEmoji = PLANET_GEM[dobData.rulingPlanet.en] || "💎";

  return (
    <div className="dob-card">

      {/* ── HEADER: Day + Names ── */}
      <div className="dob-header">
        <div className="dob-day-symbol">{dobData.day}</div>
        <div className="dob-names">
          <div className="dob-name-en">{dobData.nameEn}</div>
          <div className="dob-name-hi">{dobData.nameHi}</div>

          {/* Compound number badge — unique to DOB card */}
          {dobData.compound > 9 && (
            <div className="dob-compound-badge">
              <span className="dob-compound-label">Compound</span>
              <span className="dob-compound-value">{dobData.compound}</span>
              <span className="dob-compound-label">→ Root</span>
              <span className="dob-compound-value">{dobData.rootNumber}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── PILLS: Ruling Planet + Root Number ── */}
      <div className="dob-pills">
        <div className="dob-pill">
          <div className="dob-pill-label">Ruling Planet</div>
          <div className="dob-pill-value-en">{dobData.rulingPlanet.en}</div>
          <div className="dob-pill-value-hi">{dobData.rulingPlanet.hi}</div>
        </div>

        <div className="dob-pill root-pill">
          <div className="dob-pill-label">Root Number</div>
          <div className="dob-root-big">{dobData.rootNumber}</div>
        </div>
      </div>

      {/* ── SHORT DESCRIPTIONS ── */}
      <div className="dob-short-wrap">
        <div className="dob-short-box">"{dobData.shortDescEn}"</div>
        <div className="dob-short-box hi">"{dobData.shortDescHi}"</div>
      </div>

      {/* ── FULL DESCRIPTIONS ── */}
      <div className="dob-desc-wrap">
        <div className="dob-desc-block">
          <div className="dob-desc-lang">English</div>
          <p className="dob-desc-text">{dobData.fullDescEn}</p>
        </div>
        <div className="dob-desc-block">
          <div className="dob-desc-lang">हिंदी</div>
          <p className="dob-desc-text hindi">{dobData.fullDescHi}</p>
        </div>
      </div>

      {/* ── TRAITS ── */}
      <div className="dob-traits-row">
        <div className="dob-traits-box">
          <div className="dob-traits-title">✦ Strengths</div>
          {dobData.positiveTraits.map((t, i) => (
            <span key={i} className="dob-trait-tag">{t}</span>
          ))}
        </div>
        <div className="dob-traits-box caution">
          <div className="dob-traits-title">⚠ Watch Out</div>
          {dobData.cautionTraits.map((t, i) => (
            <span key={i} className="dob-trait-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ── LUCKY GRID ── */}
      <div className="dob-lucky-grid">

        <div className="dob-lucky-box">
          <div className="dob-lucky-label">🔢 Lucky Numbers</div>
          <div className="dob-tag-row">
            {dobData.luckyNumbers.map((n, i) => (
              <span key={i} className="dob-tag number">{n}</span>
            ))}
          </div>
        </div>

        <div className="dob-lucky-box">
          <div className="dob-lucky-label">📅 Lucky Days</div>
          <div className="dob-tag-row">
            {dobData.luckyDays.map((d, i) => (
              <span key={i} className="dob-tag">{d}</span>
            ))}
          </div>
        </div>

        <div className="dob-lucky-box">
          <div className="dob-lucky-label">🎨 Lucky Colors</div>
          <div className="dob-tag-row">
            {dobData.luckyColors.map((c, i) => (
              <span key={i} className="dob-tag">{c}</span>
            ))}
          </div>
        </div>

        <div className="dob-lucky-box">
          <div className="dob-lucky-label">💼 Career Fields</div>
          <div className="dob-tag-row">
            {dobData.career.map((c, i) => (
              <span key={i} className="dob-tag">{c}</span>
            ))}
          </div>
        </div>

        <div className="dob-lucky-box full-width">
          <div className="dob-lucky-label">🏥 Health Watch</div>
          <div className="dob-tag-row">
            {dobData.health.map((h, i) => (
              <span key={i} className="dob-tag health">{h}</span>
            ))}
          </div>
        </div>

      </div>

      {/* ── GEMSTONES ── */}
      <div className="dob-lucky-box full-width" style={{ marginBottom: 0 }}>
        <div className="dob-lucky-label">{gemEmoji} Lucky Stone & Favorable Stones</div>
        <div className="dob-tag-row">
          {/* Primary stone highlighted */}
          <span className="dob-tag stone" style={{ fontWeight: 700, borderColor: "rgba(196,160,240,0.5)", background: "rgba(196,160,240,0.1)" }}>
            ★ {dobData.luckyStone}
          </span>
          {dobData.favorableStones
            ?.filter((s) => s !== dobData.luckyStone)
            .map((s, i) => (
              <span key={i} className="dob-tag stone">{s}</span>
            ))}
        </div>
      </div>

    </div>
  );
}
