import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/components/BottomTabNavigator';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
    </SafeAreaView>

  );
}

