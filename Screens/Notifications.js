import React from "react";
import { View, Text } from "react-native";
import { ScreenWrapper } from "../components";
import { contentWrapper } from "../styled/global";

export default function Notifications() {
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <View style={{ alignItems: "center", marginTop: 10, marginLeft: -5 }}>
          <Text
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              fontWeight: "800",
            }}
          >
            Notifications
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}
