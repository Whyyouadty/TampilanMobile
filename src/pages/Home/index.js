import React from "react";
import { StyleSheet } from "react-native";
import { TimeAbsen, RIwayatInHome, ItemHeader } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { ProfilContextProvider } from "../../stores/ProfilContextState";
import { RekapContextProvider } from "../../stores/RekapContextState";

const Home = () => {
  return (
    <RekapContextProvider>
      <ProfilContextProvider>
        <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.Home}>
          <ItemHeader></ItemHeader>
          {/* <TimeAbsen></TimeAbsen>
          <RIwayatInHome></RIwayatInHome> */}
        </LinearGradient>
      </ProfilContextProvider>
    </RekapContextProvider>
  );
};


const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});

export default Home;
