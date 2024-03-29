import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomNavigation } from "../components";
import { Home, Splash, Absen, Rekap, Lokasi, Profil, Login } from "../pages";
import HomeScreen from '../components/ItemHeader'; // Sesuaikan dengan path ke ItemHeader.js
import ProfilScreen from '../pages/Profil'; // Sesuaikan dengan path ke Profil/index.js

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Rekap"
        component={Rekap}
        options={{ headerShown: false, tabBarLabel: 'Rekap' }}
      />
      <Tab.Screen
        name="Absen"
        component={Absen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Lokasi"
        component={Lokasi}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false, tabBarLabel: 'Profil' }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
