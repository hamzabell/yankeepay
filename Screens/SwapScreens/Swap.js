import React from "react";
import { View, Text } from "react-native";
import { contentWrapper } from "../../styled/global";
import {
  ScreenWrapper,
  AppForm,
  AppSubmitButton,
  AppDropdown,
  AppFormField,
} from "../../components";
import { Avatar } from "react-native-elements";
import currencyIcons from "../../shared/CurrencyIcons";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  currency: Yup.string().required(),
  amount: Yup.number().min(5).required(),
});

const CURRENCIES = [
  { label: "Naira", value: "Naira" },
  { label: "Bitcoin", value: "Btc" },
  { label: "Ethereum", value: "Ethereum" },
  { label: "USDT", value: "Usdt" },
];

export default function Swap({ route }) {
  const { currency } = route.params;

  const items = CURRENCIES.filter((v) => v.value !== currency);
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <View
          style={{ alignItems: "center", width: "100%", marginVertical: 10 }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Swap
          </Text>
          <View style={{ marginVertical: 15 }}>
            <View style={{ marginLeft: 20, marginVertical: 10 }}>
              <Avatar source={currencyIcons[currency]} />
            </View>
            <Text style={{ color: "#C6C3C3" }}>4.67777btc</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginVertical: 50 }}>
          <AppForm
            initialValues={{ currency: "", amount: 0 }}
            onSubmit={(val) => console.log(val)}
            validationSchema={validationSchema}
          >
            <AppDropdown
              items={items}
              defaultValue={items[0]}
              name="currency"
            />
            <AppFormField
              name="amount"
              placeholder="Amount"
              otherContainerStyle={{
                marginVertical: 20,
                width: 350,
                height: 54,
              }}
            />
            <AppSubmitButton title="Swap" />
          </AppForm>
        </View>
      </View>
    </ScreenWrapper>
  );
}
