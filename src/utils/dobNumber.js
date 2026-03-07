// ============================================================
// dateOfBirthNumber.js — Date of Birth Prediction Master Source
// Same architecture style as rootNumber.js
// Based on day-wise DOB prediction (1–31)
// ============================================================

// DOB file keeps same card-compatible field names as rootNumber.js,
// but prediction meaning is date-based (compound birth date).
// No ROOT_NUMBERS import needed — each DOB object is self-contained.

export const DOB_NUMBERS = [
  {
    id: "dob1",
    day: 1,
    favorableStones: ["Ruby", "Red Garnet", "Sunela"],
    compound: 1,
    rootNumber: 1,
    nameEn: "Date of Birth 1",
    nameHi: "जन्मतिथि 1",
    rulingPlanet: { en: "Sun", hi: "सूर्य" },
    shortDescEn:
      "Strong individuality, leadership, and visible personal authority.",
    fullDescEn: `People born on 1st usually carry strong self-belief and a natural wish to move ahead independently. They often prefer making their own decisions and do not easily accept outside control.

This date carries Sun energy, so leadership, confidence, and personal dignity become important in life. Such people usually want respect and dislike being ignored.

They often develop courage in practical matters and may naturally guide others. In many situations they prefer leading instead of following.

At times ego, rigidity, or harsh reactions may appear when their authority is challenged.

When balanced, this birth date gives confidence, visibility, and the ability to create impact through personal effort.`,
    shortDescHi:
      "नेतृत्व, आत्मविश्वास और व्यक्तिगत प्रभाव इसकी मुख्य पहचान है।",
    fullDescHi: `1 तारीख को जन्मे लोग सामान्यतः आत्मविश्वासी और स्वतंत्र सोच वाले होते हैं। ये अपने निर्णय स्वयं लेना पसंद करते हैं और बाहरी नियंत्रण आसानी से स्वीकार नहीं करते।

इस तिथि पर सूर्य का प्रभाव रहता है, इसलिए सम्मान, नेतृत्व और पहचान की इच्छा स्वाभाविक रहती है।

ऐसे लोग कई बार स्वाभाविक रूप से दूसरों को दिशा देने लगते हैं और आगे रहने की इच्छा रखते हैं।

यदि इनकी बात को महत्व न मिले तो भीतर अहं या कठोर प्रतिक्रिया दिखाई दे सकती है।

संतुलित स्थिति में यह जन्मतिथि प्रभाव, साहस और स्पष्ट व्यक्तित्व देती है।`,
    positiveTraits: ["Leadership", "Confidence", "Independence"],
    cautionTraits: ["Ego", "Rigidity", "Impatience"],
    career: ["Administration", "Government", "Leadership"],
    health: ["Head stress", "Eyes", "Blood pressure"],
    luckyNumbers: [1, 2, 3, 9],
    luckyDays: ["Sunday", "Monday", "Tuesday"],
    luckyColors: ["Orange", "Yellow"],
    luckyStone: "Ruby",
  },

  {
    id: "dob2",
    day: 2,
    favorableStones: ["Pearl", "Moonstone", "Opal", "White Coral"],
    compound: 2,
    rootNumber: 2,
    nameEn: "Date of Birth 2",
    nameHi: "जन्मतिथि 2",
    rulingPlanet: { en: "Moon", hi: "चंद्र" },
    shortDescEn: "Sensitive mind, emotional depth, and gentle behaviour.",
    fullDescEn: `People born on 2nd usually carry softness in behaviour and emotional sensitivity in relationships. They often understand feelings quickly and react gently.

Moon influence makes the mind active, imaginative, and sometimes changeable. Small emotional situations can affect them deeply.

They often trust others quickly and naturally support family or close people.

At times mood variation, hesitation, or emotional hurt may become visible.

When balanced, this date gives empathy, peace, and emotional intelligence.`,
    shortDescHi:
      "भावनात्मक गहराई, कोमलता और संवेदनशीलता इसकी मुख्य विशेषता है।",
    fullDescHi: `2 तारीख को जन्मे लोग सामान्यतः कोमल, भावुक और दूसरों की भावनाएँ समझने वाले होते हैं।

चंद्रमा का प्रभाव मन को सक्रिय और कल्पनाशील बनाता है।

ये लोग जल्दी विश्वास करते हैं और संबंधों में गहराई से जुड़ जाते हैं।

कभी-कभी मन जल्दी प्रभावित हो सकता है या मूड बदल सकता है।

संतुलित स्थिति में यह जन्मतिथि सहानुभूति और भावनात्मक समझ देती है।`,
    positiveTraits: ["Sensitivity", "Kindness", "Supportive nature"],
    cautionTraits: ["Mood change", "Overtrust"],
    career: ["Creative work", "Travel", "Support roles"],
    health: ["Cold", "Lungs", "Hormonal sensitivity"],
    luckyNumbers: [2, 1, 5],
    luckyDays: ["Monday", "Sunday"],
    luckyColors: ["White", "Cream"],
    luckyStone: "Pearl",
  },

  {
    id: "dob3",
    day: 3,
    favorableStones: ["Yellow Sapphire", "Citrine", "Yellow Topaz"],
    compound: 3,
    rootNumber: 3,
    nameEn: "Date of Birth 3",
    nameHi: "जन्मतिथि 3",
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    shortDescEn: "Wisdom, expression, and natural growth orientation.",
    fullDescEn: `People born on 3rd usually carry a strong desire to grow through knowledge and understanding. They often prefer meaningful work and value respect in life.

Jupiter gives wisdom, confidence in expression, and a natural ability to guide others. Such people often become good advisers, teachers, or planners.

They usually think positively and prefer organised movement in life.

Sometimes overexpectation or rigidity may appear when things do not move according to their standards.

When balanced, this date gives maturity, expansion, and respected social presence.`,
    shortDescHi: "ज्ञान, विस्तार और सम्मान की भावना इसकी मुख्य पहचान है।",
    fullDescHi: `3 तारीख को जन्मे लोग सामान्यतः ज्ञान, प्रगति और सम्मान की ओर बढ़ना चाहते हैं।

बृहस्पति का प्रभाव इन्हें समझदार, सलाह देने वाला और मार्गदर्शक स्वभाव देता है।

ये लोग अक्सर योजनाबद्ध ढंग से आगे बढ़ना पसंद करते हैं।

कभी-कभी अपेक्षाएँ अधिक होने से कठोरता आ सकती है।

संतुलित स्थिति में यह जन्मतिथि परिपक्वता और सम्मान देती है।`,
    positiveTraits: ["Wisdom", "Guidance", "Responsibility"],
    cautionTraits: ["Rigidity", "Overexpectation"],
    career: ["Teaching", "Administration", "Advisory"],
    health: ["Throat", "Stress"],
    luckyNumbers: [3, 1, 2, 9],
    luckyDays: ["Thursday", "Sunday"],
    luckyColors: ["Yellow"],
    luckyStone: "Yellow Sapphire",
  },
  {
    id: "dob4",
    day: 4,
    favorableStones: ["Hessonite", "Honey Garnet", "Cinnamon Stone"],
    compound: 4,
    rootNumber: 4,
    nameEn: "Date of Birth 4",
    nameHi: "जन्मतिथि 4",
    rulingPlanet: { en: "Rahu", hi: "राहु" },
    shortDescEn: "Different thinking, unusual ideas, and practical intensity.",
    fullDescEn: `People born on 4th often think differently and do not always follow common patterns. Their mind remains active and often works in many directions together.

Rahu influence gives originality, sudden thinking, and practical intelligence. They may see possibilities where others do not notice anything unusual.

Such people can work hard and often carry responsibility seriously, even when mentally restless.

Sometimes hidden stress, internal conflict, or overthinking may disturb peace.

When balanced, this date gives originality, practical courage, and the ability to build an uncommon path.`,
    shortDescHi:
      "अलग सोच, व्यावहारिक दृष्टि और असामान्य मानसिक सक्रियता इसकी पहचान है।",
    fullDescHi: `4 तारीख को जन्मे लोग सामान्यतः अलग सोच रखते हैं और सामान्य रास्तों से हटकर सोचते हैं।

राहु का प्रभाव इन्हें नई दिशा में सोचने और असामान्य विचार विकसित करने की क्षमता देता है।

ये मेहनती होते हैं और जिम्मेदारी निभाने की कोशिश करते हैं।

कभी-कभी मन में तनाव या आंतरिक उलझन बनी रह सकती है।

संतुलित स्थिति में यह जन्मतिथि नई दिशा और मजबूत व्यावहारिकता देती है।`,
    positiveTraits: ["Original thinking", "Practical mind", "Bold ideas"],
    cautionTraits: ["Mental stress", "Restlessness"],
    career: ["Politics", "Design", "Computers"],
    health: ["Gastric", "Stress"],
    luckyNumbers: [4, 6, 8],
    luckyDays: ["Saturday", "Friday"],
    luckyColors: ["Grey", "Blue"],
    luckyStone: "Hessonite",
  },
  {
    id: "dob5",
    day: 5,
    favorableStones: ["Emerald", "Green Jade", "Peridot"],
    compound: 5,
    rootNumber: 5,
    nameEn: "Date of Birth 5",
    nameHi: "जन्मतिथि 5",
    rulingPlanet: { en: "Mercury", hi: "बुध" },
    shortDescEn: "Fast mind, communication skill, and adaptability.",
    fullDescEn: `People born on 5th usually think quickly and react fast in changing situations. Their mind stays active and often moves faster than surroundings.

Mercury gives intelligence, communication skill, and curiosity. Such people often learn quickly and express ideas well.

They usually adapt easily and can manage different environments.

Sometimes restlessness or inconsistency may appear because the mind keeps moving.

When balanced, this date gives sharp intellect and practical success through communication.`,
    shortDescHi: "तेज बुद्धि, संवाद क्षमता और अनुकूलन इसकी मुख्य शक्ति है।",
    fullDescHi: `5 तारीख को जन्मे लोग तेज सोचते हैं और परिस्थितियों को जल्दी समझ लेते हैं।

बुध का प्रभाव इन्हें वाणी, बुद्धि और सीखने की क्षमता देता है।

ये लोग जल्दी बदलती स्थितियों में स्वयं को ढाल लेते हैं।

कभी-कभी बेचैनी या अस्थिरता दिखाई दे सकती है।

संतुलित स्थिति में यह जन्मतिथि बुद्धि और संवाद से सफलता देती है।`,
    positiveTraits: ["Communication", "Fast thinking", "Adaptability"],
    cautionTraits: ["Restlessness", "Overthinking"],
    career: ["Writing", "Trading", "Banking"],
    health: ["Stress", "Insomnia"],
    luckyNumbers: [5, 1, 6],
    luckyDays: ["Wednesday", "Friday"],
    luckyColors: ["Green"],
    luckyStone: "Emerald",
  },
  {
    id: "dob6",
    day: 6,
    favorableStones: ["Diamond", "White Zircon", "Opal"],
    compound: 6,
    rootNumber: 6,
    nameEn: "Date of Birth 6",
    nameHi: "जन्मतिथि 6",
    rulingPlanet: { en: "Venus", hi: "शुक्र" },
    shortDescEn: "Charm, harmony, and attraction naturally appear in life.",
    fullDescEn: `People born on 6th usually carry natural charm and a pleasant social presence. Others often feel comfortable in their company.

Venus gives beauty, comfort, and relationship awareness. Such people often value balance, aesthetics, and emotional warmth.

They usually prefer peaceful surroundings and refined living.

Sometimes emotional attachment or comfort dependency may become strong.

When balanced, this date gives harmony, attraction, and stable relationships.`,
    shortDescHi: "आकर्षण, संतुलन और मधुर व्यवहार इसकी मुख्य पहचान है।",
    fullDescHi: `6 तारीख को जन्मे लोग सामान्यतः आकर्षक व्यक्तित्व और मिलनसार स्वभाव रखते हैं।

शुक्र का प्रभाव इन्हें सौंदर्य, आराम और संबंधों में संतुलन देता है।

ये लोग अच्छे वातावरण और भावनात्मक जुड़ाव पसंद करते हैं।

कभी-कभी सुविधा की आदत बढ़ सकती है।

संतुलित स्थिति में यह जन्मतिथि आकर्षण और संबंधों में स्थिरता देती है।`,
    positiveTraits: ["Charm", "Harmony", "Relationship skill"],
    cautionTraits: ["Attachment", "Luxury excess"],
    career: ["Fashion", "Finance", "Music"],
    health: ["Kidney sensitivity", "Throat"],
    luckyNumbers: [6, 5, 3, 9],
    luckyDays: ["Friday", "Thursday"],
    luckyColors: ["White", "Pink"],
    luckyStone: "Diamond",
  },
  {
    id: "dob7",
    day: 7,
    favorableStones: ["Cat's Eye", "Alexandrite", "Moonstone"],
    compound: 7,
    rootNumber: 7,
    nameEn: "Date of Birth 7",
    nameHi: "जन्मतिथि 7",
    rulingPlanet: { en: "Ketu", hi: "केतु" },
    shortDescEn: "Inner depth, intuition, and silent observation.",
    fullDescEn: `People born on 7th usually think deeply and observe situations quietly before reacting.

Ketu gives inner depth, subtle thinking, and spiritual sensitivity.

Such people often search for hidden meaning in life and do not reveal themselves quickly.

Sometimes isolation or emotional distance may appear.

When balanced, this date gives intuition, research ability, and deep wisdom.`,
    shortDescHi: "अंतर्ज्ञान, गहराई और सूक्ष्म समझ इसकी शक्ति है।",
    fullDescHi: `7 तारीख को जन्मे लोग सामान्यतः गहराई से सोचते हैं और हर बात को भीतर से समझना चाहते हैं।

केतु का प्रभाव इन्हें सूक्ष्म सोच और आध्यात्मिक झुकाव देता है।

ये लोग जल्दी खुलते नहीं हैं और अक्सर भीतर से विश्लेषण करते रहते हैं।

कभी-कभी अकेलापन पसंद कर सकते हैं।

संतुलित स्थिति में यह जन्मतिथि अंतर्ज्ञान और गहरी समझ देती है।`,
    positiveTraits: ["Intuition", "Research", "Depth"],
    cautionTraits: ["Isolation", "Overthinking"],
    career: ["Writing", "Healing", "Occult"],
    health: ["Stress", "Sleep issues"],
    luckyNumbers: [7, 2, 6, 9],
    luckyDays: ["Monday", "Tuesday"],
    luckyColors: ["Green", "White"],
    luckyStone: "Cat's Eye",
  },
  {
    id: "dob8",
    day: 8,
    favorableStones: ["Blue Sapphire", "Amethyst", "Iolite"],
    compound: 8,
    rootNumber: 8,
    nameEn: "Date of Birth 8",
    nameHi: "जन्मतिथि 8",
    rulingPlanet: { en: "Saturn", hi: "शनि" },
    shortDescEn: "Discipline, endurance, and serious life lessons.",
    fullDescEn: `People born on 8th often move through life with seriousness and strong responsibility.

Saturn gives patience, endurance, and practical maturity through experience.

Success may come slowly, but often remains stable once established.

Sometimes heaviness, loneliness, or delay may feel strong.

When balanced, this date gives endurance, stability, and lasting achievement.`,
    shortDescHi: "अनुशासन, धैर्य और स्थायी संघर्ष इसकी विशेषता है।",
    fullDescHi: `8 तारीख को जन्मे लोग गंभीर और जिम्मेदार स्वभाव रखते हैं।

शनि का प्रभाव इन्हें धैर्य और सहनशक्ति देता है।

सफलता धीरे-धीरे आती है पर स्थिर रहती है।

कभी-कभी देरी या मानसिक भारीपन महसूस हो सकता है।

संतुलित स्थिति में यह जन्मतिथि स्थायी उपलब्धि देती है।`,
    positiveTraits: ["Patience", "Responsibility", "Endurance"],
    cautionTraits: ["Delay frustration", "Heavy thinking"],
    career: ["Industry", "Law", "Construction"],
    health: ["Joint pain", "Liver sensitivity"],
    luckyNumbers: [8, 4, 6],
    luckyDays: ["Saturday", "Friday"],
    luckyColors: ["Blue", "Black"],
    luckyStone: "Blue Sapphire",
  },
  {
    id: "dob9",
    day: 9,
    favorableStones: ["Red Coral", "Carnelian", "Bloodstone"],
    compound: 9,
    rootNumber: 9,
    nameEn: "Date of Birth 9",
    nameHi: "जन्मतिथि 9",
    rulingPlanet: { en: "Mars", hi: "मंगल" },
    shortDescEn: "Action, courage, and energetic force dominate life.",
    fullDescEn: `People born on 9th usually carry strong action energy and quick decision-making ability.

Mars gives courage, force, and direct expression.

Such people often take initiative and do not fear challenge easily.

Sometimes anger or impulsive reactions may appear quickly.

When balanced, this date gives courage, protection, and determined progress.`,
    shortDescHi: "ऊर्जा, साहस और कर्मशीलता इसकी मुख्य शक्ति है।",
    fullDescHi: `9 तारीख को जन्मे लोग ऊर्जावान और सीधे स्वभाव के होते हैं।

मंगल का प्रभाव इन्हें साहस और तेज निर्णय क्षमता देता है।

ये लोग जल्दी काम शुरू करते हैं और चुनौती से नहीं डरते।

कभी-कभी क्रोध जल्दी आ सकता है।

संतुलित स्थिति में यह जन्मतिथि साहस और उपलब्धि देती है।`,
    positiveTraits: ["Courage", "Action", "Determination"],
    cautionTraits: ["Anger", "Impulsiveness"],
    career: ["Police", "Medical", "Administration"],
    health: ["Blood heat", "Injury tendency"],
    luckyNumbers: [9, 3, 1, 6],
    luckyDays: ["Tuesday", "Sunday"],
    luckyColors: ["Red", "Pink"],
    luckyStone: "Red Coral",
  },

  // ============================================================
  // Manual entries 10 onward from DateofBirth.txt source
  // ============================================================

  {
    id: "dob10",
    day: 10,
    favorableStones: ["Ruby", "Red Garnet", "Sunela"],
    compound: 10,
    rootNumber: 1,
    nameEn: "Date of Birth 10",
    nameHi: "जन्मतिथि 10",
    rulingPlanet: { en: "Sun", hi: "सूर्य" },
    shortDescEn:
      "Powerful Sun vibration with multiplied individuality and visibility.",
    fullDescEn: `People born on 10th carry the power of number 1 with additional force from zero, which often magnifies self-expression and leadership. They usually want to move independently and create their own position in life.

This date often gives strong confidence, public visibility, and administrative ability. Such people may naturally attract attention and often prefer being decision-makers.

They usually have courage, ambition, and a clear personal approach in practical matters.

Sometimes rigidity, ego, or internal pressure may appear when expectations become too high.

When balanced, this date gives strong identity, authority, and visible success through self-effort.`,
    shortDescHi:
      "शक्तिशाली सूर्य ऊर्जा, स्पष्ट व्यक्तित्व और बढ़ी हुई नेतृत्व क्षमता इसकी पहचान है।",
    fullDescHi: `10 तारीख को जन्मे लोगों में मूलांक 1 की शक्ति शून्य के कारण और अधिक प्रभावशाली हो जाती है। ऐसे लोग अक्सर स्वयं की पहचान बनाना चाहते हैं।

इनमें नेतृत्व, आत्मविश्वास और आगे बढ़ने की तीव्र इच्छा रहती है।

ये लोग निर्णय लेने में स्पष्ट होते हैं और कई बार स्वाभाविक रूप से केंद्र में आ जाते हैं।

कभी-कभी अहं या कठोरता भी दिखाई दे सकती है।

संतुलित स्थिति में यह जन्मतिथि प्रभाव, सम्मान और प्रशासनिक क्षमता देती है।`,
    positiveTraits: ["Leadership", "Confidence", "Authority"],
    cautionTraits: ["Ego", "Pressure", "Rigidity"],
    career: ["Administration", "Government", "Politics", "Medical"],
    health: ["Blood pressure", "Head stress", "Eyesight"],
    luckyNumbers: [1, 10, 19, 28],
    luckyDays: ["Sunday", "Monday", "Tuesday", "Thursday"],
    luckyColors: ["Saffron", "Orange", "Light Yellow"],
    luckyStone: "Ruby",
  },
  {
    id: "dob11",
    day: 11,
    favorableStones: ["Pearl", "Moonstone", "Opal", "Ruby"],
    compound: 11,
    rootNumber: 2,
    nameEn: "Date of Birth 11",
    nameHi: "जन्मतिथि 11",
    rulingPlanet: { en: "Moon", hi: "चंद्र" },
    shortDescEn:
      "Master number with intuition, emotional power, and natural attraction.",
    fullDescEn: `People born on 11th are often considered highly sensitive and naturally influential because this date carries master-number vibration. It combines double Sun force but expresses through Moon-like emotional depth.

Such people often attract others naturally and may carry visible self-respect, ambition, and leadership without force.

They usually have imagination, moral sense, and a wide social circle.

Small emotional matters may affect them deeply, and criticism can stay in the mind for long.

When balanced, this date gives intuition, fortune, emotional power, and natural public appeal.`,
    shortDescHi:
      "मास्टर नंबर की ऊर्जा, अंतर्ज्ञान और आकर्षक व्यक्तित्व इसकी विशेषता है।",
    fullDescHi: `11 तारीख को जन्मे लोग मास्टर नंबर के प्रभाव में माने जाते हैं। इसमें दो बार सूर्य की शक्ति चंद्रमा के माध्यम से परिणाम देती है।

ऐसे लोग स्वाभाविक रूप से आकर्षक, महत्वाकांक्षी और प्रभावशाली हो सकते हैं।

इनमें कल्पना शक्ति, नैतिकता और लोगों को जोड़ने की क्षमता रहती है।

कभी-कभी छोटी बात भी मन पर गहरा प्रभाव छोड़ सकती है।

संतुलित स्थिति में यह जन्मतिथि अंतर्ज्ञान, सम्मान और विशेष भाग्य देती है।`,
    positiveTraits: ["Intuition", "Attraction", "Moral strength"],
    cautionTraits: ["Emotional hurt", "Pride", "Stress"],
    career: ["Administration", "Medical", "Creative work", "Leadership"],
    health: ["Cold", "Mental stress", "Digestive sensitivity"],
    luckyNumbers: [1, 2, 11, 29],
    luckyDays: ["Monday", "Sunday", "Thursday"],
    luckyColors: ["White", "Cream", "Light Green"],
    luckyStone: "Pearl",
  },
  {
    id: "dob12",
    day: 12,
    favorableStones: ["Yellow Sapphire", "Citrine", "Yellow Topaz", "Pearl"],
    compound: 12,
    rootNumber: 3,
    nameEn: "Date of Birth 12",
    nameHi: "जन्मतिथि 12",
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    shortDescEn:
      "Moon and Sun combine to create thoughtful Jupiter expression.",
    fullDescEn: `People born on 12th usually carry emotional softness along with intellectual growth because Moon and Sun together finally express Jupiter energy.

Such people are often friendly, creative, and supportive in social life. They usually value ideas, advice, and peaceful interaction.

They may carry imagination, writing ability, and interest in meaningful communication.

Sometimes decision-making becomes slow because mind and emotion both stay active.

When balanced, this date gives wisdom, communication skill, and steady progress through learning.`,
    shortDescHi: "चंद्र और सूर्य की संयुक्त ऊर्जा से ज्ञान और सौम्यता बनती है।",
    fullDescHi: `12 तारीख को जन्मे लोगों में चंद्रमा और सूर्य की संयुक्त ऊर्जा बृहस्पति जैसा प्रभाव देती है।

ये लोग मित्रवत, रचनात्मक और विचारशील स्वभाव रखते हैं।

इनमें लेखन, सलाह और संवाद की क्षमता अच्छी हो सकती है।

कभी-कभी निर्णय लेने में धीमापन आ सकता है।

संतुलित स्थिति में यह जन्मतिथि ज्ञान, समझ और स्थिर प्रगति देती है।`,
    positiveTraits: ["Wisdom", "Friendliness", "Creativity"],
    cautionTraits: ["Indecision", "Mental overload"],
    career: ["Teaching", "Writing", "Counselling", "Administration"],
    health: ["Throat", "Stress", "Cholesterol tendency"],
    luckyNumbers: [3, 1, 2, 9],
    luckyDays: ["Thursday", "Sunday", "Monday"],
    luckyColors: ["Yellow", "Cream", "Crimson"],
    luckyStone: "Yellow Sapphire",
  },
  {
    id: "dob13",
    day: 13,
    favorableStones: ["Hessonite", "Honey Garnet", "Cinnamon Stone", "Yellow Sapphire"],
    compound: 13,
    rootNumber: 4,
    nameEn: "Date of Birth 13",
    nameHi: "जन्मतिथि 13",
    rulingPlanet: { en: "Rahu", hi: "राहु" },
    shortDescEn:
      "Sun and Jupiter combine into a forceful Rahu pattern with unconventional ambition.",
    fullDescEn: `People born on 13th often carry a powerful combination of independence, practical thinking, and unusual ambition. This date mixes Sun and Jupiter energy, finally expressing through Rahu-like intensity.

Such people usually think differently, act independently, and often try to create results through their own ideas rather than accepted methods.

They may carry leadership ability, humour, creativity, and a strong desire to influence situations.

At times stubbornness, hidden tension, or conflict with authority may appear.

When balanced, this date gives strategic intelligence, originality, and strong practical rise.`,
    shortDescHi:
      "सूर्य और बृहस्पति की संयुक्त ऊर्जा राहु जैसा प्रभाव बनाती है।",
    fullDescHi: `13 तारीख को जन्मे लोगों में सूर्य और बृहस्पति की संयुक्त ऊर्जा राहु जैसा प्रभाव देती है। ऐसे लोग स्वतंत्र सोच और अलग कार्यशैली रखते हैं।

इनमें नेतृत्व, योजना बनाने की क्षमता और व्यावहारिक समझ अच्छी होती है।

ये कई बार अपने नियमों से आगे बढ़ना पसंद करते हैं।

कभी-कभी जिद, तनाव या विरोध की स्थिति बन सकती है।

संतुलित स्थिति में यह जन्मतिथि मौलिक सोच और व्यावहारिक सफलता देती है।`,
    positiveTraits: ["Originality", "Strategy", "Leadership"],
    cautionTraits: ["Stubbornness", "Mental stress"],
    career: ["Politics", "Design", "Law", "Technology"],
    health: ["Vata imbalance", "Stress", "Breathing issues"],
    luckyNumbers: [4],
    luckyDays: ["Sunday", "Thursday"],
    luckyColors: ["Grey", "Electric Blue"],
    luckyStone: "Hessonite",
  },
  {
    id: "dob14",
    day: 14,
    favorableStones: ["Emerald", "Green Jade", "Peridot", "Diamond"],
    compound: 14,
    rootNumber: 5,
    nameEn: "Date of Birth 14",
    nameHi: "जन्मतिथि 14",
    rulingPlanet: { en: "Mercury", hi: "बुध" },
    shortDescEn:
      "Fast-moving intelligence with changing life patterns and practical alertness.",
    fullDescEn: `People born on 14th usually carry sharp intelligence and quick adaptability because this date creates a highly active Mercury vibration.

Such people often think rapidly, understand situations quickly, and may handle communication skillfully.

Life may bring frequent changes, movement, or unexpected turns that demand flexibility.

Sometimes nervous pressure, impatience, or inconsistency may disturb stability.

When balanced, this date gives communication power, adaptability, and practical success.`,
    shortDescHi:
      "तेज बुद्धि, परिवर्तनशीलता और व्यावहारिक सतर्कता इसकी पहचान है।",
    fullDescHi: `14 तारीख को जन्मे लोग तेज बुद्धि और बदलती परिस्थितियों को जल्दी समझने की क्षमता रखते हैं।

बुध का प्रभाव इन्हें संवाद और विश्लेषण में सक्षम बनाता है।

जीवन में परिवर्तन अधिक रह सकते हैं।

कभी-कभी बेचैनी या मानसिक दबाव बढ़ सकता है।

संतुलित स्थिति में यह जन्मतिथि संवाद और व्यावहारिक सफलता देती है।`,
    positiveTraits: ["Intelligence", "Adaptability", "Communication"],
    cautionTraits: ["Restlessness", "Impatience"],
    career: ["Business", "Media", "Sales", "Writing"],
    health: ["Nerves", "Sleep disturbance"],
    luckyNumbers: [5],
    luckyDays: ["Wednesday"],
    luckyColors: ["Green"],
    luckyStone: "Emerald",
  },
  {
    id: "dob15",
    day: 15,
    favorableStones: ["Diamond", "White Zircon", "Opal", "Emerald"],
    compound: 15,
    rootNumber: 6,
    nameEn: "Date of Birth 15",
    nameHi: "जन्मतिथि 15",
    rulingPlanet: { en: "Venus", hi: "शुक्र" },
    shortDescEn:
      "Attraction, creativity, and emotional magnetism become strong here.",
    fullDescEn: `People born on 15th often carry strong personal attraction and emotional warmth. This date usually enhances Venus qualities in a more expressive way.

Such people may naturally attract others through behaviour, speech, or appearance.

They often value relationships, comfort, beauty, and harmonious surroundings.

Sometimes attachment, emotional expectation, or indulgence may increase.

When balanced, this date gives charm, creativity, and social popularity.`,
    shortDescHi: "आकर्षण, रचनात्मकता और भावनात्मक प्रभाव इसकी मुख्य शक्ति है।",
    fullDescHi: `15 तारीख को जन्मे लोगों में शुक्र का प्रभाव अधिक आकर्षक रूप में दिखाई देता है।

ये लोग व्यवहार और व्यक्तित्व से दूसरों को प्रभावित कर सकते हैं।

इनमें कला, सौंदर्य और संबंधों की समझ अच्छी रहती है।

कभी-कभी अपेक्षाएँ बढ़ सकती हैं।

संतुलित स्थिति में यह जन्मतिथि आकर्षण और सामाजिक सफलता देती है।`,
    positiveTraits: ["Charm", "Creativity", "Warmth"],
    cautionTraits: ["Attachment", "Luxury tendency"],
    career: ["Arts", "Hospitality", "Design"],
    health: ["Hormonal sensitivity", "Throat"],
    luckyNumbers: [6],
    luckyDays: ["Friday"],
    luckyColors: ["White", "Pink"],
    luckyStone: "Diamond",
  },
  {
    id: "dob16",
    day: 16,
    favorableStones: ["Cat's Eye", "Alexandrite", "Moonstone", "Pearl"],
    compound: 16,
    rootNumber: 7,
    nameEn: "Date of Birth 16",
    nameHi: "जन्मतिथि 16",
    rulingPlanet: { en: "Ketu", hi: "केतु" },
    shortDescEn:
      "Deep inner analysis, karmic learning, and sudden inner transformation.",
    fullDescEn: `People born on 16th often carry strong inner depth and a reflective nature. This date usually creates a serious inner world where thoughts remain active beneath the surface.

Such people may appear calm outside but internally think deeply before trusting situations.

They often develop spiritual curiosity, hidden observation, and a desire to understand truth beyond appearances.

Sometimes emotional withdrawal, disappointment, or sudden mental pressure may arise.

When balanced, this date gives intuition, maturity, and powerful inner awakening.`,
    shortDescHi: "आंतरिक गहराई, कर्मिक सीख और आत्मविश्लेषण इसकी विशेषता है।",
    fullDescHi: `16 तारीख को जन्मे लोग भीतर से गहराई से सोचने वाले होते हैं।

इनमें घटनाओं को भीतर से समझने और सत्य खोजने की प्रवृत्ति रहती है।

ये जल्दी खुलते नहीं और कई बार शांत दिखते हुए भीतर बहुत सक्रिय रहते हैं।

कभी-कभी मानसिक दबाव या निराशा आ सकती है।

संतुलित स्थिति में यह जन्मतिथि अंतर्ज्ञान और आंतरिक शक्ति देती है।`,
    positiveTraits: ["Intuition", "Depth", "Inner maturity"],
    cautionTraits: ["Isolation", "Mental pressure"],
    career: ["Research", "Occult", "Writing"],
    health: ["Sleep issues", "Stress"],
    luckyNumbers: [7],
    luckyDays: ["Monday", "Tuesday"],
    luckyColors: ["Green", "White"],
    luckyStone: "Cat's Eye",
  },
  {
    id: "dob17",
    day: 17,
    favorableStones: ["Blue Sapphire", "Amethyst", "Iolite", "Ruby"],
    compound: 17,
    rootNumber: 8,
    nameEn: "Date of Birth 17",
    nameHi: "जन्मतिथि 17",
    rulingPlanet: { en: "Saturn", hi: "शनि" },
    shortDescEn:
      "Disciplined ambition with visible strength and delayed stability.",
    fullDescEn: `People born on 17th often carry strong practical ambition and visible seriousness in life direction.

This date combines disciplined effort with inner determination and usually supports long-term achievement.

Such people may work steadily and often gain respect after patience.

Sometimes delays, emotional heaviness, or self-pressure may become noticeable.

When balanced, this date gives endurance, structured success, and lasting credibility.`,
    shortDescHi: "अनुशासित महत्वाकांक्षा और स्थिर उपलब्धि इसकी पहचान है।",
    fullDescHi: `17 तारीख को जन्मे लोग गंभीर लक्ष्य और स्थिर प्रयास रखने वाले होते हैं।

ये धीरे-धीरे मजबूत स्थिति बनाते हैं।

इनमें सहनशक्ति और कार्य के प्रति निरंतरता रहती है।

कभी-कभी देरी से परिणाम मिलते हैं।

संतुलित स्थिति में यह जन्मतिथि स्थायी सफलता देती है।`,
    positiveTraits: ["Endurance", "Discipline", "Stability"],
    cautionTraits: ["Delay frustration", "Heaviness"],
    career: ["Industry", "Management", "Law"],
    health: ["Joints", "Liver"],
    luckyNumbers: [8],
    luckyDays: ["Saturday", "Friday"],
    luckyColors: ["Blue", "Dark Grey"],
    luckyStone: "Blue Sapphire",
  },
  {
    id: "dob18",
    day: 18,
    favorableStones: ["Red Coral", "Carnelian", "Bloodstone", "Pearl"],
    compound: 18,
    rootNumber: 9,
    nameEn: "Date of Birth 18",
    nameHi: "जन्मतिथि 18",
    rulingPlanet: { en: "Mars", hi: "मंगल" },
    shortDescEn:
      "Strong action force with emotional intensity and struggle power.",
    fullDescEn: `People born on 18th often carry strong energy, quick reactions, and the ability to face difficult conditions directly.

This date gives courage along with emotional intensity, so reactions may become sharp when challenged.

Such people often act strongly for what they believe is right.

Sometimes anger, impatience, or conflict may arise if emotions are not balanced.

When balanced, this date gives courage, protection, and determined rise.`,
    shortDescHi:
      "ऊर्जा, संघर्ष क्षमता और तीव्र प्रतिक्रिया इसकी मुख्य शक्ति है।",
    fullDescHi: `18 तारीख को जन्मे लोग साहसी और सक्रिय स्वभाव रखते हैं।

इनमें कठिन परिस्थिति में आगे बढ़ने की क्षमता होती है।

ये अपने विचारों के लिए मजबूती से खड़े रहते हैं।

कभी-कभी क्रोध बढ़ सकता है।

संतुलित स्थिति में यह जन्मतिथि संघर्ष से सफलता देती है।`,
    positiveTraits: ["Courage", "Action", "Determination"],
    cautionTraits: ["Anger", "Conflict"],
    career: ["Force", "Medical", "Administration"],
    health: ["Blood heat", "Injury tendency"],
    luckyNumbers: [9],
    luckyDays: ["Tuesday", "Sunday"],
    luckyColors: ["Red", "Crimson"],
    luckyStone: "Red Coral",
  },
  {
    id: "dob19",
    day: 19,
    favorableStones: ["Ruby", "Red Garnet", "Sunela"],
    compound: 19,
    rootNumber: 1,
    nameEn: "Date of Birth 19",
    nameHi: "जन्मतिथि 19",
    rulingPlanet: { en: "Sun", hi: "सूर्य" },
    shortDescEn: "Sun and Mars combine into powerful self-driven leadership.",
    fullDescEn: `People born on 19th often carry strong individuality along with courage and visible initiative. This date combines Sun and Mars energy strongly.

Such people usually prefer independence and direct action.

They often have ambition, confidence, and a desire to move ahead through self-effort.

Sometimes pride or forceful behaviour may appear.

When balanced, this date gives leadership, courage, and powerful progress.`,
    shortDescHi: "सूर्य और मंगल की संयुक्त शक्ति नेतृत्व को मजबूत बनाती है।",
    fullDescHi: `19 तारीख को जन्मे लोगों में सूर्य और मंगल का संयुक्त प्रभाव मजबूत होता है।

ये लोग साहसी, स्वतंत्र और स्पष्ट निर्णय वाले होते हैं।

इनमें आगे बढ़ने की तीव्र इच्छा रहती है।

कभी-कभी अहं बढ़ सकता है।

संतुलित स्थिति में यह जन्मतिथि नेतृत्व और सफलता देती है।`,
    positiveTraits: ["Leadership", "Courage", "Initiative"],
    cautionTraits: ["Ego", "Harshness"],
    career: ["Administration", "Politics", "Planning"],
    health: ["Blood pressure", "Head stress"],
    luckyNumbers: [1, 10, 19, 28],
    luckyDays: ["Sunday", "Tuesday", "Thursday"],
    luckyColors: ["Orange", "Golden"],
    luckyStone: "Ruby",
  },
  {
    id: "dob20",
    day: 20,
    favorableStones: ["Pearl", "Moonstone", "Opal", "White Coral"],
    compound: 20,
    rootNumber: 2,
    nameEn: "Date of Birth 20",
    nameHi: "जन्मतिथि 20",
    rulingPlanet: { en: "Moon", hi: "चंद्र" },
    shortDescEn:
      "Powerful Moon influence with softness, care, and emotional intelligence.",
    fullDescEn: `People born on 20th often carry stronger Moon influence because zero magnifies emotional and mental sensitivity.

Such people usually remain polite, caring, and supportive in relationships.

They often understand emotional situations deeply and value peace.

Sometimes mood shifts or internal worry may stay hidden.

When balanced, this date gives empathy, diplomacy, and emotional stability.`,
    shortDescHi:
      "शक्तिशाली चंद्र प्रभाव, कोमलता और भावनात्मक समझ इसकी पहचान है।",
    fullDescHi: `20 तारीख को जन्मे लोगों में चंद्रमा का प्रभाव अधिक गहरा होता है।

ये लोग विनम्र, संवेदनशील और सहयोगी होते हैं।

इनमें संबंधों को समझने की क्षमता अच्छी होती है।

कभी-कभी मन में चिंता बनी रह सकती है।

संतुलित स्थिति में यह जन्मतिथि शांति और भावनात्मक संतुलन देती है।`,
    positiveTraits: ["Sensitivity", "Care", "Diplomacy"],
    cautionTraits: ["Mood variation", "Worry"],
    career: ["Creative work", "Travel", "Support roles"],
    health: ["Cold", "Digestive sensitivity"],
    luckyNumbers: [2, 11, 20, 29],
    luckyDays: ["Monday", "Sunday", "Friday"],
    luckyColors: ["White", "Cream", "Light Green"],
    luckyStone: "Pearl",
  },

  {
    id: "dob21",
    day: 21,
    favorableStones: ["Yellow Sapphire", "Citrine", "Yellow Topaz", "Pearl"],
    compound: 21,
    rootNumber: 3,
    nameEn: "Date of Birth 21",
    nameHi: "जन्मतिथि 21",
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    shortDescEn:
      "Moon and Sun combine into Jupiter, creating expressive wisdom and natural optimism.",
    fullDescEn: `People born on 21st often carry a pleasant combination of emotional sensitivity and personal confidence. This date blends Moon and Sun energy, finally expressing through Jupiter.

Such people usually appear friendly, thoughtful, and naturally attractive in social interaction.

They often have humour, imagination, and the ability to explain ideas clearly.

Sometimes emotional dependence or mental fluctuation may appear internally.

When balanced, this date gives wisdom, optimism, and graceful social growth.`,
    shortDescHi:
      "चंद्र और सूर्य की संयुक्त ऊर्जा बृहस्पति जैसी अभिव्यक्ति देती है।",
    fullDescHi: `21 तारीख को जन्मे लोगों में चंद्रमा और सूर्य की संयुक्त ऊर्जा बृहस्पति जैसा प्रभाव बनाती है।

ये लोग आकर्षक, विचारशील और मिलनसार हो सकते हैं।

इनमें समझ, हास्य और सीखने की क्षमता रहती है।

कभी-कभी भीतर भावनात्मक उतार-चढ़ाव रह सकता है।

संतुलित स्थिति में यह जन्मतिथि ज्ञान और सामाजिक सम्मान देती है।`,
    positiveTraits: ["Wisdom", "Humour", "Friendliness"],
    cautionTraits: ["Emotional fluctuation", "Dependency"],
    career: ["Teaching", "Writing", "Public speaking"],
    health: ["Stress", "Digestive sensitivity"],
    luckyNumbers: [3, 1, 2],
    luckyDays: ["Thursday", "Sunday", "Monday"],
    luckyColors: ["Yellow", "Cream"],
    luckyStone: "Yellow Sapphire",
  },
  {
    id: "dob22",
    day: 22,
    favorableStones: ["Hessonite", "Honey Garnet", "Cinnamon Stone", "Blue Sapphire"],
    compound: 22,
    rootNumber: 4,
    nameEn: "Date of Birth 22",
    nameHi: "जन्मतिथि 22",
    rulingPlanet: { en: "Rahu", hi: "राहु" },
    shortDescEn:
      "Master builder vibration with strong planning and unusual practical force.",
    fullDescEn: `People born on 22nd often carry master-number intensity. This date usually gives large practical vision and unusual internal pressure to build something meaningful.

Such people may think differently and often carry strong planning ability.

They usually want visible results and may work seriously toward long-term goals.

Sometimes overthinking, internal pressure, or hidden dissatisfaction may disturb peace.

When balanced, this date gives structured success, originality, and practical influence.`,
    shortDescHi:
      "मास्टर नंबर की शक्ति, योजना क्षमता और व्यावहारिक प्रभाव इसकी पहचान है।",
    fullDescHi: `22 तारीख को जन्मे लोग मास्टर नंबर के प्रभाव में माने जाते हैं।

इनमें बड़ी सोच और ठोस योजना बनाने की क्षमता होती है।

ये अक्सर अलग ढंग से कार्य करना चाहते हैं।

कभी-कभी मानसिक दबाव बढ़ सकता है।

संतुलित स्थिति में यह जन्मतिथि बड़ी उपलब्धि दे सकती है।`,
    positiveTraits: ["Planning", "Originality", "Structure"],
    cautionTraits: ["Mental pressure", "Restlessness"],
    career: ["Construction", "Technology", "Administration"],
    health: ["Stress", "Gastric"],
    luckyNumbers: [4, 6],
    luckyDays: ["Saturday", "Friday"],
    luckyColors: ["Grey", "Blue"],
    luckyStone: "Hessonite",
  },
  {
    id: "dob23",
    day: 23,
    favorableStones: ["Emerald", "Green Jade", "Peridot", "Yellow Sapphire"],
    compound: 23,
    rootNumber: 5,
    nameEn: "Date of Birth 23",
    nameHi: "जन्मतिथि 23",
    rulingPlanet: { en: "Mercury", hi: "बुध" },
    shortDescEn:
      "Sharp Mercury intelligence with social adaptability and mental speed.",
    fullDescEn: `People born on 23rd usually carry strong communication skill and quick mental response. Moon and Jupiter together often strengthen Mercury qualities here.

Such people understand situations quickly and often speak effectively.

They may carry natural flexibility, calculation ability, and social awareness.

Sometimes impatience or overactivity of mind may reduce consistency.

When balanced, this date gives communication success, practical intelligence, and opportunity through networking.`,
    shortDescHi: "तेज बुध प्रभाव, संवाद क्षमता और सामाजिक समझ इसकी शक्ति है।",
    fullDescHi: `23 तारीख को जन्मे लोग तेज बुद्धि और संवाद क्षमता रखते हैं।

ये जल्दी समझते हैं और परिस्थिति के अनुसार स्वयं को ढाल लेते हैं।

इनमें विश्लेषण और प्रस्तुति की शक्ति रहती है।

कभी-कभी मन अधिक सक्रिय रह सकता है।

संतुलित स्थिति में यह जन्मतिथि अवसर और व्यावहारिक सफलता देती है।`,
    positiveTraits: ["Communication", "Sharp mind", "Adaptability"],
    cautionTraits: ["Mental overactivity", "Impatience"],
    career: ["Business", "Media", "Counselling"],
    health: ["Nerves", "Sleep issues"],
    luckyNumbers: [5, 2, 3],
    luckyDays: ["Wednesday", "Monday", "Thursday"],
    luckyColors: ["Green", "Light shades"],
    luckyStone: "Emerald",
  },
  {
    id: "dob24",
    day: 24,
    favorableStones: ["Diamond", "White Zircon", "Opal", "Pearl"],
    compound: 24,
    rootNumber: 6,
    nameEn: "Date of Birth 24",
    nameHi: "जन्मतिथि 24",
    rulingPlanet: { en: "Venus", hi: "शुक्र" },
    shortDescEn:
      "Stable Venus expression with care, responsibility, and domestic harmony.",
    fullDescEn: `People born on 24th often carry warmth, responsibility, and a practical emotional nature. Moon and Rahu combine here but final expression supports Venus qualities.

Such people often care deeply for family and stability.

They usually value comfort, relationships, and balanced surroundings.

Sometimes emotional burden or over-responsibility may increase.

When balanced, this date gives harmony, support, and stable material growth.`,
    shortDescHi:
      "स्थिर शुक्र प्रभाव, जिम्मेदारी और पारिवारिक संतुलन इसकी विशेषता है।",
    fullDescHi: `24 तारीख को जन्मे लोग परिवार और संबंधों को महत्व देने वाले होते हैं।

इनमें जिम्मेदारी निभाने की क्षमता अच्छी रहती है।

ये स्थिरता और संतुलन पसंद करते हैं।

कभी-कभी जिम्मेदारी अधिक महसूस हो सकती है।

संतुलित स्थिति में यह जन्मतिथि स्थिर सुख देती है।`,
    positiveTraits: ["Responsibility", "Harmony", "Care"],
    cautionTraits: ["Emotional burden", "Attachment"],
    career: ["Hospitality", "Finance", "Support roles"],
    health: ["Kidney", "Hormonal sensitivity"],
    luckyNumbers: [6, 2, 4],
    luckyDays: ["Friday", "Monday"],
    luckyColors: ["White", "Pink"],
    luckyStone: "Diamond",
  },
  {
    id: "dob25",
    day: 25,
    favorableStones: ["Cat's Eye", "Alexandrite", "Moonstone", "Emerald"],
    compound: 25,
    rootNumber: 7,
    nameEn: "Date of Birth 25",
    nameHi: "जन्मतिथि 25",
    rulingPlanet: { en: "Ketu", hi: "केतु" },
    shortDescEn:
      "Analytical mind, hidden intuition, and inner sensitivity become strong.",
    fullDescEn: `People born on 25th often carry strong analytical ability with inner sensitivity. This date usually creates a thoughtful mind that studies people and situations carefully.

Such people may remain observant and mentally active beneath a calm surface.

They often carry intuitive judgement and interest in deeper subjects.

Sometimes worry, overthinking, or emotional distance may appear.

When balanced, this date gives insight, wisdom, and subtle mental strength.`,
    shortDescHi:
      "विश्लेषण, अंतर्ज्ञान और भीतर की संवेदनशीलता इसकी मुख्य शक्ति है।",
    fullDescHi: `25 तारीख को जन्मे लोग गहराई से सोचने और विश्लेषण करने वाले होते हैं।

इनमें सूक्ष्म समझ और अंतर्ज्ञान अच्छा रहता है।

ये अक्सर भीतर से बहुत सक्रिय रहते हैं।

कभी-कभी चिंता बढ़ सकती है।

संतुलित स्थिति में यह जन्मतिथि सूझबूझ और गहरी समझ देती है।`,
    positiveTraits: ["Analysis", "Intuition", "Observation"],
    cautionTraits: ["Worry", "Isolation"],
    career: ["Research", "Writing", "Healing"],
    health: ["Stress", "Sleep issues"],
    luckyNumbers: [7, 2],
    luckyDays: ["Monday", "Friday"],
    luckyColors: ["Light Green", "White"],
    luckyStone: "Cat's Eye",
  },

  {
    id: "dob26",
    day: 26,
    favorableStones: ["Blue Sapphire", "Amethyst", "Iolite", "Diamond"],
    compound: 26,
    rootNumber: 8,
    nameEn: "Date of Birth 26",
    nameHi: "जन्मतिथि 26",
    rulingPlanet: { en: "Saturn", hi: "शनि" },
    shortDescEn:
      "Responsibility, delayed rewards, and serious material lessons shape this date.",
    fullDescEn: `People born on 26th often carry practical responsibility from early life. This date usually creates serious thinking about security, work, and long-term stability.

Such people may appear calm but internally remain highly concerned about outcomes and duties.

They often gain maturity through experience and learn to manage pressure gradually.

Sometimes delays, emotional heaviness, or trust issues may arise.

When balanced, this date gives authority, endurance, and stable achievement through disciplined effort.`,
    shortDescHi:
      "जिम्मेदारी, देरी से मिलने वाले फल और गंभीर जीवन दृष्टि इसकी विशेषता है।",
    fullDescHi: `26 तारीख को जन्मे लोग अक्सर जिम्मेदारी जल्दी समझने लगते हैं।

इनमें सुरक्षा, कार्य और स्थिरता के प्रति गंभीर दृष्टि रहती है।

ये धीरे-धीरे मजबूत अनुभव प्राप्त करते हैं।

कभी-कभी देरी या मानसिक दबाव महसूस हो सकता है।

संतुलित स्थिति में यह जन्मतिथि स्थायी उपलब्धि देती है।`,
    positiveTraits: ["Responsibility", "Endurance", "Practical maturity"],
    cautionTraits: ["Delay frustration", "Heaviness"],
    career: ["Finance", "Industry", "Administration"],
    health: ["Joints", "Digestive heaviness"],
    luckyNumbers: [8, 6],
    luckyDays: ["Saturday", "Friday"],
    luckyColors: ["Blue", "Grey"],
    luckyStone: "Blue Sapphire",
  },
  {
    id: "dob27",
    day: 27,
    favorableStones: ["Red Coral", "Carnelian", "Bloodstone", "Cat's Eye"],
    compound: 27,
    rootNumber: 9,
    nameEn: "Date of Birth 27",
    nameHi: "जन्मतिथि 27",
    rulingPlanet: { en: "Mars", hi: "मंगल" },
    shortDescEn:
      "Courage joins intuition, creating determined yet thoughtful action.",
    fullDescEn: `People born on 27th often combine courage with inner thoughtfulness. This date usually gives strong will along with deeper emotional understanding.

Such people may act firmly, yet often think about consequences before major decisions.

They usually carry protective nature and a strong sense of duty.

Sometimes emotional intensity or internal conflict may appear.

When balanced, this date gives courage, wisdom, and purposeful success.`,
    shortDescHi: "साहस और अंतर्ज्ञान का संयुक्त प्रभाव इसे विशेष बनाता है।",
    fullDescHi: `27 तारीख को जन्मे लोगों में साहस के साथ भीतर की समझ भी रहती है।

ये निर्णय में मजबूत होते हैं और जिम्मेदारी निभाना जानते हैं।

इनमें रक्षा करने की भावना भी देखी जाती है।

कभी-कभी भीतर तनाव बन सकता है।

संतुलित स्थिति में यह जन्मतिथि उद्देश्यपूर्ण सफलता देती है।`,
    positiveTraits: ["Courage", "Wisdom", "Duty"],
    cautionTraits: ["Inner conflict", "Sharp reaction"],
    career: ["Medical", "Leadership", "Defence"],
    health: ["Blood heat", "Inflammation"],
    luckyNumbers: [9, 2, 7],
    luckyDays: ["Tuesday", "Monday"],
    luckyColors: ["Red", "White"],
    luckyStone: "Red Coral",
  },
  {
    id: "dob28",
    day: 28,
    favorableStones: ["Ruby", "Red Garnet", "Sunela", "Hessonite"],
    compound: 28,
    rootNumber: 1,
    nameEn: "Date of Birth 28",
    nameHi: "जन्मतिथि 28",
    rulingPlanet: { en: "Sun", hi: "सूर्य" },
    shortDescEn:
      "Strong individuality develops through struggle and self-correction.",
    fullDescEn: `People born on 28th often carry leadership potential, but life may teach them through changing circumstances and personal tests.

Such people usually want independence and recognition, yet must learn balance in relationships.

They often rebuild confidence after setbacks and emerge stronger.

Sometimes ego clashes or disappointment may occur.

When balanced, this date gives resilience, authority, and mature self-expression.`,
    shortDescHi: "संघर्ष के बीच विकसित होने वाला नेतृत्व इसकी मुख्य पहचान है।",
    fullDescHi: `28 तारीख को जन्मे लोग स्वतंत्र पहचान बनाना चाहते हैं।

जीवन इन्हें कई बार अनुभवों से मजबूत बनाता है।

इनमें नेतृत्व की क्षमता रहती है।

कभी-कभी संबंधों में टकराव हो सकता है।

संतुलित स्थिति में यह जन्मतिथि परिपक्व सफलता देती है।`,
    positiveTraits: ["Leadership", "Resilience", "Confidence"],
    cautionTraits: ["Ego clashes", "Disappointment"],
    career: ["Administration", "Business", "Planning"],
    health: ["Head stress", "Blood pressure"],
    luckyNumbers: [1, 10, 19, 28],
    luckyDays: ["Sunday", "Thursday"],
    luckyColors: ["Orange", "Golden"],
    luckyStone: "Ruby",
  },
  {
    id: "dob29",
    day: 29,
    favorableStones: ["Pearl", "Moonstone", "Opal", "Red Coral"],
    compound: 29,
    rootNumber: 2,
    nameEn: "Date of Birth 29",
    nameHi: "जन्मतिथि 29",
    rulingPlanet: { en: "Moon", hi: "चंद्र" },
    shortDescEn:
      "Highly sensitive master vibration with intuition and emotional depth.",
    fullDescEn: `People born on 29th often carry powerful emotional sensitivity along with strong intuitive perception. This date usually reacts deeply to relationships and surroundings.

Such people may understand hidden feelings quickly and often sense future trends instinctively.

They usually need emotional clarity to perform well.

Sometimes doubt, hurt, or mood shifts may become strong.

When balanced, this date gives intuition, empathy, and refined mental strength.`,
    shortDescHi: "गहरी संवेदनशीलता और तीव्र अंतर्ज्ञान इसकी मुख्य शक्ति है।",
    fullDescHi: `29 तारीख को जन्मे लोग भावनात्मक रूप से बहुत गहरे हो सकते हैं।

इनमें अंतर्ज्ञान और लोगों को समझने की क्षमता रहती है।

ये संबंधों को गंभीरता से लेते हैं।

कभी-कभी मन जल्दी प्रभावित हो सकता है।

संतुलित स्थिति में यह जन्मतिथि सूक्ष्म समझ देती है।`,
    positiveTraits: ["Intuition", "Empathy", "Sensitivity"],
    cautionTraits: ["Mood shifts", "Emotional hurt"],
    career: ["Creative work", "Healing", "Counselling"],
    health: ["Cold", "Mental stress"],
    luckyNumbers: [2, 11, 29],
    luckyDays: ["Monday", "Sunday"],
    luckyColors: ["White", "Cream"],
    luckyStone: "Pearl",
  },
  {
    id: "dob30",
    day: 30,
    favorableStones: ["Yellow Sapphire", "Citrine", "Yellow Topaz", "Ruby"],
    compound: 30,
    rootNumber: 3,
    nameEn: "Date of Birth 30",
    nameHi: "जन्मतिथि 30",
    rulingPlanet: { en: "Jupiter", hi: "बृहस्पति" },
    shortDescEn:
      "Jupiter expands expression, ideas, and intellectual influence.",
    fullDescEn: `People born on 30th often carry expressive intelligence and a strong need to share ideas. Zero increases Jupiter's expansive quality here.

Such people may speak well, guide others, and think in broad perspectives.

They usually value learning and social respect.

Sometimes scattered effort or overexpectation may slow progress.

When balanced, this date gives influence, wisdom, and creative expansion.`,
    shortDescHi: "विचारों का विस्तार और अभिव्यक्ति इसकी मुख्य पहचान है।",
    fullDescHi: `30 तारीख को जन्मे लोग विचार व्यक्त करने में सक्षम होते हैं।

इनमें ज्ञान और सामाजिक प्रभाव की इच्छा रहती है।

ये सीखने और समझाने दोनों में अच्छे हो सकते हैं।

कभी-कभी प्रयास बिखर सकते हैं।

संतुलित स्थिति में यह जन्मतिथि ज्ञान और प्रभाव देती है।`,
    positiveTraits: ["Expression", "Wisdom", "Optimism"],
    cautionTraits: ["Overexpectation", "Scattered focus"],
    career: ["Teaching", "Writing", "Advisory"],
    health: ["Throat", "Liver tendency"],
    luckyNumbers: [3, 12, 21, 30],
    luckyDays: ["Thursday", "Sunday"],
    luckyColors: ["Yellow", "Cream"],
    luckyStone: "Yellow Sapphire",
  },
  {
    id: "dob31",
    day: 31,
    favorableStones: ["Hessonite", "Honey Garnet", "Cinnamon Stone", "Ruby"],
    compound: 31,
    rootNumber: 4,
    nameEn: "Date of Birth 31",
    nameHi: "जन्मतिथि 31",
    rulingPlanet: { en: "Rahu", hi: "राहु" },
    shortDescEn:
      "Independent thinking with controlled originality and practical depth.",
    fullDescEn: `People born on 31st often carry independent thought along with a practical and disciplined outer style.

Such people may not reveal ideas quickly, but usually think in original ways.

They often build slowly and prefer stable control over sudden movement.

Sometimes inner resistance or mental isolation may appear.

When balanced, this date gives originality, control, and practical achievement.`,
    shortDescHi: "स्वतंत्र सोच और नियंत्रित मौलिकता इसकी विशेषता है।",
    fullDescHi: `31 तारीख को जन्मे लोग अलग सोच रखते हैं पर उसे नियंत्रित ढंग से व्यक्त करते हैं।

ये लोग धीरे-धीरे मजबूत आधार बनाते हैं।

इनमें व्यावहारिकता और मौलिक दृष्टि दोनों रहती हैं।

कभी-कभी भीतर अलगाव महसूस हो सकता है।

संतुलित स्थिति में यह जन्मतिथि स्थिर सफलता देती है।`,
    positiveTraits: ["Originality", "Control", "Practical depth"],
    cautionTraits: ["Isolation", "Resistance"],
    career: ["Technology", "Planning", "Research"],
    health: ["Stress", "Digestive irregularity"],
    luckyNumbers: [4, 1],
    luckyDays: ["Sunday", "Saturday"],
    luckyColors: ["Grey", "Blue"],
    luckyStone: "Hessonite",
  },
];


export function getDOBPrediction(dd) {
  const day = parseInt(dd, 10);
  if (isNaN(day) || day < 1 || day > 31) return null;
  return DOB_NUMBERS.find((d) => d.day === day) ?? null;
}



