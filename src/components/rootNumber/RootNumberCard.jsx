// ============================================================
// RootNumberCard.jsx — Root Number prediction card
// Mirrors SunSignCard.jsx structure exactly
// ============================================================

import "./RootNumberCard.css";

// Planet → gem emoji map
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

export default function RootNumberCard({ rootData }) {
  if (!rootData) return null;

  const gemEmoji = PLANET_GEM[rootData.rulingPlanet.en] || "💎";

  return (
    <div className="rn-card">

      {/* ── HEADER: Number + Names ── */}
      <div className="rn-header">
        <div className="rn-number-symbol">{rootData.number}</div>
        <div className="rn-names">
          <div className="rn-name-en">{rootData.nameEn}</div>
          <div className="rn-name-hi">{rootData.nameHi}</div>
          <div className="rn-core-nature">
            {rootData.coreNature.en}
          </div>
          <div className="rn-core-nature" style={{ fontFamily: "'EB Garamond', serif", textTransform: "none", letterSpacing: 0, fontStyle: "italic" }}>
            {rootData.coreNature.hi}
          </div>
        </div>
      </div>

      {/* ── INFO PILLS ── */}
      <div className="rn-pills">

        {/* Ruling Planet */}
        <div className="rn-pill">
          <div className="rn-pill-label">Ruling Planet</div>
          <div className="rn-pill-value-en">{rootData.rulingPlanet.en}</div>
          <div className="rn-pill-value-hi">{rootData.rulingPlanet.hi}</div>
        </div>

        {/* Ruling Number — highlighted same as SunSignCard */}
        <div className="rn-pill ruling-number-pill">
          <div className="rn-pill-label">Ruling Number</div>
          <div className="rn-ruling-number-big">{rootData.rulingNumber}</div>
        </div>

      </div>

      {/* ── SHORT DESCRIPTIONS ── */}
      <div className="rn-short-desc-wrap">
        <div className="rn-short-box">"{rootData.shortDescEn}"</div>
        <div className="rn-short-box hi">"{rootData.shortDescHi}"</div>
      </div>

      {/* ── FULL DESCRIPTIONS ── */}
      <div className="rn-desc-wrap">
        <div className="rn-desc-block">
          <div className="rn-desc-lang">English</div>
          <p className="rn-desc-text">{rootData.fullDescEn}</p>
        </div>
        <div className="rn-desc-block">
          <div className="rn-desc-lang">हिंदी</div>
          <p className="rn-desc-text hindi">{rootData.fullDescHi}</p>
        </div>
      </div>

      {/* ── TRAITS ── */}
      <div className="rn-traits-row">
        <div className="rn-traits-box">
          <div className="rn-traits-title">✦ Strengths</div>
          {rootData.positiveTraits.map((t, i) => (
            <span key={i} className="rn-trait-tag">{t}</span>
          ))}
        </div>
        <div className="rn-traits-box caution">
          <div className="rn-traits-title">⚠ Watch Out</div>
          {rootData.cautionTraits.map((t, i) => (
            <span key={i} className="rn-trait-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ── LUCKY INFO GRID ── */}
      <div className="rn-lucky-grid">

        {/* Lucky Numbers */}
        <div className="rn-lucky-box">
          <div className="rn-lucky-label">🔢 Lucky Numbers</div>
          <div className="rn-tag-row">
            {rootData.luckyNumbers.map((n, i) => (
              <span key={i} className="rn-tag number">{n}</span>
            ))}
          </div>
        </div>

        {/* Lucky Days */}
        <div className="rn-lucky-box">
          <div className="rn-lucky-label">📅 Lucky Days</div>
          <div className="rn-tag-row">
            {rootData.luckyDays.map((d, i) => (
              <span key={i} className="rn-tag">{d}</span>
            ))}
          </div>
        </div>

        {/* Lucky Colors */}
        <div className="rn-lucky-box">
          <div className="rn-lucky-label">🎨 Lucky Colors</div>
          <div className="rn-tag-row">
            {rootData.luckyColors.map((c, i) => (
              <span key={i} className="rn-tag">{c}</span>
            ))}
          </div>
        </div>

        {/* Career */}
        <div className="rn-lucky-box">
          <div className="rn-lucky-label">💼 Career Fields</div>
          <div className="rn-tag-row">
            {rootData.career.map((c, i) => (
              <span key={i} className="rn-tag">{c}</span>
            ))}
          </div>
        </div>

        {/* Health — full width */}
        <div className="rn-lucky-box full-width">
          <div className="rn-lucky-label">🏥 Health Watch</div>
          <div className="rn-tag-row">
            {rootData.health.map((h, i) => (
              <span key={i} className="rn-tag health">{h}</span>
            ))}
          </div>
        </div>

      </div>

      {/* ── GEMSTONE SECTION ── */}
      <div className="rn-stone-wrap">

        {/* Primary Stone */}
        <div className="rn-stone-main">
          <div className="rn-stone-gem">{gemEmoji}</div>
          <div className="rn-stone-info">
            <div className="rn-stone-label">Lucky Gemstone — भाग्य रत्न</div>
            <div className="rn-stone-name-en">{rootData.luckyStoneEn}</div>
            <div className="rn-stone-name-hi">{rootData.luckyStone}</div>
          </div>
        </div>

        {/* Other Favorable Stones */}
        {rootData.otherFavorableStones?.length > 0 && (
          <>
            <div className="rn-other-stones-label">Other Favorable Stones</div>
            <div className="rn-other-stones">
              {rootData.otherFavorableStones.map((s, i) => (
                <span key={i} className="rn-stone-tag">
                  {s.en}
                  <span className="stone-hi">· {s.hi}</span>
                </span>
              ))}
            </div>
          </>
        )}

      </div>

    </div>
  );
}
