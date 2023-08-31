import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Splashbackground } from "../../asset";
import { HistoryAbsen } from "../../components";
import { LinearGradient } from "expo-linear-gradient";



const Rekap = () => {
  return (
    <LinearGradient colors={["#2396F2", "#ffffff"]}  style={styles.container}>
      <Text style={styles.history}>Daftar Absen</Text>
      <HistoryAbsen></HistoryAbsen>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Rekap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  history: {
    color: "#fff",
    marginTop: windowHeight*0.07,
    fontSize: 30,
    fontWeight: "900",
  },
});
