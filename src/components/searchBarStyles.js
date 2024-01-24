import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const makeStyles = (colors) =>

  StyleSheet.create({
    searchContainer: {
      position: 'relative',
      // width: 370,
      height: 50,
      width: '95%',
      // height: '4.5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.8)',
      overflow: 'hidden',
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
      fontSize: RFValue(17),
    },
    searchInput: {
      // flex: 1,
      // paddingTop:0,
      color: 'black',
      width: 222.5,
      height: 35,
      // width: '62.3%',
    },
    locationContainer: {
      width: 100,
      // height: 35,
      // width: '27.8%',
      height: 35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255)',
      borderRadius: 25,
      paddingLeft: 0,
      paddingRight: 8,
      // marginLeft: 1,
      borderColor: 'black',
      borderWidth: 1.7,
    },
    locationCircle: {
      // width: 18,
      // height: 18,
      // backgroundColor: 'red',
      width: '27%',
      height: '73%',
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#D3D3D3',
      borderRadius: 20,
      shadowColor: 'black',
      elevation: 0,
    },
    locationText: {
      fontSize:RFValue(12),
      fontWeight: '900',
      color: 'black',
    }
  })

  export default makeStyles;
