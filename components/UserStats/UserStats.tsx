import { FontAwesome6 } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export const UserStats = () => {

  return (
    <View style={styles.container}>
      <View style={styles.oddContainer}>
        <FontAwesome6 name="clock" size={20} />
        <Text>:</Text>
        <Text>26h 34m</Text>
      </View>
      <View style={styles.evenContainer}>
        <FontAwesome6 name="route" size={20} />
        <Text>:</Text>
        <Text>26.0 Km</Text>
      </View>
      <View style={styles.oddContainer}>
        <FontAwesome6 name="person-biking" size={20} />
        <Text>:</Text>
        <Text>32</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 40,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 255)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  oddContainer : {
    justifyContent: 'space-evenly',
    alignItems:'center',
    flexDirection: 'row',
    gap:5
  },
  evenContainer : {
    justifyContent: 'space-evenly',
    alignItems:'center',
    flexDirection: 'row',
    gap:5
  }
})