import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { ImageHeader, Logo, Foto, Splashbackground } from "../../asset";
import { TimeAbsen, RIwayatInHome } from "../../components";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.Home}>
      <ImageBackground source={ImageHeader} style={styles.ImageHeader}>
      <View style={styles.atas}>
      <Image source={Logo} style={styles.LogoHeader}/>
      <Image source={Foto} style={styles.foto}/>
      </View>
      <View style={styles.TextLogo}>
        <Text style={styles.TextSistem}>Sistem</Text>
        <Text style={styles.TextAbsen}>Absensi Otomatis</Text>
      </View>
      
      <View style={styles.helo}>
        <Text style={styles.selamat}>Hallo, Selamat Datang</Text>
        <Text style={styles.nama}>Aditya Wahyu</Text>
      </View>
      </ImageBackground>
      <TimeAbsen></TimeAbsen>
      <RIwayatInHome></RIwayatInHome>
    </LinearGradient>
  );
};

export default Home;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
  atas: {
    flexDirection: "row"
  },
  ImageHeader:{
    width: windowWidth,
    height: windowHeight*0.29,
    paddingTop: 20,
  },
  foto:{
    width: windowWidth*0.10,
    height: windowHeight*0.05,
    paddingTop: 20,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 225
  },
  LogoHeader:{
    width: windowWidth*0.3,
    height: windowHeight*0.06,
    paddingTop: 110,
    marginLeft: -15,
  },
  TextLogo:{
    marginTop: windowHeight*-0.09,
    marginLeft: 85,
  },
  TextSistem:{
    color: '#ffffff',
    fontSize: 25,
    fontWeight: "700"
  },
  TextAbsen:{
    color: '#ffffff',
    fontSize: 18
  },
  helo:{
    marginTop: windowHeight*0.06,
    marginLeft: 15,
  },
  selamat:{
    color: '#ffffff',
    fontSize: 15,
  },
  nama:{
    color: '#ffffff',
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  }
});
