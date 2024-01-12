import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NavigationIcon = ({ route, isFocused }) => {
  const renderIcon = (route, isFocues) => {
    switch (route) {
      case "Dashboard":
        return isFocues ? (
          <Icon name="dashboard" size={20} color="white" />
        ) : (
          <Icon name="dashboard" size={20} color="gray" />
        );
      case "Apartment":
        return isFocues ? (
          <Icon name="building-o" size={20} color="white" />
        ) : (
          <Icon name="building-o" size={20} color="gray" />
        );
      case "Renter":
        return isFocues ? (
          <Icon name="users" size={20} color="white" />
        ) : (
          <Icon name="users" size={20} color="gray" />
        );
      case "Bill":
        return isFocues ? (
          <Icon name="calculator" size={20} color="white" />
        ) : (
          <Icon name="calculator" size={20} color="gray" />
        );
      case "Add":
        return isFocues ? (
          <Icon name="calculator" size={20} color="white" />
        ) : (
          <Icon name="calculator" size={20} color="gray" />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

const styles = StyleSheet.create({});

export default NavigationIcon;
