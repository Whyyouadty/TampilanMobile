import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { Logoo, Foto } from "../../asset";
import React, { useState, useEffect  } from "react";
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import { useProfilContext } from '../../stores/ProfilContextState'
import { baseUrl, token } from '../../utils/fetchConfig'

const ItemHeader = () => {
  const navigation = useNavigation();

  const navigateToProfil = () => {
    navigation.navigate('Profil');
  };

  const { getProfilList, setProfilList } = useProfilContext()

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

    fetchData(`${baseUrl}/mob/profile/`, token)
    .then(data => {
      const resData = data.data
      setProfilList({
        foto: resData.foto,
        nama: resData.nama,
      })
      console.log(resData)
      
    })
    .catch(error => {
      // Tangani error jika diperlukan
      console.error('Terjadi error:', error.message);
    });
    
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.atas}>
          <Image source={Logoo} style={styles.logo} />
          <View style={styles.textlogo}>
            <Text style={styles.TextSistem}>Sistem</Text>
            <Text style={styles.TextAbsen}>Absensi Otomatis</Text>
          </View>
        </View>
        <TouchableOpacity onPress={navigateToProfil}>
          <Image source={Foto} style={styles.foto} />
        </TouchableOpacity>
      </View>
      <View style={styles.bawah}>
        <Text style={styles.selamat}>Hallo, Selamat Datang</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            value={getProfilList.nama}
            editable={false}
            style={styles.nama}
          />
        </View>

      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default ItemHeader;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.33,
    paddingTop: 20,
    backgroundColor: "#4075A0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    marginTop: windowHeight * 0.03,
    justifyContent: "space-between",
    paddingRight: windowWidth * 0.06,
    paddingLeft: windowWidth * 0.02
  },
  atas: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  textlogo: {
    paddingLeft: 5
  },
  TextSistem: {
    color: "#fff",
    fontSize: RFValue(25),
  },
  TextAbsen: {
    color: "#fff",
    fontSize: RFValue(18),
  },
  foto: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.05,
    borderRadius: 50,
  },
  bawah: {
    paddingTop: 40,
    paddingLeft: 20
  },
  selamat: {
    color: "#fff",
    fontSize: RFValue(15),
  },
  nama: {
    color: "#fff",
    fontSize: RFValue(19),
  },
});
