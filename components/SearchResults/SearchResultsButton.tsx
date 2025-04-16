import { StationType } from "@/services/jcd/bikeServices";
import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const SearchResultButton = ({ station }: { station: StationType }) => {
  
  return (
    <TouchableOpacity style={styles.searchResultButton}>
      <FontAwesome6 name="location-dot" color={station.status == "OPEN" ? 'green' : 'red'} />
      <Text>{station.number}</Text>
      <Text>{` ${station.name.replace(/^.*?-/, "")}`}</Text>
      <View style={{flexDirection: "column", justifyContent: 'center', alignItems:"center"}}>
        <FontAwesome6 name="bicycle"/>
        <Text>{station.available_bikes}</Text>
      </View>
      <View style={{flexDirection: "column", justifyContent: 'center', alignItems:"center"}}>
        <FontAwesome6 name="lock-open"/>
        <Text>{station.available_bike_stands}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  searchResultButton: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgb(190, 190, 190)",
    width: "100%",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center"
  }
});