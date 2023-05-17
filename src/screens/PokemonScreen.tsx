import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { SimplePokemon, color } = route.params;

  const { name, id, picture } = SimplePokemon;

  const { top } = useSafeAreaInsets(); // para tener en cuenta si tiene notch o no el celular

  const { isLoading, pokemon } = usePokemon(id);

  console.log(pokemon);

  return (
    <View style={{ flex: 1 }}>
      {/* Header Container */}
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}
      >
        {/* BackButtom */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 5, // arranca desde donde termina el notch + lo que quieras
          }}
        >
          <Ionicons name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        {/* Nombre del poke */}
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 40,
          }}
        >
          {name + '\n'} # {id}
        </Text>

        {/* Pokebola blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />

        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>

      {/* Detalles y loading */}
      <View style={styles.activityIndicator}>
        <ActivityIndicator color={color} size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: '#fff',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: -15,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
