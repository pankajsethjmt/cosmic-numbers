import Card, { CardTitle } from "../ui/Card";
import NameResult from "../mainForm/nameForm/NameResult";
import CompatibilityReference from "./CompatibilityReference";
import LuckMeter from "../luckMeter/LuckMeter";
import MatchBreakdown from "./MatchBreakdown";
import ResultBadge from "./ResultBadge";
import ScoreRow from "./ScoreRow";
import Verdict from "./Verdict";
import SunSignCard from "../sunSign/SunSignCard";
import RootNumberCard from "../rootNumber/RootNumberCard";
import FortuneNumberCard from "../fortuneNumber/FortuneNumberCard";
import DobNumberCard from "../dobNumber/DobNumberCard";
import NameNumberCard from "../nameNumber/NameNumberCard";
import { VERDICT } from "../../data/verdict";

import { getNameNumberPredication as getModernEn } from "../../utils/nameNumber/nameNumberModern_Prediction";
import { getNameNumberPredication as getModernHi } from "../../utils/nameNumber/nameNumberModern_Prediction_Hi";
import {
  getCheiroPredication,
  getCompoundPredication,
} from "../../utils/nameNumber/nameNumberCheiro_Prediction";
import {
  getCheiroPredication as getCheiroHi,
  getCompoundPredication as getCompoundHi,
} from "../../utils/nameNumber/nameNumberCheiro_Prediction_Hi";
import { getSoulPredication as getSoulEn } from "../../utils/nameNumber/soulNumber_Prediction";
import { getSoulPredication as getSoulHi } from "../../utils/nameNumber/soulNumber_Prediction_Hi";
import { getPersonalityPredication as getPersEn } from "../../utils/nameNumber/personalityNumber_Prediction";
import { getPersonalityPredication as getPersHi } from "../../utils/nameNumber/personalityNumber_Predication_HI";

import "./Result.css";

const STAR_SYMBOL = String.fromCodePoint(0x2726);
const RESET_SYMBOL = String.fromCodePoint(0x21ba);
const DICE_SYMBOL = String.fromCodePoint(0x1f3b2);
const CALENDAR_SYMBOL = String.fromCodePoint(0x1f4c5);
const WARNING_SYMBOL = String.fromCodePoint(0x26a0);
const BALANCE_SYMBOL = String.fromCodePoint(0x262f);
const SPARKLES_SYMBOL = String.fromCodePoint(0x2728);
const GLOWING_STAR_SYMBOL = String.fromCodePoint(0x1f31f);
const SUN_SYMBOL = String.fromCodePoint(0x2609);
const ROOT_SYMBOL = String.fromCodePoint(0x2736);
const FORTUNE_SYMBOL = String.fromCodePoint(0x1f52e);
const DOB_SYMBOL = String.fromCodePoint(0x1f4c6);
const NAME_SYMBOL = String.fromCodePoint(0x1f524);
const SOUL_SYMBOL = String.fromCodePoint(0x1f319);
const PERS_SYMBOL = String.fromCodePoint(0x1f52e);
const CHEIRO_SYMBOL = String.fromCodePoint(0x2736);

function getVerdictMeta(scale) {
  if (scale <= 3) return { emoji: WARNING_SYMBOL, category: "Challenging Day" };
  if (scale <= 6) return { emoji: BALANCE_SYMBOL, category: "Balanced Day" };
  if (scale <= 8) return { emoji: SPARKLES_SYMBOL, category: "Favorable Day" };
  return { emoji: GLOWING_STAR_SYMBOL, category: "Exceptional Day" };
}

export default function Result({ result, onReset }) {
  if (!result) return null;

  const verdict = VERDICT[result.scale];
  const verdictMeta = getVerdictMeta(result.scale);

  // Name number predictions — fetched here so Result controls each card
  const nn = result.nameNumerology;
  console.log("Name Numerology Data:", nn);
  const nameNumber = nn?.nameNumber;
  const cheiroNumber = nn?.cheiroNumber;
  const compoundNumber = nn?.compoundNumber;
  const soulNumber = nn?.soulNumber;
  const personalityNumber = nn?.personalityNumber;

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
    <section
      id="oracle-section"
      className="result-section result-section-visible visible"
    >
      {/* ── MAIN ORACLE CARD ── */}
      <Card>
        <CardTitle>{STAR_SYMBOL} Oracle Speaks</CardTitle>

        {nn && (
          <>
            <div className="result-breakdown-heading">
              {STAR_SYMBOL} Name Analysis
            </div>
            {result.fullName && (
              <div className="result-name-line">{result.fullName}</div>
            )}
            <NameResult result={nn} />
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

        <ScoreRow
          part1Score={result.part1Score}
          part2Score={result.part2Score}
        />
        <LuckMeter scale={result.scale} color={verdict.color} />
        <Verdict verdict={verdict} meta={verdictMeta} />
        <MatchBreakdown matches={result.matches} />

        <button type="button" className="result-reset-btn" onClick={onReset}>
          {RESET_SYMBOL} Consult Again
        </button>
      </Card>

      {/* ── COMPATIBILITY ── */}
      <Card>
        <CompatibilityReference rows={result.compatibility} />
      </Card>

      {/* ══ NAME NUMBER CARDS ══════════════════════════════════ */}
      {modernEn && (
        <Card>
          <CardTitle>{NAME_SYMBOL} Name Number — Pythagorean</CardTitle>
          <NameNumberCard
            number={nameNumber}
            typeLabel="Name Number"
            predEn={modernEn}
            predHi={modernHi}
            theme="gold"
          />
        </Card>
      )}

      {cheiroEn && (
        <Card>
          <CardTitle>{CHEIRO_SYMBOL} Cheiro Number — Chaldean</CardTitle>
          <NameNumberCard
            number={cheiroNumber}
            typeLabel="Cheiro Number"
            predEn={cheiroEn}
            predHi={cheiroHi}
            theme="teal"
          />
        </Card>
      )}

      {compoundNumber > 9 && compoundEn && (
        <Card>
          <CardTitle>
            {CHEIRO_SYMBOL} Compound Number — {compoundNumber}
          </CardTitle>
          <NameNumberCard
            number={compoundNumber}
            typeLabel="Compound Number"
            predEn={compoundEn}
            predHi={compoundHi}
            theme="teal"
          />
        </Card>
      )}

      {soulEn && (
        <Card>
          <CardTitle>{SOUL_SYMBOL} Soul Number — Inner Desire</CardTitle>
          <NameNumberCard
            number={soulNumber}
            typeLabel="Soul Number"
            predEn={soulEn}
            predHi={soulHi}
            theme="purple"
          />
        </Card>
      )}

      {persEn && (
        <Card>
          <CardTitle>
            {PERS_SYMBOL} Personality Number — Outer Presence
          </CardTitle>
          <NameNumberCard
            number={personalityNumber}
            typeLabel="Personality Number"
            predEn={persEn}
            predHi={persHi}
            theme="pink"
          />
        </Card>
      )}

      {/* ══ BIRTH DETAIL CARDS ═════════════════════════════════ */}
      <Card>
        <CardTitle>{SUN_SYMBOL} Vedic Sun Sign — Janma Rashi</CardTitle>
        <SunSignCard sunSign={result.sunSign} />
      </Card>

      {result.rootData && (
        <Card>
          <CardTitle>{ROOT_SYMBOL} Moolank — Root Number Prediction</CardTitle>
          <RootNumberCard rootData={result.rootData} />
        </Card>
      )}

      {result.fortuneData && (
        <Card>
          <CardTitle>
            {FORTUNE_SYMBOL} Bhagyank — Fortune Number Prediction
          </CardTitle>
          <FortuneNumberCard fortuneData={result.fortuneData} />
        </Card>
      )}

      {result.dobNumberData && (
        <Card>
          <CardTitle>
            {DOB_SYMBOL} Janma Tithi — Birth Date Prediction
          </CardTitle>
          <DobNumberCard dobData={result.dobNumberData} />
        </Card>
      )}
    </section>
  );
}
