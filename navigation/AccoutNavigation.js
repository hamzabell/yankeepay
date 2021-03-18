import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Bvn,
  ChangePassword,
  Profile,
  ReferralCode,
  ReferralDashboard,
  SetPin,
  SubmitID,
} from "../Screens/AccountScreens";
import { Account } from "../Screens";

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
      cardStyle: { backgroundColor: "transparent" },
    }}
  >
    <Stack.Screen
      name="account"
      component={Account}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="bvn" component={Bvn} options={{ headerTitle: "" }} />
    <Stack.Screen
      name="submit id"
      component={SubmitID}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="profile"
      component={Profile}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="set pin"
      component={SetPin}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="change password"
      component={ChangePassword}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="referral code"
      component={ReferralCode}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="referral dashboard"
      component={ReferralDashboard}
      options={{ headerTitle: "" }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
