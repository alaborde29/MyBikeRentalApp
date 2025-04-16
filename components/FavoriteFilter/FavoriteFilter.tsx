import { FontAwesome6 } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View } from "react-native"

type MapButtonProp = {
  onPress: VoidFunction
  icon: string
  iconColor: string
}

export const MapButton = ({onPress, icon, iconColor}: MapButtonProp) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome6 name={icon} size={22} color={iconColor} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "white",
    borderColor: "rgb(194, 194, 194)",
    borderWidth: 1,
    borderRadius: 900,
    width: 55,
    height: 55,
  }
})