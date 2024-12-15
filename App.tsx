import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecitationScreen, { RecitationData } from "./screens/RecitationScreen";

export const ComprehensiveSalawatData: RecitationData = {
  title: "Comprehensive Salawat and Dhikr Collection",
  description: "Detailed Collection of Prayers and Remembrances",
  language: "ar",
  category: "Islamic Supplications",

  // Individual lines
  lines: [
    {
      id: "individual-line-1",
      arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
      transliteration: "Subhana Lillahi wa Bihamdihi",
      translations: {
        en: "Glory be to Allah and Praise be to Him",
        ar: "سبحان الله وبحمده",
      },
      words: [
        {
          word: "سُبْحَانَ",
          translations: { en: "Glory be", ar: "سبحان" },
          transliteration: "Subhana",
          highlighted: true,
        },
        {
          word: "اللهِ",
          translations: { en: "to Allah", ar: "الله" },
          transliteration: "Lillahi",
        },
        {
          word: "وَبِحَمْدِهِ",
          translations: { en: "and with His praise", ar: "وبحمده" },
          transliteration: "wa Bihamdihi",
        },
      ],
      countable: true,
      recitationCount: 0,
      specialHighlight: true,
      style: {
        textColor: "#006400",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        fontWeight: "bold",
      },
    },
  ],

  // Groups with comprehensive examples
  groups: [
    {
      id: "morning-tasbeeh",
      title: "Morning Glorification",
      type: "parallel",
      description: "Parallel recitation of morning remembrance",
      lines: [
        {
          id: "tasbeeh-line-1",
          arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
          transliteration: "Subhana Lillahi wa Bihamdihi",
          translations: {
            en: "Glory be to Allah and Praise be to Him",
            ar: "سبحان الله وبحمده",
          },
          words: [
            {
              word: "سُبْحَانَ",
              translations: { en: "Glory be", ar: "سبحان" },
              transliteration: "Subhana",
              highlighted: true,
            },
            {
              word: "اللهِ",
              translations: { en: "to Allah", ar: "الله" },
              transliteration: "Lillahi",
            },
            {
              word: "وَبِحَمْدِهِ",
              translations: { en: "and with His praise", ar: "وبحمده" },
              transliteration: "wa Bihamdihi",
            },
          ],
        },
        {
          id: "tasbeeh-line-2",
          arabic: "سُبْحَانَ اللهِ الْعَظِيمِ",
          transliteration: "Subhana Lillahil 'Adheem",
          translations: {
            en: "Glory be to Allah, the Magnificent",
            ar: "سبحان الله العظيم",
          },
          words: [
            {
              word: "سُبْحَانَ",
              translations: { en: "Glory be", ar: "سبحان" },
              transliteration: "Subhana",
              highlighted: true,
            },
            {
              word: "اللهِ",
              translations: { en: "to Allah", ar: "الله" },
              transliteration: "Lillahi",
            },
            {
              word: "الْعَظِيمِ",
              translations: { en: "the Magnificent", ar: "العظيم" },
              transliteration: "al-'Adheem",
            },
          ],

          specialHighlight: true,
          style: {
            textColor: "#4169E1",
            backgroundColor: "rgba(65, 105, 225, 0.1)",
          },
        },
      ],
    },
    {
      id: "sequential-istighfar",
      title: "Sequential Seeking Forgiveness",
      type: "sequential",
      description: "Progressive stages of seeking Allah's forgiveness",
      lines: [
        {
          id: "istighfar-line-1",
          arabic: "أَسْتَغْفِرُ اللهَ",
          transliteration: "Astaghfirullah",
          translations: {
            en: "I seek forgiveness from Allah",
            ar: "أستغفر الله",
          },
          words: [
            {
              word: "أَسْتَغْفِرُ",
              translations: { en: "I seek forgiveness", ar: "أستغفر" },
              transliteration: "Astaghfiru",
              highlighted: true,
            },
            {
              word: "اللهَ",
              translations: { en: "Allah", ar: "الله" },
              transliteration: "Lillah",
            },
          ],

          style: {
            textColor: "#8B0000",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
          },
        },
        {
          id: "istighfar-line-2",
          arabic: "أَسْتَغْفِرُ اللهَ الْعَظِيمَ",
          transliteration: "Astaghfirullah al-'Adheem",
          translations: {
            en: "I seek forgiveness from Allah, the Magnificent",
            ar: "أستغفر الله العظيم",
          },
          words: [
            {
              word: "أَسْتَغْفِرُ",
              translations: { en: "I seek forgiveness", ar: "أستغفر" },
              transliteration: "Astaghfiru",
            },
            {
              word: "اللهَ",
              translations: { en: "Allah", ar: "الله" },
              transliteration: "Lillah",
            },
            {
              word: "الْعَظِيمَ",
              translations: { en: "the Magnificent", ar: "العظيم" },
              transliteration: "al-'Adheem",
              highlighted: true,
            },
          ],
        },
      ],
    },
    {
      id: "alternating-dhikr",
      title: "Alternating Remembrance",
      type: "alternating",
      description: "Rhythmic remembrance of Allah's attributes",
      lines: [
        {
          id: "dhikr-line-1",
          arabic: "اللَّهُ أَكْبَرُ",
          transliteration: "Allahu Akbar",
          translations: {
            en: "Allah is the Greatest",
            ar: "الله أكبر",
          },
          words: [
            {
              word: "اللَّهُ",
              translations: { en: "Allah", ar: "الله" },
              transliteration: "Allah",
              highlighted: true,
            },
            {
              word: "أَكْبَرُ",
              translations: { en: "is the Greatest", ar: "أكبر" },
              transliteration: "Akbar",
            },
          ],

          specialHighlight: true,
        },
        {
          id: "dhikr-line-2",
          arabic: "الْحَمْدُ لِلَّهِ",
          transliteration: "Alhamdu Lillah",
          translations: {
            en: "Praise be to Allah",
            ar: "الحمد لله",
          },
          words: [
            {
              word: "الْحَمْدُ",
              translations: { en: "Praise", ar: "الحمد" },
              transliteration: "al-Hamdu",
            },
            {
              word: "لِلَّهِ",
              translations: { en: "to Allah", ar: "لله" },
              transliteration: "Lillah",
              highlighted: true,
            },
          ],
        },
      ],
    },
  ],
};

export const ComprehensiveSalawatData1: RecitationData = {
  title: "Mahlaratul Badriyya",
  description: "Detailed Collection of Prayers and Remembrances",
  language: "ar",
  category: "Islamic Supplications",

  // Groups with comprehensive examples
  groups: [
    {
      id: "bismillah-group",
      type: "parallel",
      lines: [
        {
          id: "bismillah-line-1",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        },
      ],
    },
    {
      id: "short-surahs",
      type: "parallel",
      lines: [
        {
          id: "short-surahs-line",
          arabic:
            "سُورَةُ الْفَاتِحَة(1) سُورَةُ الْإِخْلَاصُ(3) سُورَةُ الْفَلَقُ(1) سُورَةُ النَّاسُ(1)",
        },
      ],
    },

    {
      id: "supplication-group",
      title: "Du'a",
      type: "sequential",

      lines: [
        {
          id: "line-1",
          arabic:
            "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا وَحَبِيبِنَا وَمَوْلَانَا وَمُنْجِينَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اللَّهُمَّ أَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ مِنَ الْقُرْآنِ الْعَظِيمِ وَمَا صَلَّيْنَاهُ إِلَى حَضْرَةِ سَيِّدِنَا وَحَبِيبِنَا الْمُصْطَفَى مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اللَّهُمَّ آتِهِ الْوَسِيلَةَ وَالْفَضِيلَةَ وَالدَّرَجَةَ الرَّفِيعَةَ وَإِلَى حَضَرَاتِ أَهْلِ الْخَيْرِ كُلِّهِمْ أَجْمَعِينَ اللَّهُمَّ بِحَقِّهِمْ وَبِجَاهِهِمْ يَسِّرْ عَسِيرَنَا وَسَهِّلْ أُمُورَنَا وَاشْفِ مَرْضَانَا وَاقْضِ حَوَائِجَنَا وَأَدِ دُيُونَنَا يَا رَبَّ الْعَالَمِينَ اللَّهُمَّ سَلِّمْنَا وَمَنْ تَعَلَّقَ بِنَا مِنْ آفَاتِ الدَّارَيْنِ وَارْزُقْنَا وَإِيَّاهُمْ سَعَادَاتِ الدَّارَيْنِ اللَّهُمَّ وَإِلَى حَضَرَاتِ مَنْ مَاتَ مِنَّا مِنَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ اللَّهُمَّ اجْمَعْ بَيْنَنَا وَبَيْنَهُمْ فِي دَارِ الْأَمَانِ مَعَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ مِنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ اللَّهُمَّ اجْعَلْ قُبُورَنَا وَقُبُورَهُمْ رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ وَلَا تَجْعَلْ قُبُورَنَا وَقُبُورَهُمْ حُفْرَةً مِنْ حُفَرِ النَّارِ اللَّهُمَّ آنِسْ وَحْشَتَهُمْ وَآمِنْ رَوْعَتَهُمْ وَنَفِّسْ كُرْبَتَهُمْ وَنَوِّرْ تَخَلُّتَهُمْ وَارْفَعْ دَرَجَتَهُمْ فِي دَارِ جَنَّاتِ النَّعِيمِ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ آمِينَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
        },
      ],
    },
    {
      id: "asmaa-husna",
      title: "الْأَسْمَاءُ الْحُسْنَى",
      type: "sequential",
      description: "Recitation of the names of Allah",
      lines: [
        {
          id: "asmaa-husna-line-1",
          arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ",
        },
        {
          id: "asmaa-husna-line-2",
          arabic: "يَا الله يَا مُتَكَبِّرُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-3",
          arabic: "يَا قَابِضُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-4",
          arabic: "يَا رَحْمَنُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-5",
          arabic: "يَا خَالقُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-6",
          arabic: "يَا بَاسِطُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-7",
          arabic: "يَا رَحِيمُ يَا اللهُ",
        },
        {
          id: "asmaa-husna-line-8",
          arabic: "يَا بَارِئُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-9",
          arabic: "يَا خَافِضُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-10",
          arabic: "يَا مَلِكُ يَا اللهُ",
        },
        {
          id: "asmaa-husna-line-11",
          arabic: "يَا مُصَوِّرُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-12",
          arabic: "يَا رَافِعُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-13",
          arabic: "يَا قُدُّوسُ يَا اللهُ",
        },
        {
          id: "asmaa-husna-line-14",
          arabic: "يَا غَفَّارُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-15",
          arabic: "يَا مُعِزُّ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-16",
          arabic: "يَا سَلَامُ يَا اللهُ",
        },
        {
          id: "asmaa-husna-line-17",
          arabic: "يَا قَهَّارُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-18",
          arabic: "يَا مُذِلُّ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-19",
          arabic: "يَا مُؤْمِنُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-20",
          arabic: "يَا وَهَّابُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-21",
          arabic: "يَا سَمِيعُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-22",
          arabic: "يَا مُهَيْمِنُ يَا اللهُ",
        },
        {
          id: "asmaa-husna-line-23",
          arabic: "يَا رَزَّاقُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-24",
          arabic: "يَا بَصِيرُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-25",
          arabic: "يَا عَزِيزُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-26",
          arabic: "يَا فَتَّاحُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-27",
          arabic: "يَا حَكَمُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-28",
          arabic: "يَا جَبَّارُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-29",
          arabic: "يَا عَلِيمُ يَا اللَّهُ",
        },
        {
          id: "asmaa-husna-line-30",
          arabic: "يَا عَدْلُ يَا اللَّهُ",
        },
      ],
    },
    {
      id: "asmaa-husna1",
      type: "parallel",
      lines: [
        {
          id: "asmaa-husna-line-1",
          arabic:
            "الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ",
        },
      ],
    },
    {
      id: "zikr-group",

      type: "sequential",

      lines: [
        {
          id: "zikr-line-1",
          arabic: "أَسْتَغْفِرُ اللهَ الْعَظِيمَ",
          countable: true,
          recitationCount: 0,
          maxRecitationCount: 100,
        },
        {
          id: "zikr-line-2",
          arabic: "يَا اللَّهُ يَا رَحْمَنُ يَا رَحِيمُ",
          countable: true,
          recitationCount: 0,
          maxRecitationCount: 100,
        },
        {
          id: "zikr-line-3",
          arabic: "يَا حَيُّ يَا قَيُّومُ",
          countable: true,
          recitationCount: 0,
          maxRecitationCount: 100,
        },
        {
          id: "zikr-line-4",
          arabic: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَّسُولُ اللَّهِ",
          countable: true,
          recitationCount: 0,
          maxRecitationCount: 100,
        },
        {
          id: "zikr-line-5",
          arabic: "اللهُ اللهُ الله",
          countable: true,
          recitationCount: 0,
          maxRecitationCount: 100,
        },
        {
          id: "zikr-line-6",
          arabic:
            "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمْ",
          countable: true,
          recitationCount: 0,
          maxRecitationCount: 100,
        },
      ],
    },
    {
      id: "al-qasida-al-badriyya",
      title: "الْقَصِيدَةُ الْبَدْرِيَّةُ",
      type: "alternating",
      lines: [
        {
          id: "badriyya-line-1",
          arabic:
            "صَلَاةٌ عَلَى نُورِ الْوُجُودِ وَآلِهِ وَأَصْحَابِ بَدْرٍ ثُمَّ كُلِّ الصَّحَابَةِ",
        },
        {
          id: "badriyya-line-2",
          arabic:
            "تَبَارَكْتَ مَوْلَانَا لَكَ الْحَمْدُ مَادِحًا كِرَامًا نِخَابًا سِيِّمَا عَيْنَ رَحْمَةٍ",
        },
        {
          id: "badriyya-line-3",
          arabic:
            "أَتَيْنَا بِحَاجَاتٍ لَدَيْكَ تَوَسُّلًا بِأَصْحَابِ بَدْرٍ فَاكْشِفَنْ كُلَّ كُرْبَةٍ",
        },
        {
          id: "badriyya-line-4",
          arabic:
            "مُحَمَّدِنِ الْمُخْتَارِ ثُمَّ أَبِي بَكَرْ وَعُمَرَ وَعُثْمَانِ عَلِي وَطَلْحَةٍ",
        },
        {
          id: "badriyya-line-5",
          arabic:
            "زُبَيْرٍ سَعِيدٍ عَبْدِ رَحْمَنَ مَعْ أَبِي عُبَيْدَةَ سَعْدٍ أَوْسِ أَوْسٍ وَأَنْسَةٍ",
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <RecitationScreen data={ComprehensiveSalawatData1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
