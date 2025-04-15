import { Slot, Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider } from "@/context/authProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { StationProvider } from "@/context/stationsContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function LayoutLayer() {
  const router = useRouter();
  return (

          <Stack>
            <Stack.Screen name="MyCards" options={{ headerShown: true }} />
            <Stack.Screen name="MyFavorites" options={{ headerShown: true }} />
            <Stack.Screen name="MyItinerary" options={{ headerShown: true }} />
            <Stack.Screen name="MyPayments" options={{ headerShown: true }} />
            <Stack.Screen name="MyStats" options={{ headerShown: true }} />
            <Stack.Screen name="MySubscriptions" options={{ headerShown: true }} />
          </Stack>
  );
}