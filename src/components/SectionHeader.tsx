import { Pressable, StyleSheet, View, Text } from "react-native";
import { travelColors } from "@/constants/travel-theme";

type sectionHeaderProp = {

    title: string,
    actionLabel: string,
    onActionPress: () => void

}

export default function SectionHeader({ title, actionLabel, onActionPress }: sectionHeaderProp) {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <Pressable accessibilityRole="button"
                onPress={onActionPress}
                style={({ pressed }) => [styles.button, pressed && styles.pressed]}><Text style={styles.action}>{actionLabel}</Text></Pressable>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
    },

    title: {
        flex: 1,
        fontSize: 22,
        fontWeight: "600",
        color: travelColors.text,
    },
    button: {
        minHeight: 44,
        justifyContent: "center",
        paddingHorizontal: 4,
    },
    action: {
        fontSize: 16,
        color: travelColors.text,
        textDecorationLine: "underline",
    },
    pressed: {
        opacity: 0.6,
    },
});


