import { useState } from "react";
import { calcNameNumbers } from "../../../utils/nameNumerology";
import Card, { CardTitle } from "../../ui/Card";
import FormInput from "../../ui/FormInput";
import FormLabel from "../../ui/FormLabel";
import NameResult from "./NameResult";
import "./NameForm.css";

const STAR_SYMBOL = String.fromCodePoint(0x2726);
const LEGEND_STAR = String.fromCodePoint(0x2605);
const LEGEND_DIAMOND = String.fromCodePoint(0x25c6);

export default function NameForm() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);

  function handleInput(e) {
    const value = e.target.value;
    setName(value);

    const cleaned = value.replace(/[^a-zA-Z]/g, "");
    if (cleaned.length >= 2) {
      setResult(calcNameNumbers(value));
    } else {
      setResult(null);
    }
  }

  return (
    <Card>
      <CardTitle>{STAR_SYMBOL} Name Numerology</CardTitle>

      <FormLabel htmlFor="name-input">
        Full Name <span className="name-form-hint">(commonly used name)</span>
      </FormLabel>

      <FormInput
        id="name-input"
        type="text"
        value={name}
        onChange={handleInput}
        placeholder="e.g. Pankaj Seth"
        autoComplete="off"
        maxLength={60}
      />

      {result && <LetterBreakdown breakdown={result.breakdown} />}
      {result && <NameResult result={result} />}

      {!result && name.length > 0 && (
        <p className="name-breakdown-empty">
          Enter at least 2 alphabet letters to calculate numbers.
        </p>
      )}
    </Card>
  );
}

function LetterBreakdown({ breakdown }) {
  return (
    <div>
      <div className="name-breakdown">
        {breakdown.map((item, index) => (
          <div
            key={`${item.letter}-${index}`}
            className={`name-letter-chip${item.isVowel ? " vowel" : ""}`}
            title={
              item.isVowel
                ? "Vowel - Soul Number"
                : "Consonant - Personality Number"
            }
          >
            <span className="chip-letter">{item.letter}</span>
            <span className="chip-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="name-breakdown-legend">
        <span className="legend-vowel">{LEGEND_STAR} Gold = Vowel (Soul)</span>
        <span>{LEGEND_DIAMOND} Dim = Consonant (Personality)</span>
      </div>
    </div>
  );
}
