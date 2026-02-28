import { useState } from "react";
import { reduce } from "../../utils/calFunction";

import FormInput from "../ui/FormInput";
import FormLabel from "../ui/FormLabel";

export default function UserChosenInput({ onValidChosen }) {
  const [chosen, setChosen] = useState("");

  function handleRandomChange(e) {
    const value = e.target.value;
    setChosen(value);
    if (!value) {
      onValidChosen(null);
      return;
    }

    const reducedChosen = reduce(Number(value));

    onValidChosen({
      raw: value,
      chosen: reducedChosen,
      reduced: reducedChosen,
    });
  }

  return (
    <>
      <FormLabel htmlFor="main-random-input">Random Number</FormLabel>
      <FormInput
        id="main-random-input"
        type="number"
        value={chosen}
        onChange={handleRandomChange}
        placeholder="e.g. 47"
        min={1}
        max={999}
      />
    </>
  );
}
