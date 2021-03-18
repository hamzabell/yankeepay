// @ts-nocheck
import React from "react";
import { ListItem, Badge } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

function AccountMenuItem({ item, onPress, badgeTitle, status, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItem
        {...otherProps}
        containerStyle={{
          padding: 0,
          width: "100%",
          marginTop: 5,
          paddingRight: 10,
          justifyContent: "space-between",
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "600", fontSize: 15 }}>
            {item.name}
          </ListItem.Title>
        </ListItem.Content>
        {badgeTitle && (
          <Badge
            value={<Text style={{ color: "white" }}>{item.status}</Text>}
            badgeStyle={{
              padding: 10,
              marginBottom: 12,
            }}
            status
          />
        )}
        <ListItem.Chevron size={30} />
      </ListItem>
    </TouchableOpacity>
  );
}

AccountMenuItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

export default AccountMenuItem;
