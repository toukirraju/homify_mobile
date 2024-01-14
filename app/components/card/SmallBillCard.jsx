import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome5";

const SmallBillCard = () => {
  return (
    <View style={styles.cardContent}>
      <View style={styles.userInfoWrapper}>
        <View style={styles.userIcon}>
          <Icon name="user-alt" color="white" size={30} />
        </View>
        <View style={styles.content}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Alex Anderson</Text>
            <View style={styles.billInfo}>
              <Text style={styles.paid}>$34,234</Text>
              <View style={styles.remaining}>
                {/* <Text style={styles.extra}>extra + $20</Text> */}
                <Text style={styles.due}>Due - $20</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>Today</Text>
      </View>
    </View>
  );
};

export default SmallBillCard;

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3e3e3e94",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  userIcon: {
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  userInfo: {
    gap: 7,
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  billInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  paid: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  remaining: { flexDirection: "row", justifyContent: "space-between" },
  extra: {
    color: "gray",
    fontSize: 12,
    fontWeight: "600",
  },
  due: {
    color: "red",
    fontSize: 12,
    fontWeight: "600",
  },
  dateContainer: {},
  date: {
    color: "lightgray",
    fontSize: 12,
    fontWeight: "600",
  },
});
