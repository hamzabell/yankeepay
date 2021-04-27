import React from "react";
import DropdownPicker from "react-native-dropdown-picker";
import { useFormikContext } from "formik";

export default function AppDropdown({ name, items, defaultValue }) {
  const { handleChange, setFieldValue } = useFormikContext();
  return (
    <>
      <DropdownPicker
        items={items}
        defaultValue={defaultValue || items[0]}
        containerStyle={{ height: 54, width: 301 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => setFieldValue(name, item.value)}
      />
    </>
  );
}
