import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({
  navigation,
  errorMessage,
  onSubmit,
  buttonText,
  headerText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={buttonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    marginTop: 15,
    marginLeft: 15,
  },
});

export default AuthForm;
