// ============================================================
// sunSign.js — Vedic Sun Sign (Nirayan / Sidereal system)
// Fits in utils/ alongside basicNumerology, dateNumerology etc.
// ============================================================

// ── PLANET → RULING NUMBER (matches PLANET_BY_NUMBER in basicNumerology) ──
export const PLANET_NUMBER = {
  Sun: 1,
  Moon: 2,
  Jupiter: 3,
  Rahu: 4,
  Mercury: 5,
  Venus: 6,
  Ketu: 7,
  Saturn: 8,
  Mars: 9,
};

// ── VEDIC SUN SIGNS — Sidereal / Nirayan dates ────────────
export const SUN_SIGNS = [
  {
    id: "mesh",
    symbol: "♈",
    nameEn: "Aries",
    nameHi: "मेष",
    dateRange: "Apr 14 – May 14",
    startMonth: 4,
    startDay: 14,
    endMonth: 5,
    endDay: 14,
    rulingPlanet: { en: "Mars", hi: "मंगल" },
    rulingNumber: PLANET_NUMBER["Mars"],
    element: { en: "Fire", hi: "अग्नि" },
    quality: { en: "Cardinal", hi: "चर" },
    coreNature: {
      en: "Action, courage, direct force",
      hi: "कर्म, साहस, सीधी ऊर्जा",
    },
    positiveTraits: ["Leadership", "Courage", "Independence"],
    cautionTraits: ["Anger", "Impatience", "Overreaction"],
    career: ["Administration", "Police", "Engineering"],
    health: ["Head pain", "Blood heat", "Fever tendency"],
    luckyNumbers: [1, 9, 3],
    luckyDays: ["Tuesday", "Sunday"],
    luckyColors: ["Red"],
    luckyStone: "मूंगा",
    luckyStoneEn: "Red Coral",
    descEn:
      "You are bold, energetic and a natural born leader. Fearless by nature, you charge ahead with enthusiasm and rarely back down from a challenge. Your pioneering spirit inspires those around you.",
    descHi:
      "आप साहसी, ऊर्जावान और जन्मजात नेता हैं। निडर स्वभाव के साथ आप उत्साह से आगे बढ़ते हैं और चुनौतियों से कभी पीछे नहीं हटते। आपकी अग्रणी भावना दूसरों को प्रेरित करती है।",
    shortDescEn:
      "You carry strong Mars energy, making your personality bold, active, and naturally independent.",

    fullDescEn: `Aries Sun sign usually gives a direct and action-oriented nature. Such people often possess courage, self-respect, and a strong desire to move ahead by their own strength. They usually dislike unnecessary control and prefer taking initiative themselves.

There is often natural leadership in personality, along with quick decision-making ability. Anger may rise quickly, but the inner heart often remains straightforward and clean.

Early life may bring struggle or instability, yet determination usually helps them create success gradually. When focused properly, this sign supports authority, public influence, and strong personal identity.`,

    shortDescHi:
      "मेष सूर्य राशि व्यक्ति को साहसी, सक्रिय और स्वभाव से स्वतंत्र बनाती है।",

    fullDescHi: `मेष सूर्य राशि वाले जातकों में मंगल की सीधी ऊर्जा स्पष्ट दिखाई देती है। ऐसे लोग सामान्यतः साहसी, कर्मशील और आत्मसम्मान प्रधान होते हैं। ये अपने निर्णय स्वयं लेना पसंद करते हैं और किसी दबाव में रहना पसंद नहीं करते।

इनमें नेतृत्व की स्वाभाविक क्षमता होती है तथा कार्य आरम्भ करने की शक्ति प्रबल रहती है। क्रोध शीघ्र आता है, परंतु भीतर से स्वभाव सीधा और स्पष्ट रहता है।

प्रारम्भिक जीवन में कुछ संघर्ष हो सकते हैं, किन्तु दृढ़ इच्छाशक्ति इन्हें आगे बढ़ाती है। सही दिशा मिलने पर यह राशि प्रतिष्ठा, प्रभाव और व्यक्तिगत पहचान मजबूत करती है।`,
  },
  {
    id: "vrishabh",
    symbol: "♉",
    nameEn: "Taurus",
    nameHi: "वृषभ",
    dateRange: "May 15 – Jun 14",
    startMonth: 5,
    startDay: 15,
    endMonth: 6,
    endDay: 14,
    rulingPlanet: { en: "Venus", hi: "शुक्र" },
    rulingNumber: PLANET_NUMBER["Venus"],
    element: { en: "Earth", hi: "पृथ्वी" },
    quality: { en: "Fixed", hi: "स्थिर" },
    coreNature: {
      en: "Stability, comfort, material strength",
      hi: "स्थिरता, सुख, भौतिक शक्ति",
    },
    positiveTraits: ["Patience", "Practicality", "Persistence"],
    cautionTraits: ["Stubbornness", "Possessiveness"],
    career: ["Finance", "Hospitality", "Cosmetics"],
    health: ["Throat issues", "Cold tendency", "Digestive heaviness"],
    luckyNumbers: [6, 2, 5],
    luckyDays: ["Friday", "Monday"],
    luckyColors: ["White", "Cream"],
    luckyStone: "हीरा",
    luckyStoneEn: "Diamond",
    descEn:
      "You are patient, reliable and deeply grounded. With a love for beauty, comfort and the finer things in life, you build with steady determination. Your loyalty and persistence are your greatest strengths.",
    descHi:
      "आप धैर्यवान, विश्वसनीय और गहरे जमीन से जुड़े हैं। सुंदरता और आराम के प्रेमी, आप दृढ़ संकल्प से निर्माण करते हैं। आपकी वफादारी और दृढ़ता आपकी सबसे बड़ी शक्ति है।",
    shortDescEn:
      "Venus gives you steadiness, patience, and a practical attraction toward comfort and security.",

    fullDescEn: `Taurus Sun sign usually creates a calm but determined personality. Such people often work steadily and do not easily leave a chosen path once committed.

There is usually attraction toward material stability, comfort, and well-managed surroundings. Speech often carries softness, yet stubbornness appears when personal views are challenged.

These natives often progress through patience rather than speed. Financial understanding is usually practical, though emotional attachment can sometimes create internal pressure.

When balanced, Taurus supports wealth building, stable social respect, and dependable long-term growth.`,

    shortDescHi:
      "वृषभ सूर्य राशि व्यक्ति को स्थिर, धैर्यवान और व्यवहारिक बनाती है।",

    fullDescHi: `वृषभ सूर्य राशि में शुक्र का प्रभाव व्यक्ति को शांत किन्तु दृढ़ स्वभाव देता है। ऐसे लोग सामान्यतः धैर्यपूर्वक कार्य करते हैं और एक बार किसी दिशा में बढ़ने पर आसानी से पीछे नहीं हटते।

जीवन में सुख, सुविधा और स्थिरता की चाह स्पष्ट रहती है। वाणी में मधुरता होती है, परंतु अपने विचारों पर अड़ जाने की प्रवृत्ति भी दिखाई दे सकती है।

आर्थिक मामलों में व्यवहारिक सोच रहती है और धीरे-धीरे स्थायी उन्नति बनती है। संतुलन रहने पर यह राशि धन, सम्मान और स्थिर प्रगति देती है।`,
  },
  {
    id: "mithun",
    symbol: "♊",
    nameEn: "Gemini",
    nameHi: "मिथुन",
    dateRange: "Jun 15 – Jul 15",
    startMonth: 6,
    startDay: 15,
    endMonth: 7,
    endDay: 15,
    rulingPlanet: { en: "Mercury", hi: "बुध" },
    rulingNumber: PLANET_NUMBER["Mercury"],
    element: { en: "Air", hi: "वायु" },
    quality: { en: "Mutable", hi: "द्विस्वभाव" },
    coreNature: {
      en: "Communication, intellect, movement",
      hi: "संवाद, बुद्धि, गतिशीलता",
    },
    positiveTraits: ["Intelligence", "Adaptability", "Communication"],
    cautionTraits: ["Restlessness", "Dual thinking"],
    career: ["Writing", "Teaching", "Media"],
    health: ["Nerves", "Respiratory issues", "Sleep disturbance"],
    luckyNumbers: [5, 6, 1],
    luckyDays: ["Wednesday"],
    luckyColors: ["Green"],
    luckyStone: "पन्ना",
    luckyStoneEn: "Emerald",
    descEn:
      "You are quick-witted, curious and endlessly adaptable. Your mind moves at lightning speed, absorbing information from all directions. A gifted communicator, you thrive in social settings and intellectual discussions.",
    descHi:
      "आप तीव्र बुद्धि, जिज्ञासु और अत्यंत अनुकूलनीय हैं। आपका मन बिजली की गति से चलता है। एक कुशल संचारक के रूप में आप सामाजिक और बौद्धिक माहौल में उत्कर्ष पाते हैं।",
    shortDescEn:
      "Mercury makes your mind fast, expressive, and naturally curious.",

    fullDescEn: `Gemini Sun sign usually gives a quick-thinking and socially adaptable personality. Such people often learn fast and communicate ideas easily.

There is natural skill in speaking, writing, and handling changing situations. Mental activity remains high, so they often think in multiple directions at once.

This sign supports versatility, but too many interests may reduce consistency. Such natives usually succeed where communication, movement, or calculation matters.

When focused properly, Gemini gives strong practical intelligence and flexible growth.`,

    shortDescHi:
      "मिथुन सूर्य राशि व्यक्ति को तीव्र बुद्धि और संवाद कौशल देती है।",

    fullDescHi: `मिथुन सूर्य राशि में बुध का प्रभाव व्यक्ति को तीव्र सोच, संवाद क्षमता और बदलती परिस्थितियों में अनुकूल बनाता है। ऐसे लोग शीघ्र सीखते हैं और अपनी बात प्रभावी ढंग से रखते हैं।

वाणी, लेखन, गणना तथा सामाजिक व्यवहार में कुशलता दिखाई देती है। मन कई दिशाओं में चलता है, इसलिए कभी-कभी स्थिरता कम हो सकती है।

यदि एकाग्रता बनी रहे तो यह राशि व्यापार, लेखन, शिक्षा और संचार में विशेष सफलता देती है।`,
  },
  {
    id: "kark",
    symbol: "♋",
    nameEn: "Cancer",
    nameHi: "कर्क",
    dateRange: "Jul 16 – Aug 16",
    startMonth: 7,
    startDay: 16,
    endMonth: 8,
    endDay: 16,
    rulingPlanet: { en: "Moon", hi: "चंद्रमा" },
    rulingNumber: PLANET_NUMBER["Moon"],
    element: { en: "Water", hi: "जल" },
    quality: { en: "Cardinal", hi: "चर" },
    coreNature: {
      en: "Emotion, care, inner sensitivity",
      hi: "भावना, संरक्षण, आंतरिक संवेदनशीलता",
    },
    positiveTraits: ["Sensitivity", "Care", "Intuition"],
    cautionTraits: ["Mood swings", "Overthinking"],
    career: ["Travel", "Food", "Public dealing"],
    health: ["Cold", "Chest sensitivity", "Digestion"],
    luckyNumbers: [2, 7, 1],
    luckyDays: ["Monday"],
    luckyColors: ["White"],
    luckyStone: "मोती",
    luckyStoneEn: "Pearl",
    descEn:
      "You are deeply intuitive, nurturing and emotionally sensitive. Home and family are sacred to you. Your empathy allows you to understand others at a soul level, making you a natural healer and protector.",
    descHi:
      "आप गहरे अंतर्ज्ञानी, पोषणकारी और भावनात्मक रूप से संवेदनशील हैं। घर और परिवार आपके लिए पवित्र है। आपकी सहानुभूति आपको दूसरों को आत्मा के स्तर पर समझने देती है।",
    shortDescEn:
      "Moon gives emotional depth, inner sensitivity, and protective instincts.",

    fullDescEn: `Cancer Sun sign usually creates a thoughtful and emotionally aware personality. Such people often respond strongly to surroundings and relationships.

There is natural care for family, security, and emotional belonging. Imagination remains active, and inner thoughts may stay hidden even when feelings are strong.

Mental fluctuations may influence decisions, yet intuition often remains powerful. Such natives usually progress when emotional balance is maintained.

When mature, Cancer supports loyalty, compassion, and inner strength.`,

    shortDescHi:
      "कर्क सूर्य राशि व्यक्ति को भावनात्मक गहराई और संवेदनशीलता देती है।",

    fullDescHi: `कर्क सूर्य राशि में चंद्रमा का प्रभाव व्यक्ति को संवेदनशील, कल्पनाशील और भीतर से गहराई वाला बनाता है। ऐसे लोग संबंधों और परिवार को विशेष महत्व देते हैं।

मन में अनेक विचार चलते रहते हैं और भावनाएँ भीतर गहराई से अनुभव होती हैं। बाहरी रूप से शांत दिखने पर भी भीतर चिंता या सोच सक्रिय रह सकती है।

यदि मानसिक संतुलन बना रहे तो यह राशि करुणा, निष्ठा और गहरी समझ प्रदान करती है।`,
  },
  {
    id: "simha",
    symbol: "♌",
    nameEn: "Leo",
    nameHi: "सिंह",
    dateRange: "Aug 17 – Sep 16",
    startMonth: 8,
    startDay: 17,
    endMonth: 9,
    endDay: 16,
    rulingPlanet: { en: "Sun", hi: "सूर्य" },
    rulingNumber: PLANET_NUMBER["Sun"],
    element: { en: "Fire", hi: "अग्नि" },
    quality: { en: "Fixed", hi: "स्थिर" },
    coreNature: {
      en: "Authority, identity, solar force",
      hi: "अधिकार, पहचान, सूर्य शक्ति",
    },
    positiveTraits: ["Confidence", "Authority", "Generosity"],
    cautionTraits: ["Ego", "Rigidity"],
    career: ["Government", "Leadership", "Administration"],
    health: ["Heart care", "Heat imbalance", "Digestion"],
    luckyNumbers: [1, 4, 9],
    luckyDays: ["Sunday"],
    luckyColors: ["Golden", "Orange"],
    luckyStone: "माणिक्य",
    luckyStoneEn: "Ruby",
    descEn:
      "You are radiant, confident and born to shine. A natural performer and leader, you carry yourself with royal dignity. Your warmth and generosity draw people toward you like moths to a flame.",
    descHi:
      "आप तेजस्वी, आत्मविश्वासी और चमकने के लिए जन्मे हैं। एक स्वाभाविक नेता, आप राजसी गरिमा के साथ चलते हैं। आपकी उदारता और गर्मजोशी लोगों को आपकी ओर खींचती है।",
    shortDescEn:
      "Solar force gives you presence, confidence, and natural authority.",

    fullDescEn: `Leo Sun sign usually creates a visible personality that attracts attention naturally. Such people often carry dignity and prefer to act with self-respect.

Leadership instinct appears strongly, and they usually dislike remaining unnoticed in important situations.

There is generosity in nature, yet ego may become sensitive when respect is lacking. Such natives often do well when responsibility is accepted openly.

When balanced, Leo supports name, authority, and strong personal recognition.`,

    shortDescHi:
      "सिंह सूर्य राशि व्यक्ति को तेज, आत्मविश्वास और प्रभाव देती है।",

    fullDescHi: `सिंह सूर्य राशि में सूर्य का प्रभाव व्यक्ति को स्वाभाविक तेज, आत्मविश्वास और प्रभावशाली उपस्थिति देता है। ऐसे लोग सामान्यतः सम्मान के साथ जीना चाहते हैं।

नेतृत्व क्षमता स्पष्ट रहती है और महत्वपूर्ण परिस्थितियों में आगे आने की प्रवृत्ति रहती है।

आत्मसम्मान प्रबल होता है, इसलिए अपमान या विरोध आसानी से स्वीकार नहीं होता। संतुलन रहने पर यह राशि नाम, अधिकार और प्रतिष्ठा देती है।`,
  },
  {
    id: "kanya",
    symbol: "♍",
    nameEn: "Virgo",
    nameHi: "कन्या",
    dateRange: "Sep 17 – Oct 16",
    startMonth: 9,
    startDay: 17,
    endMonth: 10,
    endDay: 16,
    rulingPlanet: { en: "Mercury", hi: "बुध" },
    rulingNumber: PLANET_NUMBER["Mercury"],
    element: { en: "Earth", hi: "पृथ्वी" },
    quality: { en: "Mutable", hi: "द्विस्वभाव" },
    coreNature: {
      en: "Analysis, precision, discipline",
      hi: "विश्लेषण, सूक्ष्मता, अनुशासन",
    },
    positiveTraits: ["Detail focus", "Logic", "Discipline"],
    cautionTraits: ["Overthinking", "Self-criticism"],
    career: ["Accounting", "Writing", "Research"],
    health: ["Digestive issues", "Nervous strain"],
    luckyNumbers: [5, 3, 6],
    luckyDays: ["Wednesday"],
    luckyColors: ["Green", "Light Brown"],
    luckyStone: "पन्ना",
    luckyStoneEn: "Emerald",
    descEn:
      "You are analytical, precise and driven by a desire for perfection. With a sharp eye for detail and a practical mind, you excel at solving complex problems. Your dedication to service is unmatched.",
    descHi:
      "आप विश्लेषणात्मक, सटीक और पूर्णता की चाह से प्रेरित हैं। विवरण पर गहरी नज़र और व्यावहारिक मन के साथ आप जटिल समस्याओं को सुलझाने में उत्कृष्ट हैं।",
    shortDescEn:
      "Mercury here works through detail, discipline, and sharp observation.",

    fullDescEn: `Virgo Sun sign usually gives a careful and analytical personality. Such people notice details others often ignore.

Practical thinking remains strong, and there is often skill in correction, planning, and structured work.

They may appear reserved initially, but inner intelligence remains active and organized.

When balanced, Virgo supports disciplined progress, technical skill, and reliable judgement.`,

    shortDescHi:
      "कन्या सूर्य राशि व्यक्ति को सूक्ष्म दृष्टि और विश्लेषण शक्ति देती है।",

    fullDescHi: `कन्या सूर्य राशि में बुध व्यक्ति को सूक्ष्म निरीक्षण, तार्किक सोच और व्यवस्थित कार्यशैली देता है। ऐसे लोग छोटी बातों पर भी ध्यान देते हैं।

व्यवहार में संयम और कार्य में शुद्धता की इच्छा रहती है। कई बार स्वयं से अधिक अपेक्षा रखने के कारण मानसिक दबाव भी बन सकता है।

संतुलित अवस्था में यह राशि कौशल, अनुशासन और विश्वसनीय सफलता देती है।`,
  },
  {
    id: "tula",
    symbol: "♎",
    nameEn: "Libra",
    nameHi: "तुला",
    dateRange: "Oct 17 – Nov 15",
    startMonth: 10,
    startDay: 17,
    endMonth: 11,
    endDay: 15,
    rulingPlanet: { en: "Venus", hi: "शुक्र" },
    rulingNumber: PLANET_NUMBER["Venus"],
    element: { en: "Air", hi: "वायु" },
    quality: { en: "Cardinal", hi: "चर" },
    coreNature: {
      en: "Balance, relationship, harmony",
      hi: "संतुलन, संबंध, सामंजस्य",
    },
    positiveTraits: ["Diplomacy", "Grace", "Social sense"],
    cautionTraits: ["Indecision", "Dependency"],
    career: ["Business", "Law", "Finance"],
    health: ["Back pain", "Kidney care", "Sugar balance"],
    luckyNumbers: [6, 2, 9],
    luckyDays: ["Friday"],
    luckyColors: ["White", "Pink"],
    luckyStone: "हीरा",
    luckyStoneEn: "Diamond",
    descEn:
      "You are charming, diplomatic and a lover of beauty and balance. You have a rare gift for seeing all sides of a situation and bringing harmony to conflict. Justice and fairness are your guiding principles.",
    descHi:
      "आप आकर्षक, कूटनीतिक और सुंदरता व संतुलन के प्रेमी हैं। आपके पास किसी भी स्थिति के सभी पहलुओं को देखने और संघर्ष में सामंजस्य लाने की अद्भुत क्षमता है।",
    shortDescEn:
      "Venus makes you relationship-aware, refined, and balance-seeking.",

    fullDescEn: `Libra Sun sign usually gives social awareness and a strong desire for harmony. Such people often think carefully before taking sides.

There is attraction toward fairness, beauty, and social presentation. Yet inner indecision may appear when too many factors are weighed together.

This sign often progresses through diplomacy, social handling, and thoughtful partnerships.

When balanced, Libra supports grace, negotiation skill, and refined judgement.`,

    shortDescHi: "तुला सूर्य राशि व्यक्ति को संतुलन और संबंधों की समझ देती है।",

    fullDescHi: `तुला सूर्य राशि में शुक्र व्यक्ति को संतुलित सोच, सामाजिक व्यवहार और सामंजस्य की इच्छा देता है। ऐसे लोग निर्णय से पहले दोनों पक्ष देखने का प्रयास करते हैं।

सुंदरता, संबंध और सामाजिक छवि का महत्व रहता है। कभी-कभी अधिक विचार के कारण निर्णय देर से होते हैं।

संतुलन रहने पर यह राशि संबंधों, व्यापार और व्यवहारिक सफलता में सहायक बनती है।`,
  },
  {
    id: "vrishchik",
    symbol: "♏",
    nameEn: "Scorpio",
    nameHi: "वृश्चिक",
    dateRange: "Nov 16 – Dec 15",
    startMonth: 11,
    startDay: 16,
    endMonth: 12,
    endDay: 15,
    rulingPlanet: { en: "Mars", hi: "मंगल" },
    rulingNumber: PLANET_NUMBER["Mars"],
    element: { en: "Water", hi: "जल" },
    quality: { en: "Fixed", hi: "स्थिर" },
    coreNature: {
      en: "Intensity, secrecy, deep will",
      hi: "गहराई, रहस्य, तीव्र इच्छा",
    },
    positiveTraits: ["Determination", "Depth", "Fearlessness"],
    cautionTraits: ["Revenge tendency", "Mental aggression"],
    career: ["Medicine", "Research", "Engineering"],
    health: ["Hormonal issues", "Skin heat", "Digestive stress"],
    luckyNumbers: [9, 1, 2],
    luckyDays: ["Tuesday"],
    luckyColors: ["Red", "Maroon"],
    luckyStone: "मूंगा",
    luckyStoneEn: "Red Coral",
    descEn:
      "You are intense, passionate and fiercely perceptive. Drawn to life's mysteries, you possess an extraordinary ability to transform through adversity. Your willpower and depth of emotion make you unforgettable.",
    descHi:
      "आप तीव्र, भावुक और तीक्ष्ण बुद्धि के हैं। जीवन के रहस्यों की ओर आकर्षित, आपमें प्रतिकूल परिस्थितियों में खुद को रूपांतरित करने की असाधारण क्षमता है।",
    shortDescEn:
      "Mars here acts through inner force, secrecy, and intense determination.",

    fullDescEn: `Scorpio Sun sign usually creates depth, mental strength, and strong internal reactions. Such people often do not reveal themselves easily.

There is courage, but expression may remain controlled until emotion becomes intense.

They observe carefully, remember deeply, and may react strongly when trust breaks.

When mature, Scorpio supports resilience, strategy, and powerful transformation.`,

    shortDescHi:
      "वृश्चिक सूर्य राशि व्यक्ति को गहराई और तीव्र मानसिक शक्ति देती है।",

    fullDescHi: `वृश्चिक सूर्य राशि में मंगल की ऊर्जा भीतर से तीव्र रूप में कार्य करती है। ऐसे लोग अपनी भावनाएँ सहजता से प्रकट नहीं करते।

साहस रहता है, परंतु प्रतिक्रिया भीतर संचित होकर बाद में प्रबल रूप में निकल सकती है।

विश्वास टूटने पर प्रतिक्रिया गहरी हो सकती है। संतुलन रहने पर यह राशि अद्भुत धैर्य, रणनीति और परिवर्तन क्षमता देती है।`,
  },
  {
    id: "dhanu",
    symbol: "♐",
    nameEn: "Sagittarius",
    nameHi: "धनु",
    dateRange: "Dec 16 – Jan 13",
    startMonth: 12,
    startDay: 16,
    endMonth: 1,
    endDay: 13,
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    rulingNumber: PLANET_NUMBER["Jupiter"],
    element: { en: "Fire", hi: "अग्नि" },
    quality: { en: "Mutable", hi: "द्विस्वभाव" },
    coreNature: {
      en: "Wisdom, expansion, guidance",
      hi: "ज्ञान, विस्तार, मार्गदर्शन",
    },
    positiveTraits: ["Wisdom", "Optimism", "Morality"],
    cautionTraits: ["Temper", "Overconfidence"],
    career: ["Teaching", "Law", "Advisory"],
    health: ["Liver care", "Gas tendency", "Thigh weakness"],
    luckyNumbers: [3, 1, 9],
    luckyDays: ["Thursday"],
    luckyColors: ["Yellow"],
    luckyStone: "पुखराज",
    luckyStoneEn: "Yellow Sapphire",
    descEn:
      "You are optimistic, freedom-loving and always seeking higher truth. A natural philosopher and explorer, you find meaning in every experience. Your enthusiasm and honesty inspire others to dream bigger.",
    descHi:
      "आप आशावादी, स्वतंत्रता-प्रेमी और हमेशा उच्च सत्य की खोज में रहते हैं। एक स्वाभाविक दार्शनिक और अन्वेषक, आप हर अनुभव में अर्थ खोजते हैं।",
    shortDescEn: "Jupiter gives vision, morality, and forward movement.",

    fullDescEn: `Sagittarius Sun sign usually gives an open and growth-oriented personality. Such people often value knowledge and wider understanding.

There is natural optimism and a tendency to think beyond immediate limitations.

They usually prefer freedom in thought and dislike narrow control.

When balanced, Sagittarius supports guidance, expansion, and respected growth.`,

    shortDescHi: "धनु सूर्य राशि व्यक्ति को विस्तार और ज्ञान की दिशा देती है।",

    fullDescHi: `धनु सूर्य राशि में बृहस्पति व्यक्ति को व्यापक सोच, ज्ञान की रुचि और आगे बढ़ने की प्रेरणा देता है। ऐसे लोग सामान्यतः खुले विचार रखते हैं।

स्वतंत्र सोच और सत्य की ओर झुकाव स्पष्ट रहता है।

जीवन में अनुभवों से समझ बढ़ती है और सही दिशा मिलने पर सम्मान तथा स्थिर उन्नति मिलती है।`,
  },
  {
    id: "makar",
    symbol: "♑",
    nameEn: "Capricorn",
    nameHi: "मकर",
    dateRange: "Jan 14 – Feb 11",
    startMonth: 1,
    startDay: 14,
    endMonth: 2,
    endDay: 11,
    rulingPlanet: { en: "Saturn", hi: "शनि" },
    rulingNumber: PLANET_NUMBER["Saturn"],
    element: { en: "Earth", hi: "पृथ्वी" },
    quality: { en: "Cardinal", hi: "चर" },
    coreNature: {
      en: "Responsibility, endurance, structure",
      hi: "जिम्मेदारी, सहनशीलता, संरचना",
    },
    positiveTraits: ["Discipline", "Persistence", "Practicality"],
    cautionTraits: ["Rigidity", "Emotional dryness"],
    career: ["Construction", "Administration", "Industry"],
    health: ["Bones", "Joint pain", "Gas issues"],
    luckyNumbers: [8, 4, 6],
    luckyDays: ["Saturday"],
    luckyColors: ["Blue", "Grey"],
    luckyStone: "नीलम",
    luckyStoneEn: "Blue Sapphire",
    descEn:
      "You are disciplined, ambitious and built for the long game. With an unwavering work ethic and a strategic mind, you steadily climb toward your goals. Your patience and resilience are legendary.",
    descHi:
      "आप अनुशासित, महत्वाकांक्षी और दीर्घकालिक खेल के लिए बने हैं। अटूट कार्य नीति और रणनीतिक मन के साथ आप अपने लक्ष्यों की ओर स्थिर रूप से बढ़ते हैं।",
    shortDescEn:
      "Saturn gives endurance, responsibility, and practical seriousness.",

    fullDescEn: `Capricorn Sun sign usually builds life through effort, patience, and structure. Such people often think practically before acting.

They usually understand responsibility early and may carry serious inner determination.

Progress often comes slowly but remains stable when discipline is maintained.

When balanced, Capricorn supports durable achievement and strong professional growth.`,

    shortDescHi: "मकर सूर्य राशि व्यक्ति को धैर्य और जिम्मेदारी देती है।",

    fullDescHi: `मकर सूर्य राशि में शनि व्यक्ति को धैर्य, श्रम और व्यवहारिक सोच देता है। ऐसे लोग धीरे-धीरे पर स्थिर रूप से आगे बढ़ते हैं।

जिम्मेदारी की भावना प्रबल रहती है और जीवन को गंभीरता से देखने की आदत होती है।

आरम्भिक संघर्ष के बाद स्थायी उपलब्धि बनने की संभावना रहती है।`,
  },
  {
    id: "kumbh",
    symbol: "♒",
    nameEn: "Aquarius",
    nameHi: "कुम्भ",
    dateRange: "Feb 12 – Mar 12",
    startMonth: 2,
    startDay: 12,
    endMonth: 3,
    endDay: 12,
    rulingPlanet: { en: "Saturn", hi: "शनि" },
    rulingNumber: PLANET_NUMBER["Saturn"],
    element: { en: "Air", hi: "वायु" },
    quality: { en: "Fixed", hi: "स्थिर" },
    coreNature: {
      en: "Thought, reform, independence",
      hi: "विचार, सुधार, स्वतंत्रता",
    },
    positiveTraits: ["Innovation", "Independence", "Depth"],
    cautionTraits: ["Detachment", "Unpredictability"],
    career: ["Technology", "Research", "Advisory"],
    health: ["Blood circulation", "Nerves", "Fatigue"],
    luckyNumbers: [8, 4, 5],
    luckyDays: ["Saturday"],
    luckyColors: ["Blue"],
    luckyStone: "नीलम",
    luckyStoneEn: "Blue Sapphire",
    descEn:
      "You are visionary, independent and ahead of your time. With a humanitarian heart and an innovative mind, you seek to improve the world around you. Your originality and intellect set you apart from the crowd.",
    descHi:
      "आप दूरदर्शी, स्वतंत्र और अपने समय से आगे हैं। मानवतावादी हृदय और नवाचारी मन के साथ आप अपने आसपास की दुनिया को बेहतर बनाना चाहते हैं।",
    shortDescEn:
      "Saturn here works through thought, originality, and detached observation.",

    fullDescEn: `Aquarius Sun sign usually gives an independent mental framework. Such people often think differently from common patterns.

There is interest in systems, ideas, and larger social understanding.

Emotion may remain controlled while intellect stays active.

When balanced, Aquarius supports originality, reform, and long-range thinking.`,

    shortDescHi:
      "कुम्भ सूर्य राशि व्यक्ति को स्वतंत्र विचार और गहरी सोच देती है।",

    fullDescHi: `कुम्भ सूर्य राशि में शनि व्यक्ति को अलग सोचने की क्षमता देता है। ऐसे लोग सामान्य ढाँचे से हटकर विचार कर सकते हैं।

मन में गहराई रहती है और कई बार भावनाओं से अधिक विचार सक्रिय रहता है।

संतुलित अवस्था में यह राशि नवीन सोच, सुधार और दूरदर्शिता देती है।`,
  },
  {
    id: "meen",
    symbol: "♓",
    nameEn: "Pisces",
    nameHi: "मीन",
    dateRange: "Mar 13 – Apr 13",
    startMonth: 3,
    startDay: 13,
    endMonth: 4,
    endDay: 13,
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    rulingNumber: PLANET_NUMBER["Jupiter"],
    element: { en: "Water", hi: "जल" },
    quality: { en: "Mutable", hi: "द्विस्वभाव" },
    coreNature: {
      en: "Faith, intuition, compassion",
      hi: "श्रद्धा, अंतर्ज्ञान, करुणा",
    },
    positiveTraits: ["Compassion", "Imagination", "Spirituality"],
    cautionTraits: ["Emotional escape", "Indecision"],
    career: ["Healing", "Teaching", "Creative arts"],
    health: ["Cold tendency", "Sleep imbalance", "Feet sensitivity"],
    luckyNumbers: [3, 7, 2],
    luckyDays: ["Thursday", "Monday"],
    luckyColors: ["Yellow", "Cream"],
    luckyStone: "पुखराज",
    luckyStoneEn: "Yellow Sapphire",
    descEn:
      "You are compassionate, intuitive and deeply spiritual. With an ocean of empathy within you, you absorb the emotions of those around you. Your creativity and imagination know no bounds.",
    descHi:
      "आप दयालु, अंतर्ज्ञानी और गहरे आध्यात्मिक हैं। आपके भीतर सहानुभूति का सागर है जो आपको दूसरों की भावनाओं को महसूस कराता है। आपकी रचनात्मकता और कल्पना की कोई सीमा नहीं।",
    shortDescEn: "Jupiter gives intuition, compassion, and inward imagination.",

    fullDescEn: `Pisces Sun sign usually creates a sensitive and intuitive personality. Such people often understand emotional undercurrents quickly.

There is imagination, sympathy, and inner softness in approach.

Sometimes practical clarity becomes delayed because feeling dominates logic.

When balanced, Pisces supports wisdom, creativity, and spiritual maturity.`,

    shortDescHi: "मीन सूर्य राशि व्यक्ति को अंतर्ज्ञान और करुणा देती है।",

    fullDescHi: `मीन सूर्य राशि में बृहस्पति व्यक्ति को अंतर्ज्ञान, करुणा और कल्पनाशीलता देता है। ऐसे लोग दूसरों की भावनाएँ जल्दी समझ लेते हैं।

मन में कोमलता रहती है और भीतर आध्यात्मिक झुकाव भी बन सकता है।

यदि व्यावहारिक सोच संतुलित रहे तो यह राशि ज्ञान, रचनात्मकता और गहरी समझ देती है।`,
  },
];

// ── GET SUN SIGN FROM DD + MM ──────────────────────────────
export function getSunSign(dd, mm) {
  const day = parseInt(dd, 10);
  const month = parseInt(mm, 10);

  for (const sign of SUN_SIGNS) {
    const { startMonth, startDay, endMonth, endDay } = sign;

    // Cross-year sign (Dhanu: Dec 16 – Jan 13)
    if (startMonth > endMonth) {
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay) ||
        month > startMonth ||
        month < endMonth
      )
        return sign;
    } else {
      // Normal range within same year
      if (
        (month === startMonth && day >= startDay) ||
        (month > startMonth && month < endMonth) ||
        (month === endMonth && day <= endDay)
      )
        return sign;
    }
  }

  return null;
}
