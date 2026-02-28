export const MAX_AGE_YEARS = 140;

export function parseNumber(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

// Reduce to single digit.

export function reduce(n) {
  let value = Math.abs(parseNumber(n));
  while (value > 9) {
    value = String(value)
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return value;
}

// Sum all digits from a string.

export function sumDigits(text) {
  const digits = text.replace(/\D/g, "").split("");
  if (digits.length === 0) {
    return 0;
  }

  return digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
export function validateDob(dd, mm, yyyy) {
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
