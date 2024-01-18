import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRekapContext } from '../../stores/RekapContextState'
import { baseUrl, token } from '../../utils/fetchConfig'

const HistoryAbsen = () => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  const { getKehadiranList, setKehadiranList } = useRekapContext()

  const fetchData = async (url, memberToken) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${memberToken}`,
          'Accept': 'application/json'
          // Tambahkan header lain sesuai kebutuhan
        },
        // Jika menggunakan metode selain GET, Anda dapat menambahkan body di sini
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error; // Anda bisa menangani error sesuai kebutuhan
    }
  };

  useEffect(() => {

    fetchData(`${baseUrl}/mob/absensi/history`, token)
    .then(data => {
      const resData = data.data
      setKehadiranList(resData)
      console.log(resData)
    })
    .catch(error => {
      // Tangani error jika diperlukan
      console.error('Terjadi error:', error.message);
    });
    
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={getKehadiranList}
        renderItem={({ item }) => (
          <View style={styles.absenItem}>
            <Text style={styles.Text1}>{formatDate(item.tanggal)}</Text>
            <Text style={styles.Text2}>{item.jam_masuk}</Text>
            <Text style={styles.Text3}>{item.jam_keluar}</Text>
            <Text style={styles.Text4}>{item.status}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.03,
    backgroundColor: "#fff",
    width: 335,
    height: 600,
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
  absenItem: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 35,
    paddingHorizontal: 20,

  },
  Text1: {
    color:'#949292',
  },
  Text2: {
    color:'#949292',
    marginLeft: 50,
    marginRight: 50,
  },
  Text3: {
    color:'#949292',
  },
  Text4: {
    color:'#949292',
    position: "absolute",
    marginTop: 65,
    marginLeft: 20
  },
  absenCount:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#70BEEB',
    width: 250,
    height: 40,
    borderRadius: 20,
    margin: 5
  },
  absenCountText1:{
    fontSize: 15,
    color: '#fff',
    marginRight: 35,
  },
  absenCountText2:{
    fontSize: 15,
    color: '#fff',
    marginLeft: 35,
  }
});

export default HistoryAbsen;
