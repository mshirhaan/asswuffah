export interface ArabicWord {
  word: string;
  translations: { [key: string]: string };
  transliteration?: string;
  highlighted?: boolean;
  wordCount?: number;
}

export interface ArabicLine {
  id?: string; // Unique identifier for precise referencing
  arabic: string;
  translations?: { [key: string]: string };
  transliteration?: string;
  words?: ArabicWord[];

  // Styling and interaction properties
  countable?: boolean;
  recitationCount?: number;
  maxRecitationCount?: number;
  specialHighlight?: boolean;
  style?: {
    textColor?: string;
    backgroundColor?: string;
    fontWeight?: "normal" | "bold";
  };
}

export interface LineGroup {
  id: string;
  title?: string;
  description?: string;
  type: "parallel" | "sequential" | "alternating";
  lines: ArabicLine[];
}

export interface RecitationData {
  title: string;
  description?: string;
  language?: string;
  category?: string;

  // Support for both flat lines and grouped lines
  lines?: ArabicLine[];
  groups?: LineGroup[];
}

export interface RecitationScreenProps {
  data: RecitationData;
  initialLanguage?: string;
}

import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RecitationScreen: React.FC<{ data: RecitationData }> = ({ data }) => {
  const [language, setLanguage] = useState<string>("en");
  const [recitationCounts, setRecitationCounts] = useState<{
    [key: string]: number;
  }>({});

  const handleLineCount = useCallback((lineId: string, maxCount?: number) => {
    setRecitationCounts((prev) => ({
      ...prev,
      [lineId]:
        maxCount && (prev[lineId] || 0) >= maxCount
          ? prev[lineId] || 0
          : (prev[lineId] || 0) + 1,
    }));
  }, []);

  const renderLine = (line: ArabicLine) => {
    const lineStyle = [
      styles.line,
      line.specialHighlight && styles.specialHighlight,
      line.style && {
        color: line.style?.textColor,
        backgroundColor: line.style?.backgroundColor,
        fontWeight: line.style?.fontWeight,
      },
    ];

    return (
      <View key={line.id} style={styles.lineContainer}>
        <Text style={[styles.arabicText, lineStyle]}>{line.arabic}</Text>

        {line.transliteration && (
          <Text style={styles.transliterationText}>{line.transliteration}</Text>
        )}

        {line.translations && (
          <Text style={styles.translationText}>
            {line.translations[language] || line.translations["en"]}
          </Text>
        )}

        {line.countable && (
          <TouchableOpacity
            onPress={() =>
              handleLineCount(line.id || "", line.maxRecitationCount)
            }
            style={styles.counterButton}
          >
            <Text style={styles.counterText}>
              Count: {recitationCounts[line.id || ""] || 0}
            </Text>
          </TouchableOpacity>
        )}
        {line.maxRecitationCount && (
          <Text style={styles.counterText}>
            Max Count: {line.maxRecitationCount}
          </Text>
        )}
      </View>
    );
  };

  const renderGroup = (group: LineGroup) => {
    const groupContainerStyle = [
      styles.groupContainer,
      group.type === "parallel" && styles.parallelGroup,
    ];

    return (
      <View key={group.id} style={styles.groupWrapper}>
        {group.title && <Text style={styles.groupTitle}>{group.title}</Text>}
        {group.description && (
          <Text style={styles.groupDescription}>{group.description}</Text>
        )}
        <View style={groupContainerStyle}>{group.lines.map(renderLine)}</View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Render individual lines first */}
        {data.lines?.map(renderLine)}

        {/* Then render groups */}
        {data.groups?.map(renderGroup)}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  groupWrapper: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  groupDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  groupContainer: {
    flexDirection: "column",
  },
  parallelGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lineContainer: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  groupedLineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  line: {
    fontSize: 16,
    textAlign: "right",
  },
  arabicText: {
    fontFamily: "Amiri", // Consider adding a custom Arabic font
    fontSize: 20,
    textAlign: "right",
    marginBottom: 5,
  },
  transliterationText: {
    fontStyle: "italic",
    color: "#666",
    marginBottom: 5,
  },
  translationText: {
    color: "#333",
    marginBottom: 5,
  },
  specialHighlight: {
    backgroundColor: "rgba(255, 255, 0, 0.2)", // Light yellow highlight
    borderRadius: 5,
  },
  counterButton: {
    backgroundColor: "#e0e0e0",
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  counterText: {
    color: "#333",
  },
});

export default RecitationScreen;
