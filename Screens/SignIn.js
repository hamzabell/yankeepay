import React from "react";
import {
  ScreenWrapper,
  ContentWrapper,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../components";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function SignIn({ navigation }) {
  return (
    <ScreenWrapper style={styles.content}>
      <ContentWrapper
        otherStyles={{
          paddingTop: 25,
        }}
        leftTitle={{
          main: "Welcome Back",
          sub: "Enter your credentials",
        }}
        contentCentered
      >
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(val) => navigation.navigate("app")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="email"
            placeholder="Email"
            otherContainerStyle={{
              marginTop: 60,
            }}
          />
          <AppFormField
            name="password"
            placeholder="Password"
            otherContainerStyle={{
              marginBottom: 50,
            }}
            rightIcon={<Feather name="lock" size={24} color="#C6C3C3" />}
            secureTextEntry
          />
          <AppSubmitButton
            title="continue"
            otherContainerStyles={{
              marginBottom: 30,
            }}
          />
        </AppForm>
      </ContentWrapper>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
