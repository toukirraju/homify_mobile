import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

const YearlyBarchart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Analytics</Text>
        <Pressable>
          <Text style={styles.headerLink}>See All</Text>
        </Pressable>
      </View>
      <BarChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: [29, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
            },
          ],
          barColors: ["#306cb6", "#ced6e0", "#a4b0be"],
        }}
        width={Dimensions.get("window").width - 16}
        height={165}
        // yAxisLabel={"Rs"}
        yAxisSuffix="k"
        chartConfig={{
          decimalPlaces: 0,
          backgroundGradientFrom: "#1e2029",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#080a13",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 220, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barRadius: 5,
          barPercentage: 0.5,
        }}
        // showValuesOnTopOfBars
        showBarTops={false}
        style={{
          borderRadius: 16,
          marginLeft: 0,
          paddingTop: 10, // Adjust top padding
          paddingBottom: 5, // Adjust bottom padding
          paddingRight: 10,
        }}
        withInnerLines={false}
      />
    </View>
  );
};

export default YearlyBarchart;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  headerText: {
    color: "lightgray",
    fontSize: 16,
    fontWeight: "700",
  },
  headerLink: {
    color: "lightblue",
    fontSize: 16,
    fontWeight: "700",
  },
});
