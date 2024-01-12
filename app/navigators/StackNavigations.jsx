import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import TabNavigations from "./TabNavigations";
import Help from "../screens/Help";
import Invite from "../screens/Invite";
const Stack = createNativeStackNavigator();
const StackNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tab" component={TabNavigations} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigations;
