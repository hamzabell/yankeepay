import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Badge } from "react-native-elements";

export default ({ navigation }) => {
  return (
    <View
      style={{
        paddingLeft: 25,
        paddingBottom: 6,
        paddingTop: 60,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: "https://picsum.photos/100",
          }}
        />
        <View style={{ paddingTop: 2, paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            Hello
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>Corey Taylor</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View>
          <Avatar
            rounded
            icon={{ name: "bell", type: "font-awesome", color: "#39AC8E" }}
            onPress={() => navigation.navigate("Notifications")}
            containerStyle={{
              padding: 8,
              marginRight: 25,
              marginTop: 10,
              backgroundColor: "#CAECE3",
            }}
          />
          <Badge
            status="error"
            value="5"
            containerStyle={{ position: "absolute", top: 6, left: -4 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
