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

    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MyCards" options={{ title: "My Cards" }} />
      <Stack.Screen name="MyFavorites" options={{ title: "My Favorites" }} />
      <Stack.Screen name="MyItinerary" options={{ title: "My Itineraries" }} />
      <Stack.Screen name="MyPayments" options={{ title: "My Payments" }} />
      <Stack.Screen name="MyStats" options={{ title: "My Statistics" }} />
      <Stack.Screen name="MySubscriptions" options={{ title: "My Subscriptions" }} />
    </Stack>
  );
}