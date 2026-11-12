import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { travelColors } from "@/constants/travel-theme";
import DestinationHeaderImage from "@/components/DestinationHeader";

export default function Screen() {

  return (

    <SafeAreaView style={styles.screen}>

      <ScrollView

        style={styles.scroll}
        showsHorizontalScrollIndicator={false}

      >

        <DestinationHeaderImage image={require("../../assets/images/destination.jpg")} />

        <View style={styles.panel}>
          <View style={styles.handle} />


          <View style={styles.content}>

            <Text style={styles.label}>DESTINATION</Text>
            <Text style={styles.title}>Rio de Janeiro</Text>
            <Text style={styles.country}>Brazil</Text>

          </View>
        </View>
        
        </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  scroll: {

    flex: 1

  },

  panel: {

    marginTop: -28,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: travelColors.background,
    paddingTop: 12,
    paddingBottom: 12

  },

  handle: {

    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: travelColors.border,
    alignSelf: "center"

  },

  screen: {

    flex: 1,
    backgroundColor: travelColors.background
  },

  content: {

    paddingHorizontal: 24,
    paddingTop: 20

  },

  label: {

    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    color: travelColors.muted,
    marginBottom: 8

  },

  title: {

    fontSize: 30,
    fontWeight: "700",
    color: travelColors.text,
    marginBottom: 8

  },

  country: {

    fontSize: 16,
    color: travelColors.muted


  },




})