import { useState } from "react";
import type { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

import { travelColors } from "@/constants/travel-theme";

type CircleButtonProps = {
    children: ReactNode;
    label: string;
    onPress: () => void;
    backgroundColor?: string;
    selected?: boolean;
};

export default function CircleButton({
    children,
    label,
    onPress,
    backgroundColor = travelColors.surface,
    selected,
}: CircleButtonProps) {
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const activeColor = backgroundColor === travelColors.text
        ? travelColors.hoverDark : travelColors.hoverSurface;
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel={label}
            accessibilityState={selected === undefined ? undefined : { selected }}
            onPress={onPress}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: hovered || focused || pressed ? activeColor : backgroundColor },
                pressed && styles.pressed,
            ]}
        >
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        flexShrink: 0,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.6,
    },
});
