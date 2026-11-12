import { StyleSheet,Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { travelColors } from "@/constants/travel-theme";

export default function Screen(){

  return(

    <SafeAreaView style={styles.screen}>

      <View style={styles.content}>

        <Text style={styles.label}>DESTINATION</Text>
        <Text style={styles.title}>Rio de Janeiro</Text>
        <Text style={styles.country}>Brazil</Text>

      </View>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

screen: {

  flex: 1 ,
  backgroundColor : travelColors.background
},

content: {

paddingHorizontal: 24,
paddingTop: 4

},

label: {

fontSize: 12,
fontWeight: "800",
letterSpacing:2,
color: travelColors.muted,
marginBottom: 8

},

title: {

  fontSize: 30,
  fontWeight:"700",
  color: travelColors.text,
  marginBottom: 8

},

country: {

fontSize: 16,
color: travelColors.muted


},




})