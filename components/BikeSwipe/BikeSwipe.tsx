import { TouchableOpacity, Text, View, StyleSheet } from "react-native"
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { FontAwesome6 } from "@expo/vector-icons"
import { Rating } from '@kolking/react-native-rating';

type BikeSwipeProps = {
  id: number,
  condition: number,
  rating: number,
  lastUpdated?: Date
}

const LastRate = () => {
  return (
    <View style={{flexDirection:'row'}}>
      <Text style={{color: "rgb(0, 0, 255)"}}>{Math.floor(Math.random() * 16).toString()}</Text>
      <Text> avis</Text>
    </View>
  )
}

const BikeSwipeRight = () => {
  return (
    <TouchableOpacity style={styles.swipeButton}>
      <Text style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}>Unlock</Text>
    </TouchableOpacity>
  )
}

export const BikeSwipe = ({ id, condition, rating, lastUpdated }: BikeSwipeProps) => {
  const random = (Math.random() * (3 - 1.5) + 1.5).toFixed(2);
  const randomRating = parseFloat(random);

  return (
    <Swipeable
      renderRightActions={BikeSwipeRight}
    >
      <View style={styles.bikeSwipe}>
        <Text>{id.toString()}</Text>
        <FontAwesome6 size={35} name="bicycle" color={"black"} />
        <Rating
          size={40} rating={randomRating} maxRating={3} disabled
        />
        <LastRate />
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  bikeSwipe: {
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 15,
  },
  swipeButton: {
    backgroundColor: "green",
    width: "20%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
  },
});