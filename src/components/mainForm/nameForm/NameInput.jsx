import { useState, useEffect } from "react";
import { calcNameNumbers } from "../../../utils/nameNumerology";

import FormInput from "../../ui/FormInput";
import FormLabel from "../../ui/FormLabel";

const MAX_NAME_LENGTH = 30;

export default function NameInput({ onValidName }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    const cleaned = name.replace(/[^a-zA-Z]/g, "");

    if (name.length > MAX_NAME_LENGTH) {
      setNameError(`Name cannot exceed ${MAX_NAME_LENGTH} characters.`);
      return;
    }

    if (cleaned.length >= 2) {
      const numerology = calcNameNumbers(name);

      onValidName({
        name: name.trim(),
        numerology,
      });

      setNameError("");
    } else {
      onValidName(null);
      setNameError("");
    }
  }, [name, onValidName]);

  return (
    <>
      <FormLabel htmlFor="main-name-input">Name</FormLabel>
      <FormInput
        id="main-name-input"
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value.slice(0, MAX_NAME_LENGTH))}
        placeholder="e.g. Pankaj Seth"
        autoComplete="name"
      />
      {nameError && <p className="input-form-date-error">{nameError}</p>}
    </>
  );
}
