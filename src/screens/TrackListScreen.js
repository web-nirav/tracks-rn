import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 50 }}>TrackListScreen</Text>
      <Button
        title="Go TO Track Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
