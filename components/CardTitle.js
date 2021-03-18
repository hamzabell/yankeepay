import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

const CardTitle = ({ title, balance }) => {
  return (
    <View style={{ alignItems: "center", width: "100%", paddingRight: 12 }}>
      <Text
        style={{
          textTransform: "uppercase",
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          textTransform: "uppercase",
          color: "#C6C3C3",
          fontSize: 13,
          marginTop: 5,
        }}
      >
        Total Balance
      </Text>
      <View style={{ flexDirection: "row", marginTop: 2 }}>
        <Image
          source={require("../assets/naira-sign.png")}
          style={{ height: 20, width: 20, marginTop: 12, marginRight: 2 }}
        />
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 30,
            fontWeight: "800",
          }}
        >
          {balance}
        </Text>
      </View>
    </View>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default CardTitle;
