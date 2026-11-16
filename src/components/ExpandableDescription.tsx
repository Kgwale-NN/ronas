import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextAction from "@/components/TextAction";
import { travelColors } from "@/constants/travel-theme";

export default function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.description} numberOfLines={expanded ? undefined : 2}>{text}</Text>
      <TextAction
        label={expanded ? "Read less" : "Read more"}
        expanded={expanded}
        onPress={() => setExpanded(current => !current)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  description: { fontSize: 16, lineHeight: 24, color: travelColors.text },
});
