import {
  NAME_MEANINGS,
  SOUL_MEANINGS,
  PERSONALITY_MEANINGS,
  PYTH_TABLE,
} from "../../../utils/nameNumerology";
import "./NameForm.css";

const VOWELS = new Set(["A", "E", "I", "O", "U"]);
const NAME_ICON = String.fromCodePoint(0x2726);
const SOUL_ICON = String.fromCodePoint(0x1f319);
const PERSONALITY_ICON = String.fromCodePoint(0x1f52e);
const MERCURY_SYMBOL = String.fromCodePoint(0x263f);
const STAR_SYMBOL = String.fromCodePoint(0x2605);

function getMeaning(number) {
  if (!number) {
    return {
      title: "Not Available",
      planet: "-",
      desc: "This value could not be derived from the entered name.",
    };
  }

  return NAME_MEANINGS[number];
}

function getText(map, number, fallback) {
  if (!number) {
    return fallback;
  }

  return map[number];
}

export default function NameResult({ result }) {
  if (!result) return null;

  const { nameNumber, soulNumber, personalityNumber } = result;

  return (
    <div>
      <div className="name-numbers-row">
        <NameBadge
          type="name-badge"
          icon={NAME_ICON}
          label="Name Number"
          number={nameNumber}
          meaning={getMeaning(nameNumber)}
          desc={getMeaning(nameNumber).desc}
        />
        <NameBadge
          type="soul-badge"
          icon={SOUL_ICON}
          label="Soul Number"
          number={soulNumber}
          meaning={getMeaning(soulNumber)}
          desc={getText(
            SOUL_MEANINGS,
            soulNumber,
            "No vowel energy found in this name.",
          )}
        />
        <NameBadge
          type="pers-badge"
          icon={PERSONALITY_ICON}
          label="Personality Number"
          number={personalityNumber}
          meaning={getMeaning(personalityNumber)}
          desc={getText(
            PERSONALITY_MEANINGS,
            personalityNumber,
            "No consonant energy found in this name.",
          )}
        />
      </div>

      <details className="name-reference-details">
        <summary className="name-reference-summary">
          Pythagorean Letter Chart
        </summary>
        <PythagoreanTable />
      </details>
    </div>
  );
}

function NameBadge({ type, icon, label, number, meaning, desc }) {
  return (
    <div className={`name-num-badge name-badge ${type}`}>
      <span className="name-badge-icon">{icon}</span>
      <div className="name-badge-label">{label}</div>
      <div className="name-badge-number">{number ?? "-"}</div>
      <div className="name-badge-title">{meaning.title}</div>
      <div className="name-badge-planet">
        {MERCURY_SYMBOL} {meaning.planet}
      </div>
      <div className="name-badge-desc">{desc}</div>
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
