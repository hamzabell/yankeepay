import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScreenWrapper, AppButton } from "../../components";
import { contentWrapper } from "../../styled/global";
import currencyIcons from "../../shared/CurrencyIcons";
import { Avatar } from "react-native-elements";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function Send(props) {
  const { currency } = props.route.params;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const radio_props = [
    { label: "Send To Wallet Address", value: 0 },
    { label: "Send To Yankee Pay User", value: 1 },
  ];

  const onPress = () => {
    if (selectedIndex === 0) {
      props.navigation.push("Transfer", { method: "address", currency });
    } else {
      props.navigation.push("Transfer", { method: "user", currency });
    }
  };
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
      <View style={[contentWrapper, { paddingTop: 60 }]}>
        <View style={{ alignItems: "center" }}>
          <RadioForm animation={true}>
            {radio_props.map((obj, i) => (
              <RadioButton
                labelHorizontal={true}
                key={i}
                wrapStyle={{ marginVertical: 20 }}
              >
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={selectedIndex === i}
                  onPress={() => setSelectedIndex(i)}
                  borderWidth={1}
                  buttonInnerColor={"#39AC8E"}
                  buttonOuterColor={selectedIndex === i ? "#39AC8E" : "#000"}
                  buttonSize={20}
                  buttonOuterSize={30}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={() => setSelectedIndex(i)}
                  labelStyle={{
                    fontSize: 20,
                    color: selectedIndex === i ? "#39AC8E" : "#000000",
                  }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))}
          </RadioForm>
          <AppButton
            title="Confirm"
            primary
            otherContainerStyles={{ marginVertical: 20 }}
            onPress={onPress}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
