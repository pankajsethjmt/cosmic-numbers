export const PLANET_BY_NUMBER = {
  1: "Sun",
  2: "Moon",
  3: "Jupiter",
  4: "Rahu",
  5: "Mercury",
  6: "Venus",
  7: "Ketu",
  8: "Saturn",
  9: "Mars",
};

export const RELATION_META = {
  bestfriend: {
    label: "Best Friend",
    verdict: "Highly Favorable",
  },
  friend: {
    label: "Friend",
    verdict: "Supportive",
  },
  neutral: {
    label: "Neutral",
    verdict: "Balanced",
  },
  enemy: {
    label: "Enemy",
    verdict: "Challenging",
  },
};

export const COMPAT = {
  1: {
    1: "bestfriend",
    2: "friend",
    3: "friend",
    4: "enemy",
    5: "enemy",
    6: "friend",
    7: "friend",
    8: "neutral",
    9: "friend",
  },
  2: {
    1: "friend",
    2: "bestfriend",
    3: "neutral",
    4: "friend",
    5: "enemy",
    6: "bestfriend",
    7: "friend",
    8: "neutral",
    9: "bestfriend",
  },
  3: {
    1: "friend",
    2: "neutral",
    3: "bestfriend",
    4: "neutral",
    5: "friend",
    6: "bestfriend",
    7: "neutral",
    8: "enemy",
    9: "bestfriend",
  },
  4: {
    1: "enemy",
    2: "friend",
    3: "neutral",
    4: "bestfriend",
    5: "neutral",
    6: "bestfriend",
    7: "friend",
    8: "friend",
    9: "friend",
  },
  5: {
    1: "enemy",
    2: "enemy",
    3: "friend",
    4: "neutral",
    5: "bestfriend",
    6: "neutral",
    7: "neutral",
    8: "neutral",
    9: "neutral",
  },
  6: {
    1: "friend",
    2: "bestfriend",
    3: "bestfriend",
    4: "bestfriend",
    5: "neutral",
    6: "bestfriend",
    7: "neutral",
    8: "neutral",
    9: "bestfriend",
  },
  7: {
    1: "friend",
    2: "friend",
    3: "neutral",
    4: "friend",
    5: "neutral",
    6: "friend",
    7: "bestfriend",
    8: "neutral",
    9: "bestfriend",
  },
  8: {
    1: "neutral",
    2: "neutral",
    3: "enemy",
    4: "friend",
    5: "neutral",
    6: "friend",
    7: "neutral",
    8: "bestfriend",
    9: "neutral",
  },
  9: {
    1: "friend",
    2: "bestfriend",
    3: "bestfriend",
    4: "friend",
    5: "neutral",
    6: "bestfriend",
    7: "bestfriend",
    8: "neutral",
    9: "bestfriend",
  },
};

export const WEIGHT = {
  bestfriend: 100,
  friend: 75,
  neutral: 50,
  enemy: 10,
};

const MATCH_TARGETS = [
  { key: "root", label: "Birth Root" },
  { key: "fortune", label: "Fortune Number" },
  { key: "today", label: "Today Number" },
  { key: "random", label: "Random Number" },
];

function parseNumber(value) {
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
  return { root, fortune };
}

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
export function calcLuck({ root, fortune, chosen }) {
  const random = Math.ceil(Math.random() * 9);
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
