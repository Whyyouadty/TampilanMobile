import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const Absen = () => {
  return (
    <View style={styles.Absen}>
      <Text style={styles.Absentext}>Absen today</Text>
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.Text1}>Clock In</Text>
          <View style={styles.jam1}>
            <Text style={styles.jamtext1}>08:00 AM</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <Text style={styles.Text2}>Clock Out</Text>
          <View style={styles.jam2}>
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
  Absen: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    marginHorizontal: 40,
    borderWidth: 2,
    borderColor: '#A4ADBF', 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.05,
  },
  Absentext: {
    color: "#767676",
    fontSize: 19
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  card1: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 71,
    backgroundColor: "#A4ADBF",
    marginRight: 40,
    borderRadius: 20,
  },
  Text1: {
    color: "#fff",
  },
  jam1: {
    margin: 10,
    width: 70,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  jamtext1:{
    color: '#0054F6',
  },
  card2: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 71,
    backgroundColor: "#A4ADBF",
    marginLeft: 40,
    borderRadius: 20,
  },
  Text2: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  jam2: {
    margin: 10,
    width: 70,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  jamtext2:{
    color: '#F64E60',
  },
});
