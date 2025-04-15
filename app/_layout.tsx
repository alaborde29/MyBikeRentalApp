import { Slot, Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider } from "@/context/authProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { StationProvider } from "@/context/stationsContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function RootLayer() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Plan");
  }, []);

  return (

    <GestureHandlerRootView>
      <StationProvider>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="Register" options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
            <Stack.Screen name="Station" options={{
              headerTitle: "Station",
              title: "Station",
              headerBackButtonDisplayMode: "minimal", 
              headerRight: (props) => (
                <FavoriteButton stationId=""/>
              ),
            }} />
          </Stack>
        </AuthProvider>
      </StationProvider>
    </GestureHandlerRootView>
  );
}