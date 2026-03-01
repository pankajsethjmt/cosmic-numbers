// ============================================================
// sunSign.js — Vedic Sun Sign (Nirayan / Sidereal system)
// Fits in utils/ alongside basicNumerology, dateNumerology etc.
// ============================================================

// ── PLANET → RULING NUMBER (matches PLANET_BY_NUMBER in basicNumerology) ──
export const PLANET_NUMBER = {
  Sun:     1,
  Moon:    2,
  Jupiter: 3,
  Rahu:    4,
  Mercury: 5,
  Venus:   6,
  Ketu:    7,
  Saturn:  8,
  Mars:    9,
};

// ── VEDIC SUN SIGNS — Sidereal / Nirayan dates ────────────
export const SUN_SIGNS = [
  {
    id:          "mesh",
    symbol:      "♈",
    nameEn:      "Aries",
    nameHi:      "मेष",
    dateRange:   "Apr 14 – May 14",
    startMonth: 4,  startDay: 14,
    endMonth:   5,  endDay:   14,
    rulingPlanet: { en: "Mars",    hi: "मंगल"     },
    rulingNumber: PLANET_NUMBER["Mars"],
    element:      { en: "Fire",    hi: "अग्नि"    },
    quality:      { en: "Cardinal", hi: "चर"      },
    descEn: "You are bold, energetic and a natural born leader. Fearless by nature, you charge ahead with enthusiasm and rarely back down from a challenge. Your pioneering spirit inspires those around you.",
    descHi: "आप साहसी, ऊर्जावान और जन्मजात नेता हैं। निडर स्वभाव के साथ आप उत्साह से आगे बढ़ते हैं और चुनौतियों से कभी पीछे नहीं हटते। आपकी अग्रणी भावना दूसरों को प्रेरित करती है।",
  },
  {
    id:          "vrishabh",
    symbol:      "♉",
    nameEn:      "Taurus",
    nameHi:      "वृषभ",
    dateRange:   "May 15 – Jun 14",
    startMonth: 5,  startDay: 15,
    endMonth:   6,  endDay:   14,
    rulingPlanet: { en: "Venus",   hi: "शुक्र"    },
    rulingNumber: PLANET_NUMBER["Venus"],
    element:      { en: "Earth",   hi: "पृथ्वी"   },
    quality:      { en: "Fixed",   hi: "स्थिर"    },
    descEn: "You are patient, reliable and deeply grounded. With a love for beauty, comfort and the finer things in life, you build with steady determination. Your loyalty and persistence are your greatest strengths.",
    descHi: "आप धैर्यवान, विश्वसनीय और गहरे जमीन से जुड़े हैं। सुंदरता और आराम के प्रेमी, आप दृढ़ संकल्प से निर्माण करते हैं। आपकी वफादारी और दृढ़ता आपकी सबसे बड़ी शक्ति है।",
  },
  {
    id:          "mithun",
    symbol:      "♊",
    nameEn:      "Gemini",
    nameHi:      "मिथुन",
    dateRange:   "Jun 15 – Jul 15",
    startMonth: 6,  startDay: 15,
    endMonth:   7,  endDay:   15,
    rulingPlanet: { en: "Mercury", hi: "बुध"      },
    rulingNumber: PLANET_NUMBER["Mercury"],
    element:      { en: "Air",     hi: "वायु"     },
    quality:      { en: "Mutable", hi: "द्विस्वभाव" },
    descEn: "You are quick-witted, curious and endlessly adaptable. Your mind moves at lightning speed, absorbing information from all directions. A gifted communicator, you thrive in social settings and intellectual discussions.",
    descHi: "आप तीव्र बुद्धि, जिज्ञासु और अत्यंत अनुकूलनीय हैं। आपका मन बिजली की गति से चलता है। एक कुशल संचारक के रूप में आप सामाजिक और बौद्धिक माहौल में उत्कर्ष पाते हैं।",
  },
  {
    id:          "kark",
    symbol:      "♋",
    nameEn:      "Cancer",
    nameHi:      "कर्क",
    dateRange:   "Jul 16 – Aug 16",
    startMonth: 7,  startDay: 16,
    endMonth:   8,  endDay:   16,
    rulingPlanet: { en: "Moon",    hi: "चंद्रमा"  },
    rulingNumber: PLANET_NUMBER["Moon"],
    element:      { en: "Water",   hi: "जल"       },
    quality:      { en: "Cardinal", hi: "चर"      },
    descEn: "You are deeply intuitive, nurturing and emotionally sensitive. Home and family are sacred to you. Your empathy allows you to understand others at a soul level, making you a natural healer and protector.",
    descHi: "आप गहरे अंतर्ज्ञानी, पोषणकारी और भावनात्मक रूप से संवेदनशील हैं। घर और परिवार आपके लिए पवित्र है। आपकी सहानुभूति आपको दूसरों को आत्मा के स्तर पर समझने देती है।",
  },
  {
    id:          "simha",
    symbol:      "♌",
    nameEn:      "Leo",
    nameHi:      "सिंह",
    dateRange:   "Aug 17 – Sep 16",
    startMonth: 8,  startDay: 17,
    endMonth:   9,  endDay:   16,
    rulingPlanet: { en: "Sun",     hi: "सूर्य"    },
    rulingNumber: PLANET_NUMBER["Sun"],
    element:      { en: "Fire",    hi: "अग्नि"    },
    quality:      { en: "Fixed",   hi: "स्थिर"    },
    descEn: "You are radiant, confident and born to shine. A natural performer and leader, you carry yourself with royal dignity. Your warmth and generosity draw people toward you like moths to a flame.",
    descHi: "आप तेजस्वी, आत्मविश्वासी और चमकने के लिए जन्मे हैं। एक स्वाभाविक नेता, आप राजसी गरिमा के साथ चलते हैं। आपकी उदारता और गर्मजोशी लोगों को आपकी ओर खींचती है।",
  },
  {
    id:          "kanya",
    symbol:      "♍",
    nameEn:      "Virgo",
    nameHi:      "कन्या",
    dateRange:   "Sep 17 – Oct 16",
    startMonth: 9,  startDay: 17,
    endMonth:   10, endDay:   16,
    rulingPlanet: { en: "Mercury", hi: "बुध"      },
    rulingNumber: PLANET_NUMBER["Mercury"],
    element:      { en: "Earth",   hi: "पृथ्वी"   },
    quality:      { en: "Mutable", hi: "द्विस्वभाव" },
    descEn: "You are analytical, precise and driven by a desire for perfection. With a sharp eye for detail and a practical mind, you excel at solving complex problems. Your dedication to service is unmatched.",
    descHi: "आप विश्लेषणात्मक, सटीक और पूर्णता की चाह से प्रेरित हैं। विवरण पर गहरी नज़र और व्यावहारिक मन के साथ आप जटिल समस्याओं को सुलझाने में उत्कृष्ट हैं।",
  },
  {
    id:          "tula",
    symbol:      "♎",
    nameEn:      "Libra",
    nameHi:      "तुला",
    dateRange:   "Oct 17 – Nov 15",
    startMonth: 10, startDay: 17,
    endMonth:   11, endDay:   15,
    rulingPlanet: { en: "Venus",   hi: "शुक्र"    },
    rulingNumber: PLANET_NUMBER["Venus"],
    element:      { en: "Air",     hi: "वायु"     },
    quality:      { en: "Cardinal", hi: "चर"      },
    descEn: "You are charming, diplomatic and a lover of beauty and balance. You have a rare gift for seeing all sides of a situation and bringing harmony to conflict. Justice and fairness are your guiding principles.",
    descHi: "आप आकर्षक, कूटनीतिक और सुंदरता व संतुलन के प्रेमी हैं। आपके पास किसी भी स्थिति के सभी पहलुओं को देखने और संघर्ष में सामंजस्य लाने की अद्भुत क्षमता है।",
  },
  {
    id:          "vrishchik",
    symbol:      "♏",
    nameEn:      "Scorpio",
    nameHi:      "वृश्चिक",
    dateRange:   "Nov 16 – Dec 15",
    startMonth: 11, startDay: 16,
    endMonth:   12, endDay:   15,
    rulingPlanet: { en: "Mars",    hi: "मंगल"     },
    rulingNumber: PLANET_NUMBER["Mars"],
    element:      { en: "Water",   hi: "जल"       },
    quality:      { en: "Fixed",   hi: "स्थिर"    },
    descEn: "You are intense, passionate and fiercely perceptive. Drawn to life's mysteries, you possess an extraordinary ability to transform through adversity. Your willpower and depth of emotion make you unforgettable.",
    descHi: "आप तीव्र, भावुक और तीक्ष्ण बुद्धि के हैं। जीवन के रहस्यों की ओर आकर्षित, आपमें प्रतिकूल परिस्थितियों में खुद को रूपांतरित करने की असाधारण क्षमता है।",
  },
  {
    id:          "dhanu",
    symbol:      "♐",
    nameEn:      "Sagittarius",
    nameHi:      "धनु",
    dateRange:   "Dec 16 – Jan 13",
    startMonth: 12, startDay: 16,
    endMonth:   1,  endDay:   13,
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    rulingNumber: PLANET_NUMBER["Jupiter"],
    element:      { en: "Fire",    hi: "अग्नि"    },
    quality:      { en: "Mutable", hi: "द्विस्वभाव" },
    descEn: "You are optimistic, freedom-loving and always seeking higher truth. A natural philosopher and explorer, you find meaning in every experience. Your enthusiasm and honesty inspire others to dream bigger.",
    descHi: "आप आशावादी, स्वतंत्रता-प्रेमी और हमेशा उच्च सत्य की खोज में रहते हैं। एक स्वाभाविक दार्शनिक और अन्वेषक, आप हर अनुभव में अर्थ खोजते हैं।",
  },
  {
    id:          "makar",
    symbol:      "♑",
    nameEn:      "Capricorn",
    nameHi:      "मकर",
    dateRange:   "Jan 14 – Feb 11",
    startMonth: 1,  startDay: 14,
    endMonth:   2,  endDay:   11,
    rulingPlanet: { en: "Saturn",  hi: "शनि"      },
    rulingNumber: PLANET_NUMBER["Saturn"],
    element:      { en: "Earth",   hi: "पृथ्वी"   },
    quality:      { en: "Cardinal", hi: "चर"      },
    descEn: "You are disciplined, ambitious and built for the long game. With an unwavering work ethic and a strategic mind, you steadily climb toward your goals. Your patience and resilience are legendary.",
    descHi: "आप अनुशासित, महत्वाकांक्षी और दीर्घकालिक खेल के लिए बने हैं। अटूट कार्य नीति और रणनीतिक मन के साथ आप अपने लक्ष्यों की ओर स्थिर रूप से बढ़ते हैं।",
  },
  {
    id:          "kumbh",
    symbol:      "♒",
    nameEn:      "Aquarius",
    nameHi:      "कुम्भ",
    dateRange:   "Feb 12 – Mar 12",
    startMonth: 2,  startDay: 12,
    endMonth:   3,  endDay:   12,
    rulingPlanet: { en: "Saturn",  hi: "शनि"      },
    rulingNumber: PLANET_NUMBER["Saturn"],
    element:      { en: "Air",     hi: "वायु"     },
    quality:      { en: "Fixed",   hi: "स्थिर"    },
    descEn: "You are visionary, independent and ahead of your time. With a humanitarian heart and an innovative mind, you seek to improve the world around you. Your originality and intellect set you apart from the crowd.",
    descHi: "आप दूरदर्शी, स्वतंत्र और अपने समय से आगे हैं। मानवतावादी हृदय और नवाचारी मन के साथ आप अपने आसपास की दुनिया को बेहतर बनाना चाहते हैं।",
  },
  {
    id:          "meen",
    symbol:      "♓",
    nameEn:      "Pisces",
    nameHi:      "मीन",
    dateRange:   "Mar 13 – Apr 13",
    startMonth: 3,  startDay: 13,
    endMonth:   4,  endDay:   13,
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    rulingNumber: PLANET_NUMBER["Jupiter"],
    element:      { en: "Water",   hi: "जल"       },
    quality:      { en: "Mutable", hi: "द्विस्वभाव" },
    descEn: "You are compassionate, intuitive and deeply spiritual. With an ocean of empathy within you, you absorb the emotions of those around you. Your creativity and imagination know no bounds.",
    descHi: "आप दयालु, अंतर्ज्ञानी और गहरे आध्यात्मिक हैं। आपके भीतर सहानुभूति का सागर है जो आपको दूसरों की भावनाओं को महसूस कराता है। आपकी रचनात्मकता और कल्पना की कोई सीमा नहीं।",
  },
];

// ── GET SUN SIGN FROM DD + MM ──────────────────────────────
export function getSunSign(dd, mm) {
  const day   = parseInt(dd, 10);
  const month = parseInt(mm, 10);

  for (const sign of SUN_SIGNS) {
    const { startMonth, startDay, endMonth, endDay } = sign;

    // Cross-year sign (Dhanu: Dec 16 – Jan 13)
    if (startMonth > endMonth) {
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth   && day <= endDay)   ||
        month > startMonth ||
        month < endMonth
      ) return sign;
    } else {
      // Normal range within same year
      if (
        (month === startMonth && day >= startDay) ||
        (month > startMonth   && month < endMonth) ||
        (month === endMonth   && day <= endDay)
      ) return sign;
    }
  }

  return null;
}
