import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const Absen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Textcontainer}>
        <Text style={styles.AbsenToday}>Absen today</Text>
      </View>
      <View style={styles.containercard}>
        <View style={styles.card}>
          <Text style={styles.Text}>Clock In</Text>
          <View style={styles.jamcontainer}>
            <Text style={styles.jamtext1}>08:00 AM</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.Text}>Clock Out</Text>
          <View style={styles.jamcontainer}>
            <Text style={styles.jamtext2}>04:00 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Absen;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 40,
    borderRadius: 10,
    marginTop: -windowHeight * 0.05,
  },
  Textcontainer:{
    alignItems: "center",
  },
  AbsenToday: {
    color: "#767676",
    fontSize: 19,
    marginTop: 10,
  },
  containercard: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 71,
    backgroundColor: "#A4ADBF",
    borderRadius: 20,
  },
  Text: {
    color: "#fff",
  },
  jamcontainer: {
    margin: 10,
    width: 70,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  jamtext1: {
    color: "#0054F6",
  },
  jamtext2: {
    color: "#F57676",
  },
});
