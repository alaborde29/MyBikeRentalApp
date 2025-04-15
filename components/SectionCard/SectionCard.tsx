import { FontAwesome6 } from "@expo/vector-icons"
import { RelativePathString, useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type SectionCardProps = {
  iconName: string,
  title: string,
  subtitle?: string,
  href: string
}

export const SectionCard = ({ iconName, title, subtitle, href }: SectionCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.sectionCard} onPress={() => router.push(href as RelativePathString)}>
      <FontAwesome6 name={iconName} size={25} />
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        {subtitle && <Text style={{ color: "rgb(129, 129, 129)" }}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  sectionCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20,
    borderColor: "rgb(0, 40, 241)",
    borderWidth: 1,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }
})