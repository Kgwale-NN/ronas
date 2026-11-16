import { StyleSheet, Text, View } from "react-native";
import TextAction from "@/components/TextAction";
import { travelColors } from "@/constants/travel-theme";

type SectionHeaderProps = { title: string; actionLabel: string; onActionPress: () => void };

export default function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextAction label={actionLabel} onPress={onActionPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 },
  title: { flexGrow: 1, flexShrink: 1, fontSize: 22, fontWeight: "600", color: travelColors.text },
});
