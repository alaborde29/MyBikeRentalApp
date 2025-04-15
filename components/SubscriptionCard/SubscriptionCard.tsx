import { FontAwesome6 } from "@expo/vector-icons"
import { RelativePathString, useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type SubscribtionCardProps = {
  contractName: string,
  subscriptionName: string,
  content: string,
  price: string,
  href: string
}

const Divider = () => {
  return (
    <View style={styles.divider} />
  )
}

export const SubscriptionCard = ({ contractName, subscriptionName, content, price, href }: SubscribtionCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(href as RelativePathString)}>
      <View style={styles.centeredText}>
        <Text style={styles.contractName}>{contractName}</Text>
        <Text style={styles.title}>{subscriptionName}</Text>
      </View>
      <Divider />
      <Text style={styles.content}>{content}</Text>
      <Divider />
        <View style={styles.bottomDetails}>
          <Text>{`À partir de ${price}`}</Text>
          <Text style={styles.offerLocation}>Offre disponible sur le site web</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgb(0, 42, 255)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  centeredText: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  contractName: {
    color: "rgb(133, 133, 133)"
  },
  title: {
    fontWeight: 700,
    fontSize: 30
  },
  content: {
    fontSize: 17,
    textAlign: "justify"
  },
  offerLocation : {
    fontWeight: 500,
    fontSize: 20
  },
  bottomDetails: {
    marginTop: 0
  },
  divider: {
    width: "90%",
    backgroundColor: "rgb(0, 42, 255)",
    height: 1,
  }
}) 