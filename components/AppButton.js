import React from "react";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

function AppButton({ title, primary, otherContainerStyles, ...otherProps }) {
  return (
    <Button
      title={title}
      buttonStyle={{
        backgroundColor: primary ? "#39AC8E" : "#FFFFFF",
        width: 300,
        height: 60,
        borderRadius: 8,
      }}
      titleStyle={{
        textTransform: "uppercase",
        color: primary ? "white" : "black",
      }}
      containerStyle={[
        {
          margin: 10,
        },
        otherContainerStyles,
      ]}
      {...otherProps}
    />
  );
}

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  otherContainerStyles: PropTypes.object,
};

export default AppButton;
