import React, { useState, useEffect  } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Foto } from "../../asset";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const FormProfil = () => {
  const [isEditingIndex, setIsEditingIndex] = useState(null);
  const [imageSelected, setImageSelected] = useState(false); // State untuk menandakan apakah gambar telah terpilih
  const [selectedImage, setSelectedImage] = useState(Foto);

  const [bioData, setBioData] = useState([
    { label: "akun", value: "Adty_Why10" },
    { label: "Nama", value: "Aditya wahyu syaputra" },
    { label: "NIDN", value: "13308828826" },
    { label: "Departement", value: "Prodi teknik informatika" },
    { label: "Jabatan", value: "Ketua" },
    { label: "TTL", value: "Palu 10 Oktober 2001" },
    { label: "alamat", value: "Jalan Karanjalembah" },
    { label: "agama", value: "Islam" },
    { label: "jk", value: "Laki-Laki" },
    { label: "no hp", value: "+6282296069924" },
  ]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
      setImageSelected(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const handleEditPress = (index) => {
    setIsEditingIndex(index);
  };

  const handleSavePress = (index) => {
    // Simpan perubahan ke data yang sesuai
    const updatedBioData = [...bioData];
    updatedBioData[index].value = bioData[index].tempValue;
    setBioData(updatedBioData);

    // Keluar dari mode editing
    setIsEditingIndex(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containertext}>
        <View style={styles.Text}>
          <Text style={styles.textcontainer}>Info</Text>
          <Text style={styles.textcontainer2}>karyawan</Text>
        </View>
        <TouchableOpacity onPress={pickImageAsync}>
          {imageSelected ? (
            <Image source={{ uri: selectedImage }} style={styles.foto} />
          ) : (
            <Image source={Foto} style={styles.foto} />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bio}>
          {bioData.map((data, index) => (
            <View key={index} style={styles.textInputContainer}>
              {isEditingIndex === index ? (
                <TextInput
                  style={styles.editInput}
                  onChangeText={(text) => {
                    const updatedBioData = [...bioData];
                    updatedBioData[index].tempValue = text;
                    setBioData(updatedBioData);
                  }}
                  value={bioData[index].tempValue}
                />
              ) : (
                <Text style={styles.bioText}>{data.value}</Text>
              )}
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  if (isEditingIndex === index) {
                    handleSavePress(index);
                  } else {
                    handleEditPress(index);
                  }
                }}
              >
                <FontAwesome
                  name={isEditingIndex === index ? "check" : "pencil"}
                  size={10}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
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
    height: windowHeight * 0.75,
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
  containertext: {
    flexDirection: "row",
    marginTop: windowHeight * 0.02,
  },
  Text: {
    paddingRight: windowWidth * 0.11,
    paddingTop: -windowHeight * 0.01
  },
  textcontainer: {
    fontSize: 25,
    color: "#666C82",
  },
  textcontainer2: {
    fontSize: 30,
    color: "#2396F2",
  },
  foto: {
    width: windowWidth * 0.22,
    height: windowHeight * 0.1,
    borderRadius: 50,
  },
  bio: {
    marginTop: windowHeight * 0.035,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    width: 255,
    height: 45,
    margin: 5,
  },
  bioText: {
    fontSize: 16,
    margin: 10,
    color: "#666C82",
  },
  editInput: {
    fontSize: 16,
    color: "#666C82",
    paddingHorizontal: 10,
    width: 200,
  },
  editButton: {
    backgroundColor: "#666C82",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
});

export default FormProfil;
