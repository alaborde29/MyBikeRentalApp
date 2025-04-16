import { StationType } from "@/services/jcd/bikeServices";
import { TouchableOpacity, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useStationContext } from "@/context/stationsContext";
import { useLocalSearchParams, useGlobalSearchParams, useRouter, useNavigation } from 'expo-router';
import { FlashList } from "@shopify/flash-list";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import bikes from "../../mocks/bikes.json"
import { BikeSwipe } from "@/components/BikeSwipe/BikeSwipe";

const StationDetails = ({ station }: { station: StationType }) => {
  return (
    <View style={styles.stationDetails}>
      <FontAwesome size={30} name="map-marker" color={station.status == "OPEN" ? "green" : "red"} style={{marginLeft: 15}}/>
      <Text style={{ fontSize: 15, fontWeight: "500", color: "#000" }}>{station.address}</Text>
    </View>
  )
}

export default function StationsScreen() {
  const navigation = useNavigation();
  const { stationId } = useLocalSearchParams();
  console.log("stationId:", stationId);
  const station = useStationContext().stations.find(station => station.number.toString() == stationId);

  if (!station) {
    console.log(`Station with ID ${stationId} not found`);
    return null;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${station.name.replace(/^.*?-/, "")}`
    });
  }, [navigation, stationId]);

  return (

    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: station.position.lat,
            longitude: station.position.lng,
            latitudeDelta: 0.0007,
            longitudeDelta: 0.0007
          }}
          pointerEvents="none"
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
            coordinate={{
              latitude: station.position.lat,
              longitude: station.position.lng,
            }}
          />
        </MapView>
      </View>
      <StationDetails station={station} />
      <FlashList
        data={bikes}
        renderItem={({ item }) => (<BikeSwipe key={item.id} condition={item.condition} id={item.id} rating={item.rating} />)}
        estimatedItemSize={200}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    height: "20%",
    width: "100%",
  },
  bikeSwipe: {
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
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
  stationDetails: {
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },
});