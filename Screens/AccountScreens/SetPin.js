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
  pin: Yup.string(),
  confirmPin: Yup.string(),
});

function SetPin(props) {
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 60,
            fontSize: 25,
            marginRight: 12,
            marginBottom: 80,
            fontWeight: "bold",
          }}
        >
          SET PIN
        </Text>
        <AppForm
          initialValues={{ pin: "", confirmPin: "" }}
          onSubmit={(val) => navigation.navigate("app")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="pin"
            placeholder="NEW PIN"
            keyboardType="numeric"
            otherContainerStyle={{}}
          />
          <AppFormField
            name="confirmPin"
            placeholder="CONFIRM NEW PIN"
            keyboardType="numeric"
            otherContainerStyle={{
              marginTop: 20,
            }}
          />
          <AppSubmitButton
            title="confirm"
            otherContainerStyles={{
              marginTop: 70,
              marginBottom: 30,
              alignItems: "center",
            }}
          />
        </AppForm>
      </View>
    </ScreenWrapper>
  );
}

export default SetPin;
