import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { pp } from "../../asset";
import { useNavigation } from "@react-navigation/native";

const RiwayatInHome = () => {
  const navigation = useNavigation();

  const navigateToRekap = () => {
    navigation.navigate("Rekap");
  };

  return (
    <View style={styles.container}>
      <View style={styles.TextHeader}>
        <Text style={styles.Text1}>Riwayat absen</Text>
        <TouchableOpacity onPress={navigateToRekap}>
          <Text style={styles.Text2}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containercard}>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Text style={styles.textheadercard1}>Clock In</Text>
          </View>
          <View style={styles.cardbody}>
            <Image source={pp} style={styles.image} />
            <View style={styles.datecontainer}>
              <Text style={styles.textbodycarddate}>Sen 10 Okt 2023</Text>
              <Text style={styles.textbodycardtime}>08:00 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardheader}>
            <Text style={styles.textheadercard2}>Clock Out</Text>
          </View>
          <View style={styles.cardbody}>
            <Image source={pp} style={styles.image} />
            <View style={styles.datecontainer}>
              <Text style={styles.textbodycarddate}>Sen 10 Okt 2023</Text>
              <Text style={styles.textbodycardtime}>04:00 PM</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default RiwayatInHome;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  TextHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  Text1: {
    fontSize: 19,
    color: "#555454",
    marginTop: -17,
  },
  Text2: {
    fontSize: 15,
    color: "#0050FF",
  },
  containercard: {
    alignItems: "center",
  },
  card: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
  },
  cardheader: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  textheadercard1: {
    fontSize: 17,
    color: "#0054F6",
    fontWeight: "bold",
  },
  textheadercard2: {
    fontSize: 17,
    color: "#F57676",
    fontWeight: "bold",
  },
  cardbody: {
    paddingLeft: windowWidth * 0.06,
    paddingTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  datecontainer: {
    paddingLeft: windowWidth * 0.02,
  },
  textbodycarddate: {
    fontSize: 17,
    fontWeight: "500",
    color: "#666666",
  },
  textbodycardtime: {
    fontSize: 15,
    color: "#666666",
  },
});
