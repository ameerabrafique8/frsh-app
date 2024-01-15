import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../../components/searchBar";


export default function Account() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text>Account Screen!</Text>
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
