import Card, { CardTitle } from "../ui/Card";
import NameResult from "../mainForm/nameForm/NameResult";
import CompatibilityReference from "./CompatibilityReference";
import LuckMeter from "./LuckMeter";
import MatchBreakdown from "./MatchBreakdown";
import ResultBadge from "./ResultBadge";
import ScoreRow from "./ScoreRow";
import Verdict from "./Verdict";
import { VERDICT } from "../../data/verdict";
import "./Result.css";

const STAR_SYMBOL = String.fromCodePoint(0x2726);
const RESET_SYMBOL = String.fromCodePoint(0x21ba);
const DICE_SYMBOL = String.fromCodePoint(0x1f3b2);
const CALENDAR_SYMBOL = String.fromCodePoint(0x1f4c5);
const WARNING_SYMBOL = String.fromCodePoint(0x26a0);
const BALANCE_SYMBOL = String.fromCodePoint(0x262f);
const SPARKLES_SYMBOL = String.fromCodePoint(0x2728);
const GLOWING_STAR_SYMBOL = String.fromCodePoint(0x1f31f);

function getVerdictMeta(scale) {
  if (scale <= 3) {
    return { emoji: WARNING_SYMBOL, category: "Challenging Day" };
  }
  if (scale <= 6) {
    return { emoji: BALANCE_SYMBOL, category: "Balanced Day" };
  }
  if (scale <= 8) {
    return { emoji: SPARKLES_SYMBOL, category: "Favorable Day" };
  }
  return { emoji: GLOWING_STAR_SYMBOL, category: "Exceptional Day" };
}

export default function Result({ result, onReset }) {
  if (!result) return null;

  const verdict = VERDICT[result.scale];
  const verdictMeta = getVerdictMeta(result.scale);

  return (
    <section
      id="oracle-section"
      className="result-section result-section-visible visible"
    >
      <Card>
        <CardTitle>{STAR_SYMBOL} Oracle Speaks</CardTitle>
        {result.nameNumerology && (
          <>
            <div className="result-breakdown-heading">{STAR_SYMBOL} Name Result</div>
            {result.fullName && (
              <div className="result-name-line">{result.fullName}</div>
            )}
            <NameResult result={result.nameNumerology} />
          </>
        )}

        <div className="result-numbers-row">
          <ResultBadge
            label={`${DICE_SYMBOL} Random Number`}
            value={result.clientRandom ?? result.random}
            meaning="Provided by you"
          />
          <ResultBadge
            label={`${CALENDAR_SYMBOL} Today Number`}
            value={result.today}
            meaning="Today's date digit reduced"
          />
        </div>

        <ScoreRow part1Score={result.part1Score} part2Score={result.part2Score} />

        <LuckMeter scale={result.scale} color={verdict.color} />
        <Verdict verdict={verdict} meta={verdictMeta} />

        <MatchBreakdown matches={result.matches} />

        <button type="button" className="result-reset-btn" onClick={onReset}>
          {RESET_SYMBOL} Consult Again
        </button>
      </Card>

      <Card>
        <CompatibilityReference rows={result.compatibility} />
      </Card>
    </section>
  );
}
