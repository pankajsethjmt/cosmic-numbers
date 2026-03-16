// ============================================================
// NameNumberCard.jsx — Single reusable card for any name number
// Used for: NameNumber, CheiroNumber, CompoundNumber,
//           SoulNumber, PersonalityNumber
// theme: "gold" | "teal" | "purple" | "pink"
// ============================================================

import "./NameNumberCard.css";

const PLANET_EMOJI = {
  Sun:     "🌟",
  Moon:    "🌙",
  Jupiter: "💛",
  Rahu:    "🟤",
  Mercury: "💚",
  Venus:   "💎",
  Ketu:    "🟡",
  Saturn:  "🪐",
  Mars:    "🔴",
};

export default function NameNumberCard({ number, typeLabel, predEn, predHi, theme = "gold" }) {
  if (!predEn && !predHi) return null;

  const planetEmoji = PLANET_EMOJI[predEn?.planet] || "✦";

  return (
    <div className={`nn-card theme-${theme}`}>

      {/* ── HEADER ── */}
      <div className="nn-header">
        <div className="nn-number-symbol">{number ?? "—"}</div>
        <div className="nn-names">
          <div className="nn-type-label">{typeLabel}</div>
          <div className="nn-title">{predEn?.title || "—"}</div>
          {predEn?.planet && (
            <div className="nn-planet">{planetEmoji} {predEn.planet}</div>
          )}
        </div>
      </div>

      {/* ── SHORT DESC ── */}
      {(predEn?.shortDesc || predHi?.shortDesc) && (
        <div className="nn-short-wrap">
          {predEn?.shortDesc && <div className="nn-short-box">"{predEn.shortDesc}"</div>}
          {predHi?.shortDesc && <div className="nn-short-box hi">"{predHi.shortDesc}"</div>}
        </div>
      )}

      {/* ── FULL DESC ── */}
      {(predEn?.fullDesc || predHi?.fullDesc) && (
        <div className="nn-desc-wrap">
          {predEn?.fullDesc && (
            <div className="nn-desc-block">
              <div className="nn-desc-lang">English</div>
              <p className="nn-desc-text">{predEn.fullDesc}</p>
            </div>
          )}
          {predHi?.fullDesc && (
            <div className="nn-desc-block">
              <div className="nn-desc-lang">हिंदी</div>
              <p className="nn-desc-text hindi">{predHi.fullDesc}</p>
            </div>
          )}
        </div>
      )}

      {/* ── TRAITS ── */}
      {(predEn?.strengths || predEn?.challenges) && (
        <div className="nn-traits-row">
          {predEn.strengths && (
            <div className="nn-traits-box">
              <div className="nn-traits-title">✦ Strengths</div>
              <p className="nn-traits-text">{predEn.strengths}</p>
            </div>
          )}
          {predEn.challenges && (
            <div className="nn-traits-box caution">
              <div className="nn-traits-title">⚠ Watch Out</div>
              <p className="nn-traits-text">{predEn.challenges}</p>
            </div>
          )}
        </div>
      )}

      {/* ── CAREER + RELATIONSHIPS ── */}
      {(predEn?.career || predEn?.relationships) && (
        <div className="nn-info-row">
          {predEn.career && (
            <div className="nn-info-box">
              <div className="nn-info-label">💼 Career</div>
              <p className="nn-info-text">{predEn.career}</p>
            </div>
          )}
          {predEn.relationships && (
            <div className="nn-info-box">
              <div className="nn-info-label">💞 Relationships</div>
              <p className="nn-info-text">{predEn.relationships}</p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
