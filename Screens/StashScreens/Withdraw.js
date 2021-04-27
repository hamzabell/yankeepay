import React from "react";
import { View, Text } from "react-native";
import {
  ScreenWrapper,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../../components";
import { contentWrapper } from "../../styled/global";
import { Avatar, Input } from "react-native-elements";
import currencyIcons from "../../shared/CurrencyIcons";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  accountNumber: Yup.number().required().label("Account Number"),
});

const validationSchema2 = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  walletAddress: Yup.string().required().label("Wallet Address"),
});

export default function Withdraw(props) {
  const { currency } = props.route.params;
  const isFiat = currency === "Naira";
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Withdraw
          </Text>
          <View style={{ marginLeft: 5, marginVertical: 15 }}>
            <Avatar source={currencyIcons[currency]} size="medium" />
          </View>
          <Text style={{ color: "#C6C3C3", fontWeight: "600", fontSize: 16 }}>
            700,000
          </Text>
        </View>

        <View style={{ marginTop: 20, alignItems: "center" }}>
          {isFiat ? (
            <AppForm
              initialValues={{ amount: 0, accountNumber: "" }}
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
                name="accountNumber"
                placeholder="Account Number"
                keyboardType="number"
                otherContainerStyle={{
                  marginBottom: 50,
                }}
              />
              <AppSubmitButton
                title="continue"
                otherContainerStyles={{
                  marginBottom: 30,
                }}
              />
            </AppForm>
          ) : (
            <AppForm
              initialValues={{ amount: 0, walletAddress: "" }}
              onSubmit={(val) => console.log(val)}
              validationSchema={validationSchema2}
            >
              <AppFormField
                name="amount"
                placeholder="Amount"
                otherContainerStyle={{
                  marginTop: 60,
                }}
                keyboardType="number"
              />
              <AppFormField
                name="walletAddress"
                placeholder="Wallet Address"
                otherContainerStyle={{
                  marginBottom: 50,
                }}
              />

              <AppSubmitButton
                title="continue"
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
