import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
const FormAbsen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.context}>
        <Text style={styles.Text}>FormAbsen</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnin}>
          <Text style={styles.textin}>Clock In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnout}>
          <Text style={styles.textout}>Clock Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.03,
    backgroundColor: "#fff",
    width: windowWidth * 0.8,
    height: windowHeight * 0.23,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },
  context: {
    backgroundColor: "#A4ADBF",
    width: windowWidth * 0.3,
    height: windowHeight * 0.03,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: windowHeight * 0.02,
  },
  Text: {
    color: "#fff",
    fontSize: 15,
  },
  btn: {
    flexDirection: "row",
    marginVertical: windowHeight * 0.11,
    position: "absolute",
  },
  btnin: {
    backgroundColor: "#2396F2",
    marginRight: windowWidth * 0.1,
    width: windowWidth * 0.2,
    height: windowHeight * 0.05,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textin: {
    fontSize: 15,
    color: "#fff",
  },
  btnout: {
    backgroundColor: "#F64E60",
    marginLeft: windowWidth * 0.1,
    width: windowWidth * 0.2,
    height: windowHeight * 0.05,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textout: {
    fontSize: 15,
    color: "#fff",
  },
});

export default FormAbsen;