import React from "react";
import { TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
