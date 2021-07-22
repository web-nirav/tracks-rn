import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 50 }}>SignupScreen</Text>
      <Button
        title="Go To Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go To Mainflow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
