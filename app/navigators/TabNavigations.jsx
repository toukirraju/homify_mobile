import { View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Apartment from "../screens/Apartment";
import Renter from "../screens/Renter";
import Home from "../screens/Home";

import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/header/Header";
import TabBar from "../components/TabBar";
import Dashboard from "../screens/Dashboard/Dashboard";
const Tab = createBottomTabNavigator();
const TabNavigations = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", color: "#ffffff" }}>
      <Header />
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen
          name="Apartment"
          component={Apartment}
          options={{
            tabBarIcon: ({ focus, color, size }) => (
              <Icon name="building-o" size={20} color="gray" />
            ),
          }}
        />
        <Tab.Screen name="Add" component={Home} />
        <Tab.Screen
          name="Renter"
          component={Renter}
          options={{
            tabBarIcon: ({ focus, color, size }) => (
              <Icon name="users" size={20} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Bill"
          component={Home}
          options={{
            tabBarIcon: ({ focus, color, size }) => (
              <Icon name="calculator" size={20} color="gray" />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigations;
