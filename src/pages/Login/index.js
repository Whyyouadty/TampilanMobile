import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Logoo } from "../../asset";

const Login = () => {
  return (
    <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.bungkus}>
          <View style={styles.header}>
            <Image source={Logoo} style={styles.Image}></Image>
            <Text style={styles.Textlogin}> Login </Text>
          </View>
          <View style={styles.body}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
            ></TextInput>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
            ></TextInput>
            <TouchableOpacity style={styles.confor}>
            <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.65,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
  },
  bungkus: {
    alignItems: "center",
    marginTop: -50,
  },
  header: {
    marginBottom: 20,
  },
  body: {
    marginTop: 20,
  },
  Image: {
    width: windowWidth * 0.22,
    height: windowHeight * 0.1,
    borderRadius: 50,
  },
  Textlogin: {
    fontSize: 18,
    color: "#2396F2",
    marginTop: 10,
    paddingLeft: 18,
  },
  TextInput: {
    fontSize: 16,
    color: "#666C82",
    paddingHorizontal: 10,
    width: 250,
    height: 40,
    borderColor: "#2396F2",
    borderWidth: 1,
    paddingLeft: 10,
    textAlign: "center",
    borderRadius: 20,
    margin: 5,
  },
  confor:{
    marginLeft: 150,
    marginTop: 2
  },
  forgot: {
    color: "#3C598F",
  },
  footer:{
    marginTop: 20
  },
  button:{
    backgroundColor: '#2396F2',
    width: 250,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textbutton:{
    color: '#fff',
    fontSize: 17
  }
});
