import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Title = styled.Text`
  font-size: ${(props) => props.titleSize || "22px"};
  color: ${(props) => props.titleColor || "#000000"};
  font-weight: 900;
`;
// @ts-ignore
const SubTitle = styled.Text`
  /* color: "#877e7e"; */
  margin-top: 15px;
  width: 215px;
`;

export default function ContentWrapper({
  children,
  otherStyles,
  leftTitle,
  centeredTitle,
  contentCentered,
  ...otherProps
}) {
  return (
    <ScrollView style={[styles.container, otherStyles]} {...otherProps}>
      {leftTitle && (
        <View style={styles.titleContent}>
          <Title
            titleSize={leftTitle.titleSize}
            titleColor={leftTitle.titleColor}
          >
            {leftTitle.main}
          </Title>
          <SubTitle>{leftTitle.sub}</SubTitle>
        </View>
      )}
      {centeredTitle && (
        <View style={styles.centeredTitle}>{centeredTitle}</View>
      )}
      <View style={{ alignItems: contentCentered ? "center" : "flex-start" }}>
        {children}
      </View>
    </ScrollView>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  otherStyles: PropTypes.object,
  leftTitle: PropTypes.object,
  centeredTitle: PropTypes.element,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 5,
  },
  titleContent: {
    justifyContent: "flex-start",
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  centeredTitle: {
    alignItems: "center",
    marginTop: 20,
  },
});
