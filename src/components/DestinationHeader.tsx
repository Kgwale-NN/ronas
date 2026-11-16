import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import CircleButton from "./CircleButton";
import HeartIcon from "@/components/icons/HeartIcon";
import BackIcon from "@/components/icons/BackIcon";
import { useFavorites } from "@/context/FavoritesContext";
import { travelColors } from "@/constants/travel-theme";

type DestinationHeaderProps = {
  image: number;
  favoriteId: string;
  name: string;
};

export default function DestinationHeaderImage({ image, favoriteId, name }: DestinationHeaderProps) {
  const { width } = useWindowDimensions();
  const { savedIds, toggleFavorite } = useFavorites();
  const saved = savedIds.includes(favoriteId);

  return (
    <View style={[styles.header, { height: width < 350 ? 260 : 300 }]}>
      <Image source={image} accessibilityLabel={`${name} landscape`} style={styles.photo} />
      <View style={styles.buttons}>
        <CircleButton label="Go back" onPress={() => {
          if (router.canGoBack()) router.back();
          else router.replace("/tours");
        }}>
          <BackIcon color={travelColors.text} />
        </CircleButton>
        <CircleButton
          label={saved ? `Remove ${name} from favourites` : `Save ${name}`}
          selected={saved}
          onPress={() => toggleFavorite(favoriteId, name)}
        >
          <HeartIcon color={travelColors.text} filled={saved} />
        </CircleButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 300, position: "relative" },
  photo: { width: "100%", height: "100%", resizeMode: "cover" },
  buttons: {
    position: "absolute", top: 16, left: 20, right: 20,
    flexDirection: "row", justifyContent: "space-between",
  },
});
