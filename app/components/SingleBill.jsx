import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const SingleBill = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bill Information</Text>
      {[1, 2, 3, 4, 5].map((item) => (
        <View key={item} style={styles.cardContainer}>
          <View style={styles.leftCard}>
            <Text style={styles.cardTitle}>Rent</Text>
            <Text style={styles.cardSubtitle}>$5000.00</Text>
          </View>
          <View style={styles.rightCard}>
            <Text style={styles.cardTitle}>Water</Text>
            <Text style={styles.cardSubtitle}>$500.00</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SingleBill;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    // paddingHorizontal: 10,
  },
  header: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
    paddingHorizontal: 5,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: 10,
  },
  leftCard: {
    backgroundColor: "#3e3e3e79",
    width: "48.8%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
    borderRadius: 10,
  },
  rightCard: {
    backgroundColor: "#3e3e3e79",
    width: "48.8%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "darkgray",
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#c3c3c3",
  },
});
