import { Alert, Image, StyleSheet, Text, View } from "react-native";
import StarIcon from "@/components/icons/StarIcon";
import { travelColors } from "@/constants/travel-theme";
import { useState } from "react";

import CircleButton from "@/components/CircleButton";
import HeartIcon from "@/components/icons/HeartIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

type TourCardProps = {
  image: number;
  name: string;
  days: number;
  price: number;
  rating: number;
  reviews: number;
};

export default function TourCard({
  image,
  name,
  days,
  price,
  rating,
  reviews,
}: TourCardProps) {

  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.photoContainer}>
        <Image source={image} style={styles.photo} />

        <View style={styles.saveButton}>
          <CircleButton
            label={saved ? "Remove saved tour" : "Save tour"}
            onPress={() => setSaved(current => !current)}
          >
            <HeartIcon
              size={24}
              color={travelColors.text}
              filled={saved}
            />
          </CircleButton>
        </View>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.details}>
        {days} days · From ${price}/person
      </Text>
      <View style={styles.footer}>
        <View style={styles.ratingRow}>
          <StarIcon size={18} color={travelColors.text} />
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          <Text style={styles.reviews}>{reviews} reviews</Text>
        </View>

        <CircleButton
          label={`View ${name} tour`}
          backgroundColor={travelColors.text}
          onPress={() =>
            Alert.alert(name, "We will build the tour details screen later.")
          }
        >
          <ArrowRightIcon color={travelColors.surface} />
        </CircleButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    padding: 8,
    borderRadius: 24,
    backgroundColor: travelColors.surface,
  },
  photo: {
    width: "100%",
    height: 180,
    borderRadius: 18,
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: travelColors.text,
    marginTop: 10,
    marginHorizontal: 4,
    marginBottom: 8,
  },

  details: {
    fontSize: 14,
    color: travelColors.muted,
    marginHorizontal: 4,
    marginBottom: 12,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 4,
    paddingBottom: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexShrink: 1,
    flexWrap: "wrap",
  },

  rating: {
    fontSize: 14,
    color: travelColors.text,
  },

  reviews: {
    fontSize: 14,
    color: travelColors.muted,
    marginLeft: 4,
  },

  photoContainer: {
    position: "relative",
  },

  saveButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },

});
