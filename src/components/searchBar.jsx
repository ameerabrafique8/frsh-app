import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import './SearchBarStyles.scss';

const SearchBar = () => {
  return (
    // <View style={styles.searchContainer}>
    //   <View style={styles.searchInputContainer}>
    //     <AntDesign name="search1" color="white" style={styles.searchIcon} />
    //     <TextInput
    //       style={styles.searchInput}
    //       placeholder="What are you craving for?"
    //       placeholderTextColor="black"
    //       fontWeight="700"
    //     />
    //     <View style={styles.locationContainer}>
    //       <View style={styles.locationCircle}>
    //         <Feather name="map-pin" size={10} color="black" style={styles.locationIcon} />
    //       </View>
    //       <Text style={styles.locationText}>Miami</Text>
    //     </View>
    //   </View>

    // </View>
    <View className={searchContainer}>
      <View className={searchInputContainer}>
        <AntDesign name="search1" color="white" className={searchIcon} />
        <TextInput
          className={searchInput}
          placeholder="What are you craving for?"
          placeholderTextColor="black"
          fontWeight="700"
        />
        <View className={locationContainer}>
          <View className={locationCircle}>
            <Feather name="map-pin" size={10} color="black" className={locationIcon} />
          </View>
          <Text className={locationText}>Miami</Text>
        </View>
      </View>

    </View>
  );
};

const styles = {
  searchContainer: {
    position: 'relative',
    width: 370,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    opacity: 0.7,
    borderRadius: 35,
    paddingLeft: 17,
    borderColor: 'black',
    borderWidth: 1.5,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    color: 'black',
    marginLeft: -15,
  },
  searchIcon: {
    paddingLeft: 10,
    marginRight: 5,
    fontWeight: '700',
    color: 'black',
    fontSize: 17,
  },
  searchInput: {
    flex: 1,
    color: 'black',
    width: 20,
  },
  locationContainer: {
    width: 100,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    opacity: 0.7,
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 15,
    marginRight: 2,
    borderColor: 'black',
    borderWidth: 1.7,
  },
  locationCircle: {
    width: 18,
    height: 18,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 0,
  },
  locationText: {
    fontWeight: '900',
    color: 'black',
  }
};

export default SearchBar;
