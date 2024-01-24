import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../../components/searchBar";
import { useEffect, useState } from "react";
// import GetLocation from "../../components/location/getLocation";
import getLocation from "../../components/location/getLocation";


export default function Alerts() {
  const [locationData, setLocationData] = useState({
    currentLocation: null,
    address:null,
  })

  useEffect(() => {
    const getLocationa = async () => {
      try {
        const result = await getLocation();
        setLocationData(result)
        console.log('locationData Address: ', locationData.address)
      }
      catch (error) {
        console.log('error: ', error)
      }
    }
    getLocationa()
  },[locationData])

  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text>Favourites Screen!</Text>
      {/* <GetLocation/> */}

      {/* <View style={styles.container}>
        {locationData.currentLocation && (
          <View style={{ backgroundColor: "yellow", height: 200 }}>
            <Text>Latitude: {locationData.currentLocation.latitude}</Text>
            <Text>Longitude: {locationData.currentLocation.longitude}</Text>
            {locationData.address && (
              <Text>Location: {locationData.address}</Text>
            )}
          </View>
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
