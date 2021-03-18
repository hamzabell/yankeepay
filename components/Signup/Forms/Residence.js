import React from "react";
import { AppForm, AppFormField, AppSubmitButton } from "../../../components";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  country: Yup.string().required().label("Country"),
  state: Yup.string().required().label("State of Residence"),
  address: Yup.string().required().label("Address"),
});

export default function ResidenceForm({ onSubmit, visible }) {
  if (!visible) return null;
  return (
    <AppForm
      initialValues={{ country: "", state: "", address: "" }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        name="country"
        placeholder="Country"
        otherContainerStyle={{
          marginTop: 30,
        }}
      />
      <AppFormField name="state" placeholder="State" />
      <AppFormField name="address" placeholder="Address" />

      <AppSubmitButton title="submit" />
    </AppForm>
  );
}

ResidenceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
