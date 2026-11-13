import { Image, StyleSheet, Text, View } from "react-native";
import StarIcon from "@/components/icons/StarIcon";
import { travelColors } from "@/constants/travel-theme";

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
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.photo} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.details}>
        {days} days · From ${price}/person
      </Text>
      <View style={styles.ratingRow}>
        <StarIcon size={18} color={travelColors.text} />

        <Text style={styles.rating}>
          {rating.toFixed(1)}
        </Text>

        <Text style={styles.reviews}>
          {reviews} reviews
        </Text>
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

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginHorizontal: 4,
    marginBottom: 8,
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

});