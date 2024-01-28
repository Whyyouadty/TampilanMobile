import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Logo, Splashbackground } from "../../asset/";
import { getData } from "../../utils/auth"

const Splash = ({ navigation }) => {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.replace("MainApp");
    // }, 3000);

    getData()
      .then((res) => {
        if (!res) {
          setTimeout(() => {
            navigation.replace("Login");
          }, 3000);
        } else {
          setTimeout(() => {
            navigation.replace("MainApp");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }, [navigation]);

  return (
    <ImageBackground source={Splashbackground} style={styles.Splash}>
      <Image source={Logo} style={styles.Logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Splash: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 333,
    height: 374,
  },
});
