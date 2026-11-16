import { router } from "expo-router";
import { getUpcomingTours } from "@/data/tours";
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { travelColors } from "@/constants/travel-theme";
import DestinationHeaderImage from "@/components/DestinationHeader";
import RatingBadge from "@/components/RatingBadge";
import ExpandableDescription from "@/components/ExpandableDescription";
import SectionHeader from "@/components/SectionHeader";
import TourCard from "@/components/TourCard";


type DestinationDetailsProps = {
  destination: {
    id: string;
    image: number;
    name: string;
    location: string;
    rating: number;
    reviews: number;
    description: string;
  };
};

export default function DestinationDetails({ destination }: DestinationDetailsProps) {

  const { width, fontScale } = useWindowDimensions();
  const compact = Math.min(width, 600) / fontScale < 350;
  const upcomingTours = getUpcomingTours(destination.id);

  return (

    <SafeAreaView style={styles.screen}>

      <ScrollView

        style={styles.scroll}
        contentContainerStyle={styles.page}
        showsVerticalScrollIndicator={false}

      >

        <DestinationHeaderImage favoriteId={destination.id} name={destination.name} image={destination.image} />

        <View style={styles.panel}>
          <View style={styles.handle} />


          <View style={styles.content}>

            <View style={[styles.destinationRow, compact && styles.compactRow]}>

              <View style={styles.destinationInfo}>


                
                <Text style={styles.title}>{destination.name}</Text>
                <Text style={styles.country}>{destination.location}</Text>

              </View>

              <View style={[styles.ratingInfo, compact && styles.compactRating]}>

                <RatingBadge rating={destination.rating} />
                <Text style={styles.reviews}>{destination.reviews} reviews</Text>

              </View>

            </View>

            <ExpandableDescription key={destination.id} text={destination.description} />

            <View style={styles.toursSection}>
              <SectionHeader
                title="Upcoming tours"
                actionLabel="See all"
                onActionPress={() => router.push({ pathname: "/tours", params: { destination: destination.id } })}
              />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tourList}
              >
                {upcomingTours.map(tour => (
                  <TourCard key={tour.id} {...tour} />
                ))}
              </ScrollView>

            </View>

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  page: { width: "100%", maxWidth: 600, alignSelf: "center", paddingBottom: 16 },
  compactRow: { flexDirection: "column" },
  compactRating: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },

  destinationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },

  destinationInfo: {
    flex: 1,
  },

  ratingInfo: {
    alignItems: "flex-end",
    gap: 8,
  },

  reviews: {
    fontSize: 14,
    color: travelColors.text,
  },

  scroll: {

    flex: 1

  },

  panel: {

    marginTop: -28,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: travelColors.background,
    paddingTop: 12,
    paddingBottom: 12

  },

  handle: {

    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: travelColors.border,
    alignSelf: "center"

  },

  screen: {

    flex: 1,
    backgroundColor: travelColors.background
  },

  content: {

    paddingHorizontal: 24,
    paddingTop: 20

  },

  label: {

    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    color: travelColors.muted,
    marginBottom: 8

  },

  title: {

    fontSize: 26,
    fontWeight: "700",
    color: travelColors.text,
    marginBottom: 8

  },

  country: {

    fontSize: 16,
    color: travelColors.muted


  },

  toursSection: {
    marginTop: 24,
  },

  tourList: {
    gap: 12,
    paddingTop: 12,
    paddingBottom: 8,
  },

})
