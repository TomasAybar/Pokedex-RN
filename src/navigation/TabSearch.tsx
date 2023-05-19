import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './StackNavigation';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Tab = createStackNavigator<RootStackParams>();

export const TabSearch = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={SearchScreen} />
      <Tab.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab.Navigator>
  );
};
