import React from "react";
import { View, Text } from "react-native";
import {
  ScreenWrapper,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../../components";
import { contentWrapper } from "../../styled/global";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  bvn: Yup.string(),
});
function ReferralCode({ navigation }) {
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
          REFERRALS
        </Text>
        <Text
          style={{
            marginLeft: 33,
            marginRight: 14,
            fontSize: 18,
            color: "#7D6262",
          }}
        >
          Refer and earn. You get 500 NGN for each person you refer and the
          person you refer gets 500 NGN too. All they need to do is create an
          account and carry out their first transaction for both of you to be
          credited.
        </Text>
        <Text
          style={{
            marginLeft: 33,
            marginRight: 14,
            fontSize: 18,
            marginTop: 13,
            color: "#7D6262",
          }}
        >
          Copy and send this code to your friends so they can sign up with it.
        </Text>

        <AppForm
          initialValues={{ referralCode: "" }}
          onSubmit={(val) => navigation.navigate("referral dashboard")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="referralCode"
            placeholder="Yankadekorede"
            otherContainerStyle={{
              marginTop: 30,
            }}
            rightIcon={<FontAwesome5 name="copy" size={24} color="black" />}
          />
          <AppSubmitButton
            title="referral dashboard"
            otherContainerStyles={{
              marginTop: 20,
              marginBottom: 30,
              alignItems: "center",
            }}
          />
        </AppForm>
      </View>
    </ScreenWrapper>
  );
}

export default ReferralCode;
