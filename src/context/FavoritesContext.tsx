import { createContext, useContext, useState, type ReactNode } from "react";
import { Alert, Platform } from "react-native";

type FavoritesValue = {
  savedIds: string[];
  toggleFavorite: (id: string, name: string) => void;
};

const FavoritesContext = createContext<FavoritesValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  function toggleFavorite(id: string, name: string) {
    const saved = savedIds.includes(id);
    setSavedIds(current => saved
      ? current.filter(savedId => savedId !== id)
      : [...current, id]);
    const title = saved ? "Removed" : "Saved";
    const message = saved
      ? `${name} was removed from your favourites.`
      : `${name} was added to your favourites.`;
    if (Platform.OS === "web") {
      window.alert(`${title}: ${message}`);
    } else {
      Alert.alert(title, message);
    }
  }

  return (
    <FavoritesContext.Provider value={{ savedIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const value = useContext(FavoritesContext);
  if (!value) throw new Error("useFavorites needs FavoritesProvider");
  return value;
}
