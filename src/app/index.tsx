import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { travelColors } from "@/constants/travel-theme";
import DestinationHeaderImage from "@/components/DestinationHeader";
import RatingBadge from "@/components/RatingBadge";
import ExpandableDescription from "@/components/ExpandableDescription";
import SectionHeader from "@/components/SectionHeader";
import TourCard from "@/components/TourCard";


export default function Screen() {

  return (

    <SafeAreaView style={styles.screen}>

      <ScrollView

        style={styles.scroll}
        showsHorizontalScrollIndicator={false}

      >

        <DestinationHeaderImage image={require("../../assets/images/destination.jpg")} />

        <View style={styles.panel}>
          <View style={styles.handle} />


          <View style={styles.content}>

            <View style={styles.destinationRow}>

              <View style={styles.destinationInfo}>


                <Text style={styles.label}>DESTINATION</Text>
                <Text style={styles.title}>Rio de Janeiro</Text>
                <Text style={styles.country}>Brazil</Text>

              </View>

              <View style={styles.ratingInfo}>

                <RatingBadge rating={5} />
                <Text style={styles.reviews}>143 reviews</Text>

              </View>

            </View>

            <ExpandableDescription text="Rio de Janeiro, often simply called Rio, is one of Brazil’s most iconic cities. Explore its beaches, mountain views, and lively neighbourhoods. Discover local food and enjoy the sights at your own pace." />

            <View style={styles.toursSection}>
              <SectionHeader
                title="Upcoming tours"
                actionLabel="See all"
                onActionPress={() =>
                  Alert.alert("Upcoming tours", "We will add the full tour list later.")
                }
              />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tourList}
              >
                <TourCard
                  image={require("../../assets/images/tour-brazil.jpg")}
                  name="Iconic Brazil"
                  days={8}
                  price={659}
                  rating={4.6}
                  reviews={56}
                />

                <TourCard
                  image={require("../../assets/images/tour-beach.jpg")}
                  name="Tropical Escape"
                  days={5}
                  price={499}
                  rating={4.8}
                  reviews={82}
                />

                <TourCard
                  image={require("../../assets/images/tour-mountains.jpg")}
                  name="Mountain Adventure"
                  days={7}
                  price={749}
                  rating={4.9}
                  reviews={104}
                />

                <TourCard
                  image={require("../../assets/images/tour-forest.jpg")}
                  name="Forest Retreat"
                  days={4}
                  price={389}
                  rating={4.7}
                  reviews={38}
                />
              </ScrollView>

            </View>

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

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
    textDecorationLine: "underline",
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

    fontSize: 30,
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