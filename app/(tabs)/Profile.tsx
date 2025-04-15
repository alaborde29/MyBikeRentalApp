import { SectionCard } from "@/components/SectionCard/SectionCard";
import { UserStats } from "@/components/UserStats/UserStats";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { AuthContext } from "@/context/authProvider";

export default function ProfileScreen() {
  const auth = useContext(AuthContext);

  console.log('Profile')
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.userInfos}>
        <Avatar.Image
          size={150}
          source={require('../../assets/images/default-avatar.jpg')}
        />
        <Text style={styles.username}>{'auth.user.'}</Text>
        <UserStats />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.column}>
          <SectionCard iconName="chart-simple" title="My Statistics" href="/ProfileSections/MyStats"/>
          <SectionCard iconName="route" title="My itinerary"  href="/ProfileSections/MyItinerary"/>
          <SectionCard iconName="heart-circle-check" title="Favorite stations" subtitle="2 Stations"  href="/ProfileSections/MyFavorites"/>
        </View>
        <View style={styles.column}>
          <SectionCard iconName="rectangle-list" title="My Subscriptions"  href="/ProfileSections/MySubscriptions"/>
          <SectionCard iconName="receipt" title="My payments"  href="/ProfileSections/MyPayments"/>
          <SectionCard iconName="credit-card" title="My cards" subtitle="CB **** 8435"  href="/ProfileSections/MyCards"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10
  },
  column: {
    width: "45%",
    gap: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap: "5%"
  },
  userInfos: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingBottom:10
  },
  username : {
    fontWeight: 700,
    fontSize: 25,
    textAlign: 'center'
  }
})
