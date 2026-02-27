import { useState } from "react";
import { calcNameNumbers } from "../../utils/nameNumerology";
import { calcDOB, calcLuck, reduce } from "../../utils/numerology";
import Button from "../ui/Button";
import Card, { CardTitle } from "../ui/Card";
import FormInput from "../ui/FormInput";
import FormLabel from "../ui/FormLabel";
import "./dobForm/InputForm.css";

const STAR_SYMBOL = String.fromCodePoint(0x2726);
const CALENDAR_SYMBOL = String.fromCodePoint(0x1f4c5);
const MAX_NAME_LENGTH = 30;
const MAX_AGE_YEARS = 140;

function validateDob(dd, mm, yyyy) {
  const day = Number.parseInt(dd, 10);
  const month = Number.parseInt(mm, 10);
  const year = Number.parseInt(yyyy, 10);

  if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) {
    return "Please enter a valid date of birth.";
  }

  if (month < 1 || month > 12) {
    return "Please enter a valid date of birth.";
  }

  const maxDay = new Date(year, month, 0).getDate();
  if (day < 1 || day > maxDay) {
    return "Please enter a valid date of birth.";
  }

  const enteredDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (enteredDate > today) {
    return "Date of birth cannot be in the future.";
  }

  const minBirthDate = new Date(today);
  minBirthDate.setFullYear(today.getFullYear() - MAX_AGE_YEARS);

  if (enteredDate < minBirthDate) {
    return "Age cannot be greater than 140 years.";
  }

  return "";
}

export default function MainForm({ onResult }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [randomNumber, setRandomNumber] = useState("");

  const [nameNumerology, setNameNumerology] = useState(null);
  const [root, setRoot] = useState(null);
  const [fortune, setFortune] = useState(null);
  const [chosen, setChosen] = useState(null);
  const [nameError, setNameError] = useState("");
  const [dobError, setDobError] = useState("");

  const isNameValid = Boolean(nameNumerology);
  const isDobValid = Boolean(root && fortune);
  const canSubmit = Boolean(isNameValid && isDobValid && chosen);

  function handleNameChange(e) {
    const rawValue = e.target.value;
    const value = rawValue.slice(0, MAX_NAME_LENGTH);
    setName(value);

    if (rawValue.length > MAX_NAME_LENGTH) {
      setNameError(`Name cannot exceed ${MAX_NAME_LENGTH} characters.`);
    } else {
      setNameError("");
    }

    const cleaned = value.replace(/[^a-zA-Z]/g, "");
    if (cleaned.length >= 2) {
      setNameNumerology(calcNameNumbers(value));
      return;
    }

    setNameNumerology(null);
    setDob("");
    setRandomNumber("");
    setRoot(null);
    setFortune(null);
    setChosen(null);
    setNameError("");
    setDobError("");
  }

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
        setRoot(null);
        setFortune(null);
        setRandomNumber("");
        setChosen(null);
        setDobError(dobValidationError);
        return;
      }

      const dobResult = calcDOB(dd, mm, yyyy);
      setRoot(dobResult.root);
      setFortune(dobResult.fortune);
      setDobError("");
      return;
    }

    setDobError("");
    setRoot(null);
    setFortune(null);
    setRandomNumber("");
    setChosen(null);
  }

  function handleRandomChange(e) {
    const value = e.target.value;
    setRandomNumber(value);
    setChosen(value ? reduce(value) : null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    const luck = calcLuck({ root, fortune, chosen });

    onResult({
      ...luck,
      fullName: name.trim(),
      clientRandom: chosen,
      nameNumerology,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardTitle>{STAR_SYMBOL} Main Form</CardTitle>

        <FormLabel htmlFor="main-name-input">Name</FormLabel>
        <FormInput
          id="main-name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="e.g. Pankaj Seth"
          autoComplete="name"
          maxLength={MAX_NAME_LENGTH}
        />
        {nameError && <p className="input-form-date-error">{nameError}</p>}

        {isNameValid && (
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
        )}

        {isDobValid && (
          <>
            <FormLabel htmlFor="main-random-input">Random Number</FormLabel>
            <FormInput
              id="main-random-input"
              type="number"
              value={randomNumber}
              onChange={handleRandomChange}
              placeholder="e.g. 47"
            />
          </>
        )}
      </Card>

      <Button type="submit" disabled={!canSubmit}>
        {STAR_SYMBOL} Check My Luck {STAR_SYMBOL}
      </Button>
    </form>
  );
}
