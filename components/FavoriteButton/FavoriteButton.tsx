import { FontAwesome6 } from "@expo/vector-icons"
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { useStationContext } from "@/context/stationsContext";
import { db } from "@/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function addToFavorite(stationId: string) {

}

function isFavorite(stationId: string) {
  if (true)
    return true
  return false
}

const FavoriteButton = ({ stationId }: { stationId: string }) => {
  return (
    <TouchableOpacity>
      <FontAwesome6 size={40} name="star" color={isFavorite(stationId) ? "yellow" : "red"} style={styles.buttonStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    color: "red"
  }
})

export default FavoriteButton;