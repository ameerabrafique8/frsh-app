import { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../../components/searchBar";
import { restaurantsList } from "../../components/restaurants";
import { filters } from "../../components/filters";
// import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function FrshBites() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter, index) => (
            <TouchableOpacity key={index} style={[styles.filterItem,{ backgroundColor: filter === selectedFilter ? '#ff4500' : 'white' },]}
              onPress={() => handleFilterSelection(filter)}>
              {filter.includes('Filter') ?
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.filterText, {marginRight: 10,color: filter === selectedFilter ? 'white' : 'black'}]}>{filter}</Text>
                  <View style={[styles.iconCircle,{backgroundColor: 'transparent', borderColor: filter === selectedFilter ? 'white' : 'black', borderWidth:1}] }>
                    <FontAwesomeIcon icon={faChevronRight} size={10} style={[styles.icon, {color: filter === selectedFilter ? 'white' : 'black'}]} />
                  </View>
                </View>
               :<Text style={[styles.filterText,{color: filter === selectedFilter ? 'white' : 'black'}]}>{filter}</Text>
              }

            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
        <View style={styles.mainContainer}>
          {restaurantsList.map((restaurant) => {
            return <View key={restaurant.id} style={[styles.retaurantContainer, styles.shadowProp]}>
              <View style={styles.cardHeader}>
                <View>
                  <Text>{(restaurant.title).toUpperCase()}</Text>
                </View>
                <View style={[styles.titleContainer, styles.titleShadow]}>
                  <Text>View All</Text>
                  <View style={styles.iconCircle}>
                    <FontAwesomeIcon icon={faChevronRight} size={10} style={styles.icon} />
                  </View>
                </View>
              </View>
              <View style={styles.cardBody}>
              <Image
                  source={restaurant.id===1 ? require('./orangecolor.jpg') :require('./tasty.jpg') }
                  style={{ width: 367, height: 130 }}
                  resizeMode="cover"
              />
              {restaurant.offers ?
              <View style={[styles.overlay]}>
                <Text style={styles.overlayText}>{restaurant.offers} Offers Available</Text>
              </View>
                : null}
              <View style={styles.heartIcon}>
                <FontAwesomeIcon icon={faHeart} size={24} style={{ color: '#fff'}} />
              </View>
              {restaurant.status ?
                <View style={[styles.overlayStatus,
                  {
                    // backgroundColor: restaurant.status.includes('Featured') ? 'black' : 'red',
                    backgroundColor: restaurant.status.includes('Featured')
                    ? 'black'
                    : restaurant.status.includes('Recommended')
                    ? '#ff4e00'
                    : restaurant.status.includes('Local Approved')
                    ? '#14D101'
                    : null
                  }]}>
                  <Text style={{color:  'white', fontWeight:'500' }}>{(restaurant.status).toUpperCase()}</Text>
                </View>
              : null}
              </View>
              <View style={styles.cardFooter}>
                <View >
                  <Text style={styles.restaurantNameStyle}>{restaurant.name}</Text>
                  <Text style={styles.restaurantTimings}>Opens:{restaurant.openingTime}.  |  Closes:{restaurant.closingTime}.</Text>
                </View>
                <View style={styles.ratingCircle}>
                  {/* <MaterialIcons name="star-border" size={32} style={{ color: 'yellow' }} /> */}
                  <MaterialIcons name="star" size={16} style={{color: '#ffd800'}} />
                  <Text style={{fontSize: 10, fontWeight:'500', lineHeight:10}}>{restaurant.rating}</Text>
                </View>

              </View>
            </View>

          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 80,
    },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  retaurantContainer: {
    width: 370,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 8,
    // borderWidth: 1,
    margingRight:2,
    borderColor: '#D3D3D3',
  },
  shadowProp: {
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 0,
  },
  cardHeader: {
    width: 367,
    height: 52,
    fontSize: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#D3D3D3',
    // backgroundColor: 'green',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    width: 367,
    height: 130,
    backgroundColor: 'orange',
    position: 'relative',
  },
  cardFooter: {
    width: 367,
    height: 65,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight:10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  filterContainer: {
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    // fontFamily: 'Poppins',
    backgroundColor: '#fff',
    marginTop: 12,
    marginBottom:-5,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 2,
    elevation: 6,
  },
  filterItem: {
    height: 35,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 17,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 3,
  },
  filterText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
  },
  titleContainer: {
    height: 35,
    position: 'relative',
    width: 100,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#D3D3D3',
    borderWidth:1,
  },
  titleShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.8,
    // shadowRadius: 3,
    elevation: 2,
    backgroundColor: '#fff',  // Add a background color to the shadow
    borderRadius: 20,
  },
  icon: {
    color: '#fff',
    textAlign: 'center',
  // lineHeight: 20,
  },
  iconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ff4500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 2,  // Add a borderWidth to create a border
    borderColor: 'transparent',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowRadius: 3,
    elevation: 8,
  },
  heartIcon: {
    top: 12,
    right: 12,
    position:'absolute'
  },
  restaurantNameStyle: {
    fontSize: 16,
    fontWeight: '700'
  },
  restaurantTimings: {
    color:'grey',
    fontSize: 12,
    fontWeight: '500',
    lineHeight:24
  },
  overlay: {
    width: 180,
    position: 'absolute',
    paddingBottom: 10,  // Adjust the paddingBottom to reduce the height
    borderBottomWidth: 30,  // Adjust the borderBottomWidth to reduce the height
    borderBottomColor: "#f8f8ff",
    borderTopWidth: 0,    // Set borderTopWidth to 0 to remove the top border
    borderRightWidth: 30, // Adjust the borderRightWidth as needed
    borderRightColor: "transparent",
    top: 0
  },
  overlayText: {
    position:'absolute',
    color: '#ff4500',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 15,
    top: 15,
    left: 10,
  },
  overlayStatus: {
    height: 30,
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 15,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',
    borderTopRightRadius: 5,
    marginTop: -30
    // backgroundColor: 'yellow',
  },
});
