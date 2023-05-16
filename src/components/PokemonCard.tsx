import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemon.interfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then(
      (colors) => {
        if (!isMounted.current) return; // proteccion a la actualizacion de un componente cuando esta desmontado

        if (colors?.platform === 'android') {
          setBgColor(colors?.dominant || 'grey');
        }

        // ? setBgColor(color?.dominant || 'grey')
        // : setBgColor(color?.background || 'grey');
      }
    );

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          SimplePokemon: pokemon,
          color: bgColor,
        })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4, // 40% de la pantalla
          backgroundColor: bgColor,
        }}
      >
        {/* Nombre del poke y id*/}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage
          uri={pokemon.picture} // en vez de una imagen se pone un fade in, esto le agrega un loading y una animacion
          style={styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'grey', // uso el del state
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden', // oculta todo lo que sobresalga de la card
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
    // opacity: 0.5
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -6,
  },
  pokebolaContainer: {
    // backgroundColor: 'blue',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});
