import React from "react";
import { Input } from "react-native-elements";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { Text } from "react-native";

function AppFormField({
  name,
  placeholder,
  otherContainerStyle,
  ...otherProps
}) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <Input
        placeholder={placeholder}
        containerStyle={[
          {
            paddingHorizontal: 20,
          },
          otherContainerStyle,
        ]}
        inputContainerStyle={{
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: (errors[name] && "red") || "#FAFBFD",
          paddingLeft: 20,
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: "#FAFBFD",
        }}
        labelStyle={{
          color: "#877E7E",
        }}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        errorMessage={(touched[name] && errors[name]) || " "}
        renderErrorMessage
        {...otherProps}
      />
    </>
  );
}

AppFormField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  otherContainerStyle: PropTypes.object,
};

export default AppFormField;
