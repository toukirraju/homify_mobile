import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import MonthlyBillCard from "./components/MonthlyBillCard";
import LastThreePaidUserCard from "./components/LastThreePaidUserCard";
import YearlyBarchart from "./components/YearlyBarchart";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const Dashboard = () => {
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <ScrollView style={styles.scrollArea}>
          <MonthlyBillCard />
          <LastThreePaidUserCard />
          <YearlyBarchart />
        </ScrollView>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: "#121212",
    paddingTop: 8,
  },
  scrollArea: { flexGrow: 0.9, gap: 14 },
});
