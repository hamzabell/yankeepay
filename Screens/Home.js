import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ScreenWrapper, UserProfile } from "../components";
import { contentWrapper } from "../styled/global";
import { Text, ListItem, Avatar } from "react-native-elements";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";

const NAVTITLES = [
  {
    id: 1,
    name: "Stash",
    icon: (
      <AntDesign
        name="Safety"
        size={25}
        color="#7D6262"
        style={{ paddingTop: 1 }}
      />
    ),
    paddingTop: 0,
    cb: (navigation) => navigation.navigate("Stash"),
  },
  {
    id: 2,
    name: "Swap",
    icon: (
      <AntDesign
        name="swap"
        size={25}
        color="#7D6262"
        style={{ paddingTop: 1 }}
      />
    ),
    paddingTop: 33,
    cb: (navigation) => navigation.navigate("Swap"),
  },
  {
    id: 3,
    name: "Share",
    icon: (
      <FontAwesome5
        name="expand-arrows-alt"
        size={25}
        color="#7D6262"
        style={{ paddingTop: 1 }}
      />
    ),
    paddingTop: 33,
    cb: (navigation) => navigation.navigate("Share"),
  },
  {
    id: 4,
    name: "Store",
    icon: (
      <FontAwesome
        name="shopping-bag"
        size={25}
        color="#7D6262"
        style={{ paddingTop: 1 }}
      />
    ),
    paddingTop: 33,
    cb: (navigation) => navigation.navigate("Store"),
  },
];

const NavTile = ({ name, icon, cb, ...otherStyles }) => {
  return (
    <TouchableOpacity onPress={cb}>
      <View
        style={[
          {
            flexDirection: "row",
            width: "100%",
            paddingRight: 30,
          },
          { ...otherStyles },
        ]}
      >
        {icon}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: 23,
          }}
        >
          <Text style={{ fontSize: 21, color: "#7D6262" }}>{name}</Text>

          <ListItem.Chevron
            size={25}
            color="#7D6262"
            style={{ paddingTop: 2 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <NavTile
      name={item.name}
      cb={() => item.cb(navigation)}
      icon={item.icon}
      paddingTop={item.paddingTop}
    />
  );
  return (
    <ScreenWrapper>
      <UserProfile />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 90,
        }}
      >
        <Text style={{ color: "white", marginTop: 20 }} h4>
          Welcome!
        </Text>
      </View>
      <View
        style={[
          contentWrapper,
          { paddingLeft: 40, paddingRight: 20, paddingTop: 10 },
        ]}
      >
        <View style={{ paddingTop: 60 }}>
          <FlatList
            data={NAVTITLES}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Home;
