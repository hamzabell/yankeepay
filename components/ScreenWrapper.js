import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

const ScreenWrapper = ({ children, ...otherProps }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ flex: 1 }} {...otherProps}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

ScreenWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};
export default ScreenWrapper;
