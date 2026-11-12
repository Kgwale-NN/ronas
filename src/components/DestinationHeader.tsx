import { Image , StyleSheet} from "react-native";

type detinationHeaderProps = {

    image: number
}

export default function DestinationHeaderImage({image}:detinationHeaderProps){

    return <Image source={image} style={styles.photo} />

}

const styles = StyleSheet.create({

    photo:{

        width:"100%",
        height:300,
        resizeMode:"cover"
    }

})