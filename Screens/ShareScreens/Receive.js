import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "../../components";
import { contentWrapper } from "../../styled/global";
import currencyIcons from "../../shared/CurrencyIcons";
import { Avatar, Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function Receive(props) {
  const { currency } = props.route.params;
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center", marginVertical: 50 }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          Recieve
        </Text>
        <View style={{ marginLeft: 5, marginVertical: 15 }}>
          <Avatar source={currencyIcons[currency]} size="medium" />
        </View>
      </View>
      <View style={contentWrapper}>
        <View style={{ alignItems: "center", width: "100%", marginTop: 20 }}>
          <View style={{ marginHorizontal: 20, marginTop: 50 }}>
            <Text style={{ color: "#877E7E", fontSize: 20 }}>
              Send your YankeePay email to the YankeePay user who’s sending you
              Bitcoin
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, marginVertical: 15 }}
            >
              OR
            </Text>
            <Text style={{ color: "#877E7E", fontSize: 20 }}>
              Send them your wallet address
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "#FAFBFD",
              borderColor: "#F1EFEF",
              paddingVertical: 5,
              paddingRight: 15,
              width: "95%",
              marginTop: 20,
            }}
          >
            <View style={{ width: "95%" }}>
              <Input
                placeholder="Wallet Address"
                defaultValue="yankeepayisawesome"
                secureTextEntry={isVisible}
                containerStyle={{
                  width: "90%",
                }}
                inputContainerStyle={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#FAFBFD",
                  paddingLeft: 20,
                  borderRadius: 5,
                  backgroundColor: "#FAFBFD",
                  marginTop: 5,
                }}
              />
            </View>
            <View style={{ width: "5%", marginTop: 8, paddingRight: 10 }}>
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <AntDesign name="copy1" size={24} color="#7D6262" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
