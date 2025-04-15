import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function MyFavoritesScreen() {
  console.log('Profile')
  return (
    <SafeAreaView
      style={styles.container}
    >
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})