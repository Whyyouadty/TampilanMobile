import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  IconHomeActive,
  IconHome,
  IconRekapActive,
  IconRekap,
  IconAbsenActive,
  IconAbsen,
  IconLokasiActive,
  IconLokasi,
  IconProfilActive,
  IconProfil,
} from "../../asset";
import { WARNA_UTAMA, WARNA_DASAR } from "../../utils/constant";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Rekap")
      return isFocused ? (
        <IconRekapActive />
      ) : (
        <IconRekap width={24} height={24} />
      );
    if (label === "Absen")
      return isFocused ? (
        <IconAbsenActive />
      ) : (
        <IconAbsen width={24} height={24} />
      );
    if (label === "Home")
      return isFocused ? (
        <IconHomeActive />
      ) : (
        <IconHome width={24} height={24} />
      );
    if (label === "Lokasi")
      return isFocused ? (
        <IconLokasiActive />
      ) : (
        <IconLokasi width={24} height={24} />
      );
    if (label === "Profil")
      return isFocused ? (
        <IconProfilActive />
      ) : (
        <IconProfil width={24} height={24} />
      );

    return <IconHomeActive />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon width={24} height={24} />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DASAR,
    marginTop: 6,
  }),
});
