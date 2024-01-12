import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome5";

const LastThreePaidUserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Last Paid</Text>
        <Pressable>
          <Text style={styles.headerLink}>See All</Text>
        </Pressable>
      </View>
      <View style={styles.cardContainer}>
        <CardItem />
        <CardItem />
        <CardItem />
      </View>
    </View>
  );
};

export default LastThreePaidUserCard;

const CardItem = () => {
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
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
  cardContainer: {
    backgroundColor: "#182028",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
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
