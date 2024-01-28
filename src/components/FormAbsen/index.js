import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as Location from 'expo-location';
import { useAbsen } from "../../stores/AbsenContextState";
import { baseUrl } from "../../utils/fetchConfig";
import { getData, clearData } from "../../utils/auth"
import axios from "axios";

const FormAbsen = () => {
  const { absenPayload, setAbsenPayload } = useAbsen()
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const sendClockIn = async () => {
    const token = await getData()
    try {
      const body = {
        lat: absenPayload.latitude,
        lon: absenPayload.longitude
      };

      const response = await axios.post(`${baseUrl}/mob/absensi/save`, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
          // Add any other headers as needed
        },
      });

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Server responded with an error:', error.response.data);
        console.log('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error during request setup:', error);
      }
    }
  }

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location.coords);
      setAbsenPayload({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })();

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.context}>
        <Text style={styles.Text}>FormAbsen</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => { sendClockIn() }} style={styles.btnin}>
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