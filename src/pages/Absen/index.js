import React, { useState, useEffect } from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Splashbackground } from "../../asset";
import { LinearGradient } from "expo-linear-gradient";
import { FormAbsen } from "../../components";
import { AbsenContextProvider } from "../../stores/AbsenContextState"

const Absen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("id-ID", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.container}>
      <Text style={styles.absen}>Absen</Text>
      <View style={styles.dt}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <AbsenContextProvider>
        <FormAbsen></FormAbsen>
      </AbsenContextProvider>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  absen: {
    color: "#fff",
    marginTop: windowHeight*0.07,
    fontSize: 30,
  },
  dt: {
    alignItems: "center",
  },
  time: {
    color: "#fff",
    marginTop: 55,
    fontSize: 30,
  },
  date: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Absen;
