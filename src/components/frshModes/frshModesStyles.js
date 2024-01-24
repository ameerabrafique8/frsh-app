import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const makeStyles = (colors) =>

StyleSheet.create({

  overlayTopView: {
    position: 'absolute',
    height: 70,
    // height: '9.5%',
    zIndex: 1,
    bottom: 80,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modesContainer: {
    // width: 200,
    height: 52,
    width: '50.5%',
    // height: '73%',
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
    // width: 92,
    // height: 40,
    width: '50%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center',
  },
  overlayText: {
    color: 'white',
    fontSize: RFValue(14.5),
    fontWeight:'500',
  },
});
  export default makeStyles;
