import React, { useContext } from "react";
import { Text } from "react-native";

import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 50, marginLeft: 20 }}>AccountScreen</Text>
      <Spacer>
        <Button onPress={signout} title="Sign Out" />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;
