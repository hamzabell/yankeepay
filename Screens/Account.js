import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScreenWrapper, UserProfile } from "../components";
import { AccountMenuItem } from "../components/Account";
import { Avatar, Badge } from "react-native-elements";
import { contentWrapper } from "../styled/global";
import { ScrollView } from "react-native-gesture-handler";

const ACCOUNT_MENU_ITEMS = {
  ACCOUNT_UPGRADE: [
    { name: "BVN" },
    { name: "SUBMIT ID" },
    { name: "PROFILE" },
  ],
  SECURITY: [
    { name: "SET PIN" },
    { name: "ENABLE 2FA" },
    { name: "CHANGE PASSWORD" },
  ],
  REFERRALS: [
    { name: "REFERRAL CODE" },
    { name: "REFERRAL DASHBOARD" },
    { name: "SUPPORT" },
  ],
};

function Account({ navigation }) {
  const navigateToOptionPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <AccountMenuItem
      item={{ name: item.name }}
      onPress={() => navigateToOptionPage(item.name.toLowerCase())}
    />
  );

  return (
    <ScreenWrapper>
      <UserProfile navigation={navigation} />
      <View style={[contentWrapper]}>
        <View style={{ paddingLeft: 20, marginBottom: 20 }}>
          <Text
            style={{
              textTransform: "uppercase",
              color: "#C6C3C3",
              fontSize: 15,
            }}
          >
            Account
          </Text>
        </View>
        <ScrollView style={{ marginVertical: 10 }}>
          <View style={{ paddingLeft: 20, marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Upgrade Account
            </Text>
            <View>
              <FlatList
                renderItem={renderItem}
                data={ACCOUNT_MENU_ITEMS.ACCOUNT_UPGRADE}
                keyExtractor={keyExtractor}
              />
            </View>
          </View>
          <View style={{ paddingLeft: 20, marginTop: 10, marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Security</Text>
            <View style={{ marginTop: 5 }}>
              <FlatList
                renderItem={renderItem}
                data={ACCOUNT_MENU_ITEMS.SECURITY}
                keyExtractor={keyExtractor}
              />
            </View>
          </View>
          <View style={{ paddingLeft: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Referrals</Text>
            <View style={{ marginTop: 5 }}>
              <FlatList
                renderItem={renderItem}
                data={ACCOUNT_MENU_ITEMS.REFERRALS}
                keyExtractor={keyExtractor}
              />
            </View>
          </View>
          <View style={{ padding: 20 }}></View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 40,
    paddingTop: 20,
    marginTop: 50,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default Account;
