import React from "react";
import { View, Text } from "react-native";
import { ScreenWrapper, CardTitle, CurrencyCard } from "../components";
import { contentWrapper } from "../styled/global";

function Stash(props) {
  return (
    <ScreenWrapper>
      <View style={{ marginVertical: 30 }}></View>
      <View style={[contentWrapper, { paddingTop: 80 }]}>
        <CardTitle balance="35,000" title="Stash" />

        <CurrencyCard
          title="Naira"
          balance="10,000"
          rate="2.01"
          rateDirection="down"
          onPress={() => console.log("I love Jesus")}
        />
        <CurrencyCard
          title="Btc"
          balance="4,000"
          rate="2.01"
          rateDirection="up"
          onPress={() => console.log("I love Jesus")}
        />
        <CurrencyCard
          title="Ethereum"
          balance="0.9977"
          rate="2.01"
          rateDirection="down"
          onPress={() => console.log("I love Jesus")}
        />
        <CurrencyCard
          title="Usdt"
          balance="4.677777"
          rate="2.01"
          rateDirection="up"
          onPress={() => console.log("I love Jesus")}
        />
      </View>
    </ScreenWrapper>
  );
}

export default Stash;
