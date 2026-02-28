import { reduce, sumDigits } from "./calFunction";

// Get today's reduced number.

export function getTodayNumber() {
  return reduce(new Date().getDate());
}

// Get Universal number

export function getUniversalDayNumber() {
  const now = new Date();
  const dd = now.getDate();
  const mm = now.getMonth() + 1;
  const yyyy = now.getFullYear();

  const sumDigits = (num) =>
    num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);

  const total = sumDigits(dd) + sumDigits(mm) + sumDigits(yyyy);

  return reduce(total);
}

// Calculate birth root and fortune numbers.

export function calcDOB(dd, mm, yyyy) {
  console.log("Calculating DOB with:", { dd, mm, yyyy });
  const root = reduce(dd);
  const fortune = reduce(sumDigits(dd + mm + yyyy));
  return { root, fortune };
}
