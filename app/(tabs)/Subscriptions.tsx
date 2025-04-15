import { SubscriptionCard } from "@/components/SubscriptionCard/SubscriptionCard";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import subscriptionsData from '../../mocks/subscriptions.json'

export default function SubscriptionsScreen() {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <FlashList
        horizontal
        pagingEnabled
        style={styles.container}
        data={subscriptionsData}
        renderItem={({ item }) =>
          <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.7, justifyContent: 'center' }}>
            <SubscriptionCard
              content={item.content}
              contractName={item.contractName}
              subscriptionName={item.subscriptionName}
              price={item.price}
              href={item.href}
            />
          </View>
        }
        estimatedItemSize={SCREEN_HEIGHT}
      />
      {/* <SubscriptionCard
        content={subscriptionsData[0].content}
        contractName={subscriptionsData[0].contractName}
        subscriptionName={subscriptionsData[0].subscriptionName}
        price={subscriptionsData[0].price}
        href={subscriptionsData[0].href}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: 'center'
  }
})