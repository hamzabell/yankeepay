import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { ScreenWrapper, AppForm, AppFormField } from "../../components";
import { contentWrapper } from "../../styled/global";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().label("Email"),
  phoneNumber: Yup.string(),
  fullName: Yup.string(),
});
function Profile(props) {
  return (
    <ScreenWrapper>
      <View style={contentWrapper}>
        <View style={styles.profile}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://picsum.photos/100",
            }}
          />
          <TouchableOpacity onPress={() => console.log("Hello World")}>
            <Text
              style={{
                marginTop: 10,
              }}
            >
              Upload New
            </Text>
          </TouchableOpacity>
        </View>
        <AppForm
          initialValues={{ email: "", phoneNumber: "", fullName: "" }}
          onSubmit={(val) => navigation.navigate("app")}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="fullName"
            placeholder="ADEYEMI  ADEKOREDE"
            otherContainerStyle={{}}
          />
          <AppFormField
            name="phoneNumber"
            placeholder="+2347084410470"
            keyboardType="phone-pad"
            otherContainerStyle={{}}
          />
          <AppFormField
            name="email"
            placeholder="adeyemi_adekorede@hotmail.com"
            keyboardType="email-address"
            otherContainerStyle={{}}
          />
        </AppForm>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginLeft: 30,
    marginBottom: 50,
    marginTop: 50,
  },
});

export default Profile;
