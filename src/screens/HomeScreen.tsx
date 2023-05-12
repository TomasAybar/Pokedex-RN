import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>HomeScreen</Text>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <Button title='Ir a pokemon detail' onPress={() => navigation.navigate('PokemonScreen' as never)} />
        </View>
    )
}

const styles = StyleSheet.create({

});