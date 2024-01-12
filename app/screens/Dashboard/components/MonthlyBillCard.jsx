import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const MonthlyBillCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardMonth}>January</Text>
        <Text style={styles.paidAmount}>$500</Text>
        <View style={styles.progress} />
        <Text style={styles.payable}>
          Monthly Target:{" "}
          <Text style={{ fontWeight: "700", fontSize: 16 }}>$16,578</Text>
        </Text>
      </View>
      <View style={styles.cardRight}>
        <Icon name="chart-bar" color="white" size={30} />
        <Text style={{ fontSize: 16, fontWeight: "700", color: "lightgray" }}>
          75%
        </Text>
      </View>
    </View>
  );
};

export default MonthlyBillCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#182028",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardLeft: {
    gap: 10,
    width: "80%",
    paddingLeft: 8,
  },
  cardMonth: {
    color: "white",
  },
  paidAmount: {
    color: "white",
    fontWeight: "900",
    fontSize: 25,
  },
  progress: {
    height: 5,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  payable: {
    color: "lightgray",
  },
  cardRight: {
    width: "20%",
    alignItems: "flex-start",
    gap: 7,
  },
});
