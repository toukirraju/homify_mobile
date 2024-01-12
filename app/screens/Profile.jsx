import { View, Text, Button } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Profile Screen</Text>
        <Button
          onPress={() => navigation.navigate("Help")}
          title="Go to Help"
        />
        <Button
          onPress={() => navigation.navigate("Invite")}
          title="Go to Invite"
        />
      </View>
    </View>
  );
};

export default Profile;
