import { reduce, sumDigits } from "./calFunction";
import { getSunSign } from "./sunSign";
import { getRootNumber } from "./rootNumber";
import { getFortuneNumber } from "./fortuneNumber";
import { getDOBPrediction } from "./dobNumber";

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
  const root = reduce(dd);
  const fortune = reduce(sumDigits(dd + mm + yyyy));
  const sunSign = getSunSign(dd, mm);
  const rootData = getRootNumber(root);
  const fortuneData = getFortuneNumber(dd, mm, yyyy);
  const dobNumberData = getDOBPrediction(dd);
  console.log("DOB Calculation:", {
    dd,
    mm,
    yyyy,
    root,
    fortune,
    sunSign,
    rootData,
    fortuneData,
    dobNumberData,
  });
  return { root, fortune, sunSign, rootData, fortuneData, dobNumberData };
}
