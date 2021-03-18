import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppButton, ScreenWrapper } from "../components";
import { Dots } from "../styled";

const TITLES = [
  "WELCOME TO YANKEEPAY",
  "SEND AND RECEIVE",
  "BUY AIRTIME",
  "CONVERT FUNDS",
];
const SUBTITLES = [
  "Yankeepay is the easiest way to pay for stuffs",
  "Receive money from anyone in the world and send money too",
  "Buy airtime and pay bills for yourself and others with Cryptocurrency",
  "Convert money from Naira to Cryptocurrency",
];

function Splash({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            marginBottom: 140,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 27,
              textAlign: "center",
            }}
          >
            {TITLES[currentIndex]}
          </Text>

          <View style={{ paddingHorizontal: 24, marginTop: 20 }}>
            <Text
              style={{
                color: "white",
                marginBottom: 30,
                textAlign: "center",
                fontSize: 21,
                fontWeight: "300",
              }}
            >
              {SUBTITLES[currentIndex]}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginLeft: 35,
              }}
            >
              <Dots active={currentIndex >= 0} activeColor="white" />
              <Dots active={currentIndex >= 1} activeColor="white" />
              <Dots active={currentIndex >= 2} activeColor="white" />
              <Dots active={currentIndex >= 3} activeColor="white" />
            </View>
          </View>
        </View>
        <View>
          <AppButton
            title="Sign in"
            onPress={() => navigation.push("signin")}
            primary={false}
          />
          <AppButton
            title="Create Free Account"
            primary
            onPress={() => navigation.push("signup")}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Splash;
