import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const RiwayatInHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TextHeader}>
        <Text style={styles.Text1}>Riwayat absen</Text>
        <Text style={styles.Text2}>See All</Text>
      </View>
      <View style={styles.item1}>
        <View style={styles.ItemHeader}>
          <Text style={styles.TextDate}>Sen Agu 20 2023</Text>
          <Text style={styles.TextTime}>In 08:00 / Out 09:00 Am</Text>
        </View>
      </View>
      <View style={styles.item1}>
        <View style={styles.ItemHeader}>
          <Text style={styles.TextDate}>Sen Agu 20 2023</Text>
          <Text style={styles.TextTime}>In 08:00 / Out 09:00 Am</Text>
        </View>
      </View><View style={styles.item1}>
        <View style={styles.ItemHeader}>
          <Text style={styles.TextDate}>Sen Agu 20 2023</Text>
          <Text style={styles.TextTime}>In 08:00 / Out 09:00 Am</Text>
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
    paddingLeft: 10,
    paddingRight: 20,
  },
  Text1: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#555454",
    marginTop: -17,
  },
  Text2: {
    fontSize: 15,
  },
  item1: {
    width: windowWidth,
    height: windowHeight * 0.08,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 25,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ItemHeader: {
    marginLeft: 20,
    marginTop: -20,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  TextDate: {
    marginTop: 10,
    color: "#555454",
    fontSize: 17,
  },
  TextTime: {
    marginTop: 5,
    color: "#9D9D9D",
    fontSize: 18,
  },
});
