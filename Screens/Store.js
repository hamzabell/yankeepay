import React from "react";
import { View, Text } from "react-native";
import { ScreenWrapper, UserProfile } from "../components";
import { contentWrapper } from "../styled/global";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import StoreLogos from "../shared/StoreLogos";

function Store(props) {
  return (
    <ScreenWrapper>
      <UserProfile navigation={props.navigation} />
      <View style={{ alignItems: "center", marginVertical: 50 }}>
        <Text
          style={{
            fontSize: 22,
            color: "#ffffff",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          Store
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: 14,
            width: "50%",
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          Buy what you want with Crypto and Naira
        </Text>
        <Feather name="gift" size={32} color="white" />
      </View>
      <View style={contentWrapper}>
        <View>
          <View
            style={{
              alignItems: "center",
              width: "100%",
              marginTop: 70,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <View>
                <Avatar
                  source={StoreLogos["phone"]}
                  size="large"
                  rounded
                  avatarStyle={{
                    backgroundColor: "#F7931A",
                  }}
                  containerStyle={{
                    marginHorizontal: 20,
                  }}
                  onPress={() => props.navigation.navigate("Pay")}
                />
                <Text
                  style={{
                    color: "#877E7E",
                    fontWeight: "500",
                    fontSize: 15,
                    marginVertical: 10,
                    textAlign: "center",
                  }}
                >
                  Airtime & Data
                </Text>
              </View>
              <View>
                <Avatar
                  source={StoreLogos["utility"]}
                  size="large"
                  rounded
                  avatarStyle={{ backgroundColor: "#39AC8E" }}
                  containerStyle={{
                    marginHorizontal: 20,
                  }}
                  onPress={() => props.navigation.navigate("Pay")}
                />
                <Text
                  style={{
                    color: "#877E7E",
                    fontWeight: "500",
                    fontSize: 15,
                    marginVertical: 10,
                    textAlign: "center",
                  }}
                >
                  Utility Bills
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Avatar
                  source={StoreLogos["groceries"]}
                  size="large"
                  rounded
                  avatarStyle={{ backgroundColor: "#AC4E39" }}
                  containerStyle={{
                    marginHorizontal: 20,
                  }}
                  onPress={() => props.navigation.navigate("Pay")}
                />
                <Text
                  style={{
                    color: "#877E7E",
                    fontWeight: "500",
                    fontSize: 15,
                    marginVertical: 10,
                    textAlign: "center",
                  }}
                >
                  Groceries
                </Text>
              </View>

              <View>
                <Avatar
                  source={StoreLogos["others"]}
                  size="large"
                  rounded
                  avatarStyle={{ backgroundColor: "#4A4867" }}
                  containerStyle={{
                    marginHorizontal: 20,
                  }}
                  onPress={() => props.navigation.navigate("Pay")}
                />
                <Text
                  style={{
                    color: "#877E7E",
                    fontWeight: "500",
                    fontSize: 15,
                    marginVertical: 10,
                    textAlign: "center",
                  }}
                >
                  Others
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}></View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Store;
