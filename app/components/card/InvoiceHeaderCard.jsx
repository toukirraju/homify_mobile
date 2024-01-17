import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InvoiceHeaderCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSide}>
        <Text style={styles.subtitle}>Invoice For</Text>
        <Text style={styles.title}>Alex</Text>
        <Text style={styles.details}>Floor:5, Apartment:A5, Room:5</Text>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.paid}>
          <Text style={{ color: "#e3e3e3", fontWeight: "700" }}>
            Paid Amount
          </Text>
          <Text style={styles.title}>$50000</Text>
        </View>

        <View style={styles.due}>
          <Text style={{ color: "#c0bebe", fontWeight: "700" }}>
            Due Amount
          </Text>
          <Text style={{ color: "#c0bebe", fontWeight: "700", fontSize: 20 }}>
            $500
          </Text>
        </View>
        <Text style={{ color: "#c0bebe", fontWeight: "700", fontSize: 12 }}>
          12th, January 2024
        </Text>
      </View>
    </View>
  );
};

export default InvoiceHeaderCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#acacac7b",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  leftSide: {
    justifyContent: "center",
    gap: 10,
    width: "48%",
  },
  subtitle: {
    color: "darkgray",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    color: "#dedede",
    fontSize: 20,
    fontWeight: "700",
  },
  details: {
    color: "darkgray",
    fontSize: 12,
    fontWeight: "600",
    flexWrap: "wrap",
  },
  rightSide: {
    backgroundColor: "#e9e9e93d",
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    gap: 10,
    borderRadius: 10,
    width: "48%",
  },
});
