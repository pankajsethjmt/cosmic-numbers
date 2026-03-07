// ============================================================
// FortuneNumberCard.jsx — Fortune Number (Bhagyank) card
// Mirrors RootNumberCard.jsx structure exactly
// Fortune = full DOB reduced → life destiny direction
// ============================================================

import "./FortuneNumberCard.css";

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

export default function FortuneNumberCard({ fortuneData }) {
  if (!fortuneData) return null;

  const gemEmoji = PLANET_GEM[fortuneData.rulingPlanet.en] || "💎";

  return (
    <div className="fn-card">

      {/* ── HEADER: Number + Names ── */}
      <div className="fn-header">
        <div className="fn-number-symbol">{fortuneData.number}</div>
        <div className="fn-names">
          <div className="fn-name-en">{fortuneData.nameEn}</div>
          <div className="fn-name-hi">{fortuneData.nameHi}</div>
          <div className="fn-core-nature">{fortuneData.coreNature.en}</div>
          <div
            className="fn-core-nature"
            style={{
              fontFamily: "'EB Garamond', serif",
              textTransform: "none",
              letterSpacing: 0,
              fontStyle: "italic",
            }}
          >
            {fortuneData.coreNature.hi}
          </div>
        </div>
      </div>

      {/* ── INFO PILLS ── */}
      <div className="fn-pills">
        <div className="fn-pill">
          <div className="fn-pill-label">Ruling Planet</div>
          <div className="fn-pill-value-en">{fortuneData.rulingPlanet.en}</div>
          <div className="fn-pill-value-hi">{fortuneData.rulingPlanet.hi}</div>
        </div>
        <div className="fn-pill ruling-number-pill">
          <div className="fn-pill-label">Ruling Number</div>
          <div className="fn-ruling-number-big">{fortuneData.rulingNumber}</div>
        </div>
      </div>

      {/* ── SHORT DESCRIPTIONS ── */}
      <div className="fn-short-desc-wrap">
        <div className="fn-short-box">"{fortuneData.shortDescEn}"</div>
        <div className="fn-short-box hi">"{fortuneData.shortDescHi}"</div>
      </div>

      {/* ── FULL DESCRIPTIONS ── */}
      <div className="fn-desc-wrap">
        <div className="fn-desc-block">
          <div className="fn-desc-lang">English</div>
          <p className="fn-desc-text">{fortuneData.fullDescEn}</p>
        </div>
        <div className="fn-desc-block">
          <div className="fn-desc-lang">हिंदी</div>
          <p className="fn-desc-text hindi">{fortuneData.fullDescHi}</p>
        </div>
      </div>

      {/* ── TRAITS ── */}
      <div className="fn-traits-row">
        <div className="fn-traits-box">
          <div className="fn-traits-title">✦ Strengths</div>
          {fortuneData.positiveTraits.map((t, i) => (
            <span key={i} className="fn-trait-tag">{t}</span>
          ))}
        </div>
        <div className="fn-traits-box caution">
          <div className="fn-traits-title">⚠ Watch Out</div>
          {fortuneData.cautionTraits.map((t, i) => (
            <span key={i} className="fn-trait-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ── LUCKY INFO GRID ── */}
      <div className="fn-lucky-grid">

        <div className="fn-lucky-box">
          <div className="fn-lucky-label">🔢 Lucky Numbers</div>
          <div className="fn-tag-row">
            {fortuneData.luckyNumbers.map((n, i) => (
              <span key={i} className="fn-tag number">{n}</span>
            ))}
          </div>
        </div>

        <div className="fn-lucky-box">
          <div className="fn-lucky-label">📅 Lucky Days</div>
          <div className="fn-tag-row">
            {fortuneData.luckyDays.map((d, i) => (
              <span key={i} className="fn-tag">{d}</span>
            ))}
          </div>
        </div>

        <div className="fn-lucky-box">
          <div className="fn-lucky-label">🎨 Lucky Colors</div>
          <div className="fn-tag-row">
            {fortuneData.luckyColors.map((c, i) => (
              <span key={i} className="fn-tag">{c}</span>
            ))}
          </div>
        </div>

        <div className="fn-lucky-box">
          <div className="fn-lucky-label">💼 Career Fields</div>
          <div className="fn-tag-row">
            {fortuneData.career.map((c, i) => (
              <span key={i} className="fn-tag">{c}</span>
            ))}
          </div>
        </div>

        <div className="fn-lucky-box full-width">
          <div className="fn-lucky-label">🏥 Health Watch</div>
          <div className="fn-tag-row">
            {fortuneData.health.map((h, i) => (
              <span key={i} className="fn-tag health">{h}</span>
            ))}
          </div>
        </div>

      </div>

      {/* ── GEMSTONE ── */}
      <div className="fn-stone-wrap">
        <div className="fn-stone-main">
          <div className="fn-stone-gem">{gemEmoji}</div>
          <div className="fn-stone-info">
            <div className="fn-stone-label">Lucky Gemstone — भाग्य रत्न</div>
            <div className="fn-stone-name-en">{fortuneData.luckyStoneEn}</div>
            <div className="fn-stone-name-hi">{fortuneData.luckyStone}</div>
          </div>
        </div>
      </div>

    </div>
  );
}
