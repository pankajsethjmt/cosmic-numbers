export const personalityPredictions = {
  1: {
    title: "Confident Presence",
    planet: "Sun",
    shortDesc:
      "People often notice confidence, independence, and a clear personal presence first.",
    fullDesc:
      "Your outer style usually appears direct and self-assured. Others often notice confidence in the way you speak or handle situations. A clear personal presence can create a strong first impression, especially when responsibility is involved.",
    strengths:
      "Confidence, independence, clarity, and a natural ability to stand firmly.",
    challenges:
      "At times, the outer style may appear too strong or less open to others.",
    career:
      "Roles that require initiative, leadership, and visible responsibility usually suit this vibration.",
    relationships:
      "Relationships improve when warmth and listening remain balanced with confidence.",
  },

  2: {
    title: "Gentle Presence",
    planet: "Moon",
    shortDesc:
      "People often notice softness, calm behavior, and a cooperative nature first.",
    fullDesc:
      "Your outer style usually appears calm and approachable. Others often feel that you listen carefully and respond with sensitivity. A peaceful presence can make people comfortable quickly.",
    strengths: "Gentleness, patience, diplomacy, and supportive behavior.",
    challenges: "Sometimes hesitation may appear before decisions are made.",
    career:
      "Supportive work, teamwork, and roles needing patience usually fit well.",
    relationships:
      "Relationships become stronger when feelings are expressed clearly.",
  },

  3: {
    title: "Expressive Nature",
    planet: "Jupiter",
    shortDesc:
      "People often notice friendliness, expression, and positive energy first.",
    fullDesc:
      "Your outer style usually appears lively and expressive. Others may quickly notice communication skills and an easy way of sharing thoughts. A cheerful presence often attracts attention naturally.",
    strengths: "Expression, optimism, creativity, and social ease.",
    challenges: "Sometimes focus may reduce when too many ideas run together.",
    career:
      "Communication, creative work, and public interaction usually suit this vibration.",
    relationships:
      "Relationships improve when communication remains simple and clear.",
  },

  4: {
    title: "Stable Presence",
    planet: "Rahu",
    shortDesc: "People often notice seriousness, order, and reliability first.",
    fullDesc:
      "Your outer style usually appears practical and disciplined. Others often feel that you value order and steady work. A reliable impression develops slowly but remains strong.",
    strengths: "Discipline, steadiness, practical thinking, and reliability.",
    challenges: "Sometimes the outer style may appear too reserved or fixed.",
    career: "Structured work and practical responsibility usually fit well.",
    relationships:
      "Relationships improve when flexibility and openness stay present.",
  },

  5: {
    title: "Active Presence",
    planet: "Mercury",
    shortDesc:
      "People often notice movement, curiosity, and adaptability first.",
    fullDesc:
      "Your outer style usually appears active and open to change. Others often feel quick thinking and easy adjustment in new situations. A fresh and lively impression often forms naturally.",
    strengths: "Adaptability, quick thinking, curiosity, and communication.",
    challenges: "Sometimes consistency may appear less steady.",
    career:
      "Flexible work, communication, and changing environments usually suit well.",
    relationships:
      "Relationships improve when stability and freedom stay balanced.",
  },

  6: {
    title: "Warm Presence",
    planet: "Venus",
    shortDesc:
      "People often notice warmth, care, and a responsible nature first.",
    fullDesc:
      "Your outer style usually appears caring and dependable. Others often feel comfort in your presence and may notice a natural concern for harmony. A pleasant impression usually develops easily.",
    strengths: "Care, responsibility, loyalty, and supportive nature.",
    challenges: "Sometimes too much concern may create extra pressure.",
    career:
      "Care-based work, teaching, and guidance often suit this vibration.",
    relationships:
      "Relationships improve when care is balanced with personal space.",
  },

  7: {
    title: "Quiet Presence",
    planet: "Ketu",
    shortDesc:
      "People often notice calm distance, thoughtfulness, and quiet observation first.",
    fullDesc:
      "Your outer style usually appears thoughtful and reserved. Others may feel that you observe more before speaking. A quiet presence often creates curiosity rather than immediate closeness.",
    strengths: "Observation, depth, calm thinking, and patience.",
    challenges: "Sometimes the outer style may appear distant.",
    career: "Research, study, and independent work usually fit well.",
    relationships:
      "Relationships improve when feelings are shared more openly.",
  },

  8: {
    title: "Strong Presence",
    planet: "Saturn",
    shortDesc: "People often notice seriousness, control, and strength first.",
    fullDesc:
      "Your outer style usually appears strong and disciplined. Others often notice seriousness in approach and a clear sense of responsibility. A powerful impression often develops in work or formal settings.",
    strengths: "Strength, discipline, endurance, and visible responsibility.",
    challenges: "Sometimes the outer style may appear too strict.",
    career:
      "Management, responsibility, and long-term work usually suit this vibration.",
    relationships:
      "Relationships improve when softness and trust remain visible.",
  },

  9: {
    title: "Compassionate Presence",
    planet: "Mars",
    shortDesc:
      "People often notice sensitivity, kindness, and emotional depth first.",
    fullDesc:
      "Your outer style usually appears understanding and emotionally aware. Others often notice kindness and a natural concern for people. A gentle but meaningful impression often remains.",
    strengths: "Compassion, generosity, emotional depth, and understanding.",
    challenges: "Sometimes feelings may appear heavier than words.",
    career: "Service, guidance, and meaningful human work usually fit well.",
    relationships: "Relationships improve when emotional honesty stays clear.",
  },
};

export function getPersonalityPredication(personalityNumber) {
  const num = Number(personalityNumber);

  if (!num || num < 1 || num > 9) {
    return null;
  }

  return personalityPredictions[num] || null;
}
