import { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../../components/searchBar";
import { restaurantsList } from "../../components/restaurants";
import { filters } from "../../components/filters";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {makeStyles} from './frshBitesStyles';
import ShowRestaurnts from "../../components/restaurants/showRestaurnats";


export default function FrshBites() {
  const styles = makeStyles()
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
    setSearchTerm('')
  };

  const handleSearch = (searchInput) => {
    setSearchTerm(searchInput.toLowerCase());
    console.log('searchTerm: ', searchTerm)
  };

  const filterName = selectedFilter?.toLowerCase()
  const searchedRestaurant = searchTerm?.toLowerCase()

  return (
    <ScrollView>

      <View style={styles.container}>
        <View style={{ marginBottom: 8 }} />
        <View >
          <SearchBar onSearch={handleSearch} isFilterSelected={selectedFilter} />
        </View>
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
          <ShowRestaurnts filterName={filterName} searchedRestaurant={searchedRestaurant} />
        </View>
      </View>
    </ScrollView>
  );
}


