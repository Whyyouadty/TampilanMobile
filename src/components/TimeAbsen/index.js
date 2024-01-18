import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useRekapContext } from "../../stores/RekapContextState";
import { baseUrl, token } from "../../utils/fetchConfig";

const Absen = () => {
  const { getKehadiranList, setKehadiranList } = useRekapContext();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async (url, memberToken) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${memberToken}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };

  const fetchDataAndUpdate = async () => {
    try {
      setIsRefreshing(true);
      const data = await fetchData(`${baseUrl}/mob/absensi/history`, token);
      const resData = data.data;
      const latestData = resData.slice(-1);
      setKehadiranList(latestData);
      console.log(latestData);
    } catch (error) {
      console.error("Terjadi error:", error.message);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDataAndUpdate();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.Textcontainer}>
        <Text style={styles.AbsenToday}>Absen today</Text>
      </View>
      <FlatList
        data={getKehadiranList}
        renderItem={({ item }) => (
          <View style={styles.containercard}>
            <View style={styles.card}>
              <Text style={styles.Text}>Clock In</Text>
              <View style={styles.jamcontainer}>
                <Text style={styles.jamtext1}>{item.jam_masuk}</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.Text}>Clock Out</Text>
              <View style={styles.jamcontainer}>
                <Text style={styles.jamtext2}>{item.jam_keluar}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isRefreshing}
        onRefresh={fetchDataAndUpdate}
      />
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
  Textcontainer: {
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
