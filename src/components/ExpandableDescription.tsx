import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { travelColors } from "@/constants/travel-theme";

type expandableDescriptionProps = {

    text: string

}

export default function ExpandableDescription({ text }: expandableDescriptionProps) {

    const [expanded, setExpanded] = useState(false)

    return (

        <View style={styles.container}>

            <Text style={styles.descrition} numberOfLines={expanded ? undefined : 2}>{text}</Text>
            <Pressable

                accessibilityRole="button"
                accessibilityState={{ expanded }}
                onPress={() => setExpanded(current => !current)}
                style={styles.button}><Text style={styles.buttonText}>{expanded ? "Read less" : "Read more"}</Text></Pressable>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {

        marginTop: 24

    },

    descrition: {

        fontSize: 16,
        lineHeight: 24,
        color: travelColors.text
    },

    button: {

        alignSelf: "flex-start",
        paddingVertical: 10,
        minHeight: 44,
        justifyContent: "center"
    },

    buttonText: {

        fontSize: 16,
        color: travelColors.text,
        textDecorationLine: "underline"
    }
})