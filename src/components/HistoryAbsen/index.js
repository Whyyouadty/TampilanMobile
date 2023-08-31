import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

const HistoryAbsen = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const rekapanAbsen = [
    {
      id: 1,
      tanggal: "2023-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 2,
      tanggal: "2023-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 3,
      tanggal: "2023-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 4,
      tanggal: "2023-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 5,
      tanggal: "2023-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 6,
      tanggal: "2023-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 7,
      tanggal: "2023-02-02",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 8,
      tanggal: "2023-03-03",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 9,
      tanggal: "2023-04-04",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 10,
      tanggal: "2023-05-05",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 11,
      tanggal: "2023-06-06",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 12,
      tanggal: "2023-07-07",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 13,
      tanggal: "2023-08-08",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 14,
      tanggal: "2023-09-09",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 15,
      tanggal: "2023-10-10",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 16,
      tanggal: "2023-11-11",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 17,
      tanggal: "2023-12-12",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
    {
      id: 18,
      tanggal: "2022-01-01",
      ClockIn: "08:00",
      ClockOut: "16:00",
    },
  ];

  const countAbsenInMonth = (month, year) => {
    return rekapanAbsen.filter((item) => {
      const absenDate = new Date(item.tanggal);
      const absenMonth = absenDate.getMonth() + 1;
      const absenYear = absenDate.getFullYear();

      return absenMonth === month && absenYear === year;
    }).length;
  };

  const countTidakAbsenInMonth = (month, year) => {
    const totalDaysInMonth = new Date(year, month, 0).getDate();
    const countedDates = rekapanAbsen
      .filter((item) => {
        const absenDate = new Date(item.tanggal);
        const absenMonth = absenDate.getMonth() + 1;
        const absenYear = absenDate.getFullYear();

        return absenMonth === month && absenYear === year;
      })
      .map((item) => new Date(item.tanggal).getDate());

    return totalDaysInMonth - countedDates.length;
};

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  const filteredAbsen = rekapanAbsen.filter((item) => {
    const absenDate = new Date(item.tanggal);
    const absenMonth = absenDate.getMonth() + 1;
    const absenYear = absenDate.getFullYear();

    return absenMonth === selectedMonth && absenYear === selectedYear;
  });

  const months = [
    { label: "Januari", value: 1 },
    { label: "Februari", value: 2 },
    { label: "Maret", value: 3 },
    { label: "April", value: 4 },
    { label: "Mei", value: 5 },
    { label: "Juni", value: 6 },
    { label: "Juli", value: 7 },
    { label: "Agustus", value: 8 },
    { label: "September", value: 9 },
    { label: "Oktober", value: 10 },
    { label: "November", value: 11 },
    { label: "Desember", value: 12 },
  ];

  const years = [
    { label: "2014", value: 2014 },
    { label: "2015", value: 2015 },
    { label: "2016", value: 2016 },
    { label: "2017", value: 2017 },
    { label: "2018", value: 2018 },
    { label: "2019", value: 2019 },
    { label: "2020", value: 2020 },
    { label: "2021", value: 2021 },
    { label: "2022", value: 2022 },
    { label: "2023", value: 2023 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Riwayat Absen</Text>
        <View style={styles.filterContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            {months.map((month) => (
              <Picker.Item
                key={month.value}
                label={month.label}
                value={month.value}
              />
            ))}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={selectedYear}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {years.map((year) => (
              <Picker.Item
                key={year.value}
                label={year.label}
                value={year.value}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.absenCount}>
        <Text style={styles.absenCountText1}>
          Absen: {countAbsenInMonth(selectedMonth, selectedYear)}
        </Text>
        <Text style={styles.absenCountText2}>
          No Absen:{" "}
          {countTidakAbsenInMonth(selectedMonth, selectedYear)}
        </Text>
      </View>
      {/* Render daftar rekapan absen yang sudah difilter */}
      <FlatList
        data={filteredAbsen}
        renderItem={({ item }) => (
          <View style={styles.absenItem}>
            <Text style={styles.Text1}>{formatDate(item.tanggal)}</Text>
            <Text style={styles.Text2}>{item.ClockIn}</Text>
            <Text style={styles.Text3}>{item.ClockOut}</Text>
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
  header: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#B8B6B6",
    fontSize: 18,
    fontWeight: "bold",
  },
  filterContainer: {
    backgroundColor: "#B8B6B6",
    flexDirection: "row",
    borderRadius: 50,
    marginTop: 20,
  },
  picker: {
    width: 120,
    height: 20,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  absenItem: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Text1: {
    color:'#949292',
    margin: 15,
  },
  Text2: {
    color:'#949292',
    margin: 15,
    marginLeft: 50,
    marginRight: 50,
  },
  Text3: {
    color:'#949292',
    margin: 15,
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
    fontWeight: "bold",
    marginRight: 35,
  },
  absenCountText2:{
    fontSize: 15,
    color: '#fff',
    fontWeight: "bold",
    marginLeft: 35,
  }
});

export default HistoryAbsen;
