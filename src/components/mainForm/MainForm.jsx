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
  const [randomChosen, setRandomChosen] = useState(null);

  const canSubmit = Boolean(nameData && dobData && randomChosen);

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    const { root, fortune } = dobData;
    const { chosen, random, raw } = randomChosen;

    const luck = calcLuck({
      root,
      fortune,
      chosen,
      random,
    });

    onResult({
      ...luck,
      fullName: nameData.name,
      clientRandom: raw,
      nameNumerology: nameData.numerology,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardTitle>{STAR_SYMBOL} Main Form</CardTitle>

        <NameInput onValidName={setNameData} />

        {nameData && (
          <>
            <DobInput onValidDob={setDobData} />
          </>
        )}

        {dobData && (
          <>
            <UserChosenInput onValidChosen={setRandomChosen} />
          </>
        )}
      </Card>

      <Button type="submit" disabled={!canSubmit}>
        {STAR_SYMBOL} Check My Luck {STAR_SYMBOL}
      </Button>
    </form>
  );
}
