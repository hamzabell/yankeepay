import React from "react";
import { AppForm, AppFormField, AppSubmitButton } from "../../../components";
import { Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  username: Yup.string(),
});

export default function ReferralForm({ onSubmit, visible, onSkip }) {
  if (!visible) return null;
  return (
    <AppForm
      initialValues={{ username: "" }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        name="username"
        placeholder="Username"
        otherContainerStyle={{
          marginTop: 100,
          marginBotton: 20,
        }}
      />
      <AppSubmitButton title="submit" />
      <View style={{ justifyContent: "center", marginTop: 25 }}>
        <TouchableOpacity onPress={onSkip}>
          <Text style={{ textTransform: "uppercase" }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </AppForm>
  );
}

ReferralForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onSkip: PropTypes.func.isRequired,
};
