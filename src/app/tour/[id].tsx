import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";
import DestinationDetails from "@/components/DestinationDetails";
import { tours } from "@/data/tours";
import { travelColors } from "@/constants/travel-theme";

export default function TourDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const tour = tours.find(item => item.id === id);

  if (!tour) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.content}>
          <Text style={styles.title}>Tour not found</Text>
          <Text style={styles.body}>This tour is not in our list.</Text>
          <Link href="/tours" style={styles.link}>Browse all tours</Link>
        </View>
      </SafeAreaView>
    );
  }

  return <DestinationDetails key={tour.id} destination={tour} />;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: travelColors.background },
  content: { paddingHorizontal: 24, paddingTop: 20 },
  title: { fontSize: 28, fontWeight: "700", color: travelColors.text, marginBottom: 8 },
  body: { fontSize: 15, lineHeight: 22, color: travelColors.text },
  link: { color: travelColors.text, textDecorationLine: "underline", paddingVertical: 16, fontSize: 16 },
});
