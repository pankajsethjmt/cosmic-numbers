import { useState } from "react";
import FormInput from "../../ui/FormInput";
import FormLabel from "../../ui/FormLabel";

import { validateDob } from "../../../utils/calFunction";
import { calcDOB } from "../../../utils/dateNumerology";

const CALENDAR_SYMBOL = String.fromCodePoint(0x1f4c5);

export default function DobInput({ onValidDob }) {
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");

  function handleDobChange(e) {
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

      const dobValidationError = validateDob(dd, mm, yyyy);
      if (dobValidationError) {
        setDob("");
        setDobError(dobValidationError);
        return;
      }

      const dobResult = calcDOB(dd, mm, yyyy);

      setDobError("");

      onValidDob({
        day: dd,
        month: mm,
        year: yyyy,
        root: dobResult.root,
        fortune: dobResult.fortune,
      });

      return;
    }

    setDobError("");
    onValidDob(null);
  }

  return (
    <>
      <FormLabel htmlFor="main-dob-input">Date of Birth</FormLabel>

      <div className="input-form-date-wrap">
        <FormInput
          id="main-dob-input"
          type="text"
          value={dob}
          onChange={handleDobChange}
          placeholder="DD / MM / YYYY"
          inputMode="numeric"
          autoComplete="bday"
        />
        <span className="input-form-date-icon">{CALENDAR_SYMBOL}</span>
      </div>

      {dobError && <p className="input-form-date-error">{dobError}</p>}
    </>
  );
}
