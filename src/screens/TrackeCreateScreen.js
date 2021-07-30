import "../_mockLocation";

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation); // short form of below when we have arrow function with same argument to be passed from body function
  // const [err] = useLocation((location) => addLocation(location));
  // console.log(isFocused);

  return (
    <SafeAreaView>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please provide location permission!</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
