import { StyleSheet,View,Text } from "react-native";
import StarIcon from "./icons/StarIcon";
import { travelColors } from "@/constants/travel-theme";

type ratingBedge ={

    rating:number

}

export default function RatingBadge({rating}:ratingBedge){

    return(

        <View style={styles.badge}>

            <StarIcon size={28} color={travelColors.text} />
            <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    badge:{

        flexDirection:"row",
        alignItems:"center",
        gap:4,
        borderWidth:1,
        borderColor:travelColors.border,
        borderRadius:16,
        paddingHorizontal:8,
        paddingVertical:4
    },

    rating:{

        fontSize:14,
        color: travelColors.text
    },
})