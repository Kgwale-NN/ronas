import type { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

import { travelColors } from "@/constants/travel-theme";

type CircleButtonProps = {
    children: ReactNode;
    label: string;
    onPress: () => void;
    backgroundColor?: string;
};

export default function CircleButton({
    children,
    label,
    onPress,
    backgroundColor = travelColors.surface,
}: CircleButtonProps) {
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel={label}
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor },
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
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.6,
    },
});
