import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Button,
  FlatList,
  Dimensions,
} from "react-native";
import SubScreenLayout from "../layout/SubScreenLayout";
import SmallBillCard from "./card/SmallBillCard";

import Icon from "react-native-vector-icons/FontAwesome5";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d723",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f635",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72ds",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-sd46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48sfd3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "af58694a0f-3da1-471fsf-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-asfed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3aafvc68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694easa0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const { width, height } = Dimensions.get("window");
const PaymentList = () => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SubScreenLayout>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Text style={styles.header}>Payment List</Text>
          <View style={[styles.searchBar]}>
            <TextInput
              style={styles.input}
              keyboardType="default"
              keyboardAppearance="default"
              placeholder="find bill"
            />
            <Icon name="search" color="white" size={20} />
          </View>

          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Pressable
                onPress={handlePresentModalPress}
                style={{ paddingVertical: 5 }}
              >
                <SmallBillCard />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            style={styles.scrollView}
          />

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
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
  },
  input: {
    flex: 1,
    color: "white",
    marginRight: 8,
  },
  scrollView: {
    flexGrow: height * 0.00082512,
    marginTop: 4,
    paddingBottom: 5,
  },
});
