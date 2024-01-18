import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useProfilContext } from "../../stores/ProfilContextState";
import { baseUrl, token } from "../../utils/fetchConfig";

const FormProfil = () => {
  const { getProfilList, setProfilList } = useProfilContext();
  const [isLoadingFoto, setIsLoadingFoto] = useState(true);

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

  useEffect(() => {
    fetchData(`${baseUrl}/mob/profile/`, token)
      .then((data) => {
        const resData = data.data;
        setProfilList({
          foto: resData.foto,
          nama: resData.nama,
          nidn: resData.nidn,
          departement_name: resData.departement.nama_departement,
          jabatan_name: resData.jabatan.nama_jabatan,
          ttl: resData.ttl,
          alamat: resData.alamat,
          agama: resData.agama,
          jk: resData.jk,
          no_hp: resData.no_hp,
        });
        setIsLoadingFoto(false);
      })
      .catch((error) => {
        setIsLoadingFoto(false);
        console.error("Terjadi error:", error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containertext}>
        <View style={styles.Text}>
          <Text style={styles.textcontainer}>Info</Text>
          <Text style={styles.textcontainer2}>karyawan</Text>
        </View>
        {isLoadingFoto ? (
          <Text>Loading...</Text>
        ) : (
          <Image
            style={styles.foto}
            source={{ uri: getProfilList.foto }}
          />
        )}
      </View>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bio}>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.nama}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.nidn}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.departement_name}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.jabatan_name}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.ttl}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.alamat}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.agama}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.jk}
              editable={false}
              style={styles.editInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={getProfilList.no_hp}
              editable={false}
              style={styles.editInput}
            />
          </View>
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
    paddingTop: -windowHeight * 0.01,
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    width: 255,
    height: 45,
    margin: 5,
  },
  editInput: {
    fontSize: 16,
    color: "#666C82",
    paddingHorizontal: 1,
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
