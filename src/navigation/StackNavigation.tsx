import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SimplePokemon } from '../interfaces/pokemon.interfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { SimplePokemon: SimplePokemon; color: string };
};

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
