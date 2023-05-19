import React, { useEffect, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemon.interfaces';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);

  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );

  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1300';

  const loadPokemons = async () => {
    const res = await pokemonAPI.get<PokemonPaginatedResponse>(URL);

    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      // construccion en base a la interface
      const urlParts = url.split('/');

      const id = urlParts[urlParts.length - 2];

      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        name,
        picture,
      };
    });

    setSimplePokemonList(newPokemonList);

    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemonList,
  };
};
