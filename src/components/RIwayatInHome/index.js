import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { pp } from "../../asset";
import { useNavigation } from "@react-navigation/native";
import { useRekapContext } from "../../stores/RekapContextState";
import { baseUrl, token } from "../../utils/fetchConfig";

const RiwayatInHome = () => {
  const navigation = useNavigation();

  const navigateToRekap = () => {
    navigation.navigate("Rekap");
  };

  const { getKehadiranList, setKehadiranList } = useRekapContext();

  const fetchData = async (url, memberToken) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${memberToken}`,
          Accept: "application/json",
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
      console.error("Error fetching data:", error.message);
      throw error; // Anda bisa menangani error sesuai kebutuhan
    }
  };

  useEffect(() => {
    fetchData(`${baseUrl}/mob/absensi/history`, token)
      .then((data) => {
        const resData = data.data;
        setKehadiranList(resData);
        console.log(resData);
      })
      .catch((error) => {
        // Tangani error jika diperlukan
        console.error("Terjadi error:", error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.TextHeader}>
        <Text style={styles.Text1}>Riwayat absen</Text>
        <TouchableOpacity onPress={navigateToRekap}>
          <Text style={styles.Text2}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containercard}>
        <FlatList
          data={getKehadiranList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardheader}>
                <Text style={styles.textheadercard1}>working time</Text>
              </View>
              <View style={styles.cardbody}>
                <Image source={pp} style={styles.image} />
                <View style={styles.datecontainer}>
                  <Text style={styles.textbodycarddate}>{item.tanggal}</Text>
                  <Text style={styles.textbodycardtime}>
                    {item.jam_masuk} - {item.jam_keluar}
                  </Text>
                  <Text style={styles.textbodycardtime}>{item.status}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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
    paddingLeft: windowWidth * 0.05,
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
