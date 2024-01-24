import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const makeStyles = (colors) =>

  StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 15,
      marginBottom: 80,
      width: '95%',
      },
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterContainer: {
      height: 68,
      // height: '5.5%',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      backgroundColor: '#fff',
      marginTop: 12,
      marginBottom:-5,
      shadowColor: '#000',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 2,
      elevation: 6,
    },
    filterItem: {
      // height: 35,
      height: '51%',
      backgroundColor: 'white',
      borderRadius: 25,
      paddingHorizontal: 15,
      marginTop: 16,
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
      fontSize: RFValue(13),
      fontWeight: '500',
    },
    titleContainer: {
      // height: 35,
      // width: 100,
      height: '70%',
      width: '28%',
      position: 'relative',
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
      elevation: 2,
      backgroundColor: '#fff',
      borderRadius: 20,
    },
    icon: {
      color: '#fff',
      textAlign: 'center',
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
      // width: 45,
      // height: 45,
      width: '14%',
      height: '70%',
      borderRadius: 28,
      borderWidth: 2,
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
      fontSize: RFValue(15),
      fontWeight: '700'
    },
    restaurantTimings: {
      color:'grey',
      fontSize: RFValue(11),
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
      fontSize: RFValue(13.5),
      top: 15,
      left: 10,
    },
    overlayStatus: {
      height: 30,
      alignSelf: 'flex-start',
      paddingLeft: 30,
      paddingRight: 30,
      fontWeight: '700',
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center',
      borderTopRightRadius: 5,
      marginTop: -30,
      // backgroundColor: 'yellow',
    },
  })

  export default makeStyles;
