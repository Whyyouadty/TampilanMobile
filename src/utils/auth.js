import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('userToken', value);
    } catch (e) {
        console.log(e);
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('userToken');
        if (value !== null) {
            // value previously stored
            return value
        }
        return null
    } catch (e) {
        console.log(e);
        return null
    }
};

const clearData = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log(e);
        return e
    }
}

export { storeData, getData, clearData };
