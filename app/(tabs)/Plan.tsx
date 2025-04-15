import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Text, View, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, Platform } from "react-native";
import { useEffect, useState } from "react";
import { Searchbar, SegmentedButtons } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useStationContext } from "@/context/stationsContext";
import { StationType } from "@/services/jcd/bikeServices";
import { FontAwesome6 } from "@expo/vector-icons";
import { useStations } from "@/hooks/jcd/useStations";

interface SearchbarProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  style?: object;
}

const StationMarker = ({ status }: { status: string }) => {
  return (
    <View>
      <FontAwesome6 size={40} name="location-dot" color={status == "OPEN" ? 'green' : 'red'} style={styles.marker} />
    </View>
  )
}

const ParkingMarker = ({ status }: { status: string }) => {
  return (
    <View>
      <FontAwesome6 size={40} name="square-parking" color={'rgb(58, 108, 255)'} style={styles.marker && { backgroundColor: "" }} />
    </View>
  )
}

const MarkerList = ({ filters }: { filters: string[] }) => {

  const router = useRouter();
  const { stations, loading } = useStations();
  const favorites: number[] = []
  let filteredStation = stations

  if (loading) return null;

  if (filters.find((filter) => filter === 'close')) {
    filteredStation = filteredStation.filter(station => station.status === 'OPEN');
  }

  if (filters.find((filter) => filter === 'favorite')) {
    filteredStation = filteredStation.filter(station =>
      favorites.includes(station.number)
    );
  }

  return (
    <>
      {filteredStation.map((station) => (
        <Marker
          key={station.number}
          coordinate={{
            latitude: station.position.lat,
            longitude: station.position.lng,
          }}
          title={`${station.name}`}
          description={`Status: ${station.status}`}
          onPress={() => {
            console.log('stringified:', JSON.stringify(station, null, 2));
            router.push({ pathname: '/Stations', params: { stationId: station.number.toString() } });
          }}
        >
          <StationMarker status={station.status} />
        </Marker>
      ))}
    </>
  );
};


export default function Plan() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(['stations'])
  const [region, setRegion] = useState({
    latitude: 47.21805891998459,
    longitude: -1.5522669832909846,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }); //déplacer autre part la region par defaut
  MarkerList({ filters });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={region}
          onRegionChange={setRegion}
          onRegionChangeComplete={setRegion}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          
        >
          <MarkerList filters={filters} />
        </MapView>
        <SafeAreaView style={styles.filterContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbarContainer}
          />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    zIndex: -1,
    flexDirection: "column",
    position: "absolute"
  },
  map: {
    width: "100%",
    height: "100%",
    zIndex: -1
  },
  searchbarContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    borderColor: "rgb(178, 178, 178)",
    borderWidth: 1
  },
  marker: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterContainer: {
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: 15,
    color: "#fff"
  }
});