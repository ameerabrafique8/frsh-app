// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import * as Location from "expo-location";
// import axios from "axios";

// const GetLocation = () => {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const getLocation = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.Highest,
//       });
//       setCurrentLocation(location.coords);

//       // Reverse geocoding
//       try {
//         const response = await axios.get(
//           `https://api.opencagedata.com/geocode/v1/json?key=cb31c577832e45a8ac4f5b3747691ec2&language=en&pretty=1&q=${location.coords.latitude}+${location.coords.longitude}`
//         );

//         if (response.data.results.length > 0) {
//           setAddress(response.data.results[0].formatted);
//           console.log(response.data.results[0].formatted)
//           // const components = response.data.results[0].components;
//         }
//       } catch (error) {
//         console.error('Error fetching address:', error);
//       }
//     };

//     getLocation();
//   }, []);


//   return (
//     <View style={styles.container}>
//       {currentLocation && (
//         <View style={{backgroundColor:'yellow', height: 200, }}>
//           <Text>Latitude: {currentLocation.latitude}</Text>
//           <Text>Longitude: {currentLocation.longitude}</Text>
//           {address && <Text>Location: {address}</Text>}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default GetLocation;




// LocationUtil.js

import * as Location from "expo-location";
import axios from "axios";

const getLocation = () => {
  console.log('hellooooooo')
  return new Promise(async (resolve, reject) => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        reject("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      // console.log('hellooooooo11111111111111111111111')

      // Reverse geocoding
        console.log('hellooooooo5555555555555555555')
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?key=cb31c577832e45a8ac4f5b3747691ec2&language=en&pretty=1&q=${location.coords.latitude}+${location.coords.longitude}`
        );
        console.log('hellooooookkkkkkkkkkkkkkkkkkkkk')

        if (response.data.results.length > 0) {
          const address = response.data.results[0].formatted;
          // console.log('response: ', address)

          // return address
          return resolve({ currentLocation: location.coords, address });
          // resolve.send({ currentLocation: location.coords, address })
        } else {
          reject("No address found");
        }

    } catch (error) {
      reject(`Error getting location: ${error}`);
    }
  });
};

export default getLocation;


