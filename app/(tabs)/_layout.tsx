import { Tabs, useRouter } from "expo-router";
import { useEffect, useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/authProvider";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export default function TabLayout() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {

  });

  const handleTabPress = useCallback(
    (event: any) => {
      if (auth.isAuthenticated) {
        console.log(auth.isAuthenticated, "not authenticated");
        event.preventDefault();
        router.replace("/Login");
      }
    },
    [auth, router]
  );

  return (
    <Tabs
      initialRouteName={"Plan"}
      screenOptions={{ tabBarActiveTintColor: 'blue' }}
      screenListeners={{
        tabPress: handleTabPress,
      }}
    >
      <Tabs.Screen name="Profile" options={{
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="user" color={color} />,
        title: "Profile"
      }} />
      <Tabs.Screen name="Itinerary" options={{
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="route" color={color} />,
        title: "Itinerary"
      }} />
      <Tabs.Screen name="Plan" options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome6 size={20} name="map" color={color} />,
        title: "Plan"
      }} />
      <Tabs.Screen name="News" options={{
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="newspaper" color={color} />,
        title: "News",
        headerTitle: "News",
      }} />
      <Tabs.Screen name="Subscriptions" options={{
        tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="wallet" color={color} />,
        title: "Subscriptions"
      }} />
    </Tabs>
  )
}