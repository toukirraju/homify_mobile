import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Renter = () => {
  return (
    <View style={styles.container}>
      <Text>Renter</Text>
    </View>
  );
};

export default Renter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: "#121212",
  },
  scrollArea: { flex: 0.9 },
});
