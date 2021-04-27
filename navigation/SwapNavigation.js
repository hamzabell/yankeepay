import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Swap } from "../Screens";
import { SwapCurrency } from "../Screens/SwapScreens";

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
      component={Swap}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SwapCurrency"
      component={SwapCurrency}
      options={{ headerTitle: "" }}
    />
  </Stack.Navigator>
);

export default SwapNavigator;
