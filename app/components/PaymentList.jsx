import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Pressable,
} from "react-native";
import SubScreenLayout from "../layout/SubScreenLayout";
import SmallBillCard from "./card/SmallBillCard";

import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const PaymentList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const showBill = () => {
    navigation.navigate("SingleBill");
  };

  return (
    <SubScreenLayout>
      <View style={styles.container}>
        <Text style={styles.header}>Payment List</Text>

        <Animated.View
          style={[
            styles.searchBar,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 50], // Adjust the range based on your needs
                    outputRange: [0, 0],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <TextInput
            style={styles.input}
            keyboardType="default"
            keyboardAppearance="default"
            placeholder="find bill"
          />
          <Icon name="search" color="white" size={20} />
        </Animated.View>

        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          <View style={styles.cardContainer}>
            {[...Array(20).keys()].map((idx) => (
              <Pressable key={idx} onPress={showBill}>
                <SmallBillCard />
              </Pressable>
            ))}
          </View>
        </Animated.ScrollView>
      </View>
    </SubScreenLayout>
  );
};

export default PaymentList;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 10,
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  searchBar: {
    backgroundColor: "#1f2832",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginHorizontal: 10,
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  input: {
    flex: 1,
    color: "white",
    marginRight: 8,
  },
  scrollView: {
    flexGrow: 0.71,
    marginTop: 30,
  },
  cardContainer: {
    flex: 1,
    gap: 10,
    paddingTop: 10,
  },
});
