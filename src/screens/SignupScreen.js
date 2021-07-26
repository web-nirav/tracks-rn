import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import NavLink from "../components/NavLink";
import { Context } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText="Sign Up"
        headerText="Sign up to Tracker"
      />
      <NavLink
        routeName="Signin"
        linkText="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 180,
  },
});

export default SignupScreen;
