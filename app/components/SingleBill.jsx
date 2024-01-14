import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import SubScreenLayout from "../layout/SubScreenLayout";

const SingleBill = () => {
  return (
    <SubScreenLayout>
      <View style={styles.container}>
        <Text style={styles.header}>Bill</Text>
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
    </SubScreenLayout>
  );
};

export default SingleBill;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingHorizontal: 10,
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
  },
  leftCard: {
    backgroundColor: "#2f2a5247",
    width: "48%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#060606",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        shadowColor: "#202140",
        elevation: 10,
      },
    }),
  },
  rightCard: {
    backgroundColor: "#2f2a5247",
    width: "48%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#060606",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        shadowColor: "#202140",
        elevation: 10,
      },
    }),
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
