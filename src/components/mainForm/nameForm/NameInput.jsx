import { useState } from "react";
import { calcNameNumbers } from "../../../utils/nameNumerology";

import FormInput from "../../ui/FormInput";
import FormLabel from "../../ui/FormLabel";

const MAX_NAME_LENGTH = 30;

export default function NameInput({ onValidName }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  function handleNameChange(e) {
    const value = e.target.value.slice(0, MAX_NAME_LENGTH);
    setName(value);

    const cleaned = value.replace(/[^a-zA-Z]/g, "");
    if (cleaned.length >= 2) {
      onValidName({
        name: value.trim(),
        numerology: calcNameNumbers(value),
      });
      setNameError("");
      return;
    }

    onValidName(null);
    setNameError("");
  }

  return (
    <>
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
    </>
  );
}
