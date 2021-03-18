import React from "react";
import { View, Text } from "react-native";
import {
  ScreenWrapper,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../../components";
import { contentWrapper } from "../../styled/global";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

function ChangePassword(props) {
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 60,
            fontSize: 25,
            marginRight: 12,
            marginBottom: 40,
            fontWeight: "bold",
          }}
        >
          CHANGE PASSWORD
        </Text>
        <AppForm
          initialValues={{ oldPassword: "", password: "", confirmPassword: "" }}
          onSubmit={(val) => navigation.navigate("app")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="oldPassword"
            placeholder="OLD PASSWORD"
            otherContainerStyle={{}}
            secureEntry
          />
          <AppFormField
            name="password"
            placeholder="NEW PASSWORD"
            otherContainerStyle={{}}
          />
          <AppFormField
            name="confirmPassword"
            placeholder="CONFIRM NEW PASSWORD"
            otherContainerStyle={{}}
          />
          <AppSubmitButton
            title="confirm"
            otherContainerStyles={{
              marginTop: 50,
              marginBottom: 30,
              alignItems: "center",
            }}
          />
        </AppForm>
      </View>
    </ScreenWrapper>
  );
}

export default ChangePassword;
