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
  bvn: Yup.string(),
});

function Bvn(props) {
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 60,
            fontSize: 25,
            marginRight: 12,
            fontWeight: "bold",
          }}
        >
          BVN
        </Text>
        <AppForm
          initialValues={{ bvn: "" }}
          onSubmit={(val) => navigation.navigate("app")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="bvn"
            placeholder="2234557838BCDN28888424"
            otherContainerStyle={{
              marginTop: 60,
            }}
          />
          <Text
            style={{
              marginLeft: 33,
              marginRight: 14,
              fontSize: 18,
              color: "#7D6262",
            }}
          >
            Your BVN will be verified by our team and accepted once it is
            validated
          </Text>
          <AppSubmitButton
            title="confirm"
            otherContainerStyles={{
              marginTop: 100,
              marginBottom: 30,
              alignItems: "center",
            }}
          />
        </AppForm>
      </View>
    </ScreenWrapper>
  );
}

export default Bvn;
