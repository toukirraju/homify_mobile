import { View, Text, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

const SelectWheel = () => {
  return (
    <Pressable
      style={{
        backgroundColor: "#182028",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white",
        height: 50,
        width: 50,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: 15,
        }}
      >
        <Icon name="plus" size={20} color="white" />
      </View>
    </Pressable>
  );
};

export default SelectWheel;
