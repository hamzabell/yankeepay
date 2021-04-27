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
  units: Yup.number().required().label("Units"),
  amount: Yup.number().required().label("Amount"),
});

function Store(props) {
  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center", marginVertical: 50 }}>
        <Text
          style={{
            fontSize: 22,
            color: "#ffffff",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          Store
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: 14,
            width: "50%",
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          Buy what you want with Crypto and Naira
        </Text>
        <Feather name="gift" size={32} color="white" />
      </View>
      <View style={contentWrapper}>
        <View style={{ alignItems: "center", marginTop: 5, marginLeft: -5 }}>
          <Text
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              fontWeight: "800",
            }}
          >
            Pay
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <AppForm
            initialValues={{ units: 0, amount: 0 }}
            onSubmit={(val) => console.log(val)}
            validationSchema={validationSchema}
          >
            <AppFormField
              name="units"
              placeholder="Units"
              keyboardType="number"
              otherContainerStyle={{
                marginTop: 60,
              }}
            />
            <AppFormField
              name="amount"
              placeholder="Amount"
              keyboardType="number"
              otherContainerStyle={{
                marginBottom: 50,
              }}
            />
            <AppSubmitButton
              title="confirm"
              otherContainerStyles={{
                marginBottom: 30,
              }}
            />
          </AppForm>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Store;
