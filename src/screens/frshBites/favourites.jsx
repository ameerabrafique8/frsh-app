import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../../components/searchBar";


export default function Favourites() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text>Favourites Screen!</Text>
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
