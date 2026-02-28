import { COMPAT, PLANET_BY_NUMBER, RELATION_META } from "./basicNumerology";
import { getTodayNumber } from "./dateNumerology";

export const WEIGHT = {
  bestfriend: 100,
  friend: 75,
  neutral: 50,
  enemy: 10,
};
export const MATCH_TARGETS = [
  { key: "root", label: "Birth Root" },
  { key: "fortune", label: "Fortune Number" },
  { key: "today", label: "Today Number" },
  { key: "random", label: "Random Number" },
];
function getRelation(from, to) {
  return COMPAT[from]?.[to] ?? "neutral";
}
function toScale(score) {
  return Math.max(1, Math.min(10, Math.ceil(score / 10)));
}
function buildCompatibilityReference() {
  return Array.from({ length: 9 }, (_, index) => {
    const number = index + 1;
    const grouped = {
      bestfriend: [],
      friend: [],
      neutral: [],
      enemy: [],
    };

    for (let target = 1; target <= 9; target += 1) {
      const relation = COMPAT[number][target];
      grouped[relation].push(target);
    }

    return {
      number,
      planet: PLANET_BY_NUMBER[number],
      bestfriend: grouped.bestfriend.join(", "),
      friend: grouped.friend.join(", "),
      neutral: grouped.neutral.join(", "),
      enemy: grouped.enemy.join(", "),
    };
  });
}
const COMPATIBILITY_REFERENCE = buildCompatibilityReference();

export function getCompatibilityReference() {
  return COMPATIBILITY_REFERENCE;
}
// Main calculation for the oracle result.

export function calcLuck({ root, fortune, chosen, random }) {
  const today = getTodayNumber();

  const targetValues = {
    root,
    fortune,
    today,
    random,
  };

  const matches = MATCH_TARGETS.map((target) => {
    const to = targetValues[target.key];
    const relation = getRelation(chosen, to);
    const relationInfo = RELATION_META[relation];
    const weight = WEIGHT[relation];

    return {
      key: target.key,
      label: target.label,
      from: chosen,
      to,
      relation,
      relationLabel: relationInfo.label,
      relationVerdict: relationInfo.verdict,
      planet: PLANET_BY_NUMBER[to],
      weight,
    };
  });

  const selfMatches = matches.filter((match) => match.key !== "random");
  const part1Total = selfMatches.reduce((sum, match) => sum + match.weight, 0);
  const part1Score = Math.round(part1Total / selfMatches.length);

  const randomMatch = matches.find((match) => match.key === "random");
  const part2Score = randomMatch ? randomMatch.weight : 0;

  const score = Math.round((part1Score + part2Score) / 2);
  const scale = toScale(score);

  return {
    root,
    fortune,
    chosen,
    random,
    today,
    part1Score,
    part2Score,
    score,
    scale,
    matches,
    compatibility: getCompatibilityReference(),
  };
}
