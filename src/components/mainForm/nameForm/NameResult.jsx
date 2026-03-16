// ============================================================
// NameResult.jsx
// Top: 5 summary badges (numbers at a glance)
// Below: 5 full prediction cards (SunSignCard-style)
// ============================================================

import { NAME_MEANINGS, PYTH_TABLE } from "../../../utils/nameNumerology";

import { getNameNumberPredication as getModernEn } from "../../../utils/nameNumber/nameNumberModern_Prediction";
import { getNameNumberPredication as getModernHi } from "../../../utils/nameNumber/nameNumberModern_Prediction_Hi";
import {
  getCheiroPredication,
  getCompoundPredication,
} from "../../../utils/nameNumber/nameNumberCheiro_Prediction";
import {
  getCheiroPredication as getCheiroHi,
  getCompoundPredication as getCompoundHi,
} from "../../../utils/nameNumber/nameNumberCheiro_Prediction_Hi";
import { getSoulPredication as getSoulEn } from "../../../utils/nameNumber/soulNumber_Prediction";
import { getSoulPredication as getSoulHi } from "../../../utils/nameNumber/soulNumber_Prediction_Hi";
import { getPersonalityPredication as getPersEn } from "../../../utils/nameNumber/personalityNumber_Prediction";
import { getPersonalityPredication as getPersHi } from "../../../utils/nameNumber/personalityNumber_Predication_HI";

import NameNumberCard from "../../nameNumber/NameNumberCard";
import SummaryBadge from "../../ui/SummaryBadge";
import "./NameForm.css";

const VOWELS = new Set(["A", "E", "I", "O", "U"]);
const STAR_SYMBOL = String.fromCodePoint(0x2605);

// ── Small summary badge at top ───────────────────────────────

// ── MAIN COMPONENT ───────────────────────────────────────────
export default function NameResult({ result }) {
  if (!result) return null;

  const {
    nameNumber,
    soulNumber,
    personalityNumber,
    cheiroNumber,
    compoundNumber,
  } = result;

  // Fetch all predictions
  const modernEn = nameNumber ? getModernEn(nameNumber) : null;
  const modernHi = nameNumber ? getModernHi(nameNumber) : null;
  const cheiroEn = cheiroNumber ? getCheiroPredication(cheiroNumber) : null;
  const cheiroHi = cheiroNumber ? getCheiroHi(cheiroNumber) : null;
  const compoundEn =
    compoundNumber > 9 ? getCompoundPredication(compoundNumber) : null;
  const compoundHi = compoundNumber > 9 ? getCompoundHi(compoundNumber) : null;
  const soulEn = soulNumber ? getSoulEn(soulNumber) : null;
  const soulHi = soulNumber ? getSoulHi(soulNumber) : null;
  const persEn = personalityNumber ? getPersEn(personalityNumber) : null;
  const persHi = personalityNumber ? getPersHi(personalityNumber) : null;

  return (
    <div className="name-result-wrap">
      <div className="nn-summary-row">
        <SummaryBadge
          theme="gold"
          typeLabel="Name No."
          number={nameNumber}
          title={modernEn?.title || NAME_MEANINGS[nameNumber]?.title}
        />
        <SummaryBadge
          theme="teal"
          typeLabel="Cheiro No."
          number={cheiroNumber}
          title={cheiroEn?.title}
        />
        {compoundNumber > 9 && (
          <SummaryBadge
            theme="teal"
            typeLabel="Compound"
            number={compoundNumber}
            title={compoundEn?.title}
          />
        )}
        <SummaryBadge
          theme="purple"
          typeLabel="Soul No."
          number={soulNumber}
          title={soulEn?.title || NAME_MEANINGS[soulNumber]?.title}
        />
        <SummaryBadge
          theme="pink"
          typeLabel="Personality"
          number={personalityNumber}
          title={persEn?.title || NAME_MEANINGS[personalityNumber]?.title}
        />
      </div>
      {/* ── Letter chart ── */}
      <details className="name-reference-details">
        <summary className="name-reference-summary">
          Pythagorean Letter Chart
        </summary>
        <PythagoreanTable />
      </details>
    </div>
  );
}

function PythagoreanTable() {
  return (
    <div className="pyth-table-wrap">
      <table className="pyth-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Letters</th>
          </tr>
        </thead>
        <tbody>
          {PYTH_TABLE.map((row) => (
            <tr key={row.num}>
              <td className="pyth-number">{row.num}</td>
              <td>
                {row.letters.map((letter) => (
                  <span
                    key={`${row.num}-${letter}`}
                    className={`pyth-letter${VOWELS.has(letter) ? " is-vowel" : ""}`}
                  >
                    {letter}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pyth-table-note">
        {STAR_SYMBOL} Gold letters are vowels used for Soul Number.
      </p>
    </div>
  );
}
