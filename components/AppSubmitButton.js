import React from "react";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

function AppSubmitButton({ title, otherContainerStyles }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      primary
      title={title}
      onPress={handleSubmit}
      otherContainerStyles={otherContainerStyles}
    />
  );
}
AppSubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
  otherContainerStyles: PropTypes.object,
};

export default AppSubmitButton;
