import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScreenWrapper } from "../../components";
import { contentWrapper } from "../../styled/global";
import { ListItem, Avatar, Badge } from "react-native-elements";

const lists = [
  { fullName: "ADEYEMI ADEKOREDE", startDate: "27/08/2020", status: "paid" },
  { fullName: "ADEYEMI ADEKOREDE", startDate: "27/08/2020", status: "locked" },
  { fullName: "ADEYEMI ADEKOREDE", startDate: "27/08/2020", status: "paid" },
  { fullName: "ADEYEMI ADEKOREDE", startDate: "27/08/2020", status: "locked" },
  { fullName: "ADEYEMI ADEKOREDE", startDate: "27/08/2020", status: "paid" },
];

function ReferralDashboard(props) {
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://picsum.photos/100",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.fullName}</ListItem.Title>
        <ListItem.Subtitle>JOINED {item.startDate}</ListItem.Subtitle>
      </ListItem.Content>
      <Badge
        value={<Text style={{ color: "white" }}>{item.status}</Text>}
        badgeStyle={{
          backgroundColor: item.status === "paid" ? "#39AC8E" : "#BBB7B7",
          padding: 10,
          marginBottom: 12,
        }}
      />
    </ListItem>
  );
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <Text
          style={{
            marginTop: 33,
            fontSize: 23,
            marginRight: 12,
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          REFERRALS
        </Text>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 14,
            fontSize: 14,
            color: "#7D6262",
          }}
        >
          Here is a List of your referrals
        </Text>
        <View>
          <FlatList
            keyExtractor={keyExtractor}
            data={lists}
            renderItem={renderItem}
          />
        </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={{ color: "#7D6262", fontSize: 15 }}>SEE MORE</Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 20, marginTop: 40, flexDirection: "row" }}>
          <View style={{ marginRight: 10, marginTop: 6 }}>
            <Image source={require("../../assets/naira.png")} />
          </View>
          <View>
            <Text style={{ color: "#7D6262", fontSize: 20 }}>50,000</Text>
            <Text style={{ color: "#7D6262" }}>TOTAL COMMISSION</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default ReferralDashboard;
