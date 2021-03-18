import React from "react";
import { View, Text } from "react-native";
import {
  ScreenWrapper,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../../components";
import { contentWrapper } from "../../styled/global";
import { Feather } from "@expo/vector-icons";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  idd: Yup.string(),
});

function SubmitID(props) {
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
          ID DOCUMENT
        </Text>
        <AppForm
          initialValues={{ idd: "" }}
          onSubmit={(val) => navigation.navigate("app")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="bvn"
            placeholder="nin_docs_adekorede_20202"
            rightIcon={<Feather name="upload" size={24} color="#09121F" />}
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
            Your ID Document will be verified by our team and accepted once it
            is validated
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

export default SubmitID;
