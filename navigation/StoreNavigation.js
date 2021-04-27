import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Store } from "../Screens";
import { PayScreen } from "../Screens/StoreScreens";
import Notifications from "../Screens/Notifications";

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
      component={Store}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Pay"
      component={PayScreen}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="Notifications"
      component={Notifications}
      options={{ headerTitle: "" }}
    />
  </Stack.Navigator>
);

export default SwapNavigator;
