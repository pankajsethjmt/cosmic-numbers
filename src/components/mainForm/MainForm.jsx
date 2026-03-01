import { useState } from "react";

import { calcLuck } from "../../utils/relationshipCalculation";

import DobInput from "./dobForm/DobInput";
import UserChosenInput from "./UserChosenInput";
import NameInput from "./nameForm/NameInput";

import Button from "../ui/Button";
import Card, { CardTitle } from "../ui/Card";

import "./dobForm/InputForm.css";

const STAR_SYMBOL = String.fromCodePoint(0x2726);

export default function MainForm({ onResult }) {
  const [nameData, setNameData] = useState(null);
  const [dobData, setDobData] = useState(null);

  const [chosenData, setChosenData] = useState(null);

  const canSubmit =
    nameData !== null && dobData !== null && chosenData !== null;

  function buildLuckResult() {
    const { root, fortune, sunSign } = dobData;
    const { chosen, raw } = chosenData;
    console.log("Building luck result with:", {
      nameData,
      dobData,
      chosenData,
    });

    const luck = calcLuck({
      root,
      fortune,
      chosen,
    });

    return {
      ...luck,
      fullName: nameData.name,
      clientRandom: raw,
      nameNumerology: nameData.numerology,
      sunSign: sunSign,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!nameData || !dobData || !chosenData) return;

    const buildResult = buildLuckResult();

    onResult(buildResult);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardTitle>{STAR_SYMBOL} Main Form</CardTitle>

        <NameInput onValidName={setNameData} />

        {nameData && <DobInput onValidDob={setDobData} />}

        {dobData && <UserChosenInput onValidChosen={setChosenData} />}
      </Card>

      <Button type="submit" disabled={!canSubmit}>
        {STAR_SYMBOL} Check My Luck {STAR_SYMBOL}
      </Button>
    </form>
  );
}
