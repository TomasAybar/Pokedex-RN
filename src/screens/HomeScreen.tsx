import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {

    const navigation = useNavigation()

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, isLoading } = usePokemonPaginated();

    console.log(simplePokemonList);

    return (
        <View>

            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <Text
                style={{
                    ...styles.title,
                    ...styles.globalMargin,
                    top: top + 20
                }}>Pokedex</Text>
            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
            {/* <Button title='Ir a pokemon detail' onPress={() => navigation.navigate('PokemonScreen' as never)} /> */}
        </View>
    )
}

// const styles = StyleSheet.create({

// });