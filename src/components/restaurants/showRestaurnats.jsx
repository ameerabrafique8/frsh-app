import { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FavouritesIcon from "../../../assets/svgs/Favorites-Icon";
import { restaurantsList } from "../../components/restaurants";
import { makeStyles } from "./showResaurantsStyles";
import getLocation from "../location/getLocation";
import _debounce from 'lodash/debounce';

export default function ShowRestaurnts(props) {
  const styles = makeStyles();

  const { filterName, searchedRestaurant, fvrtRestaurantsData, screen } = props;
  const [restaurantsData, setRestaurantsData] = useState(restaurantsList)
  const [locationData, setLocationData] = useState({
    currentLocation: null,
    address: null,
  })


  console.log("filterName: ", filterName);
  console.log("searchedRestaurant: ", searchedRestaurant);
  const restaurantsNY = restaurantsData.filter(
    (restaurant) => {
      console.log('show: ', [locationData?.address,locationData?.address?.includes('CA'),restaurant.address.includes("New York")])
      if (locationData?.address?.includes("New York") || locationData?.address?.includes("NY")) {
        if (restaurant.address.includes("New York") ||
        restaurant.address.includes("NY") ||
        restaurant.address.toLowerCase().includes("New York")) {

          return restaurant
        }

      } else if (locationData?.address?.includes("miami")) {
        if (restaurant.address.includes("miami")) {
          return restaurant
        }
      } else {
        return
      }
    }
  );

  // console.log('restaurantsNY: ', restaurantsNY)
  const filteredRestaurants = (filterName, searchedRestaurant) => {
    return restaurantsNY.filter((restaurant) =>
      !searchedRestaurant
        ? restaurant.categories.some((category) =>
            category.categoryName.includes(filterName)
          )
        : restaurant.name.toLocaleLowerCase().includes(searchedRestaurant)
    );
  };


  const addToFavorites = async (restaurant) => {
    const updatedRestaurants = restaurantsData.map((rest) => {
      if (rest.id === restaurant.id) {
        // Toggle the favorite status
        const updatedRestaurant = { ...rest, favorite: !rest.favorite };
        // Update the filter property based on the favorite status
        updatedRestaurant.filter = updatedRestaurant.favorite;
        return updatedRestaurant;
      }
      return rest;
    });
    setRestaurantsData(updatedRestaurants);
    try {
      // Get existing favorites from local storage
      const existingFavorites = await AsyncStorage.getItem('favorites');
      console.log('existingFavorites: ', existingFavorites);

      // Parse existing favorites or initialize an empty array
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      // Check if the restaurant is already in favorites
      const existingIndex = favorites.findIndex((favRestaurant) => favRestaurant.id === restaurant.id);

      if (existingIndex !== -1) {
        // If the restaurant is already in favorites, remove it
        favorites.splice(existingIndex, 1);
        console.log('Removed from favorites:', restaurant);
      } else {
        // If the restaurant is not in favorites, add it
        favorites.push(restaurant);
        console.log('Added to favorites:', restaurant);
      }

      // Save the updated favorites to local storage
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error updating favorites:', error);
    }

  };

  const showRestaurants = searchedRestaurant
    ? filteredRestaurants(filterName, searchedRestaurant)
    : filterName === undefined ||
      searchedRestaurant === null ||
      filterName === "all" ||
      filterName === "filter"
    ? restaurantsNY
      : filteredRestaurants(filterName, searchedRestaurant);

  const data = screen === 'Favorite' ? fvrtRestaurantsData : showRestaurants

  // const debouncedGetLocation = async () => {
  //   try {
  //     const result = await getLocation();
  //     setLocationData(result);
  //     // console.log('result in call: ', result)
  //     console.log('locationData Address: ', locationData.address);
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // };

  useEffect(() => {
    // if (locationData.address === null) {
      const debouncedGetLocation = async () => {
        try {
          const result = await getLocation();
          setLocationData(result);
          // console.log('result in call: ', result)
          console.log('locationData Address: ', locationData.address);
        } catch (error) {
          console.log('error: ', error);
        }
      };

      debouncedGetLocation()

  },[])


  return (
    // <ScrollView>
    <View>
      <View style={styles.mainContainer}>
        {/* ************************************************ */}
        {data.length > 0 ? (
          data.map((restaurant) => {
            return (
              <View
                key={restaurant.id}
                style={[styles.retaurantContainer, styles.shadowProp]}
              >
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.cardTitle}>
                      {restaurant.title.toUpperCase()}
                    </Text>
                  </View>
                  <View style={[styles.titleContainer, styles.titleShadow]}>
                    <Text>View All</Text>
                    <View style={styles.iconCircle}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={10}
                        style={styles.icon}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.cardBody}>
                  <Image
                    source={
                      restaurant.id === 2
                        // ? require("../../screens/frshBites/orangecolor.jpg")
                        ? require("../../../assets/orangecolor.jpg")
                        : require("../../../assets/tasty.jpg")
                    }
                    style={{ width: "100%", height: 135 }}
                    resizeMode="cover"
                  />
                  {restaurant.offers ? (
                    <View style={[styles.overlay]}>
                      <Text style={styles.overlayText}>
                        {restaurant.offers}
                        {restaurant.offers > 1 ? " Offers" : " Offer"} Available
                      </Text>
                    </View>
                  ) : null}
                  <View style={styles.heartIcon}>
                    <TouchableOpacity onPress={()=>{addToFavorites(restaurant)}}>
                      <FavouritesIcon color={restaurant.favorite ? "red" : "transparent"} size={24}
                        borderColor={restaurant.favorite? "red" : "white"} />
                    </TouchableOpacity>
                    {/* <FontAwesomeIcon icon={faHeart} size={24} style={{ color: '#fff'}} /> */}
                  </View>
                  {restaurant.status ? (
                    <View
                      style={[
                        styles.overlayStatus,
                        {
                          backgroundColor: restaurant.status.includes(
                            "Featured"
                          )
                            ? "black"
                            : restaurant.status.includes("Recommended")
                            ? "#ff4e00"
                            : restaurant.status.includes("Local Approved")
                            ? "#14D101"
                            : null,
                        },
                      ]}
                    >
                      <Text style={{ color: "white", fontWeight: "500" }}>
                        {restaurant.status.toUpperCase()}
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.restaurantNameStyle}>
                      {restaurant.name}
                    </Text>
                    <Text style={styles.restaurantTimings}>
                      Opens: {restaurant.openingTime}. | Closes:
                      {restaurant.closingTime}.
                    </Text>
                  </View>
                  <View style={styles.ratingCircle}>
                    <MaterialIcons
                      name="star"
                      size={16}
                      style={{ color: "#ffd800" }}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "500",
                        lineHeight: 10,
                      }}
                    >
                      {restaurant.rating}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <View style={{ alignItems: "center", paddingTop: 80 }}>
            <Text>Currently, we're not offering our services in your area!</Text>
          </View>
        )}
      </View>
    </View>
  );
}
