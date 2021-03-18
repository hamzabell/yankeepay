// @ts-nocheck
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LoginSignUpNavigator } from "./navigation";
import { ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/bg.png")}
      style={{ flex: 1, width: "100%" }}
    >
      <StatusBar style={{ backgroundColor: "#495ee3" }} />
      <NavigationContainer>
        <LoginSignUpNavigator />
      </NavigationContainer>
    </ImageBackground>
  );
}
