import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { makeStyles, loadFonts } from "./searchBarStyles";
import FrshBitesIcon from "../../assets/svgs/frsh-bites-icon";

const SearchBar = ({onSearch, isFilterSelected}) => {
  const styles = makeStyles();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    // Pass the search input to the parent component
    onSearch(searchInput);
  };

  useEffect(() => {
    // Clear the search input when a filter is selected
    if (isFilterSelected) {
      setSearchInput("");
    }
  }, [isFilterSelected]);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <AntDesign name="search1" color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="What's your address?"
          placeholderTextColor="black"
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          onSubmitEditing={handleSearch}
        />
        <View style={styles.locationContainer}>
          <View style={styles.locationCircle}>
            <FrshBitesIcon color="black" size={14} />
          </View>
          <Text style={styles.locationText}>frshbites</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
