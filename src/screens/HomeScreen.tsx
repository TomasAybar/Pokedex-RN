import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const { top } = useSafeAreaInsets();

  const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated();

  // console.log(simplePokemonList);

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2} // columnas del render de los items
          // header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}
            >
              Pokedex
            </Text>
          }
          renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color={'grey'}
            />
          }
        />
      </View>
      {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
      {/* <Button title='Ir a pokemon detail' onPress={() => navigation.navigate('PokemonScreen' as never)} /> */}
    </View>
  );
};
