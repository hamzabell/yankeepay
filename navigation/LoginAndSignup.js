import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, SignIn, SignUp } from "../Screens";
import AppTabNavigator from "./AppTabNavigation";
import AccountNavigator from "./AccoutNavigation";
import { Image } from "react-native";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        borderBottomColor: "#495ee3",
        backgroundColor: "transparent",
      },
      headerTintColor: "white",
      headerTitleStyle: { marginLeft: 104 },
      cardStyle: {
        backgroundColor: "transparent",
      },
    }}
  >
    <Stack.Screen
      name="splash"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="signin"
      component={SignIn}
      options={{ title: "sign in" }}
    />
    <Stack.Screen
      name="signup"
      component={SignUp}
      options={{ title: "sign up" }}
    />
    <Stack.Screen
      name="app"
      component={AppTabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
