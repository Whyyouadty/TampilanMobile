import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import { GlobalProvider } from "./src/stores/GlobalStore"

const App = () => {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Router></Router>
      </GlobalProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
 