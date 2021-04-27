import React from "react";
import { View, Text, Image } from "react-native";
import { contentWrapper } from "../styled/global";
import { ScreenWrapper, CardTitle, CurrencyCard } from "../components";

function Swap({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={{ marginVertical: 30 }}></View>
      <View style={[contentWrapper, { paddingTop: 80 }]}>
        <CardTitle balance="35,000" title="Swap" />

        <CurrencyCard
          title="Naira"
          balance="10,000"
          rate="2.01"
          rateDirection="down"
          onPress={() =>
            navigation.navigate("SwapCurrency", { currency: "Naira" })
          }
        />
        <CurrencyCard
          title="Btc"
          balance="4,000"
          rate="2.01"
          rateDirection="up"
          onPress={() =>
            navigation.navigate("SwapCurrency", { currency: "Btc" })
          }
        />
        <CurrencyCard
          title="Ethereum"
          balance="0.9977"
          rate="2.01"
          rateDirection="down"
          onPress={() =>
            navigation.navigate("SwapCurrency", { currency: "Ethereum" })
          }
        />
        <CurrencyCard
          title="Usdt"
          balance="4.677777"
          rate="2.01"
          rateDirection="up"
          onPress={() =>
            navigation.navigate("SwapCurrency", { currency: "Usdt" })
          }
        />
      </View>
    </ScreenWrapper>
  );
}

export default Swap;
