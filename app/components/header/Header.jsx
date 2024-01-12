import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import {
  DrawerActions,
  StackActions,
  TabActions,
  useNavigation,
} from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const goToProfile = () => {
    navigation.dispatch(StackActions.push("Profile"));
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* <Icon.Button
          name="align-left"
          size={24}
          color="gray"
          style={styles.hamburgerButton}
          onPress={toggleDrawer}
        /> */}
        <Text style={{ color: "gray", fontWeight: "800", fontSize: 20 }}>
          Homify
        </Text>

        <View style={styles.rightItems}>
          <Icon name="bell-o" size={20} color="gray" />
          <Pressable style={styles.avatar} onPress={goToProfile}>
            <Icon name="user" size={20} color="gray" />
          </Pressable>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#182028",
    height: 90,
  },
  contentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    top: 40,
  },
  rightItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  hamburgerButton: {
    backgroundColor: "white",
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderRadius: 100,
    borderColor: "gray",
    borderWidth: 2,
  },
});
