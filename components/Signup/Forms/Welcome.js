import React from "react";
import { AppForm, AppFormField, AppSubmitButton } from "../../../components";
import { Feather } from "@expo/vector-icons";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Both password need to be the same"
  ),
});

export default function Welcome({ onSubmit, visible }) {
  if (!visible) return null;
  return (
    <AppForm
      initialValues={{ email: "", password: "", confirm: "" }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        name="email"
        placeholder="Email"
        otherContainerStyle={{
          marginTop: 60,
        }}
        keyboardType="email-address"
      />
      <AppFormField
        name="password"
        placeholder="Password"
        rightIcon={<Feather name="lock" size={24} color="#C6C3C3" />}
        secureTextEntry
      />
      <AppFormField
        name="confirm"
        placeholder="Confirm Password"
        otherContainerStyle={{
          marginBottom: 30,
        }}
        rightIcon={<Feather name="lock" size={24} color="#C6C3C3" />}
        secureTextEntry
      />
      <AppSubmitButton title="continue" />
    </AppForm>
  );
}

Welcome.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
