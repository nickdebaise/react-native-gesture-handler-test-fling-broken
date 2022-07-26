import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <FlingGestureHandler
          direction={Directions.UP}
          onBegan={() => {
            console.log("BEGAN");
          }}
          onActivated={() => {
            console.log("ACTIVATED");
          }}
        >
          <View
            style={{ width: 200, height: 100, backgroundColor: "#1b71fc" }}
          />
        </FlingGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
