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
      "Strong individuality, leadership force, and natural authority shape this date.",
    fullDescEn: `People born on 1st usually carry strong self-confidence and a natural desire to move independently in life. They often prefer taking decisions on their own and dislike unnecessary control from others.

Sun influence gives leadership quality, courage, and a visible personal presence. Such people often wish to remain in front and naturally attract responsibility.

They usually develop strong determination and can stand firmly on their views even during difficult situations.

At times pride, rigidity, or harsh reaction may appear when their authority is challenged.

When balanced, this date gives confidence, influence, and success through personal effort.`,
    shortDescHi:
      "मजबूत व्यक्तित्व, नेतृत्व क्षमता और स्वाभाविक अधिकार इसकी मुख्य पहचान है।",
    fullDescHi: `1 तारीख को जन्मे लोग सामान्यतः आत्मविश्वासी, स्वतंत्र और स्पष्ट निर्णय लेने वाले होते हैं। ये अपने जीवन में स्वयं आगे बढ़ना चाहते हैं और अनावश्यक नियंत्रण पसंद नहीं करते।

सूर्य का प्रभाव इन्हें नेतृत्व, साहस और स्पष्ट व्यक्तित्व देता है, इसलिए कई बार ये स्वाभाविक रूप से आगे दिखाई देते हैं।

इनमें निर्णय पर दृढ़ रहने की क्षमता होती है और कठिन समय में भी अपनी बात पर टिके रह सकते हैं।

यदि सम्मान न मिले तो कभी-कभी अहं, कठोरता या तीखी प्रतिक्रिया दिखाई दे सकती है।

संतुलित स्थिति में यह जन्मतिथि प्रभाव, सम्मान और व्यक्तिगत सफलता देती है।`,
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
    shortDescEn:
      "Sensitivity, emotional depth, and soft human understanding dominate this date.",
    fullDescEn: `People born on 2nd usually carry softness in behaviour and emotional sensitivity in relationships. They often understand feelings quickly and react gently.

Moon influence makes the mind imaginative, caring, and deeply responsive to surroundings.

They usually value peace, support family bonds, and maintain emotional connection strongly.

Sometimes mood changes, hesitation, or emotional hurt may disturb inner stability.

When balanced, this date gives empathy, calmness, and emotional intelligence.`,
    shortDescHi:
      "संवेदनशीलता, भावनात्मक गहराई और कोमल समझ इसकी मुख्य विशेषता है।",
    fullDescHi: `2 तारीख को जन्मे लोग सामान्यतः कोमल स्वभाव, भावुक सोच और दूसरों की भावनाएँ समझने वाले होते हैं।

चंद्रमा का प्रभाव मन को कल्पनाशील, संवेदनशील और परिस्थिति से जल्दी प्रभावित होने वाला बनाता है।

ये लोग संबंधों में गहराई रखते हैं और परिवार या निकट लोगों के प्रति सहयोगी रहते हैं।

कभी-कभी मन जल्दी आहत हो सकता है या मूड में उतार-चढ़ाव दिखाई दे सकता है।

संतुलित स्थिति में यह जन्मतिथि सहानुभूति, शांति और भावनात्मक संतुलन देती है।`,
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
    shortDescEn:
      "Wisdom, expression, and growth through knowledge become central here.",
    fullDescEn: `People born on 3rd usually carry a natural desire for growth, learning, and meaningful progress in life.

Jupiter influence gives wisdom, advisory nature, and confidence in expression.

They often value knowledge, social respect, and organised movement.

Sometimes overexpectation or rigidity may appear when situations do not move as desired.

When balanced, this date gives maturity, expansion, and respected influence.`,
    shortDescHi: "ज्ञान, अभिव्यक्ति और प्रगति की शक्ति इसकी मुख्य पहचान है।",
    fullDescHi: `3 तारीख को जन्मे लोग सामान्यतः ज्ञान, समझ और जीवन में निरंतर आगे बढ़ने की इच्छा रखते हैं।

बृहस्पति का प्रभाव इन्हें सलाह देने वाला, समझदार और सम्मानप्रिय स्वभाव देता है।

ये लोग योजनाबद्ध ढंग से कार्य करना पसंद करते हैं और सामाजिक प्रतिष्ठा चाहते हैं।

कभी-कभी अपेक्षाएँ अधिक होने से भीतर कठोरता आ सकती है।

संतुलित स्थिति में यह जन्मतिथि सम्मान, ज्ञान और स्थिर प्रगति देती है।`,
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
    shortDescEn:
      "Original thinking, unusual ideas, and practical intensity define this date.",
    fullDescEn: `People born on 4th often think differently and do not always follow conventional patterns.

Rahu influence gives unusual ideas, practical intelligence, and sudden mental activity.

They usually work hard and often carry strong responsibility.

Sometimes hidden stress, overthinking, or internal conflict may remain active.

When balanced, this date gives originality and practical strength.`,
    shortDescHi:
      "अलग सोच, व्यावहारिक दृष्टि और असामान्य मानसिक सक्रियता इसकी पहचान है।",
    fullDescHi: `4 तारीख को जन्मे लोग सामान्यतः अलग सोच रखते हैं और सामान्य रास्तों से हटकर विचार करते हैं।

राहु का प्रभाव इन्हें नई दिशा में सोचने और असामान्य योजनाएँ बनाने की क्षमता देता है।

ये मेहनती होते हैं और जिम्मेदारी निभाने की कोशिश करते हैं।

कभी-कभी भीतर तनाव, उलझन या मानसिक दबाव बना रह सकता है।

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
    shortDescEn:
      "Fast intelligence, communication skill, and adaptability remain strong here.",
    fullDescEn: `People born on 5th usually think quickly and adapt rapidly to changing conditions.

Mercury gives communication ability, intelligence, and curiosity.

They often learn fast and handle multiple situations well.

Sometimes restlessness or inconsistency may reduce focus.

When balanced, this date gives sharp intellect and practical success.`,
    shortDescHi: "तेज बुद्धि, संवाद क्षमता और अनुकूलन इसकी मुख्य शक्ति है।",
    fullDescHi: `5 तारीख को जन्मे लोग तेज सोचते हैं और परिस्थितियों को जल्दी समझ लेते हैं।

बुध का प्रभाव इन्हें वाणी, बुद्धि और सीखने की क्षमता देता है।

ये बदलती परिस्थितियों में स्वयं को जल्दी ढाल लेते हैं।

कभी-कभी बेचैनी या मानसिक अस्थिरता बढ़ सकती है।

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
    shortDescEn:
      "Charm, harmony, and emotional attraction become natural qualities.",
    fullDescEn: `People born on 6th usually carry natural charm and pleasant social behaviour.

Venus gives beauty, relationship awareness, and comfort orientation.

They value harmony, aesthetics, and emotional warmth.

Sometimes attachment or comfort dependency may become strong.

When balanced, this date gives attraction, harmony, and stable relationships.`,
    shortDescHi: "आकर्षण, संतुलन और मधुर व्यवहार इसकी मुख्य पहचान है।",
    fullDescHi: `6 तारीख को जन्मे लोग सामान्यतः आकर्षक व्यक्तित्व और मिलनसार स्वभाव रखते हैं।

शुक्र का प्रभाव इन्हें सौंदर्य, संतुलन और संबंधों की समझ देता है।

ये अच्छे वातावरण और भावनात्मक जुड़ाव पसंद करते हैं।

कभी-कभी सुविधा या लगाव अधिक बढ़ सकता है।

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
    shortDescEn:
      "Inner depth, intuition, and silent observation dominate this date.",
    fullDescEn: `People born on 7th usually think deeply and observe quietly before reacting.

Ketu gives inner depth, subtle thinking, and spiritual curiosity.

They often search for hidden meaning and deeper truth.

Sometimes isolation or emotional distance may appear.

When balanced, this date gives intuition and deep wisdom.`,
    shortDescHi: "अंतर्ज्ञान, गहराई और सूक्ष्म समझ इसकी मुख्य शक्ति है।",
    fullDescHi: `7 तारीख को जन्मे लोग सामान्यतः गहराई से सोचते हैं और हर बात को भीतर से समझना चाहते हैं।

केतु का प्रभाव इन्हें सूक्ष्म सोच और आध्यात्मिक झुकाव देता है।

ये जल्दी खुलते नहीं और भीतर विश्लेषण करते रहते हैं।

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
    shortDescEn:
      "Discipline, endurance, and slow but stable growth define this date.",
    fullDescEn: `People born on 8th often move through life with seriousness and responsibility.

Saturn gives patience, endurance, and maturity through experience.

Success often comes slowly but remains stable.

Sometimes heaviness, loneliness, or delay may feel strong.

When balanced, this date gives lasting achievement.`,
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
    shortDescEn: "Action, courage, and strong energy dominate this date.",
    fullDescEn: `People born on 9th usually carry strong action energy and direct expression.

Mars gives courage, force, and fast decision-making ability.

They often take initiative and face challenge directly.

Sometimes anger or impulsive reactions may appear.

When balanced, this date gives courage and determined success.`,
    shortDescHi: "ऊर्जा, साहस और कर्मशीलता इसकी मुख्य शक्ति है।",
    fullDescHi: `9 तारीख को जन्मे लोग ऊर्जावान और सीधे स्वभाव के होते हैं।

मंगल का प्रभाव इन्हें साहस और तेज निर्णय क्षमता देता है।

ये चुनौती से पीछे नहीं हटते।

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
      "Powerful Sun vibration with stronger individuality and visible authority.",
    fullDescEn: `People born on 10th carry amplified Sun energy because zero strengthens individuality and self-expression.

They usually want recognition, independence, and visible achievement.

Leadership quality often appears naturally.

Sometimes ego or internal pressure becomes strong.

When balanced, this date gives authority and strong success.`,
    shortDescHi:
      "शक्तिशाली सूर्य ऊर्जा और बढ़ी हुई नेतृत्व क्षमता इसकी पहचान है।",
    fullDescHi: `10 तारीख को जन्मे लोगों में सूर्य की शक्ति शून्य के कारण और प्रभावशाली हो जाती है।

ये लोग पहचान, नेतृत्व और स्वतंत्र निर्णय की ओर बढ़ते हैं।

इनमें स्वाभाविक प्रशासनिक क्षमता देखी जा सकती है।

कभी-कभी अहं या भीतर दबाव बढ़ सकता है।

संतुलित स्थिति में यह जन्मतिथि प्रभाव और सम्मान देती है।`,
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
      "Master vibration with intuition, attraction, and emotional power.",
    fullDescEn: `People born on 11th often carry a highly sensitive and influential vibration because this date is considered a master number. It combines strong inner awareness with visible personal magnetism.

Such people usually attract attention naturally and often carry ambition along with emotional intelligence.

They may possess imagination, moral strength, and a strong ability to influence others through words or behaviour.

Sometimes small emotional events affect them deeply and mental pressure remains hidden inside.

When balanced, this date gives intuition, public appeal, and refined inner strength.`,
    shortDescHi:
      "मास्टर नंबर की ऊर्जा, अंतर्ज्ञान और आकर्षक व्यक्तित्व इसकी विशेषता है।",
    fullDescHi: `11 तारीख को जन्मे लोग मास्टर नंबर के प्रभाव में माने जाते हैं, इसलिए इनमें संवेदनशीलता और प्रभाव दोनों साथ चलते हैं।

ऐसे लोग स्वाभाविक रूप से लोगों का ध्यान आकर्षित करते हैं और भीतर महत्वाकांक्षा भी रखते हैं।

इनमें कल्पना शक्ति, नैतिक सोच और दूसरों को प्रभावित करने की क्षमता अच्छी हो सकती है।

कभी-कभी छोटी बात भी मन पर गहरा असर छोड़ सकती है और मानसिक दबाव भीतर बना रहता है।

संतुलित स्थिति में यह जन्मतिथि अंतर्ज्ञान, सम्मान और विशेष आकर्षण देती है।`,
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
      "Thoughtful Jupiter expression formed through emotional and mental balance.",
    fullDescEn: `People born on 12th usually carry a thoughtful combination of emotional softness and intellectual growth.

This date often supports communication, creativity, and social friendliness.

Such people usually understand others well and prefer meaningful interaction.

Sometimes mental hesitation may slow decisions.

When balanced, this date gives wisdom, learning, and smooth progress.`,
    shortDescHi: "भावनात्मक समझ और ज्ञान का संतुलन इसकी मुख्य पहचान है।",
    fullDescHi: `12 तारीख को जन्मे लोगों में भावनात्मक समझ और बौद्धिक विकास साथ-साथ चलता है।

ये लोग मित्रवत, रचनात्मक और विचारशील स्वभाव रखते हैं।

इनमें संवाद, समझाने और सीखने की क्षमता अच्छी रहती है।

कभी-कभी निर्णय लेने में हल्का संकोच रह सकता है।

संतुलित स्थिति में यह जन्मतिथि ज्ञान और स्थिर प्रगति देती है।`,
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
      "Unusual ambition, strategic thinking, and Rahu-driven originality appear strongly.",
    fullDescEn: `People born on 13th often carry a powerful combination of independent thinking and practical ambition.

This date creates unusual ideas and a tendency to move differently from common patterns.

Such people usually prefer their own methods and often think ahead strategically.

Sometimes stubbornness, hidden stress, or conflict with authority may appear.

When balanced, this date gives originality, planning strength, and practical rise.`,
    shortDescHi:
      "अलग सोच, रणनीति और व्यावहारिक महत्वाकांक्षा इसकी मुख्य पहचान है।",
    fullDescHi: `13 तारीख को जन्मे लोग सामान्यतः स्वतंत्र सोच और अलग कार्यशैली रखते हैं।

इनमें अपनी योजना से आगे बढ़ने की इच्छा रहती है और कई बार सामान्य मार्ग से अलग परिणाम बनाते हैं।

ये व्यावहारिक समझ और रणनीतिक सोच रखने वाले हो सकते हैं।

कभी-कभी जिद, भीतर तनाव या विरोध की स्थिति बन सकती है।

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
      "Fast-moving intelligence with frequent change and mental alertness.",
    fullDescEn: `People born on 14th usually carry sharp intelligence and quick adaptability.

Mercury influence here often creates movement, change, and fast communication.

Such people understand situations rapidly and respond practically.

Sometimes nervous pressure or inconsistency may disturb stability.

When balanced, this date gives communication success and adaptability.`,
    shortDescHi: "तेज बुद्धि, परिवर्तनशीलता और मानसिक सतर्कता इसकी पहचान है।",
    fullDescHi: `14 तारीख को जन्मे लोग तेज सोचने वाले और जल्दी परिस्थिति समझने वाले होते हैं।

बुध का प्रभाव इन्हें संवाद और विश्लेषण में सक्षम बनाता है।

जीवन में परिवर्तन और नए अनुभव अधिक रह सकते हैं।

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
      "Charm, emotional warmth, and creative attraction become stronger here.",
    fullDescEn: `People born on 15th often carry strong personal attraction and pleasing behaviour.

Venus influence gives warmth, beauty sense, and social magnetism.

They usually value relationships, comfort, and harmony.

Sometimes emotional attachment or expectation becomes stronger.

When balanced, this date gives charm, popularity, and creative success.`,
    shortDescHi: "आकर्षण, भावनात्मक ऊष्मा और रचनात्मक प्रभाव इसकी शक्ति है।",
    fullDescHi: `15 तारीख को जन्मे लोगों में आकर्षण और मधुर व्यवहार स्वाभाविक रूप से दिखाई देता है।

शुक्र का प्रभाव इन्हें संबंधों में संतुलन और सौंदर्य की समझ देता है।

ये लोग सामाजिक रूप से प्रभाव छोड़ सकते हैं।

कभी-कभी अपेक्षाएँ या लगाव अधिक बढ़ सकता है।

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
      "Deep inner analysis, karmic lessons, and strong self-reflection shape this date.",
    fullDescEn: `People born on 16th often carry a serious inner world and reflective mental depth.

This date supports hidden analysis, spiritual curiosity, and deep observation.

Such people usually think carefully before trusting situations.

Sometimes disappointment, withdrawal, or mental pressure may arise suddenly.

When balanced, this date gives intuition and inner maturity.`,
    shortDescHi: "आत्मविश्लेषण, गहराई और कर्मिक सीख इसकी विशेषता है।",
    fullDescHi: `16 तारीख को जन्मे लोग भीतर से गहराई से सोचने वाले होते हैं।

इनमें घटनाओं को भीतर से समझने और सत्य खोजने की प्रवृत्ति रहती है।

ये जल्दी खुलते नहीं और शांत दिखते हुए भीतर बहुत सक्रिय रहते हैं।

कभी-कभी मानसिक दबाव या अचानक निराशा आ सकती है।

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
      "Disciplined ambition and long-term stability develop strongly here.",
    fullDescEn: `People born on 17th often carry practical ambition and serious life direction.

This date supports patience, endurance, and steady achievement.

Such people usually gain respect slowly through consistency.

Sometimes delays or emotional heaviness become noticeable.

When balanced, this date gives lasting credibility and structured success.`,
    shortDescHi: "अनुशासित महत्वाकांक्षा और स्थायी उपलब्धि इसकी पहचान है।",
    fullDescHi: `17 तारीख को जन्मे लोग गंभीर लक्ष्य और स्थिर प्रयास रखने वाले होते हैं।

ये धीरे-धीरे मजबूत स्थिति बनाते हैं और निरंतरता रखते हैं।

इनमें धैर्य और कार्य के प्रति अनुशासन अच्छा रहता है।

कभी-कभी परिणाम देर से मिलने से भीतर दबाव आ सकता है।

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
      "Strong energy, struggle power, and direct action dominate this date.",
    fullDescEn: `People born on 18th often carry strong courage and forceful reactions.

This date supports struggle ability and emotional intensity.

Such people usually stand firmly for what they believe.

Sometimes anger or conflict may increase under pressure.

When balanced, this date gives courage and determined rise.`,
    shortDescHi:
      "ऊर्जा, संघर्ष क्षमता और तीव्र प्रतिक्रिया इसकी मुख्य शक्ति है।",
    fullDescHi: `18 तारीख को जन्मे लोग साहसी और सक्रिय स्वभाव रखते हैं।

इनमें कठिन परिस्थिति में आगे बढ़ने की क्षमता होती है।

ये अपने विचारों के लिए मजबूती से खड़े रहते हैं।

कभी-कभी क्रोध या टकराव बढ़ सकता है।

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
    shortDescEn: "Sun and Mars combine to create bold self-driven leadership.",
    fullDescEn: `People born on 19th often carry strong individuality with visible courage.

This date supports independence, initiative, and ambition.

Such people usually prefer direct action and self-effort.

Sometimes pride or forceful behaviour may appear.

When balanced, this date gives leadership and powerful progress.`,
    shortDescHi: "सूर्य और मंगल की संयुक्त शक्ति नेतृत्व को मजबूत बनाती है।",
    fullDescHi: `19 तारीख को जन्मे लोगों में सूर्य और मंगल का संयुक्त प्रभाव मजबूत होता है।

ये लोग साहसी, स्वतंत्र और स्पष्ट निर्णय वाले होते हैं।

इनमें आगे बढ़ने की तीव्र इच्छा रहती है।

कभी-कभी अहं या कठोरता बढ़ सकती है।

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
      "Enhanced Moon vibration with softness, care, and emotional awareness.",
    fullDescEn: `People born on 20th often carry deeper emotional sensitivity because zero strengthens Moon influence.

Such people usually remain polite, caring, and emotionally aware.

They often understand relationships deeply and prefer peace.

Sometimes hidden worry or mood fluctuation may continue internally.

When balanced, this date gives empathy and emotional stability.`,
    shortDescHi:
      "शक्तिशाली चंद्र प्रभाव, कोमलता और भावनात्मक समझ इसकी पहचान है।",
    fullDescHi: `20 तारीख को जन्मे लोगों में चंद्रमा का प्रभाव अधिक गहरा होता है।

ये लोग विनम्र, संवेदनशील और सहयोगी स्वभाव रखते हैं।

इनमें संबंधों को समझने की क्षमता अच्छी होती है।

कभी-कभी मन में चिंता या मूड परिवर्तन रह सकता है।

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
      "Expressive wisdom, social warmth, and balanced optimism shape this date.",
    fullDescEn: `People born on 21st often carry a pleasant combination of emotional sensitivity and self-confidence. This date supports graceful communication and natural social ease.

Such people usually appear friendly, thoughtful, and capable of maintaining harmony in relationships.

They often have imagination, humour, and the ability to explain ideas clearly.

Sometimes emotional fluctuation or dependence on appreciation may affect inner stability.

When balanced, this date gives wisdom, optimism, and graceful social growth.`,
    shortDescHi: "अभिव्यक्ति, समझ और सामाजिक सहजता इसकी मुख्य पहचान है।",
    fullDescHi: `21 तारीख को जन्मे लोग सामान्यतः मिलनसार, विचारशील और संतुलित स्वभाव रखते हैं।

इनमें भावनात्मक समझ और आत्मविश्वास का अच्छा मेल देखा जाता है।

ये लोग बातचीत में प्रभाव छोड़ते हैं और अक्सर दूसरों को सहज महसूस कराते हैं।

कभी-कभी भीतर प्रशंसा की अपेक्षा या भावनात्मक उतार-चढ़ाव रह सकता है।

संतुलित स्थिति में यह जन्मतिथि ज्ञान, सामाजिक सम्मान और सहज प्रगति देती है।`,
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
      "Master builder energy with planning power and strong practical vision.",
    fullDescEn: `People born on 22nd often carry strong internal pressure to build something meaningful in life. This master number supports long-term planning and unusual practical strength.

Such people usually think differently and aim for visible results.

They often carry organisational ability and serious work orientation.

Sometimes overthinking or internal dissatisfaction may disturb peace.

When balanced, this date gives structured success and practical influence.`,
    shortDescHi:
      "मास्टर नंबर की योजना शक्ति और व्यावहारिक दृष्टि इसकी मुख्य विशेषता है।",
    fullDescHi: `22 तारीख को जन्मे लोग सामान्यतः बड़ी सोच और ठोस योजना बनाने की क्षमता रखते हैं।

इनमें कार्य को संरचना देने और परिणाम तक पहुँचाने की विशेष योग्यता हो सकती है।

ये अक्सर अलग ढंग से सोचते हैं और गंभीरता से काम करते हैं।

कभी-कभी मानसिक दबाव या भीतर असंतोष बना रह सकता है।

संतुलित स्थिति में यह जन्मतिथि बड़ी उपलब्धि और स्थिर प्रभाव देती है।`,
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
      "Sharp communication, mental speed, and social adaptability become strong.",
    fullDescEn: `People born on 23rd usually carry strong communication skill and quick mental response.

This date supports flexibility, calculation ability, and practical intelligence.

Such people usually understand situations rapidly and express ideas effectively.

Sometimes impatience or mental overactivity may reduce consistency.

When balanced, this date gives opportunity through communication and networking.`,
    shortDescHi:
      "तेज संवाद क्षमता, मानसिक गति और सामाजिक अनुकूलन इसकी शक्ति है।",
    fullDescHi: `23 तारीख को जन्मे लोग तेज बुद्धि और प्रभावशाली संवाद क्षमता रखते हैं।

ये परिस्थितियों को जल्दी समझते हैं और अपनी बात स्पष्ट रख सकते हैं।

इनमें अनुकूलन क्षमता और व्यावहारिक समझ अच्छी रहती है।

कभी-कभी मन अधिक सक्रिय रहने से बेचैनी बढ़ सकती है।

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
      "Stable Venus influence brings care, responsibility, and emotional balance.",
    fullDescEn: `People born on 24th often carry warmth, responsibility, and practical emotional maturity.

Such people usually value family, comfort, and stable relationships.

They often support others naturally and maintain balanced surroundings.

Sometimes emotional burden or over-responsibility becomes heavy.

When balanced, this date gives harmony and steady material comfort.`,
    shortDescHi:
      "स्थिर शुक्र प्रभाव, जिम्मेदारी और भावनात्मक संतुलन इसकी पहचान है।",
    fullDescHi: `24 तारीख को जन्मे लोग परिवार, संबंध और स्थिरता को महत्व देने वाले होते हैं।

इनमें जिम्मेदारी निभाने की क्षमता और दूसरों की चिंता करने की प्रवृत्ति रहती है।

ये संतुलित वातावरण पसंद करते हैं और सहयोगी बने रहते हैं।

कभी-कभी जिम्मेदारियाँ भीतर दबाव बना सकती हैं।

संतुलित स्थिति में यह जन्मतिथि स्थिर सुख और संतुलन देती है।`,
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
      "Analytical thinking, intuition, and silent observation shape this date.",
    fullDescEn: `People born on 25th often carry strong analytical ability with inner sensitivity.

Such people usually study situations carefully before trusting.

They often possess intuition and interest in deeper subjects.

Sometimes worry or emotional distance may appear.

When balanced, this date gives insight and subtle mental strength.`,
    shortDescHi: "विश्लेषण, अंतर्ज्ञान और सूक्ष्म अवलोकन इसकी मुख्य शक्ति है।",
    fullDescHi: `25 तारीख को जन्मे लोग गहराई से सोचने और विश्लेषण करने वाले होते हैं।

ये परिस्थितियों को ध्यान से परखते हैं और जल्दी विश्वास नहीं करते।

इनमें सूक्ष्म समझ और अंतर्ज्ञान अच्छा रहता है।

कभी-कभी चिंता या भीतर दूरी की भावना आ सकती है।

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
      "Responsibility, delayed rewards, and serious life lessons dominate here.",
    fullDescEn: `People born on 26th often carry practical responsibility from early stages of life.

This date usually creates serious thinking about security, work, and long-term stability.

Such people often mature through experience and pressure.

Sometimes delay, heaviness, or trust issues may appear.

When balanced, this date gives endurance, authority, and lasting achievement.`,
    shortDescHi:
      "जिम्मेदारी, देरी से मिलने वाले फल और गंभीर जीवन दृष्टि इसकी विशेषता है।",
    fullDescHi: `26 तारीख को जन्मे लोग अक्सर जिम्मेदारी जल्दी समझने लगते हैं और जीवन को गंभीरता से लेते हैं।

इनमें सुरक्षा, कार्य और स्थिरता के प्रति मजबूत सोच रहती है।

ये अनुभवों से धीरे-धीरे परिपक्व होते हैं।

कभी-कभी देरी, मानसिक दबाव या भरोसे की समस्या रह सकती है।

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
    shortDescEn: "Courage joins intuition to create thoughtful strength.",
    fullDescEn: `People born on 27th often combine courage with deeper inner understanding.

Such people usually act firmly but think carefully before major decisions.

They often carry duty, protection, and purposeful action.

Sometimes emotional intensity or inner conflict may arise.

When balanced, this date gives courage with wisdom.`,
    shortDescHi: "साहस और अंतर्ज्ञान का संतुलन इसे विशेष बनाता है।",
    fullDescHi: `27 तारीख को जन्मे लोगों में साहस के साथ भीतर की समझ भी रहती है।

ये निर्णय में मजबूत होते हैं और जिम्मेदारी निभाना जानते हैं।

इनमें संरक्षण और कर्तव्य की भावना भी देखी जाती है।

कभी-कभी भीतर तनाव या तीव्र प्रतिक्रिया आ सकती है।

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
      "Leadership develops through struggle, correction, and maturity.",
    fullDescEn: `People born on 28th often carry leadership potential, but life teaches through changing circumstances.

Such people usually want independence and recognition.

They often rebuild confidence after setbacks.

Sometimes ego clashes or disappointment may appear.

When balanced, this date gives resilience and mature authority.`,
    shortDescHi: "संघर्ष के बीच विकसित होने वाला नेतृत्व इसकी मुख्य पहचान है।",
    fullDescHi: `28 तारीख को जन्मे लोग स्वतंत्र पहचान बनाना चाहते हैं और जीवन में अनुभवों से मजबूत होते हैं।

इनमें नेतृत्व की क्षमता स्वाभाविक रूप से दिखाई देती है।

ये कई बार गिरकर फिर मजबूत रूप से आगे बढ़ते हैं।

कभी-कभी संबंधों में टकराव या निराशा आ सकती है।

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
      "Deep sensitivity and intuition create refined emotional perception.",
    fullDescEn: `People born on 29th often carry powerful emotional sensitivity and intuitive perception.

Such people usually understand hidden feelings quickly.

They often need emotional clarity to perform well.

Sometimes doubt, hurt, or mood shifts become strong.

When balanced, this date gives empathy and refined inner strength.`,
    shortDescHi: "गहरी संवेदनशीलता और तीव्र अंतर्ज्ञान इसकी मुख्य शक्ति है।",
    fullDescHi: `29 तारीख को जन्मे लोग भावनात्मक रूप से गहरे और सूक्ष्म समझ रखने वाले हो सकते हैं।

इनमें लोगों की भावना जल्दी समझने की क्षमता रहती है।

ये संबंधों को गंभीरता से लेते हैं।

कभी-कभी मन जल्दी प्रभावित हो सकता है।

संतुलित स्थिति में यह जन्मतिथि सूक्ष्म समझ और भावनात्मक शक्ति देती है।`,
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
      "Expanded expression, ideas, and intellectual influence become strong.",
    fullDescEn: `People born on 30th often carry expressive intelligence and a strong need to share ideas.

Such people usually think broadly and explain well.

They often value learning and social respect.

Sometimes scattered effort may reduce progress.

When balanced, this date gives wisdom and creative expansion.`,
    shortDescHi: "विचारों का विस्तार और प्रभावशाली अभिव्यक्ति इसकी पहचान है।",
    fullDescHi: `30 तारीख को जन्मे लोग विचारों को स्पष्ट रूप से व्यक्त करने में सक्षम होते हैं।

इनमें ज्ञान, समझ और सामाजिक प्रभाव की इच्छा रहती है।

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
      "Independent thought, originality, and controlled practical depth define this date.",
    fullDescEn: `People born on 31st often carry independent thought along with practical discipline.

Such people may not reveal ideas quickly, but usually think in original ways.

They often build slowly and prefer stable control.

Sometimes inner resistance or mental isolation may appear.

When balanced, this date gives originality and practical achievement.`,
    shortDescHi: "स्वतंत्र सोच और नियंत्रित मौलिकता इसकी विशेषता है।",
    fullDescHi: `31 तारीख को जन्मे लोग अलग सोच रखते हैं, लेकिन अपनी योजना तुरंत प्रकट नहीं करते।

ये धीरे-धीरे मजबूत आधार बनाते हैं और स्थिरता पसंद करते हैं।

इनमें मौलिक दृष्टि और व्यावहारिक नियंत्रण दोनों साथ चलते हैं।

कभी-कभी भीतर अलगाव या मानसिक दूरी महसूस हो सकती है।

संतुलित स्थिति में यह जन्मतिथि स्थिर सफलता और अलग पहचान देती है।`,
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



