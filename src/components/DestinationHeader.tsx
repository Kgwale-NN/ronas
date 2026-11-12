import { View, Alert, Image, StyleSheet, Text } from "react-native";
import CircleButton from "./CircleButton";
import HeartIcon from "@/components/icons/HeartIcon";

type detinationHeaderProps = {

    image: number
}

export default function DestinationHeaderImage({ image }: detinationHeaderProps) {


    return (

        <View style={styles.header}>

            <Image source={image} style={styles.photo} />

            <View style={styles.buttons}>
                
                <CircleButton
                    label="Go back"
                    onPress={() =>
                        Alert.alert("Back", "We will add navigation later.")
                    }
                >
                    <Text style={{ fontSize: 28, color: "#191D1C" }}>‹</Text>
                </CircleButton>

                <CircleButton
                    label="Save destination"
                    onPress={() =>
                        Alert.alert("Saved", "You tapped the heart button.")
                    }
                >
                    <HeartIcon size={24} color="#191D1C" />
                </CircleButton>

            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    header: {

        height: 300,
        position: "relative"
    },

    photo: {

        width: "100%",
        height: 300,
        resizeMode: "cover"
    },



    buttons: {

        position: "absolute",
        top: 16,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between"

    }

})