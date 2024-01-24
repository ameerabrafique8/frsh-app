import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchBar from "../../components/searchBar";
import ShowRestaurnts from "../../components/restaurants/showRestaurnats";



export default function Favourites() {
  const [favouriteRestaurants, setFavouriteRestaurants] = useState([])

  const fetchFavorites = async () => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const parsedFavorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      // console.log('parsedFavorites: ', parsedFavorites)
      setFavouriteRestaurants(parsedFavorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  // fetchFavorites()
  // console.log('favouriteRestaurants: ', favouriteRestaurants)
  // favouriteRestaurants.map((m)=>{console.log(m.name)})
  // console.log('***********************************')


  useEffect(() => {
    fetchFavorites()
    // const getFavouriteRestaurants = async () => {
    //   try {
    //     const existingFavorites = await AsyncStorage.getItem('favorites');
    //     setFavouriteRestaurants(existingFavorites)
    //   } catch (error) {
    //    console.log(error);
    //   }
    // };
    // getFavouriteRestaurants()
    // const existingFavorites = await AsyncStorage.getItem('favorites');
  },[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <View style={{ flex: 1, marginTop: 15, marginBottom: 80, width: '95%',}}>
          <ShowRestaurnts fvrtRestaurantsData={favouriteRestaurants} screen='Favorite' />
        </View>
      </View>
    </ScrollView>
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
