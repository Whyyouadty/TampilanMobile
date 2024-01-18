import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, {useState, useEffect} from "react";
import { Splashbackground } from "../../asset";
import { FormProfil } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { ProfilContextProvider } from '../../stores/ProfilContextState'



const Profil = () => {

  return (
    <ProfilContextProvider>
      <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.container}>
        <Text style={styles.textcontainer}>Profil</Text>
        <FormProfil></FormProfil>
      </LinearGradient>
    </ProfilContextProvider>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textcontainer:{
    color: "#fff",
    marginTop: windowHeight*0.07,
    fontSize: 30,
    fontWeight: "bold",
  }
});

export default Profil;
