import { useEffect, useState, useRef } from 'react';
import * as Location from 'expo-location';

export function useLiveLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const watcher = useRef<Location.LocationSubscription | null>(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        if (isMounted) setErrorMsg('Permission to access location was denied');
        return;
      }

      const initialLocation = await Location.getCurrentPositionAsync({});
      if (isMounted) setLocation(initialLocation);

      watcher.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 3000,
          distanceInterval: 10,
        },
        (newLocation) => {
          if (isMounted) setLocation(newLocation);
        }
      );
    })();

    return () => {
      watcher.current?.remove();
      isMounted = false;
    };
  }, []);

  return { location, errorMsg };
}
