import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Splashbackground } from "../../asset";
import { FormProfil } from "../../components";
import { LinearGradient } from "expo-linear-gradient";



const Profil = () => {
  return (
    <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.container}>
      <Text style={styles.textcontainer}>Profil</Text>
      <FormProfil></FormProfil>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textcontainer:{
    color: "#fff",
    marginTop: windowHeight*0.07,
    fontSize: 30,
    fontWeight: "900",
  }
});
