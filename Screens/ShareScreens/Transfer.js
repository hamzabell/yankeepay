import React from "react";
import { View, Text } from "react-native";
import { contentWrapper } from "../../styled/global";
import { Avatar } from "react-native-elements";
import currencyIcons from "../../shared/CurrencyIcons";
import {
  ScreenWrapper,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../../components";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  walletAddress: Yup.string().required().label("Wallet Address"),
});

const validationSchema2 = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  email: Yup.string().email().required().label("Email"),
});

export default function Transfer(props) {
  const { currency, method } = props.route.params;
  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center", marginVertical: 50 }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          Share
        </Text>
        <View style={{ marginLeft: 5, marginVertical: 15 }}>
          <Avatar source={currencyIcons[currency]} size="medium" />
        </View>
      </View>
      <View style={contentWrapper}>
        <View style={{ alignItems: "center", marginTop: 10, marginLeft: -5 }}>
          <Text
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              fontWeight: "800",
            }}
          >
            Transfer
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          {method === "address" ? (
            <AppForm
              initialValues={{ amount: 0, walletAddress: "" }}
              onSubmit={(val) => console.log(val)}
              validationSchema={validationSchema}
            >
              <AppFormField
                name="amount"
                placeholder="Amount"
                keyboardType="number"
                otherContainerStyle={{
                  marginTop: 60,
                }}
              />
              <AppFormField
                name="walletAddress"
                placeholder="Wallet Address"
                otherContainerStyle={{
                  marginBottom: 50,
                }}
              />
              <AppSubmitButton
                title="send"
                otherContainerStyles={{
                  marginBottom: 30,
                }}
              />
            </AppForm>
          ) : (
            <AppForm
              initialValues={{ amount: 0, email: "" }}
              onSubmit={(val) => console.log(val)}
              validationSchema={validationSchema2}
            >
              <AppFormField
                name="amount"
                placeholder="Amount"
                keyboardType="number"
                otherContainerStyle={{
                  marginTop: 60,
                }}
              />
              <AppFormField
                name="email"
                placeholder="Email"
                keyboardType="email-address"
                otherContainerStyle={{
                  marginBottom: 50,
                }}
              />
              <AppSubmitButton
                title="send"
                otherContainerStyles={{
                  marginBottom: 30,
                }}
              />
            </AppForm>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
