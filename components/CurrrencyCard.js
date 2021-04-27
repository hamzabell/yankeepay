import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import PropTypes from "prop-types";
import currencyIcons from "../shared/CurrencyIcons";

const CurrencyCard = ({ title, balance, rate, rateDirection, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItem style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Avatar source={currencyIcons[title]} />
        <ListItem.Content>
          <ListItem.Title style={{ textTransform: "uppercase" }}>
            {title}
          </ListItem.Title>
          <ListItem.Subtitle>{balance}</ListItem.Subtitle>
        </ListItem.Content>
        <View style={{ paddingTop: 7 }}>
          {rateDirection === "up" ? (
            <Text style={{ color: "#39AC8E" }}>{rate}%</Text>
          ) : (
            <Text style={{ color: "#AC4E39" }}>{rate}%</Text>
          )}
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

CurrencyCard.propTypes = {
  title: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  rateDirection: PropTypes.oneOf(["up", "down"]).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CurrencyCard;
