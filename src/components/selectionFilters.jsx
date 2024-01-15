import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import SearchBar from "../../components/searchBar";
import { restaurantsList } from "../../components/restaurants";
import faviconImage from '../../../assets/favicon.png'
// import { filters } from "../../components/filters";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { filters } from "./filters";


const SelectionFilters = () => {
  const img = require('../../../assets/favicon.png')
  const imgSource = { uri: '../../../assets/favicon.png' };
  // console.log("image: ", imgSource)
  const [fontsLoaded] = useFonts({
    // 'Poppins': Poppins_400Regular,
  });
  return (

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter, index) => (
          <View key={index} style={styles.filterItem}>
            <Text style={styles.filterText}>{filter}</Text>
          </View>
        ))}
      </ScrollView>
      </View>

  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop:15,
    },

  shadowProp: {
    shadowColor: '#D3D3D3',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  filterContainer: {
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    // backgroundColor: '#D3D3D3',
    marginTop: 12,
    marginBottom:-5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 2,
    // shadowRadius: 5,
    elevation: 4,
  },
  filterItem: {
    height: 35,
    // fontFamily: 'Poppins',
    // fontSize: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 17,

    // paddingVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  filterText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default SelectionFilters
