import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import AppSetting from "../screens/AppSetting";
import { Button } from "react-native";

const Drower = createDrawerNavigator();
const DrowerNavigations = () => {
  return (
    <Drower.Navigator
      screenOptions={{ headerShown: false }}
      //   drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drower.Screen name="Profile" component={Profile} />
      <Drower.Screen name="AppSetting" component={AppSetting} />
    </Drower.Navigator>
  );
};

export default DrowerNavigations;

function CustomDrawerContent({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("SomeScreen");
      }}
    />
  );
}
