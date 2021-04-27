import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Share } from "../Screens";
import {
  ShareDashboard,
  SendScreen,
  ReceiveScreen,
  TransferScreen,
} from "../Screens/ShareScreens";

const Stack = createStackNavigator();

const SwapNavigator = () => (
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
      component={Share}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Share Dashboard"
      component={ShareDashboard}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="Send"
      component={SendScreen}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="Receive"
      component={ReceiveScreen}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="Transfer"
      component={TransferScreen}
      options={{ headerTitle: "" }}
    />
  </Stack.Navigator>
);

export default SwapNavigator;
