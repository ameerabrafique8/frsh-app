import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const makeStyles = (colors) =>

  StyleSheet.create({
    mainContainer: {
      flex: 1,
      // marginTop: 15,
      marginBottom: 80,
      },
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    retaurantContainer: {
      // width: 370,
      height: 250,
      width: '100%',
      // height: '30%',
      // backgroundColor: '#fff',
      backgroundColor: 'red',
      borderRadius: 5,
      marginBottom: 8,
      margingRight:2,
      borderColor: '#D3D3D3',
    },
    shadowProp: {
      borderWidth: 1,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {width: -2, height: 4},
      shadowRadius: 5,
      elevation: 0,
    },
    cardHeader: {
      // width: 367,
      height: 52,
      // height: '21.5%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      borderColor: '#D3D3D3',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    cardTitle: {
      paddingLeft: 5,
      fontSize: RFValue(12),
      fontWeight: '700',
    },
    cardBody: {
      // width: 367,
      // height: 139,
      backgroundColor: 'orange',
      position: 'relative',
    },
    cardFooter: {
      // width: 367,
      // height: 65,
      height: '25%',
      color: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 25,
      paddingRight: 10,
      paddingTop: 8,
      paddingBottom: 8,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
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
      width: 45,
      height: 45,
      // width: '14%',
      // height: '70%',
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
