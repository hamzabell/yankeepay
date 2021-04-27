import React from "react";
import { View, Text } from "react-native";
import { ScreenWrapper } from "../../components";
import { contentWrapper } from "../../styled/global";
import { Avatar, Button, ListItem } from "react-native-elements";
import currencyIcons from "../../shared/CurrencyIcons";
import { FlatList } from "react-native-gesture-handler";
import { render } from "react-dom";

const StashButton = ({ title, ...otherProps }) => {
  return (
    <Button
      title={title}
      buttonStyle={{
        backgroundColor: "#39AC8E",
        width: 170,
        height: 60,
        borderRadius: 8,
      }}
      titleStyle={{
        textTransform: "uppercase",
        color: "white",
      }}
      containerStyle={[
        {
          margin: 10,
        },
      ]}
      {...otherProps}
    />
  );
};

const data = [
  {
    receipent: "Ehinze Emeka",
    date: "Today, 12:02",
    amount: "0.00001ETH",
    nairaEquivalent: "#1,000",
  },
  {
    receipent: "Ehinze Emeka",
    date: "Today, 12:02",
    amount: "0.00001ETH",
    nairaEquivalent: "#1,000",
  },
  {
    receipent: "Ehinze Emeka",
    date: "Today, 12:02",
    amount: "0.00001ETH",
    nairaEquivalent: "#1,000",
  },
  {
    receipent: "Ehinze Emeka",
    date: "Today, 12:02",
    amount: "0.00001ETH",
    nairaEquivalent: "#1,000",
  },
];

export default function StashDashboad({ route, navigation }) {
  const { currency } = route.params;
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{item.receipent}</ListItem.Title>
          <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
        </ListItem.Content>
        <View>
          <Text style={{ color: "#AC4E39" }}>{item.amount}</Text>
          <Text style={{ color: "#BBB7B7" }}>{item.nairaEquivalent}</Text>
        </View>
      </ListItem>
    );
  };
  return (
    <ScreenWrapper>
      <View style={{ marginVertical: 50, alignItems: "center", width: "100%" }}>
        <View>
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Stash
          </Text>
          <View style={{ marginVertical: 10, marginLeft: 12 }}>
            <Avatar source={currencyIcons[currency]} />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "900",
                marginVertical: 10,
                marginLeft: -14,
              }}
            >
              20,000
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <StashButton
            title="Withdraw"
            onPress={() => navigation.navigate("Withdraw Funds", { currency })}
          />
          <StashButton
            title="Fund"
            onPress={() => navigation.navigate("Fund Wallet", { currency })}
          />
        </View>
      </View>
      <View style={[contentWrapper, { padding: 20, marginTop: 10 }]}>
        <Text style={{ color: "#BBB7B7", fontSize: 20 }}>
          Recent Transactions
        </Text>

        <View style={{ marginLeft: -18 }}>
          <FlatList
            keyExtractor={keyExtractor}
            data={data}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
