import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CircleButton from "@/components/CircleButton";
import BackIcon from "@/components/icons/BackIcon";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { travelColors } from "@/constants/travel-theme";

export default function ToursScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.heading}>
        <CircleButton label="Back to destination" onPress={() => {
          if (router.canGoBack()) router.back();
          else router.replace("/");
        }}><BackIcon /></CircleButton>
        <View style={styles.headingText}>
          <Text style={styles.title}>Upcoming tours</Text>
          <Text style={styles.subtitle}>Find your next adventure</Text>
        </View>
      </View>
      <FlatList
        data={tours}
        keyExtractor={tour => tour.id}
        renderItem={({ item }) => <TourCard {...item} fullWidth />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: travelColors.background },
  heading: { flexDirection: "row", alignItems: "center", gap: 16, padding: 20 },
  headingText: { flex: 1 },
  title: { fontSize: 24, fontWeight: "700", color: travelColors.text },
  subtitle: { fontSize: 14, color: travelColors.muted, marginTop: 4 },
  list: { paddingHorizontal: 20, paddingBottom: 24, gap: 20, width: "100%", maxWidth: 600, alignSelf: "center" },
});
