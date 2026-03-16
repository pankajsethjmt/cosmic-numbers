export const soulPredictions = {
  1: {
    title: "Independent Thinker",
    planet: "Sun",
    shortDesc:
      "A strong inner need for independence and personal respect often shapes your feelings.",
    fullDesc:
      "You usually feel better when you can make your own decisions and handle important matters in your own way. Personal effort matters a lot, and simple recognition often gives inner satisfaction. Inner confidence helps during difficult situations, but peace becomes stronger when patience and understanding are also present.",
    strengths:
      "Strong willpower, self-confidence, clear thinking, and the ability to depend on yourself.",
    challenges:
      "Sometimes distance can grow when advice feels unwanted or personal freedom feels limited.",
    career:
      "Work feels better when responsibility, freedom, and personal decisions are respected.",
    relationships:
      "Relationships improve when respect, calm communication, and personal space are maintained.",
  },

  2: {
    title: "Peace Seeker",
    planet: "Moon",
    shortDesc:
      "A deep need for peace, emotional support, and harmony often guides your inner feelings.",
    fullDesc:
      "You usually feel comfortable when the environment is calm and people around you respond with kindness. Emotional balance becomes stronger when support and understanding are present. Sensitive feelings often notice small changes quickly, so peaceful surroundings help inner stability.",
    strengths:
      "Gentleness, patience, emotional understanding, and the ability to support others.",
    challenges: "Small hurt can stay inside for long if feelings are ignored.",
    career:
      "Work feels better where cooperation, support, and calm teamwork are valued.",
    relationships:
      "Relationships become stronger when care, trust, and emotional warmth are shared.",
  },

  3: {
    title: "Creative Heart",
    planet: "Jupiter",
    shortDesc:
      "A natural need for expression, joy, and emotional freedom often stays active inside.",
    fullDesc:
      "You usually feel lighter when thoughts and feelings can be shared openly. Simple happiness, creativity, and positive attention often support inner balance. When emotions remain blocked for long, restlessness may slowly increase.",
    strengths:
      "Creativity, optimism, expressive nature, and natural enthusiasm.",
    challenges: "Mood may change when feelings are not expressed clearly.",
    career:
      "Creative work, communication, and expressive roles usually feel satisfying.",
    relationships:
      "Relationships improve when conversation stays open and cheerful.",
  },

  4: {
    title: "Stable Mind",
    planet: "Rahu",
    shortDesc:
      "A strong need for stability, order, and emotional security often shapes inner comfort.",
    fullDesc:
      "You usually feel peaceful when life moves in a clear and organized way. Predictable situations often bring comfort, while sudden changes may create inner pressure. Trust grows slowly, but once formed it usually remains steady.",
    strengths: "Discipline, practical thinking, patience, and steady effort.",
    challenges: "Too much uncertainty may create worry or inner resistance.",
    career:
      "Structured work, practical tasks, and stable environments usually feel better.",
    relationships:
      "Relationships improve when trust and consistency remain strong.",
  },

  5: {
    title: "Freedom Lover",
    planet: "Mercury",
    shortDesc:
      "A strong inner need for freedom, movement, and new experiences often stays active.",
    fullDesc:
      "You usually feel alive when life allows variety and fresh experiences. Repetition may create boredom quickly, while change often brings fresh energy. Inner balance becomes better when freedom is used with responsibility.",
    strengths:
      "Adaptability, curiosity, quick thinking, and openness to change.",
    challenges: "Restlessness may increase when life feels too restricted.",
    career:
      "Flexible work, travel, communication, and changing roles usually feel satisfying.",
    relationships:
      "Relationships stay healthier when freedom and trust are balanced.",
  },

  6: {
    title: "Caring Nature",
    planet: "Venus",
    shortDesc:
      "A deep need for love, care, and emotional closeness often guides your feelings.",
    fullDesc:
      "You usually feel happiest when loved ones stay emotionally connected. Responsibility for family or close people often comes naturally. Inner peace becomes stronger when love is returned with warmth and honesty.",
    strengths: "Care, responsibility, loyalty, and emotional warmth.",
    challenges: "Worry may increase when relationships feel distant.",
    career:
      "Teaching, care-based work, guidance, and supportive roles often feel meaningful.",
    relationships:
      "Relationships improve when love, honesty, and emotional support remain strong.",
  },

  7: {
    title: "Quiet Observer",
    planet: "Ketu",
    shortDesc:
      "A natural need for quiet thinking, inner space, and deeper understanding often remains strong.",
    fullDesc:
      "You usually feel better when there is enough silence to think clearly. Too much noise or emotional pressure may create inner distance. Understanding life deeply often matters more than quick outer excitement.",
    strengths: "Observation, depth, patience, and thoughtful understanding.",
    challenges: "Distance may grow when feelings stay unspoken.",
    career:
      "Research, analysis, study, and independent work usually feel satisfying.",
    relationships:
      "Relationships improve when space and quiet understanding are respected.",
  },

  8: {
    title: "Strong Inner Drive",
    planet: "Saturn",
    shortDesc:
      "A strong need for self-respect, control, and meaningful progress often stays active inside.",
    fullDesc:
      "You usually feel stronger when efforts bring visible results and life moves with purpose. Respect often matters deeply, even when not openly spoken. Inner balance improves when pressure is handled with calm thinking.",
    strengths: "Discipline, endurance, responsibility, and inner strength.",
    challenges: "Pressure may build when results come slowly.",
    career:
      "Responsible roles, management, and long-term work usually feel meaningful.",
    relationships: "Relationships improve when trust and respect remain clear.",
  },

  9: {
    title: "Sensitive Giver",
    planet: "Mars",
    shortDesc:
      "A deep need to care, help, and feel emotionally meaningful often guides your heart.",
    fullDesc:
      "You usually feel fulfilled when your actions help others or create something meaningful. Emotions often run deep, and kindness naturally becomes important. Inner peace grows when giving and personal balance stay together.",
    strengths:
      "Compassion, generosity, emotional depth, and strong human understanding.",
    challenges: "Emotional hurt may stay longer when expectations are high.",
    career:
      "Service, healing, guidance, and meaningful work usually feel satisfying.",
    relationships:
      "Relationships improve when understanding and emotional honesty remain present.",
  },
};

export function getSoulPredication(soulNumber) {
  const num = Number(soulNumber);

  if (!num || num < 1 || num > 9) {
    return null;
  }

  return soulPredictions[num] || null;
}
