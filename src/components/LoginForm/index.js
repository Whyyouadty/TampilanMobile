import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Logoo } from "../../asset";
import { useLogin } from "../../stores/LoginContextState";
import { baseUrl } from '../../utils/fetchConfig'
import { storeData } from "../../utils/auth"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
    const { loginPayload, setLoginPayload, isLoading, setIsLoading } = useLogin()
    const navigation = useNavigation()

    const handleInputChange = (fieldName, text) => {
        setLoginPayload({
            ...loginPayload, // Membuat salinan objek state yang ada
            [fieldName]: text, // Mengubah nilai pada field yang diinginkan
        });
    };

    const getAuthData = async () => {
        setIsLoading(true)
        try {
            const body = {
                grant_type: "password",
                client_id: 1,
                client_secret: "hspsC6vUuKXdTEfw2lM51RsN4zO9aiO1T1nkUslt",
                username: loginPayload.username,
                password: loginPayload.password,
                scope: ""
            };
        
            const response = await axios.post('http://192.168.1.102:8009/oauth/token', body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // Add any other headers as needed
                },
            });
        
            // Check if the response is ok
            if (!response.data || !response.data.access_token) {
                throw new Error(`Authentication failed. Check credentials.`);
            }
        
            // Access the token and other data
            const accessToken = response.data.access_token;
            // console.log(`Access Token ================== : ${accessToken}`);
            storeData(accessToken)
            navigation.navigate("Splash")
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        setIsLoading(false)
    };

    return (
        <LinearGradient colors={["#2396F2", "#ffffff"]} style={styles.container}>
            <View style={styles.card}>
                <View style={styles.bungkus}>
                    <View style={styles.header}>
                        <Image source={Logoo} style={styles.Image}></Image>
                        <Text style={styles.Textlogin}> Login </Text>
                    </View>
                    <View style={styles.body}>
                        <TextInput
                            onChangeText={(text) => handleInputChange('username', text)}
                            style={styles.TextInput}
                            placeholder="Username"
                        ></TextInput>
                        <TextInput
                            onChangeText={(text) => handleInputChange('password', text)}
                            secureTextEntry
                            style={styles.TextInput}
                            placeholder="Password"
                        ></TextInput>
                        <TouchableOpacity style={styles.confor}>
                            <Text style={styles.forgot}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => { getAuthData() }} disabled={isLoading} style={styles.button}>
                            <Text style={styles.textbutton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: windowWidth * 0.85,
        height: windowHeight * 0.65,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent: "center",
    },
    bungkus: {
        alignItems: "center",
        marginTop: -50,
    },
    header: {
        marginBottom: 20,
    },
    body: {
        marginTop: 20,
    },
    Image: {
        width: windowWidth * 0.22,
        height: windowHeight * 0.1,
        borderRadius: 50,
    },
    Textlogin: {
        fontSize: 18,
        color: "#2396F2",
        marginTop: 10,
        paddingLeft: 18,
    },
    TextInput: {
        fontSize: 16,
        color: "#666C82",
        paddingHorizontal: 10,
        width: 250,
        height: 40,
        borderColor: "#2396F2",
        borderWidth: 1,
        paddingLeft: 10,
        textAlign: "center",
        borderRadius: 20,
        margin: 5,
    },
    confor: {
        marginLeft: 150,
        marginTop: 2
    },
    forgot: {
        color: "#3C598F",
    },
    footer: {
        marginTop: 20
    },
    button: {
        backgroundColor: '#2396F2',
        width: 250,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textbutton: {
        color: '#fff',
        fontSize: 17
    }
});
