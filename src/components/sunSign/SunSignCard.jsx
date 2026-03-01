// ============================================================
// SunSignCard.jsx — Vedic Sun Sign display card
// Used in Result section after luck calculation
// ============================================================

import "./SunSignCard.css";

// Element → CSS class map
const ELEMENT_CLASS = {
  Fire: "element-fire",
  Earth: "element-earth",
  Air: "element-air",
  Water: "element-water",
};

// Element → emoji
const ELEMENT_EMOJI = {
  Fire: "🔥",
  Earth: "🌍",
  Air: "💨",
  Water: "💧",
};

export default function SunSignCard({ sunSign }) {
  console.log("Rendering SunSignCard with sunSign:", sunSign);
  if (!sunSign) return null;

  const elementClass = ELEMENT_CLASS[sunSign.element.en] || "";

  return (
    <div className="sun-sign-card">
      {/* ── HEADER: Symbol + Names ── */}
      <div className="sun-sign-header">
        <div className="sun-sign-symbol">{sunSign.symbol}</div>
        <div className="sun-sign-names">
          <div className="sun-sign-name-en">{sunSign.nameEn}</div>
          <div className="sun-sign-name-hi">{sunSign.nameHi}</div>
          <div className="sun-sign-date-range">{sunSign.dateRange}</div>
        </div>
      </div>

      {/* ── INFO PILLS ── */}
      <div className="sun-sign-pills">
        {/* Ruling Planet */}
        <div className="sun-sign-pill">
          <div className="pill-label">Ruling Planet</div>
          <div className="pill-value-en">{sunSign.rulingPlanet.en}</div>
          <div className="pill-value-hi">{sunSign.rulingPlanet.hi}</div>
        </div>

        {/* Ruling Number — highlighted */}
        <div className="sun-sign-pill ruling-number-pill">
          <div className="pill-label">Ruling Number</div>
          <div className="ruling-number-big">{sunSign.rulingNumber}</div>
        </div>

        {/* Element */}
        <div className={`sun-sign-pill ${elementClass}`}>
          <div className="pill-label">Element</div>
          <div className="pill-value-en">
            {ELEMENT_EMOJI[sunSign.element.en]} {sunSign.element.en}
          </div>
          <div className="pill-value-hi">{sunSign.element.hi}</div>
        </div>

        {/* Quality */}
        <div className="sun-sign-pill">
          <div className="pill-label">Quality</div>
          <div className="pill-value-en">{sunSign.quality.en}</div>
          <div className="pill-value-hi">{sunSign.quality.hi}</div>
        </div>
      </div>

      {/* ── DESCRIPTIONS ── */}
      <div className="sun-sign-desc-wrap">
        {/* English */}
        <div className="sun-sign-desc-block">
          <div className="sun-sign-desc-lang">English</div>
          <p className="sun-sign-desc-text">{sunSign.descEn}</p>
        </div>

        {/* Hindi */}
        <div className="sun-sign-desc-block">
          <div className="sun-sign-desc-lang">हिंदी</div>
          <p className="sun-sign-desc-text hindi">{sunSign.descHi}</p>
        </div>
      </div>
    </div>
  );
}
