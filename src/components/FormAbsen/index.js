import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { IconImage } from "../../asset";

const FormAbsen = () => {
  const [image, setImage] = useState(null);
  const [isImageReady, setIsImageReady] = useState(false);

  const openCameraFromLogo = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setIsImageReady(true);
    }
  };

  const clearImage = () => {
    setImage(null);
    setIsImageReady(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.context}>
        <Text style={styles.Text}>FormAbsen</Text>
      </View>
      <View style={styles.perintah}>
        <Text style={styles.textperintah}>
          Klik di bawah ini untuk membuka kamera
        </Text>
      </View>
      <TouchableOpacity
        onPress={openCameraFromLogo}
        style={styles.imageContainer}
      >
        <Image source={IconImage} style={styles.logo} />
      </TouchableOpacity>
      {isImageReady ? (
        <View style={styles.cons}>
          <Text style={styles.imageReadyText}>Gambar telah siap</Text>
          <TouchableOpacity style={styles.clearBtn} onPress={clearImage}>
            <Text style={styles.clearBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnin}>
          <Text style={styles.textin}>Clock In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnout}>
          <Text style={styles.textout}>Clock Out</Text>
        </TouchableOpacity>
      </View>
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
    height: windowHeight * 0.3,
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
  context: {
    backgroundColor: "#A4ADBF",
    width: windowWidth * 0.3,
    height: windowHeight * 0.03,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: windowHeight * 0.02,
  },
  Text: {
    color: "#fff",
    fontSize: 15,
  },
  perintah: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:  windowHeight * 0.02,
  },
  textperintah: {
    color: "#A4ADBF",
  },
  imageContainer: {
    alignItems: "center",
  },
  logo: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.1,
    resizeMode: "contain",
  },
  btn: {
    flexDirection: "row",
    marginVertical: windowHeight * 0.24,
    position: "absolute",
  },
  btnin: {
    backgroundColor: "#2396F2",
    marginRight: windowWidth * 0.15,
    width: windowWidth * 0.2,
    height: windowHeight * 0.04,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textin: {
    fontSize: 15,
    color: "#fff",
  },
  btnout: {
    backgroundColor: "#F64E60",
    marginLeft: windowWidth * 0.15,
    width: windowWidth * 0.2,
    height: windowHeight * 0.04,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textout: {
    fontSize: 15,
    color: "#fff",
  },
  cons: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageReadyText: {
    fontSize: 15,
    color: "green",
  },
  clearBtn: {
    marginTop: windowWidth * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  clearBtnText: {
    fontSize: 18,
    color: "#F64E60",
  },
});

export default FormAbsen;