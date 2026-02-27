const LETTER_MAP = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
};

const VOWELS = new Set(["A", "E", "I", "O", "U"]);

function reduce(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return 0;
  }

  let number = Math.abs(parsed);
  while (number > 9) {
    number = String(number)
      .split("")
      .reduce((sum, digit) => sum + Number.parseInt(digit, 10), 0);
  }

  return number;
}

function cleanName(name) {
  return name.toUpperCase().replace(/[^A-Z]/g, "");
}

export function calcNameNumbers(fullName) {
  const letters = cleanName(fullName).split("");
  if (letters.length === 0) return null;

  let nameTotal = 0;
  let soulTotal = 0;
  let personalityTotal = 0;

  const breakdown = letters.map((letter) => {
    const value = LETTER_MAP[letter] || 0;
    const isVowel = VOWELS.has(letter);

    nameTotal += value;
    if (isVowel) {
      soulTotal += value;
    } else {
      personalityTotal += value;
    }

    return { letter, value, isVowel };
  });

  return {
    nameNumber: reduce(nameTotal),
    soulNumber: soulTotal > 0 ? reduce(soulTotal) : null,
    personalityNumber: personalityTotal > 0 ? reduce(personalityTotal) : null,
    breakdown,
  };
}

export const NAME_MEANINGS = {
  1: {
    title: "The Leader",
    planet: "Sun",
    desc: "Ambitious, independent, pioneering spirit",
  },
  2: {
    title: "The Diplomat",
    planet: "Moon",
    desc: "Cooperative, sensitive, natural peacemaker",
  },
  3: {
    title: "The Creator",
    planet: "Jupiter",
    desc: "Creative, expressive, joyful communicator",
  },
  4: {
    title: "The Builder",
    planet: "Rahu",
    desc: "Disciplined, practical, builds strong foundations",
  },
  5: {
    title: "The Adventurer",
    planet: "Mercury",
    desc: "Freedom-loving, versatile, dynamic energy",
  },
  6: {
    title: "The Nurturer",
    planet: "Venus",
    desc: "Loving, responsible, seeker of harmony",
  },
  7: {
    title: "The Seeker",
    planet: "Ketu",
    desc: "Introspective, spiritual, truth seeker",
  },
  8: {
    title: "The Achiever",
    planet: "Saturn",
    desc: "Powerful, ambitious, material success",
  },
  9: {
    title: "The Humanitarian",
    planet: "Mars",
    desc: "Compassionate, universal love, wisdom",
  },
};

export const SOUL_MEANINGS = {
  1: "You desire leadership and independence above all",
  2: "Your soul craves harmony, love and partnership",
  3: "Deep within, you seek creative self-expression",
  4: "Your inner self desires security and stability",
  5: "Your soul yearns for freedom and adventure",
  6: "You desire love, home and to nurture others",
  7: "Your soul seeks spiritual truth and wisdom",
  8: "Deep within, you desire power and achievement",
  9: "Your soul craves to serve humanity with compassion",
};

export const PERSONALITY_MEANINGS = {
  1: "You appear confident, bold and authoritative to others",
  2: "Others see you as gentle, cooperative and diplomatic",
  3: "You come across as charming, witty and creative",
  4: "Others see you as reliable, disciplined and steady",
  5: "You appear energetic, adventurous and free-spirited",
  6: "Others see you as warm, caring and responsible",
  7: "You appear mysterious, thoughtful and wise",
  8: "Others see you as powerful, ambitious and capable",
  9: "You appear compassionate, generous and idealistic",
};

export const PYTH_TABLE = [
  { num: 1, letters: ["A", "J", "S"] },
  { num: 2, letters: ["B", "K", "T"] },
  { num: 3, letters: ["C", "L", "U"] },
  { num: 4, letters: ["D", "M", "V"] },
  { num: 5, letters: ["E", "N", "W"] },
  { num: 6, letters: ["F", "O", "X"] },
  { num: 7, letters: ["G", "P", "Y"] },
  { num: 8, letters: ["H", "Q", "Z"] },
  { num: 9, letters: ["I", "R"] },
];
