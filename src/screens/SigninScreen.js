import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/authContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonText="Sign In"
        headerText="Sign in to Tracker"
      />
      <NavLink
        routeName="Signup"
        linkText="Don't have an account? Sign up instead!"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
