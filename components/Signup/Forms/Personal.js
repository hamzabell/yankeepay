import React, { useState } from "react";
import { AppForm, AppFormField, AppSubmitButton } from "../../../components";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().label("Username"),
  dob: Yup.string().required().label("Date of Birth"),
  phone: Yup.string().max(11).required().label("Phone Number"),
});

export default function PersonalForm({ onSubmit, visible }) {
  if (!visible) return null;

  return (
    <AppForm
      initialValues={{ name: "", username: "", dob: "", phone: "" }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        name="name"
        placeholder="Name"
        otherContainerStyle={{
          marginTop: 30,
        }}
      />
      <AppFormField
        name="username"
        placeholder="Username"
        leftIcon={<Text style={{}}>Yank |</Text>}
      />
      <AppFormField
        name="dob"
        placeholder="Date of Birth"
        rightIcon={<FontAwesome name="calendar-o" size={24} color="#C6C3C3" />}
      />
      <AppFormField
        name="phone"
        placeholder="Phone"
        rightIcon={<Feather name="phone" size={24} color="#C6C3C3" />}
        keyboardType="phone-pad"
      />
      <AppSubmitButton title="continue" />
    </AppForm>
  );
}

PersonalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
