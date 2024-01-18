import React, {useState, useEffect} from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { HistoryAbsen } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { RekapContextProvider } from '../../stores/RekapContextState'

const Rekap = () => {

  const [getKehadiranList, setKehadiranList] = useState([])

  const getKehadiran = async () => {
    
    const serverUrl = 'http://192.168.249.130:8000/api/w1/kehadiran';

    // fetch(serverUrl)
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   return response.json(); // Mengubah respons ke dalam format JSON
    // })
    // .then(data => {
    //   console.log('Data:', data.data);
    //   const kehadiranData = data.data 
    //   setKehadiranList(kehadiranData)
    // })
    // .catch(error => {
    //   console.error('Error fetching data:', error);
    // });

  }

  useEffect(() => {
    getKehadiran()
    // const interval = setInterval(() => {
    //   setCurrentTime(new Date());
    // }, 1000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <RekapContextProvider>
      <LinearGradient colors={["#2396F2", "#ffffff"]}  style={styles.container}>
        <Text style={styles.history}>Daftar Absen</Text>
        <HistoryAbsen></HistoryAbsen>
      </LinearGradient>
    </RekapContextProvider>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Rekap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  history: {
    color: "#fff",
    marginTop: windowHeight*0.07,
    fontSize: 30,
  },
});
