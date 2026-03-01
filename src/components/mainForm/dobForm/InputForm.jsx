import { useState } from "react";
import { calcDOB, reduce, calcLuck } from "../../../utils/numerology";
import Button from "../../ui/Button";
import Card, { CardTitle } from "../../ui/Card";
import FormInput from "../../ui/FormInput";
import FormLabel from "../../ui/FormLabel";
import "./InputForm.css";

const STAR_SYMBOL = String.fromCodePoint(0x2726);
const CALENDAR_SYMBOL = String.fromCodePoint(0x1f4c5);

export default function InputForm({ onResult }) {
  const [dob, setDob] = useState("");
  const [chosen, setChosen] = useState("");
  const [valid, setValid] = useState(false);

  const [data, setData] = useState({
    root: null,
    fortune: null,
    chosen: null,
    sunSign: null,
  });

  function handleDOB(e) {
    const value = e.target.value.replace(/\D/g, "").slice(0, 8);

    let formatted = value;
    if (value.length > 2) {
      formatted = value.slice(0, 2) + " / " + value.slice(2);
    }
    if (value.length > 4) {
      formatted =
        value.slice(0, 2) + " / " + value.slice(2, 4) + " / " + value.slice(4);
    }

    setDob(formatted);

    if (value.length === 8) {
      const dd = value.slice(0, 2);
      const mm = value.slice(2, 4);
      const yyyy = value.slice(4);

      const res = calcDOB(dd, mm, yyyy);
      console.log("DOB Calculation Result:", res);

      setData((prev) => ({
        ...prev,
        root: res.root,
        fortune: res.fortune,
        sunSign: res.sunSign,
      }));

      setValid(true);
    } else {
      setValid(false);
      setData((prev) => ({
        ...prev,
        root: null,
        fortune: null,
        sunSign: null,
      }));
    }
  }

  function handleChosen(e) {
    const val = e.target.value;
    setChosen(val);

    setData((prev) => ({
      ...prev,
      chosen: val ? reduce(val) : null,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!data.root || !data.fortune || !data.chosen) return;

    const result = calcLuck(data);
    onResult(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardTitle>{STAR_SYMBOL} Your Birth Data</CardTitle>

        <FormLabel htmlFor="dob-input">Date of Birth</FormLabel>

        <div className="input-form-date-wrap">
          <FormInput
            id="dob-input"
            type="text"
            value={dob}
            onChange={handleDOB}
            placeholder="DD / MM / YYYY"
            inputMode="numeric"
            autoComplete="bday"
          />
          <span className="input-form-date-icon">{CALENDAR_SYMBOL}</span>
        </div>

        {valid && (
          <>
            <FormLabel htmlFor="chosen-number-input">
              Your Chosen Number
            </FormLabel>
            <FormInput
              id="chosen-number-input"
              type="number"
              value={chosen}
              onChange={handleChosen}
              placeholder="e.g. 47"
            />
          </>
        )}
      </Card>

      <Button type="submit" disabled={!data.chosen}>
        {STAR_SYMBOL} Check My Luck {STAR_SYMBOL}
      </Button>
    </form>
  );
}
