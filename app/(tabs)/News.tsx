import { NewsCard } from "@/components/NewsCard/NewsCard";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import news from "../../mocks/news.json" 
import { FlashList } from "@shopify/flash-list";

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <FlashList 
        data={news}
        renderItem={({ item }) => <NewsCard title={item.title} content={item.content} link={item.link} />}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    padding: 16,
  }
});
