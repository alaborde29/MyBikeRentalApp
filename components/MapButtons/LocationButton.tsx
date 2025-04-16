import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { useLiveLocation } from '@/hooks/useLiveLocation';

export default function MapScreen() {
  const { location, errorMsg } = useLiveLocation();
  const mapRef = useRef<MapView | null>(null);

  const centerMapOnUser = () => {
    if (!location) return;

    const region: Region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    mapRef.current?.animateToRegion(region, 500);
  };

  if (errorMsg) return <Text>{errorMsg}</Text>;
  if (!location) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="You are here"
        />
      </MapView>

      <TouchableOpacity style={styles.button} onPress={centerMapOnUser}>
        <Text style={styles.buttonText}>Locate Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
