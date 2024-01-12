import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";
import StackNavigations from "./app/navigators/StackNavigations";
StatusBar.setBarStyle("default");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  StatusBar.setTranslucent(true);
}
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", color: "#ffffff" }}>
      <NavigationContainer>
        {/* <StatusBar /> */}
        <StackNavigations />
      </NavigationContainer>
    </View>
  );
}
