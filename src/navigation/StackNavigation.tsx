import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}