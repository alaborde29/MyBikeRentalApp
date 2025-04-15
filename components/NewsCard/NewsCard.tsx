import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

type NewsCardProps = {
  title: string,
  content: string,
  date?: Date,
  link: string
}

export const NewsCard = ({title, content, date, link}: NewsCardProps) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => {Linking.openURL(link);}}>
      <Text style={{fontStyle: "italic"}}>{'15/12/25'}</Text>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text  numberOfLines={4}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"flex-start",
    alignItems:"flex-start",
    backgroundColor: "#fff",
    margin:10,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgb(0, 42, 255)",
    borderRadius: 10,
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight:700,
    paddingVertical: 10
  }
})