import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountNavigation from "./AccoutNavigation";
import SwapNavigation from "./SwapNavigation";
import StashNavigation from "./StashNavigation";
import ShareNavigation from "./ShareNavigation";
import StoreNavigation from "./StoreNavigation";
import HomeNavigation from "./HomeNavigation";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => (
  <Tabs.Navigator
    tabBarOptions={{
      style: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 70,
        backgroundColor: "#EFEFF1",
        elevation: 1,
        marginHorizontal: 20,
        position: "absolute",
      },
      labelStyle: {
        fontSize: 13,
        marginBottom: 8,
      },
      iconStyle: {
        height: 60,
        borderColor: "#7D6262",
        marginTop: 5,
      },
    }}
    sceneContainerStyle={{
      backgroundColor: "transparent",
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Stash"
      component={StashNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="Safety" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Swap"
      component={SwapNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="swap" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Share"
      component={ShareNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="expand-arrows-alt" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Store"
      component={StoreNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name="shopping-bag" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Account"
      component={AccountNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="user-cog" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default TabNavigator;
