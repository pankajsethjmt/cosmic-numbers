// ============================================================
// fortuneNumber.js — Fortune Number Master Source
// Same architecture style as rootNumber.js
// Fortune Number = Full DOB reduced to single digit
// ============================================================

export const FORTUNE_NUMBERS = [
  {
    id: "fortune1",
    number: 1,
    symbol: "1",
    nameEn: "Fortune Number 1",
    nameHi: "भाग्यांक 1",
    rulingPlanet: { en: "Sun", hi: "सूर्य" },
    rulingNumber: 1,
    coreNature: {
      en: "Life direction, authority, destiny leadership",
      hi: "जीवन दिशा, अधिकार, नेतृत्व",
    },
    shortDescEn: "Life pushes you toward leadership and self-made success.",
    fullDescEn: `People with Fortune Number 1 often move in life with a strong desire to create their own identity. As age increases, they usually feel a stronger need to take control of their path.

This number shows destiny connected with leadership, responsibility, and recognition. Such people often feel uncomfortable if life remains dependent on others for too long.

Their fortune usually improves when they take decisions with confidence and maintain self-respect.

In many cases, life gives opportunities where they must stand independently and guide others.

When balanced, Fortune Number 1 supports authority, confidence, and steady rise through personal effort.`,
    shortDescHi: "जीवन आपको नेतृत्व और स्वयं के बल पर सफलता की ओर ले जाता है।",
    fullDescHi: `भाग्यांक 1 वाले लोगों का जीवन धीरे-धीरे ऐसी दिशा लेता है जहाँ उन्हें अपनी पहचान स्वयं बनानी पड़ती है।

यह संख्या बताती है कि जीवन में नेतृत्व, सम्मान और जिम्मेदारी महत्वपूर्ण भूमिका निभाते हैं।

ऐसे लोग उम्र बढ़ने के साथ अपने निर्णयों पर अधिक भरोसा करना सीखते हैं और दूसरों पर निर्भर रहना कम पसंद करते हैं।

कई बार जीवन इन्हें ऐसी परिस्थितियों में लाता है जहाँ आगे बढ़कर दिशा देना आवश्यक हो जाता है।

भाग्य तब अधिक साथ देता है जब व्यक्ति आत्मविश्वास, स्पष्ट सोच और आत्मसम्मान बनाए रखता है।`,
    positiveTraits: ["Leadership", "Confidence", "Self-direction"],
    cautionTraits: ["Ego", "Rigidity", "Over-control"],
    career: ["Administration", "Government", "Management"],
    health: ["Head stress", "Heart care"],
    luckyNumbers: [1, 3, 9],
    luckyDays: ["Sunday", "Monday"],
    luckyColors: ["Orange", "Golden"],
    luckyStone: "माणिक्य",
    luckyStoneEn: "Ruby",
  },

  {
    id: "fortune2",
    number: 2,
    symbol: "2",
    nameEn: "Fortune Number 2",
    nameHi: "भाग्यांक 2",
    rulingPlanet: { en: "Moon", hi: "चंद्र" },
    rulingNumber: 2,
    coreNature: {
      en: "Support, emotional destiny, cooperation",
      hi: "सहयोग, भावनात्मक दिशा",
    },
    shortDescEn:
      "Life opens through relationships, trust, and emotional balance.",
    fullDescEn: `Fortune Number 2 often gives a destiny connected with people, emotions, and cooperation.

Such people usually progress when they build trust carefully and keep emotional balance.

Life may bring important turning points through family, partnerships, and close support.

Their fortune often improves when they avoid confusion and trust their own inner feeling.

When balanced, this number supports peace, intuition, and meaningful relationships.`,
    shortDescHi: "जीवन में संबंध, भरोसा और भावनात्मक संतुलन से भाग्य खुलता है।",
    fullDescHi: `भाग्यांक 2 वाले लोगों का जीवन अक्सर संबंधों, भावनाओं और सहयोग से आगे बढ़ता है।

ऐसे लोगों को जीवन में सही लोगों का साथ महत्वपूर्ण अवसर देता है और कई मोड़ रिश्तों के माध्यम से खुलते हैं।

इनका भाग्य तब अधिक मजबूत होता है जब ये अपने मन को स्थिर रखते हैं और जल्दी भ्रमित नहीं होते।

भावनात्मक संतुलन इनके लिए बहुत आवश्यक होता है, क्योंकि मन की अस्थिरता निर्णयों को प्रभावित कर सकती है।

समय के साथ यह संख्या अंतर्ज्ञान, धैर्य और शांत निर्णय से सफलता देती है।`,
    positiveTraits: ["Sensitivity", "Cooperation", "Intuition"],
    cautionTraits: ["Overtrust", "Mood swings"],
    career: ["Creative work", "Counselling", "Travel"],
    health: ["Cold", "Sleep imbalance"],
    luckyNumbers: [2, 1, 6],
    luckyDays: ["Monday", "Friday"],
    luckyColors: ["White", "Cream"],
    luckyStone: "मोती",
    luckyStoneEn: "Pearl",
  },

  {
    id: "fortune3",
    number: 3,
    symbol: "3",
    nameEn: "Fortune Number 3",
    nameHi: "भाग्यांक 3",
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    rulingNumber: 3,
    coreNature: {
      en: "Growth, wisdom, structured destiny",
      hi: "विकास, ज्ञान, संरचित जीवन",
    },
    shortDescEn:
      "Fortune improves through knowledge, discipline, and right guidance.",
    fullDescEn: `Fortune Number 3 usually gives a destiny connected with learning, guidance, and gradual rise.

Such people often receive important opportunities through education, knowledge, or senior support.

Life becomes stronger when discipline and long-term planning are followed.

Their destiny often asks them to become responsible and respected in society.

When balanced, this number supports expansion, wisdom, and stable success.`,
    shortDescHi: "ज्ञान, अनुशासन और सही दिशा से भाग्य मजबूत होता है।",
    fullDescHi: `भाग्यांक 3 वाले लोगों का जीवन सामान्यतः ज्ञान, सम्मान और क्रमिक उन्नति से जुड़ता है।

अक्सर इन्हें शिक्षा, मार्गदर्शन या वरिष्ठ लोगों से महत्वपूर्ण अवसर प्राप्त होते हैं।

जीवन में अनुशासन रखने से इनकी प्रगति स्थिर होती है और धीरे-धीरे सम्मान बढ़ता है।

यह संख्या व्यक्ति को जिम्मेदारी समझने और समाज में प्रभाव बनाने की दिशा देती है।

समय के साथ यह संख्या प्रतिष्ठा, मार्गदर्शन और स्थायी सफलता प्रदान करती है।`,
    positiveTraits: ["Wisdom", "Discipline", "Expansion"],
    cautionTraits: ["Pride", "Over-expectation"],
    career: ["Teaching", "Law", "Administration"],
    health: ["Throat", "Stress"],
    luckyNumbers: [3, 1, 9],
    luckyDays: ["Thursday"],
    luckyColors: ["Yellow"],
    luckyStone: "पुखराज",
    luckyStoneEn: "Yellow Sapphire",
  },

  {
    id: "fortune4",
    number: 4,
    symbol: "4",
    nameEn: "Fortune Number 4",
    nameHi: "भाग्यांक 4",
    rulingPlanet: { en: "Rahu", hi: "राहु" },
    rulingNumber: 4,
    coreNature: {
      en: "Unexpected turns, unconventional destiny",
      hi: "अचानक मोड़, अलग राह",
    },
    shortDescEn: "Life moves through unusual paths and sudden changes.",
    fullDescEn: `Fortune Number 4 often brings a life path that does not move in a simple straight line.

Unexpected changes, different ideas, and unusual opportunities become part of destiny.

Such people often create their own way rather than following common patterns.

Their fortune improves when they remain practical during unstable phases.

When balanced, this number supports originality and breakthrough thinking.`,
    shortDescHi: "जीवन अलग रास्तों और अचानक परिवर्तनों से आगे बढ़ता है।",
    fullDescHi: `भाग्यांक 4 वाले लोगों के जीवन में सामान्य से अलग परिस्थितियाँ बार-बार आ सकती हैं।

अचानक बदलाव, नई सोच और अनोखे अवसर इनके जीवन का हिस्सा बनते हैं।

अक्सर ये अपनी राह स्वयं बनाना पसंद करते हैं और सामान्य ढर्रे से अलग सोचते हैं।

कई बार जीवन में अचानक लाभ या अचानक उलझन दोनों देखने को मिल सकते हैं।

इनका भाग्य तब मजबूत होता है जब ये अस्थिर समय में भी व्यावहारिक और धैर्यवान बने रहते हैं।`,
    positiveTraits: ["Originality", "Practical thinking"],
    cautionTraits: ["Internal stress", "Sudden confusion"],
    career: ["Technology", "Design", "Research"],
    health: ["Mental pressure", "Digestion"],
    luckyNumbers: [4, 6, 8],
    luckyDays: ["Saturday"],
    luckyColors: ["Grey"],
    luckyStone: "गोमेद",
    luckyStoneEn: "Hessonite",
  },

  {
    id: "fortune5",
    number: 5,
    symbol: "5",
    nameEn: "Fortune Number 5",
    nameHi: "भाग्यांक 5",
    rulingPlanet: { en: "Mercury", hi: "बुध" },
    rulingNumber: 5,
    coreNature: {
      en: "Movement, intellect, adaptability",
      hi: "गतिशीलता, बुद्धि, अनुकूलन",
    },
    shortDescEn: "Fortune rises through smart choices and flexibility.",
    fullDescEn: `Fortune Number 5 usually gives a fast-moving destiny.

Life often opens through communication, business sense, and mental sharpness.

Such people benefit when they use timing well and avoid scattered decisions.

Change often becomes an important part of growth.

When balanced, this number supports opportunity through skill and quick understanding.`,
    shortDescHi: "तेज बुद्धि और सही समय पर निर्णय भाग्य बढ़ाते हैं।",
    fullDescHi: `भाग्यांक 5 वाले लोगों का जीवन तेज गति से आगे बढ़ता है।

इनके लिए संवाद, व्यापारिक समझ और मानसिक चपलता महत्वपूर्ण भूमिका निभाते हैं।

ऐसे लोग अक्सर बदलती परिस्थितियों में जल्दी निर्णय लेना सीख जाते हैं।

जीवन में परिवर्तन इनके विकास का हिस्सा बनता है और नए अवसर अचानक सामने आ सकते हैं।

जब यह ऊर्जा संतुलित रहती है, तब यह संख्या कौशल और बुद्धि से सफलता दिलाती है।`,
    positiveTraits: ["Intelligence", "Adaptability"],
    cautionTraits: ["Restlessness", "Too many directions"],
    career: ["Business", "Writing", "Communication"],
    health: ["Nerves", "Sleep"],
    luckyNumbers: [5, 1, 6],
    luckyDays: ["Wednesday"],
    luckyColors: ["Green"],
    luckyStone: "पन्ना",
    luckyStoneEn: "Emerald",
  },

  {
    id: "fortune6",
    number: 6,
    symbol: "6",
    nameEn: "Fortune Number 6",
    nameHi: "भाग्यांक 6",
    rulingPlanet: { en: "Venus", hi: "शुक्र" },
    rulingNumber: 6,
    coreNature: {
      en: "Comfort, harmony, attraction",
      hi: "सुख, संतुलन, आकर्षण",
    },
    shortDescEn:
      "Life gives fortune through relationships and balanced choices.",
    fullDescEn: `Fortune Number 6 often connects destiny with comfort, beauty, and relationship support.

Such people usually gain when harmony is maintained in personal and professional life.

Material growth may become important in life journey.

Fortune often improves through refined decisions and social goodwill.

When balanced, this number supports comfort and graceful success.`,
    shortDescHi: "संबंधों और संतुलित जीवन से भाग्य प्रबल होता है।",
    fullDescHi: `भाग्यांक 6 वाले लोगों के जीवन में सुख, संबंध और सामाजिक संतुलन महत्वपूर्ण रहते हैं।

अच्छे संबंध और संयमित निर्णय इनके भाग्य को मजबूत करते हैं।

जीवन में आराम, सुंदरता और संतुलित वातावरण इनकी प्रगति में सहायक बनते हैं।

अक्सर इन्हें सामाजिक सहयोग और संबंधों के माध्यम से अवसर मिलते हैं।

जब यह ऊर्जा संतुलित रहती है, तब यह संख्या जीवन में सहज सफलता और संतोष देती है।`,
    positiveTraits: ["Charm", "Balance"],
    cautionTraits: ["Attachment", "Luxury excess"],
    career: ["Fashion", "Finance", "Hospitality"],
    health: ["Sugar balance", "Kidney care"],
    luckyNumbers: [6, 3, 9],
    luckyDays: ["Friday"],
    luckyColors: ["White", "Pink"],
    luckyStone: "हीरा",
    luckyStoneEn: "Diamond",
  },

  {
    id: "fortune7",
    number: 7,
    symbol: "7",
    nameEn: "Fortune Number 7",
    nameHi: "भाग्यांक 7",
    rulingPlanet: { en: "Ketu", hi: "केतु" },
    rulingNumber: 7,
    coreNature: {
      en: "Inner search, spiritual direction",
      hi: "आंतरिक खोज, आध्यात्मिक दिशा",
    },
    shortDescEn: "Destiny often unfolds through inner understanding.",
    fullDescEn: `Fortune Number 7 gives a destiny that often matures through inner experiences.

Such people may not follow ordinary paths and often think deeply before major life choices.

Life teaches through reflection, travel, or hidden learning.

Fortune improves when intuition is respected.

When balanced, this number supports wisdom and inner clarity.`,
    shortDescHi: "अंतर्ज्ञान और गहरी समझ से जीवन दिशा पाता है।",
    fullDescHi: `भाग्यांक 7 वाले लोग सामान्यतः भीतर से गहराई से सोचते हैं।

जीवन इन्हें अनुभवों और आत्मचिंतन से आगे बढ़ाता है।

ऐसे लोग सामान्य मार्ग से अलग सोच सकते हैं और निर्णय लेने से पहले बहुत गहराई में जाते हैं।

इनका भाग्य अक्सर तब खुलता है जब ये अपनी अंतर्ज्ञान शक्ति पर भरोसा करते हैं।

समय के साथ यह संख्या भीतर की स्पष्टता और आध्यात्मिक समझ प्रदान करती है।`,
    positiveTraits: ["Intuition", "Depth"],
    cautionTraits: ["Isolation", "Mental distance"],
    career: ["Research", "Healing", "Spiritual work"],
    health: ["Stress", "Sleep issues"],
    luckyNumbers: [7, 2, 9],
    luckyDays: ["Monday", "Tuesday"],
    luckyColors: ["Light Green"],
    luckyStone: "लहसुनिया",
    luckyStoneEn: "Cat's Eye",
  },

  {
    id: "fortune8",
    number: 8,
    symbol: "8",
    nameEn: "Fortune Number 8",
    nameHi: "भाग्यांक 8",
    rulingPlanet: { en: "Saturn", hi: "शनि" },
    rulingNumber: 8,
    coreNature: {
      en: "Karma, endurance, delayed success",
      hi: "कर्म, धैर्य, देर से सफलता",
    },
    shortDescEn: "Life rewards patience more than speed.",
    fullDescEn: `Fortune Number 8 often gives karmic lessons through responsibility and delay.

Such people usually understand life deeply through practical experience.

Results may come slowly, but they often become lasting.

Fortune improves when discipline is maintained without frustration.

When balanced, this number supports powerful long-term growth.`,
    shortDescHi: "धैर्य और कर्म से धीरे-धीरे भाग्य मजबूत होता है।",
    fullDescHi: `भाग्यांक 8 वाले लोगों का जीवन कर्म और धैर्य से जुड़ा रहता है।

धीरे मिलने वाली सफलता अक्सर स्थायी होती है और लंबे समय तक फल देती है।

जीवन इन्हें जिम्मेदारी और सहनशीलता का गहरा अनुभव कराता है।

कई बार प्रारंभिक संघर्ष के बाद ही स्पष्ट उन्नति दिखाई देती है।

जब व्यक्ति निरंतरता बनाए रखता है, तब यह संख्या बहुत मजबूत परिणाम देती है।`,
    positiveTraits: ["Patience", "Depth", "Responsibility"],
    cautionTraits: ["Loneliness", "Heavy thinking"],
    career: ["Industry", "Law", "Structure"],
    health: ["Bones", "Liver"],
    luckyNumbers: [8, 4, 6],
    luckyDays: ["Saturday"],
    luckyColors: ["Blue"],
    luckyStone: "नीलम",
    luckyStoneEn: "Blue Sapphire",
  },

  {
    id: "fortune9",
    number: 9,
    symbol: "9",
    nameEn: "Fortune Number 9",
    nameHi: "भाग्यांक 9",
    rulingPlanet: { en: "Mars", hi: "मंगल" },
    rulingNumber: 9,
    coreNature: {
      en: "Action destiny, courage, karmic force",
      hi: "कर्मशक्ति, साहस, प्रभाव",
    },
    shortDescEn: "Destiny becomes active through courage and action.",
    fullDescEn: `Fortune Number 9 usually gives a strong life direction where action becomes important.

Such people often move toward decisive situations and strong responsibilities.

Life may demand courage, sacrifice, and bold decisions.

Fortune improves when energy is used constructively.

When balanced, this number supports victory through effort and strong intent.`,
    shortDescHi: "साहस और कर्म से भाग्य सक्रिय होता है।",
    fullDescHi: `भाग्यांक 9 वाले लोगों के जीवन में कर्म और निर्णय बहुत महत्वपूर्ण होते हैं।

जीवन कई बार इन्हें साहसपूर्ण परिस्थितियों में आगे बढ़ाता है।

ऐसे लोग अक्सर मजबूत इच्छाशक्ति के साथ बड़े निर्णय लेते हैं।

इनके लिए ऊर्जा का सही उपयोग भाग्य को तेज़ी से सक्रिय करता है।

जब यह शक्ति संतुलित रहती है, तब यह संख्या उपलब्धि और प्रभाव दोनों देती है।`,
    positiveTraits: ["Courage", "Determination"],
    cautionTraits: ["Anger", "Forceful reactions"],
    career: ["Leadership", "Medical", "Protection services"],
    health: ["Blood heat", "Inflammation"],
    luckyNumbers: [9, 3, 1],
    luckyDays: ["Tuesday"],
    luckyColors: ["Red"],
    luckyStone: "मूंगा",
    luckyStoneEn: "Red Coral",
  },
];

// ── GET FORTUNE DATA FROM FULL DOB ─────────────────────────
// Usage: getFortuneNumber(14, 8, 1985)

export function getFortuneNumber(dd, mm, yyyy) {
  const raw = `${dd}${mm}${yyyy}`;
  let total = raw.split("").reduce((sum, d) => sum + parseInt(d, 10), 0);

  while (total > 9) {
    total = String(total)
      .split("")
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
  }

  return FORTUNE_NUMBERS.find((f) => f.number === total) ?? null;
}
