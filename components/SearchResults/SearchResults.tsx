import { FlashList } from "@shopify/flash-list"
import { SearchResultButton } from "./SearchResultsButton"
import { StyleSheet, Text, View } from "react-native"
import { useStations } from "@/hooks/jcd/useStations";
import { useEffect, useState } from "react";

export const SearchResults = ({ query }: { query: string }) => {
  const { stations, loading } = useStations();
  const [filteredStations, setFilteredStations] = useState(stations);

  useEffect(() => {
    if (query) {
      const filtered = stations.filter((station) =>
        station.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStations(filtered);
    } else {
      setFilteredStations(stations);
    }
  }, [query, stations]);

  if (loading) {
    return <Text style={styles.searchResults}>Loading...</Text>;
  }


  return (
    <View style={styles.searchResults}>
      <FlashList
        data={filteredStations}
        renderItem={({ item }) =>
          <SearchResultButton station={item} />
        }
        estimatedItemSize={200}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchResults: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: -2
  },
})