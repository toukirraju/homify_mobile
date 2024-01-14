import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/header/Header";
import { StyleSheet } from "react-native";

const SubScreenLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <ScrollView style={styles.scrollableArea}> */}
      {children}
      {/* </ScrollView> */}
    </View>
  );
};

export default SubScreenLayout;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#182028",
  },
  scrollableArea: {
    flexGrow: 0.89,
  },
});
