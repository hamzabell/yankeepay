import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Stash } from "../Screens";
import {
  StashDashboad,
  FundScreen,
  WithdrawScreen,
} from "../Screens/StashScreens";

const Stack = createStackNavigator();

const StashNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        borderBottomColor: "#495ee3",
        backgroundColor: "transparent",
      },
      headerTintColor: "white",
      headerTitleStyle: { marginLeft: 104 },
      cardStyle: { backgroundColor: "transparent" },
    }}
  >
    <Stack.Screen
      name="home"
      component={Stash}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Stash Dashboard"
      component={StashDashboad}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="Withdraw Funds"
      component={WithdrawScreen}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="Fund Wallet"
      component={FundScreen}
      options={{ headerTitle: "" }}
    />
  </Stack.Navigator>
);

export default StashNavigator;
