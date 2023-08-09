import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routing from "./src/app";
import { TamaguiProvider } from "tamagui";
import config from "./src/tamagui-config";
export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="auto" />
        <Routing />
      </SafeAreaProvider>
    </TamaguiProvider>
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
