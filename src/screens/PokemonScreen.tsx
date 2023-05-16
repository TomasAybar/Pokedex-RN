import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { SimplePokemon, color } = route.params;

  return (
    <View>
      <Text>
        {SimplePokemon.name} - {color}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
