import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import TextAction from "@/components/TextAction";
import StarIcon from "@/components/icons/StarIcon";
import { travelColors } from "@/constants/travel-theme";
import { router } from "expo-router";
import { useFavorites } from "@/context/FavoritesContext";

import CircleButton from "@/components/CircleButton";
import HeartIcon from "@/components/icons/HeartIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

type TourCardProps = {
  id: string;
  fullWidth?: boolean;
  image: number;
  name: string;
  days: number;
  price: number;
  rating: number;
  reviews: number;
};

export default function TourCard({
  id,
  fullWidth = false,
  image,
  name,
  days,
  price,
  rating,
  reviews,
}: TourCardProps) {

  const { width } = useWindowDimensions();
  const cardWidth = Math.min(280, Math.max(200, width - 64));
  const [photoHovered, setPhotoHovered] = useState(false);
  const { savedIds, toggleFavorite } = useFavorites();
  const saved = savedIds.includes(id);
  const openTour = () => router.push({ pathname: "/tour/[id]", params: { id } });

  return (
    <View style={[styles.card, { width: cardWidth }, fullWidth && styles.fullWidth]}>
      <View style={styles.photoContainer}>
        <Pressable accessibilityRole="button" accessibilityLabel={`Open ${name} tour`} onPress={openTour}
          onHoverIn={() => setPhotoHovered(true)} onHoverOut={() => setPhotoHovered(false)}
          onFocus={() => setPhotoHovered(true)} onBlur={() => setPhotoHovered(false)}
          style={({ pressed }) => [styles.photoButton, (photoHovered || pressed) && styles.photoActive]}>
          <Image source={image} style={styles.photo} />
        </Pressable>

        <View style={styles.saveButton}>
          <CircleButton
            label={saved ? `Remove ${name} from favourites` : `Save ${name}`}
            selected={saved}
            onPress={() => toggleFavorite(id, name)}
          >
            <HeartIcon
              size={24}
              color={travelColors.text}
              filled={saved}
            />
          </CircleButton>
        </View>
      </View>

      <TextAction label={name} onPress={openTour} textStyle={styles.name} />

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
          onPress={openTour}
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
  fullWidth: { width: "100%" },
  photoButton: { borderRadius: 18, overflow: "hidden", backgroundColor: travelColors.hoverSurface },
  photoActive: { opacity: 0.8 },
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
    textDecorationLine: "none",
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
