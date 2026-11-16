import { useState } from "react";
import { Pressable, StyleSheet, Text, type StyleProp, type TextStyle } from "react-native";
import { travelColors } from "@/constants/travel-theme";

type TextActionProps = {
  label: string;
  onPress: () => void;
  expanded?: boolean;
  textStyle?: StyleProp<TextStyle>;
};

// Shared mouse, keyboard-focus, and touch feedback for text buttons.
export default function TextAction({ label, onPress, expanded, textStyle }: TextActionProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={expanded === undefined ? undefined : { expanded }}
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={({ pressed }) => [styles.button, (hovered || focused || pressed) && styles.active]}
    >
      {({ pressed }) => (
        <Text style={[styles.text, textStyle, (hovered || focused || pressed) && styles.activeText]}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 44, justifyContent: "center", alignSelf: "flex-start", paddingHorizontal: 4, paddingVertical: 8, borderRadius: 6 },
  active: { backgroundColor: travelColors.hoverSurface },
  text: { fontSize: 16, color: travelColors.text, textDecorationLine: "underline", flexShrink: 1 },
  activeText: { color: travelColors.accent },
});
