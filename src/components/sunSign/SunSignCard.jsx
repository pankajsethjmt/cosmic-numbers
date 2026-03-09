// ============================================================
// SunSignCard.jsx — Vedic Sun Sign display card
// Updated: coreNature, shortDesc, fullDesc, traits, lucky grid, gemstone
// ============================================================

import "./SunSignCard.css";

const ELEMENT_CLASS = {
  Fire:  "element-fire",
  Earth: "element-earth",
  Air:   "element-air",
  Water: "element-water",
};

const ELEMENT_EMOJI = {
  Fire:  "🔥",
  Earth: "🌍",
  Air:   "💨",
  Water: "💧",
};

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

export default function SunSignCard({ sunSign }) {
  if (!sunSign) return null;

  const elementClass = ELEMENT_CLASS[sunSign.element.en] || "";
  const gemEmoji     = PLANET_GEM[sunSign.rulingPlanet.en] || "💎";

  return (
    <div className="sun-sign-card">

      {/* ── HEADER: Symbol + Names + coreNature ── */}
      <div className="sun-sign-header">
        <div className="sun-sign-symbol">{sunSign.symbol}</div>
        <div className="sun-sign-names">
          <div className="sun-sign-name-en">{sunSign.nameEn}</div>
          <div className="sun-sign-name-hi">{sunSign.nameHi}</div>
          <div className="sun-sign-date-range">{sunSign.dateRange}</div>
          {sunSign.coreNature && (
            <>
              <div className="sun-sign-core-nature">{sunSign.coreNature.en}</div>
              <div className="sun-sign-core-nature hindi">{sunSign.coreNature.hi}</div>
            </>
          )}
        </div>
      </div>

      {/* ── INFO PILLS ── */}
      <div className="sun-sign-pills">
        <div className="sun-sign-pill">
          <div className="pill-label">Ruling Planet</div>
          <div className="pill-value-en">{sunSign.rulingPlanet.en}</div>
          <div className="pill-value-hi">{sunSign.rulingPlanet.hi}</div>
        </div>

        <div className="sun-sign-pill ruling-number-pill">
          <div className="pill-label">Ruling Number</div>
          <div className="ruling-number-big">{sunSign.rulingNumber}</div>
        </div>

        <div className={`sun-sign-pill ${elementClass}`}>
          <div className="pill-label">Element</div>
          <div className="pill-value-en">
            {ELEMENT_EMOJI[sunSign.element.en]} {sunSign.element.en}
          </div>
          <div className="pill-value-hi">{sunSign.element.hi}</div>
        </div>

        <div className="sun-sign-pill">
          <div className="pill-label">Quality</div>
          <div className="pill-value-en">{sunSign.quality.en}</div>
          <div className="pill-value-hi">{sunSign.quality.hi}</div>
        </div>
      </div>

      {/* ── SHORT DESCRIPTIONS ── */}
      {(sunSign.shortDescEn || sunSign.shortDescHi) && (
        <div className="sun-sign-short-wrap">
          {sunSign.shortDescEn && (
            <div className="sun-sign-short-box">"{sunSign.shortDescEn}"</div>
          )}
          {sunSign.shortDescHi && (
            <div className="sun-sign-short-box hi">"{sunSign.shortDescHi}"</div>
          )}
        </div>
      )}

      {/* ── FULL DESCRIPTIONS (fallback to old descEn/Hi) ── */}
      <div className="sun-sign-desc-wrap">
        <div className="sun-sign-desc-block">
          <div className="sun-sign-desc-lang">English</div>
          <p className="sun-sign-desc-text" style={{ whiteSpace: "pre-line" }}>
            {sunSign.fullDescEn || sunSign.descEn}
          </p>
        </div>
        <div className="sun-sign-desc-block">
          <div className="sun-sign-desc-lang">हिंदी</div>
          <p className="sun-sign-desc-text hindi" style={{ whiteSpace: "pre-line" }}>
            {sunSign.fullDescHi || sunSign.descHi}
          </p>
        </div>
      </div>

      {/* ── TRAITS ── */}
      {(sunSign.positiveTraits?.length > 0 || sunSign.cautionTraits?.length > 0) && (
        <div className="sun-sign-traits-row">
          {sunSign.positiveTraits?.length > 0 && (
            <div className="sun-sign-traits-box">
              <div className="sun-sign-traits-title">✦ Strengths</div>
              {sunSign.positiveTraits.map((t, i) => (
                <span key={i} className="sun-sign-trait-tag">{t}</span>
              ))}
            </div>
          )}
          {sunSign.cautionTraits?.length > 0 && (
            <div className="sun-sign-traits-box caution">
              <div className="sun-sign-traits-title">⚠ Watch Out</div>
              {sunSign.cautionTraits.map((t, i) => (
                <span key={i} className="sun-sign-trait-tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── LUCKY INFO GRID ── */}
      <div className="sun-sign-lucky-grid">
        {sunSign.luckyNumbers?.length > 0 && (
          <div className="sun-sign-lucky-box">
            <div className="sun-sign-lucky-label">🔢 Lucky Numbers</div>
            <div className="sun-sign-tag-row">
              {sunSign.luckyNumbers.map((n, i) => (
                <span key={i} className="sun-sign-tag number">{n}</span>
              ))}
            </div>
          </div>
        )}

        {sunSign.luckyDays?.length > 0 && (
          <div className="sun-sign-lucky-box">
            <div className="sun-sign-lucky-label">📅 Lucky Days</div>
            <div className="sun-sign-tag-row">
              {sunSign.luckyDays.map((d, i) => (
                <span key={i} className="sun-sign-tag">{d}</span>
              ))}
            </div>
          </div>
        )}

        {sunSign.luckyColors?.length > 0 && (
          <div className="sun-sign-lucky-box">
            <div className="sun-sign-lucky-label">🎨 Lucky Colors</div>
            <div className="sun-sign-tag-row">
              {sunSign.luckyColors.map((c, i) => (
                <span key={i} className="sun-sign-tag">{c}</span>
              ))}
            </div>
          </div>
        )}

        {sunSign.career?.length > 0 && (
          <div className="sun-sign-lucky-box">
            <div className="sun-sign-lucky-label">💼 Career Fields</div>
            <div className="sun-sign-tag-row">
              {sunSign.career.map((c, i) => (
                <span key={i} className="sun-sign-tag">{c}</span>
              ))}
            </div>
          </div>
        )}

        {sunSign.health?.length > 0 && (
          <div className="sun-sign-lucky-box full-width">
            <div className="sun-sign-lucky-label">🏥 Health Watch</div>
            <div className="sun-sign-tag-row">
              {sunSign.health.map((h, i) => (
                <span key={i} className="sun-sign-tag health">{h}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── GEMSTONE ── */}
      {sunSign.luckyStoneEn && (
        <div className="sun-sign-stone-wrap">
          <div className="sun-sign-stone-main">
            <div className="sun-sign-stone-gem">{gemEmoji}</div>
            <div className="sun-sign-stone-info">
              <div className="sun-sign-stone-label">Lucky Gemstone — भाग्य रत्न</div>
              <div className="sun-sign-stone-name-en">{sunSign.luckyStoneEn}</div>
              {sunSign.luckyStone && (
                <div className="sun-sign-stone-name-hi">{sunSign.luckyStone}</div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
