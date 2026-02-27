import {
  calcDOB,
  reduce,
  getUniversalDayNumber,
  calcLuck,
} from "../utils/numerology";

export function useNumerology() {
  function calculate(dob, chosen) {
    const raw = dob.replace(/\D/g, "");

    const dd = raw.slice(0, 2);
    const mm = raw.slice(2, 4);
    const yyyy = raw.slice(4);

    const { root, fortune } = calcDOB(dd, mm, yyyy);

    return calcLuck({
      root,
      fortune,
      chosen: reduce(chosen),
    });
  }

  return { calculate };
}
