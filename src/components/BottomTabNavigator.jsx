import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import FrshBites from '../screens/frshBites/frshBites';
import Alerts from '../screens/frshBites/alerts';
import Account from '../screens/frshBites/account';
import Offers from '../screens/frshBites/offers';
import Favourites from '../screens/frshBites/favourites';
import AccountIcon from '../../assets/svgs/account-icon';
import FrshBitesIcon from '../../assets/svgs/frsh-bites-icon'
import OffersIcon from '../../assets/svgs/offers-icon'
import FavouritesIcon from '../../assets/svgs/Favorites-Icon'
import AlertsIcon from '../../assets/svgs/alerts-icon';
import { StyleSheet, Text, View } from 'react-native';
import FrshModeButtons from './frshModes/frshModes';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{ headerTitle: '',tabBarActiveTintColor: 'black',
          tabBarStyle: {
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 2,
          paddingTop: 12,
          paddingLeft: 8,
          paddingRight: 8,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          backgroundColor: 'white'},
          animationEnabled: false, swipeEnabled: false,
          tabBarLabelStyle: { color: 'black',fontSize: RFValue(12), fontWeight:'500', paddingBottom:17 }
        }}

      >
        <Tab.Screen
          name="frshbites"
          component={FrshBites}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <FrshBitesIcon size={28} color={focused ? '#ff4e00' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offers}
          options={{

            tabBarIcon: ({ focused }) => (
              <View>
                <OffersIcon color={focused ? '#ff4e00' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favourites}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <FavouritesIcon color='white' borderColor={focused ? '#ff4e00' : 'black'}/>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Alerts" //AlertsIcon
          component={Alerts}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AlertsIcon color={focused ? '#ff4e00' : 'black'}/>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AccountIcon color={focused ? '#ff4e00' : 'black'}/>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <FrshModeButtons/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});


export default BottomTabNavigator;
