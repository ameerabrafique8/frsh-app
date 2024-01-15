import { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";


const FrshModeButtons = () => {
  const [selectedMode, setSelectedMode] = useState('frshbites');

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
  };

  return (
  <View style={styles.overlayTopView}>
      <View style={[styles.modesContainer,{opacity: 1}]}>
          <TouchableOpacity onPress={() => handleModeSelection('frshbites')}
            style={[styles.frshBitesContainer,{backgroundColor: selectedMode === 'frshbites' ? '#FF4E00' : 'white'}]}>
            <Text style={[styles.overlayText, {
                color: selectedMode === 'frshbites' ? 'white' : 'black',
            }]}>frshbites</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleModeSelection('frshdeal$')}
            style={[styles.frshBitesContainer, { backgroundColor: selectedMode === 'frshdeal$' ? '#FF4E00' : 'white' }]}>
            <Text style={[styles.overlayText, {
                color: selectedMode === 'frshdeal$' ? 'white' : 'black',
            }]}>frshdeal$</Text>
          </TouchableOpacity>
    </View>
  </View>
  )
}



const styles = StyleSheet.create({

  overlayTopView: {
    position: 'absolute',
    zIndex: 1,
    bottom: 80,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modesContainer: {
    width: 200,
    height: 52,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: '#ffff',
    padding: 5,
  },
  frshBitesContainer: {
    width: 92,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center',
    // backgroundColor: 'red',
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'500',
  },
});

export default FrshModeButtons
