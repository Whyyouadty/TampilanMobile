import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (Dimensions.get('window').width / Dimensions.get('window').height);

  return (
    <View style={{ flex: 1}}>
      {location && (
        <MapView
          style={{ flex: 1}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Lokasi Saya"
            description="Ini adalah lokasi saya"
          >
            <Callout>
              <View>
                <Text>Lokasi Saya</Text>
                <Text>Latitude: {location.latitude}</Text>
                <Text>Longitude: {location.longitude}</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      )}
    </View>
  );
};

export default MapScreen;