export const modernNamePredictions = {
  1: {
    title: "Independent Thinker",
    planet: "Sun",
    shortDesc:
      "This name vibration supports confidence, initiative, and independent thinking.",
    fullDesc:
      "People under this vibration usually prefer to take decisions independently and move forward through personal effort. They often show confidence while handling responsibility and may naturally step into leadership situations. This number supports originality, determination, and the ability to begin new work with courage. Progress becomes stronger when confidence is balanced with patience and openness to others.",
    strengths:
      "Strong willpower, independence, initiative, leadership ability, and original thinking.",
    challenges:
      "Can become impatient, dominant, or resistant to advice from others.",
    career:
      "Leadership roles, entrepreneurship, administration, management, public positions, and independent professions.",
    relationships:
      "Relationships improve when mutual respect and emotional patience are maintained. A supportive environment helps this vibration remain balanced.",
  },

  2: {
    title: "Balanced Supporter",
    planet: "Moon",
    shortDesc:
      "This vibration supports sensitivity, cooperation, and emotional understanding.",
    fullDesc:
      "This number often creates a calm and supportive personality that values harmony and emotional balance. People under this vibration usually understand others well and work smoothly in partnerships. It supports patience, observation, and thoughtful responses. Growth becomes stronger when self-confidence develops and unnecessary emotional hesitation is reduced.",
    strengths:
      "Sensitivity, cooperation, patience, diplomacy, and emotional awareness.",
    challenges:
      "Can become hesitant, overly sensitive, or dependent on reassurance.",
    career:
      "Counselling, support roles, partnerships, teaching, hospitality, and relationship-based work.",
    relationships:
      "Stable emotional connections grow well when trust and open communication are present.",
  },

  3: {
    title: "Creative Communicator",
    planet: "Jupiter",
    shortDesc:
      "This vibration supports expression, creativity, and social confidence.",
    fullDesc:
      "People influenced by this number usually enjoy expressing ideas and connecting with others naturally. It supports creativity, speaking ability, writing, and cheerful communication. This vibration often brings enthusiasm and visible social energy. Better results come when focus and consistency are maintained instead of scattering energy in many directions.",
    strengths:
      "Creativity, communication skill, optimism, expression, and social warmth.",
    challenges:
      "Can become distracted, inconsistent, or overly expressive without direction.",
    career:
      "Writing, teaching, media, speaking, design, entertainment, and communication-based work.",
    relationships:
      "Relationships improve when listening is balanced with expression and emotional maturity.",
  },

  4: {
    title: "Practical Builder",
    planet: "Rahu",
    shortDesc:
      "This vibration supports discipline, structure, and steady effort.",
    fullDesc:
      "People under this vibration usually prefer practical planning and clear methods before taking action. They often work carefully and value responsibility, order, and long-term stability. This number supports patience, persistence, and realistic thinking. Progress improves when flexibility is developed and excessive rigidity is reduced.",
    strengths:
      "Discipline, reliability, patience, practical thinking, and steady effort.",
    challenges:
      "Can become rigid, overly cautious, or resistant to sudden change.",
    career:
      "Engineering, planning, administration, technical work, systems, and long-term project roles.",
    relationships:
      "Stable relationships grow better when emotional openness and adaptability are maintained.",
  },

  5: {
    title: "Flexible Explorer",
    planet: "Mercury",
    shortDesc:
      "This vibration supports adaptability, movement, and quick learning.",
    fullDesc:
      "This number often creates an active and curious personality that learns quickly through experience. People under this vibration usually adjust easily to changing situations and enjoy variety in life. It supports communication, travel, and new ideas. Growth becomes stronger when consistency and long-term direction are maintained.",
    strengths:
      "Adaptability, curiosity, communication, quick thinking, and versatility.",
    challenges: "Can become restless, inconsistent, or easily distracted.",
    career:
      "Sales, travel, communication, marketing, media, technology, and dynamic professions.",
    relationships:
      "Relationships improve when freedom is balanced with reliability and emotional steadiness.",
  },

  6: {
    title: "Responsible Caregiver",
    planet: "Venus",
    shortDesc:
      "This vibration supports responsibility, care, and emotional warmth.",
    fullDesc:
      "People influenced by this vibration usually value family, harmony, and responsibility in daily life. They often feel naturally drawn toward helping others and creating balance around them. This number supports loyalty, nurturing ability, and aesthetic sense. Better growth comes when self-care is not ignored while caring for others.",
    strengths:
      "Responsibility, loyalty, care, emotional warmth, and supportive nature.",
    challenges:
      "Can become overprotective, controlling, or emotionally burdened.",
    career:
      "Teaching, counselling, design, family services, healing roles, and hospitality.",
    relationships:
      "Strong relationships grow when care is balanced with healthy boundaries.",
  },

  7: {
    title: "Thoughtful Seeker",
    planet: "Ketu",
    shortDesc:
      "This vibration supports analysis, reflection, and inner understanding.",
    fullDesc:
      "This number often creates a thoughtful personality that prefers depth over surface-level activity. People under this vibration usually observe carefully and think deeply before trusting situations. It supports research, introspection, and spiritual interest. Growth improves when emotional distance is balanced with practical connection.",
    strengths: "Analysis, intuition, reflection, observation, and inner depth.",
    challenges: "Can become withdrawn, doubtful, or overly private.",
    career:
      "Research, writing, analysis, spiritual study, education, and technical thinking roles.",
    relationships:
      "Relationships become stronger when trust is built slowly and emotions are expressed openly.",
  },

  8: {
    title: "Organized Achiever",
    planet: "Saturn",
    shortDesc:
      "This vibration supports discipline, authority, and material management.",
    fullDesc:
      "People influenced by this number usually think in terms of results, structure, and responsibility. They often carry strong endurance and the ability to manage practical matters seriously. This vibration supports ambition, organization, and long-term achievement. Better balance comes when pressure is handled without becoming emotionally hard.",
    strengths:
      "Discipline, endurance, organization, responsibility, and practical strength.",
    challenges:
      "Can become strict, heavy-minded, or overly focused on control.",
    career:
      "Administration, finance, business, law, management, and authority-based roles.",
    relationships:
      "Relationships improve when emotional softness and patience are consciously maintained.",
  },

  9: {
    title: "Broad Hearted Humanitarian",
    planet: "Mars",
    shortDesc:
      "This vibration supports compassion, idealism, and wider understanding.",
    fullDesc:
      "This number often brings broad thinking and concern for larger human values. People under this vibration usually feel deeply and may naturally support fairness, service, or guidance for others. It supports generosity, emotional strength, and mature understanding. Growth becomes stronger when emotional disappointment is handled with stability.",
    strengths:
      "Compassion, generosity, emotional strength, idealism, and wider vision.",
    challenges:
      "Can become emotionally burdened, disappointed, or overly idealistic.",
    career:
      "Teaching, healing, social work, guidance roles, public service, and creative contribution.",
    relationships:
      "Relationships improve when emotional expectations remain realistic and balanced.",
  },
};

export function getNameNumberPredication(nameNumber) {
  const num = Number(nameNumber);

  if (!num || num < 1 || num > 9) {
    return null;
  }

  return modernNamePredictions[num] || null;
}
