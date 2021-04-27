import React from "react";
import { View, Text } from "react-native";
import { ScreenWrapper, CardTitle, CurrencyCard } from "../components";
import { contentWrapper } from "../styled/global";

function Share({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={{ marginVertical: 30 }}></View>
      <View style={[contentWrapper, { paddingTop: 80 }]}>
        <CardTitle balance="35,000" title="Share" />

        <CurrencyCard
          title="Naira"
          balance="10,000"
          rate="2.01"
          rateDirection="down"
          onPress={() =>
            navigation.navigate("Share Dashboard", { currency: "Naira" })
          }
        />
        <CurrencyCard
          title="Btc"
          balance="4,000"
          rate="2.01"
          rateDirection="up"
          onPress={() =>
            navigation.navigate("Share Dashboard", { currency: "Btc" })
          }
        />
        <CurrencyCard
          title="Ethereum"
          balance="0.9977"
          rate="2.01"
          rateDirection="down"
          onPress={() =>
            navigation.navigate("Share Dashboard", { currency: "Ethereum" })
          }
        />
        <CurrencyCard
          title="Usdt"
          balance="4.677777"
          rate="2.01"
          rateDirection="up"
          onPress={() =>
            navigation.navigate("Share Dashboard", { currency: "Usdt" })
          }
        />
      </View>
    </ScreenWrapper>
  );
}

export default Share;
